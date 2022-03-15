import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import NeoTitle from "../components/Title";
import NeoCard from "../components/Card";
import NeoTab from "../components/Tab";

export default function About() {
  return (
    <Container>
      <Row className="pt-5 mt-4">
        <Col md={4} lg={4}>
          <NeoCard />
        </Col>

        <Col lg={8} md={8}>
          <NeoTab />
        </Col>
      </Row>
    </Container>
  );
}
