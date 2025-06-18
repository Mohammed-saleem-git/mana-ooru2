import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Shops from "./Shops";
import News from "./News";
import Ads from "./Ads";
import Community from "./Community";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mana Ooru</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shops" className="hover:underline">Shops</Link>
        <Link to="/news" className="hover:underline">News</Link>
        <Link to="/ads" className="hover:underline">Ads</Link>
        <Link to="/community" className="hover:underline">Community</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">Welcome to Mana Ooru 🌾</h2>
      <p>Discover services, shops, and updates for your village.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
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
