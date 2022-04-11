import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WishListIcon from "@mui/icons-material/ListAlt";
import { Container } from "@mui/material";
import NavBar, { NavButton } from "./app-components/NavBar";
import Home from "./app-pages/Home";
import Listings from "./app-pages/Listings";

export default function App() {
  return (
    <Router>
      <NavBar>
        <NavButton
          variant="contained"
          aria-label="view cart"
          startIcon={<ShoppingCartIcon />}
          textSizeSmall
          disableElevation
        >
          <Link to="/cart">Cart</Link>
        </NavButton>
        <NavButton
          variant="contained"
          aria-label="view wish list"
          startIcon={<WishListIcon />}
          textSizeSmall
          disableElevation
        >
          <Link to="/wishlist">Wishlist</Link>
        </NavButton>
      </NavBar>
      <Container element="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/listings" element={<Listings />} />
        </Routes>
      </Container>
    </Router>
  );
}
