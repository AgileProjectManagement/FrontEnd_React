import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./app-components/NavBar";
import Home from "./app-pages/Home";
import Listings from "./app-pages/Listings";

export default function App() {
  return (
    <Router>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/listings">View Listings</Link>
      </NavBar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/listings" element={<Listings />} />
      </Routes>
    </Router>
  );
}
