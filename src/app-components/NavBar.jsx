import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";

export default function NavBar({ children }) {
  return <nav>{children}</nav>;
}

NavBar.propTypes = {
  children: PropTypes.element.isRequired,
};
