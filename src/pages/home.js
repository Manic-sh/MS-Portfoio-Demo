import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NeoButton from "../components/Button";

import TypeWritterEffect from "../components/TypeWritterEffect";

export default function Home() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <div className="display-center text-center">
              <div className="circle box-drop-shadow">Hi</div>
              <h5 className="heading my-2">I'm Manish Sharma.</h5>
              <TypeWritterEffect />
              <div className="neo-btn-group mt-2">
                <Link to="/portfolio" className="p-1">
                  <NeoButton>My Portfolio</NeoButton>
                </Link>
                <Link to="/resume" className="p-1">
                  <NeoButton>Resume</NeoButton>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
