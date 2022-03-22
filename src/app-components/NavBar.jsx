import React from "react";
import PropTypes from "prop-types";

export default function NavBar({ children }) {
  return (
    <nav>
      <ul>
        {children.map((child) => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  children: PropTypes.element.isRequired,
};
