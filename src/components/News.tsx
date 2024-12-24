import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./Spinner";


interface Article {
  url: string;
  title: string;
  description: string;
  urlToImage: string;
  source: { name: string };
  publishedAt: string;
  author: string;
}
interface NewsProps {
  category: string;
  pageSize: number;
}

const News:React.FC<NewsProps> = (props) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

      document.title=`Devspectrum - ${props.category}`

  
  const updateNews = async () => {
    const url = import.meta.env.VITE_API_KEY + 
    `&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
    const res = await fetch(url);
    const parsedData = await res.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = import.meta.env.VITE_API_KEY + 
    `&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`;
    const res = await fetch(url);
    const parsedData = await res.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <InfiniteScroll
      dataLength={articles.length} //This is important field to render the next data
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<h4><Spinner/></h4>}
      >
      {loading && <p className="pt-5"><Spinner/></p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-neutral-950 ">
      { articles.map((e) => (
          <NewsItem
            key={e.url}
            title={e.title ? e.title.slice(0, 83) : "Unknown"}
            description={e.description ? e.description.slice(0, 88) : "Unknown"}
            imageUrl={e.urlToImage}
            url={e.url}
            source={e.source}
            date={e.publishedAt}
            author={e.author ? e.author.slice(0,10) : "Unknown"}
          />
        ))}
        </div>
        </InfiniteScroll>
    </>
  );
}

export default News;
