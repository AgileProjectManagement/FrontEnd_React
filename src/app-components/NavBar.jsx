import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({ children }) {
  return (
    <AppBar position="static">
      <Toolbar element="nav">
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="div">
          LIT Offerup
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  children: PropTypes.element.isRequired,
};
