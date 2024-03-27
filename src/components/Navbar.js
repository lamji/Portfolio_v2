/** @format */

import React from "react";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar
      className="navWrapper"
      fixed="top"
      style={{ backgroundColor: "white" }}
    >
      <h4 className="logo">
        Port<span className="logo2">folio</span>
      </h4>
    </Navbar>
  );
}

export default NavBar;
