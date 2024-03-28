/** @format */

import React from "react";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar fixed="top" style={{ backgroundColor: "white" }}>
      <h4 className="logo navWrapper">
        Port<span className="logo2">folio</span>
      </h4>
    </Navbar>
  );
};

export default NavBar;
