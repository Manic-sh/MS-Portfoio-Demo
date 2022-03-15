import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaTwitter, FaDigitalOcean } from "react-icons/fa";

import "./style.css";

const NeoNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="box-drop-shadow">
        <Container>
          <Navbar.Brand href="/">
            <div className="logo box-drop-shadow">MS.</div>
          </Navbar.Brand>
          <Nav className="social-icons">
            <Nav.Link className="neobtn" href="https://github.com/Manic-sh/">
              <FaGithub />
            </Nav.Link>
            <Nav.Link
              className="neobtn"
              href="https://twitter.com/__ManishSharma_"
            >
              <FaTwitter />
            </Nav.Link>
            <Nav.Link
              className="neobtn"
              href="https://cloud.digitalocean.com/account/profile?i=d1a2aa"
            >
              <FaDigitalOcean />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NeoNavbar;
