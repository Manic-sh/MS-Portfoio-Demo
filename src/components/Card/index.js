import { Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { BsInstagram, BsGithub, BsTwitter, BsDribbble } from "react-icons/bs";
import "./style.css";

import avatar from "../../assets/images/avatar-profile.png";

const NeoCard = () => {
  return (
    <Card className="neo-card">
      <div className="card-image-header">
        <Card.Img
          className="card-profile-image"
          variant="top"
          src={avatar}
          rounded
        />
      </div>
      <Card.Body className="mt-2">
        <Card.Title>Manish Sharma</Card.Title>
        <Card.Subtitle>Frontend Web Developer</Card.Subtitle>
        <div className="neo-card-text soft-shadow p-3">
          <Card.Text className="about-info">
            <span className="text-muted">Email:</span>
            <span>mash.pro666@gmail.com</span>
          </Card.Text>
          <Card.Text className="about-info">
            <span className="text-muted">Phone:</span>
            <span>+91-7875146660</span>
          </Card.Text>
          <Card.Text className="about-info">
            <span className="text-muted">City:</span>
            <span>Pune</span>
          </Card.Text>
          <Card.Text className="about-info">
            <span className="text-muted">Country:</span>
            <span>India</span>
          </Card.Text>
        </div>
      </Card.Body>
      <Card.Footer>
        <ListGroup horizontal>
          <ListGroup.Item>
            <a href="https://twitter.com/__ManishSharma_" target="_blank">
              <BsTwitter className="neo-twitter-icon" />
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://www.instagram.com/manish.sharma15/"
              target="_blank"
            >
              <BsInstagram className="neo-instagram-icon" />
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://dribbble.com/Masicsoft" target="_blank">
              <BsDribbble className="neo-dribble-icon" />
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://github.com/Manic-sh/" target="_blank">
              <BsGithub className="neo-github-icon" />
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Footer>
    </Card>
  );
};
export default NeoCard;
