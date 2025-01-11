import React from "react";

  
interface NewsItemProps2 {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  date: string;
  source:  string;
  };


const NewsItemV2: React.FC<NewsItemProps2> = (props) => {
  const { title, description, imageUrl, url, date, source } = props;
  return (
    <>
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex flex-wrap dark:bg-neutral-950  ">
        <div
          className="  md:w-1/3"
          style={{ transform: "scale(0.9)", flex: "1 1 auto" }}
          
        >
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:border-neutral-900 dark:bg-neutral-900">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={imageUrl}
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-bold text-gray-600 mb-1 dark:text-neutral-50">
                {source}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-neutral-50">
                {title}
              </h1>
              <p className="leading-relaxed mb-3 dark:text-neutral-50">{description}</p>
              <p className="leading-relaxed mb-3 dark:text-neutral-50">
              Published on {new Date(date).toUTCString()}
              </p>
              <div className="flex items-center flex-wrap ">
                <a
                  href={url}
                  target="_blank"
                  className="text-neutral-950 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0 dark:focus:bg-neutral-950 dark:focus:text-neutral-50"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </a>
    </>
  );
};

export default NewsItemV2;
