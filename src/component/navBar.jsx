import React from "react";
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="https://example.com">
        Navbar
        <span className="badge badge-pill badge-primary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
