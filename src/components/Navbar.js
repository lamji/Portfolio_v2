/** @format */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar fixed="top" style={{ backgroundColor: "white" }}>
      <Container>
        <h4 className="logo">
          Port<span className="logo2">folio</span>
        </h4>
      </Container>
    </Navbar>
  );
}

export default NavBar;
