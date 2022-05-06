import React, { useCallback, useEffect, useState } from "react";

interface Article {
  title: string;
  body: string;
}

function Write() {
  const createArticle = useCallback(() => {
      const data: Article = { title: };
    fetch("http://localhost:3000/news",{
        method: 'POST', 
        
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((err) => console.warn(err));
  }, []);

  const [writers, setWriters] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/writers")
      .then((res) => res.json())
      .then((data) => setWriters(data.data))
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
