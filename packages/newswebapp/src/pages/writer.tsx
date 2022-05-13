import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExtendedWriter } from "./types";

function Writer() {
  const [writer, setWriter] = useState<ExtendedWriter | undefined>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch("http://localhost:3000/writers/" + id)
        .then((res) => res.json())
        .then((data) => setWriter(data.data))
        .catch((err) => console.warn(err));
    }
  }, [id]);

  return (
    <div>
      <h1>Name: {writer?.name}</h1>
      <h2>Email: {writer?.email}</h2>
      {writer?.articles.map((a) => (
        <>
          <p>--------------------------------------------------</p>
          <h3>{a.title}</h3>
          <p>{a.body}</p>
        </>
      ))}
    </div>
  );
}

export default Writer;
