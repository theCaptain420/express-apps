import React, { useCallback, useEffect, useState } from "react";

interface Article {
  title: string;
  body: string;
}

function Write() {
  const [writers, setWriters] = useState([]);
  const createArticle = useCallback(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((err) => console.warn(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/writers")
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div>
      <h1>Create article</h1>
      <form onSubmit={createArticle}>
        <label>
          Title:
          <input type="text" name="title" value="" />
        </label>
        <label>
          Body:
          <input type="text" name="body" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Write;
