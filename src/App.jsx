import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./App.css";

import NavBar from "./app-components/NavBar";
import Home from "./app-pages/Home";
import Listings from "./app-pages/Listings";

const NavButton = styled(Button)`
  margin: 0 1rem;
  a:link,
  a:visited {
    text-decoration: none;
    color: white;
  }
`;

export default function App() {
  return (
    <Router>
      <NavBar>
        <NavButton variant="contained">
          <Link to="/">Home</Link>
        </NavButton>
        <NavButton variant="contained">
          <Link to="/listings">View Listings</Link>
        </NavButton>
      </NavBar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/listings" element={<Listings />} />
      </Routes>
    </Router>
  );
}
