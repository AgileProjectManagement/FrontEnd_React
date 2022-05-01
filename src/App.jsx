import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WishListIcon from "@mui/icons-material/ListAlt";
import { Container } from "@mui/material";
import NavBar, { NavButton } from "./app-components/NavBar";
import Home from "./app-pages/Home";
import Listings from "./app-pages/Listings";
import ListingPage from "./app-pages/ListingPage";
import callAPI from "./api/api";

export default function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [listings, setListings] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    navigate("/listings");
  };

  useEffect(async () => {
    const serverListings = await callAPI("products", "GET");
    const searchData = {
      searchTerm: search,
      listings: serverListings,
    };
    setListings(searchData);
  }, [search]);

  return (
    <>
      <NavBar searchAction={handleSearch}>
        <NavButton
          variant="contained"
          aria-label="view cart"
          startIcon={<ShoppingCartIcon />}
          textSizeSmall
          disableElevation
          onClick={() => navigate("/cart")}
        >
          Cart
        </NavButton>
        <NavButton
          variant="contained"
          aria-label="view wish list"
          startIcon={<WishListIcon />}
          textSizeSmall
          disableElevation
          onClick={() => navigate("/wishlist")}
        >
          Wishlist
        </NavButton>
      </NavBar>
      <Container element="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/listings"
            element={<Listings searchTerm={search} searchResults={listings} />}
          />
          <Route path="/listings/:itemId" element={<ListingPage />} />
        </Routes>
      </Container>
    </>
  );
}
