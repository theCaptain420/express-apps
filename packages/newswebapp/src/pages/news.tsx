import React, { useEffect, useState } from "react";

interface Article {
  title: string;
  body: string;
}

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
      {news.map((article: Article) => (
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
}

export default News;
