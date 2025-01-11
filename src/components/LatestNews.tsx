import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

interface News {
  url: string;
  title: string;
  description: string;
  image?: string;
  author: string;
  published: string;
  key: string;
}

interface NewsProps {
  category: string;
  keywords?: string;
  pageSize: number;
}

const News: React.FC<NewsProps> = (props) => {
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState(1);
  
  const capitalizeFirstLetter = (string:any) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `Devspectrum - ${capitalizeFirstLetter(props.category)}`;

  const apiKey = import.meta.env.VITE_API_KEY; // Access the Vite environment variable

  const updateNews = async () => {
    const url =
      "https://api.currentsapi.services/v1/latest-news?" +
      `language=en&page_size=${props.pageSize}&page_number=${page}&keywords=${props.keywords}&category=${props.category}&` +
      `apiKey=${apiKey}`;
    try {
      const res = await fetch(url);
      const passedData = await res.json();

      if (passedData.news) {
        setNews(passedData.news);
      }
    } catch (error) {
      console.error("Error updating news:", error);
    }
  };

  const fetchMoreData = async () => {
    const url =
      "https://api.currentsapi.services/v1/latest-news?" +
      `language=en&page_size=${props.pageSize}&page_number=${page + 1}&category=${props.category}&` +
      `apiKey=${apiKey}`;
    try {
      const res = await fetch(url);
      const passedData = await res.json();

      if (passedData.news && passedData.news.length > 0) {
        setPage(page + 1);
        setNews((prevNews) => [...prevNews, ...passedData.news]);
      } else {
        console.log("No more data to fetch");
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <InfiniteScroll
      dataLength={news.length}
      next={fetchMoreData}
      hasMore={news.length % 9 === 0} // Change logic if needed
      loader={<Spinner />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-neutral-950">
        {news
        .filter((e) => e.image && e.image !== "None") // Exclude items without an image or with "None" as the value
        .map((e) => (
          <NewsItem
            key={e.url}
            title={e.title ? e.title.slice(0, 83) : "Unknown"}
            description={e.description ? e.description.slice(0, 88) : "Unknown"}
            imageUrl={e.image || "defaultImageUrl"}
            url={e.url}
            source={e.author}
            date={e.published}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default News;
