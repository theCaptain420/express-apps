import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DisplayArticle } from "./types";

function News() {
  let navigate = useNavigate();

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setNews(data.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div>
      <h1>Current News</h1>
      {news.map((article: DisplayArticle) => (
        <div>
          <p>-------</p>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>
            Written by:{" "}
            <button
              style={{ all: "unset", cursor: "pointer", color: "blue" }}
              onClick={() => navigate(`/writer/${article.writer?._id}`)}
            >
              {article.writer?.name}
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default News;
