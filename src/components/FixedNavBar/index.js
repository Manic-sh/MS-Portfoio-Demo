import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";

const NeoNavigation = () => {
  return (
    <>
      <Navbar
        className="neo-fixed-navigation"
        collapseOnSelect
        expand="lg"
        fixed="bottom"
      >
        <Container>
          <Navbar.Toggle aria-controls="neo-navigation" />
          <Navbar.Collapse id="neo-navigation">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NeoNavigation;
