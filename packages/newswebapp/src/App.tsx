import React from "react";
import "./App.css";
import News from "./pages/news";
import { Routes, Route, Link } from "react-router-dom";
import Write from "./pages/write";
import Writer from "./pages/writer";

function App() {
  return (
    <>
      <div className="App">
        <h1>News</h1>
      </div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/write">Create article</Link>
      </nav>

      <Routes>
        <Route path="/writer/:id" element={<Writer />} />
        <Route path="/write" element={<Write />} />
        <Route path="/" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
