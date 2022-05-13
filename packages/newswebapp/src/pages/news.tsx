import React, { useEffect, useState } from "react";
import { DisplayArticle } from "./types";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setNews(data.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div>
      <h1>WE ARE HERE</h1>
      {news.map((article: DisplayArticle) => (
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>Written by: {article.writer?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default News;
