import React from "react";
import "./App.css";
import News from "./pages/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Write from "./pages/write";

function App() {
  return (
    <>
      <div className="App">
        <h1>News</h1>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
