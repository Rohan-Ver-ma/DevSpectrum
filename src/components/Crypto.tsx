// import React from 'react'

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  market_cap: number;
  price_change_percentage_24h: number;
}
export default function Crypto() {
  const [crypto, setCrypto] = useState<Crypto[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY; // Access the Vite environment variable

  const updateCrypto = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5&api_key=${apiKey}`;
    try {
      const res = await fetch(url);
      const passedData = await res.json();
      console.log(passedData);

      if (passedData) {
        setCrypto(passedData);
      }
    } catch (error) {
      console.error("Error updating news:", error);
    }
  };
  useEffect(() => {
    updateCrypto();
  }, []);

  return (
    <>
      <Marquee pauseOnHover={true}>
        {crypto.map((coin) => (
          <div className="text-black dark:text-neutral-50 m-3" key={coin.id}>
            <div className="flex justify-center items-center ">
              <img
                className="w-7 h-7 rounded-full mr-1"
                src={coin.image}
                alt="blog"
              />
              {coin.name}
              {<span className="text-neutral-500">{coin.symbol}</span>} $
              {coin.current_price.toLocaleString()} MktCap $
              {coin.market_cap.toLocaleString()} 24HChange:
              {
                <span
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              }
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
}
