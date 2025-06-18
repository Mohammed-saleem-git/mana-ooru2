import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shops from "./Shops";
import News from "./News";
import Ads from "./Ads";
import Community from "./Community";

const Home = () => (
  <div>
    <h1>Welcome to Mana Ooru</h1>
    <p>Choose a section from the menu</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/shops" style={{ margin: "0 10px" }}>Shops</Link>
        <Link to="/news" style={{ margin: "0 10px" }}>News</Link>
        <Link to="/ads" style={{ margin: "0 10px" }}>Ads</Link>
        <Link to="/community" style={{ margin: "0 10px" }}>Community</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/news" element={<News />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}
