import { useEffect, useState } from "react";
import NewsItemV2 from "./NewsItemV2";
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
  category?: string;
  keywords: string;
  pageSize: number;

}

const News: React.FC<NewsProps> = (props) => {
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (string:any) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  

  const apiKey = import.meta.env.VITE_API_KEY; // Access the Vite environment variable

  document.title = `Devspectrum - ${capitalizeFirstLetter(props.keywords)}`;

  const updateNews = async () => {
    const url =
      "https://api.currentsapi.services/v1/search?" +
      `language=en&page_size=${props.pageSize}&page_number=${page}&keywords=${props.keywords}&category=${props.category}&` +
      `apiKey=${apiKey}`;
    try {
      const res = await fetch(url );
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
      "https://api.currentsapi.services/v1/search?" +
      `language=en&page_size=${props.pageSize}&page_number=${page + 1}&keywords=${props.keywords}&category=${props.category}&` +
      `apiKey=${apiKey}`;
    try {
      const res = await fetch(url);
      const passedData = await res.json();

      if (passedData.news && passedData.news.length > 0) {
        setPage(page + 1); // Increment the page number
        setNews((prevNews) => [...prevNews, ...passedData.news]); // Append new articles to the existing ones
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
      hasMore={news.length % 9 === 0}  // Continue fetching if the current list is divisible by 9
      loader={<Spinner />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-neutral-950">
        {news
        .filter((e) => e.image && e.image !== "None") // Exclude items without an image or with "None" as the value
        .map((e) => (
          <NewsItemV2
            key={e.url}
            title={e.title ? e.title.slice(0, 80) : "Unknown"}
            description={e.description ? e.description.slice(0, 88) : "Unknown"}
            imageUrl={
              e.image ||
              "https://plus.unsplash.com/premium_photo-1732736768075-4738ba4ccf1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
