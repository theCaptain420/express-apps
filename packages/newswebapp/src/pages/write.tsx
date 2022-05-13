import React, { useCallback, useEffect, useState } from "react";
import { DataArticle, Writer } from "./types";

function Write() {
  const [selectedWriterID, setSelectedWriterID] = useState<
    string | undefined
  >();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [writers, setWriters] = useState<Writer[]>([]);

  const createArticle = useCallback(() => {
    if (writers.length === 0 || !body || !title) {
      console.error("not enough data to create article", {
        writer: selectedWriterID ?? writers[0]._id,
        title,
        body,
      });
      return;
    }
    const data: DataArticle = {
      title,
      body,
      tag_ids: [],
      writer_id: selectedWriterID ?? writers[0]._id,
    };
    fetch("http://localhost:3000/news", {
      method: "POST",

      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log("article created!", data.data))
      .catch((err) => console.warn(err));
  }, [selectedWriterID, title, body, writers]);

  useEffect(() => {
    fetch("http://localhost:3000/writers")
      .then((res) => res.json())
      .then((data) => setWriters(data.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div>
      <h1>Create article</h1>
      <p>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        Body:
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      Writer:
      <select
        onChange={(e) =>
          setSelectedWriterID((e.target as HTMLSelectElement).value)
        }
      >
        {writers.map((w) => (
          <option key={w._id} value={w._id}>
            {w.name}
          </option>
        ))}
      </select>
      <br />
      <button onClick={createArticle}>Create</button>
    </div>
  );
}

export default Write;
