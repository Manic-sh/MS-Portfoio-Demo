import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import infinite from "../assets/images/infinite.svg";
import techtone from "../assets/images/logo-96x.png";
import kokkivo from "../assets/images/logo.png";
import mslogo from "../assets/logo/logo-128.svg";

export default function Portfolio() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={4} className="mb-5">
            <div className="neo-card-wrapper p-2">
              <a
                href="http://infiniteinvestments.co.in/"
                target="_blank"
                alt=""
              >
                <Card>
                  <Card.Body>
                    <div className="neo-shape">
                      <img
                        src={infinite}
                        width={80}
                        height={80}
                        alt="infinite"
                      />
                    </div>
                    <h5 className="heading my-2">Infinite Investments</h5>
                    <p>
                      Static company portfolio website developed in HTML, CSS,
                      JavaSCript and Bootstrap 5 with Razorpay integration.
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-5">
            <div className="neo-card-wrapper p-2">
              <a href="https://scentblendbarn.co/" target="_blank" alt="sbb">
                <Card>
                  <Card.Body>
                    <div className="neo-shape">
                      <span>SBB</span>
                    </div>
                    <h5 className="heading my-2">Scent Blend Barn Co.</h5>
                    <p>
                      Wordpress online shop for Skincare and home decor products
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-5">
            <div className="neo-card-wrapper p-2">
              <a href="http://manish-sharma.co.in/" target="_blank" alt="neo">
                <Card>
                  <Card.Body>
                    <div className="neo-shape">
                      <img src={mslogo} width={60} height={60} />
                    </div>
                    <h5 className="heading my-2">
                      Neo React Portfolio Template
                    </h5>
                    <p>
                      Designed with the latest design trends in mind. Our
                      product feels modern. React & Bootstrap 5
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-5">
            <div className="neo-card-wrapper p-2">
              <a href="http://139.59.89.106/" target="_blank" alt="kokkivo">
                <Card>
                  <Card.Body>
                    <div className="neo-shape">
                      <img src={kokkivo} width={60} height={60} />
                    </div>
                    <h5 className="heading my-2">Kokkivo React POS Template</h5>
                    <p>
                      Designed with the latest design trends in mind. developed
                      React, Django & Postgres backend
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="neo-card-wrapper p-2">
              <a href="https://techtone.co.in/" target="_blank" alt="techtone">
                <Card>
                  <Card.Body>
                    <div className="neo-shape">
                      <img src={techtone} width={60} height={60} />
                    </div>
                    <h5 className="heading my-2">Techtone.co.in</h5>
                    <p>
                      Designed with the latest design trends in mind. Our
                      product feels modern.
                    </p>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
