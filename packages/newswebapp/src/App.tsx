import React from "react";
import "./App.css";
import News from "./pages/news";
import { Routes, Route, Link } from "react-router-dom";
import Write from "./pages/write";
import Writer from "./pages/writer";
import LoginPage from "./pages/logins";

function App() {
  return (
    <>
      <div className="App">
        <h1>News</h1>
      </div>
      <div style={{ margin: "0px 35px" }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/write">Create article</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/writer/:id" element={<Writer />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<News />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
