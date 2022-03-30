import React from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar, InputBase, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./NavBar.css";

const CustomToolBar = styled(Toolbar)({
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "45ch",
    },
  },
}));

export default function NavBar({ children }) {
  return (
    <AppBar position="static">
      <CustomToolBar>
        <Typography variant="h6" component="div">
          Lit Offer Up
        </Typography>

        <Search sx={{ width: "200px" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <div>
          <Button color="inherit">TBD</Button>
          <Button color="inherit">TBD</Button>
          <Button color="inherit">TBD</Button>
        </div>
      </CustomToolBar>
    </AppBar>
  );
}

NavBar.propTypes = {
  children: PropTypes.element.isRequired,
};
