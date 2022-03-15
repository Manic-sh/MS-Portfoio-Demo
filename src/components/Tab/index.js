import { useState } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import "./style.css";
import {
  BsFillPersonBadgeFill,
  BsFillPaletteFill,
  BsHeartFill,
  BsTable,
} from "react-icons/bs";

import NeoProgressBar from "../ProgressBar";

const NeoTab = () => {
  const [key, setKey] = useState("profile");
  const icon_pro = () => {
    <BsFillPersonBadgeFill />;
  };
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="neo-tab mb-3"
    >
      <Tab eventKey="profile" title="About Me">
        <div className="neo-card-wrapper">
          <Card>
            <Card.Body className="p-4">
              <Card.Text>
                Hello World! I'm a Front-End Web Developer based out of Pune,
                India. Passionate about solving complex UI problems and
                converting them to simple, elegant and highly optimized
                graphical user interfaces, through the use of HTML, CSS, and
                JavaScript.
              </Card.Text>
              <Card.Text>
                I love combining the worlds of logic and creative design to make
                eye-catching, accessible, and user-friendly websites and
                applications.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Tab>
      <Tab eventKey="education" title="Skills">
        <div className="neo-card-wrapper p-4">
          <div className="neo-flex-wrapper">
            <NeoProgressBar />
          </div>
        </div>
      </Tab>
      <Tab eventKey="work" title="Service">
        <div className="neo-card-wrapper p-4">
          <div className="neo-shape">
            <BsHeartFill />
            <span>UI/UX</span>
          </div>
          <div className="neo-shape">
            <BsFillPaletteFill />
            <span>Front-End</span>
          </div>
          <div className="neo-shape">
            <BsTable />
            <span>Back-End</span>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

export default NeoTab;
