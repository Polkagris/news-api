import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={css.nav}>
      <div>Global News</div>
      <Link style={css.navLink} to="/articles">
        Articles
      </Link>
      <Link style={css.navLink} to="/about">
        About
      </Link>
      <Link style={css.navLink} to="/">
        Home
      </Link>
    </div>
  );
}

const css = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "50px",
    backgroundColor: "#a1a",
    color: "white"
  },
  navLink: {
    listStyle: "none",
    color: "white",
    textDecoration: "none"
  }
};

export default Navigation;
