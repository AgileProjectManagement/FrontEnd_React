import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar, InputBase, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/ExpandCircleDown";
import { useNavigate } from "react-router-dom";

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

const Nav = styled("nav")(() => ({
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "baseline",
  justifyContent: "center",
}));

const Name = styled(Typography)`
  cursor: pointer;
`;

export const NavButton = styled(Button)`
  margin: 0 1rem;
  a:link,
  a:visited {
    text-decoration: none;
    color: white;
  }
  span {
    margin: 0;
    padding: 0;
  }

  display: inline-flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export default function NavBar({ searchAction, children }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AppBar position="static">
      <CustomToolBar>
        <Name variant="h6" component="div" onClick={() => navigate("/")}>
          Lit Offer Up
        </Name>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchAction(searchTerm);
            }}
          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </Search>
        <Nav>
          {children}
          <NavButton
            variant="contained"
            aria-label="view cart"
            startIcon={<MoreIcon />}
            disableElevation
          >
            More
          </NavButton>
        </Nav>
      </CustomToolBar>
    </AppBar>
  );
}

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  searchAction: PropTypes.func,
};

NavBar.defaultProps = {
  searchAction: () => null,
};
