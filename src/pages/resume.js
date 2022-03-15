import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/Manish-Sharma-Resume-2022.pdf";
export default function Resume() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <div className="resume-btn display-center text-center">
              <a href={resume} className="resume-link mt-4" target="_blank">
                Download Resume
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
