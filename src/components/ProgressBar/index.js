import { ProgressBar } from "react-bootstrap";
import "./style.css";

const NeoProgressBar = () => {
  return (
    <>
      <div className="neo-wrapper">
        <div className="progress-info">
          <div className="progress-label">
            <span className="dark-text">HTML</span>
          </div>
          <div className="progress-percent">
            <span>80%</span>
          </div>
        </div>
        <ProgressBar variant="success" now={76} />
      </div>
      <div className="neo-wrapper">
        <div className="progress-info">
          <div className="progress-label">
            <span className="dark-text">CSS</span>
          </div>
          <div className="progress-percent">
            <span>76%</span>
          </div>
        </div>
        <ProgressBar variant="gray" now={65} />
      </div>
      <div className="neo-wrapper">
        <div className="progress-info">
          <div className="progress-label">
            <span className="dark-text">JavaScript</span>
          </div>
          <div className="progress-percent">
            <span>65%</span>
          </div>
        </div>
        <ProgressBar variant="danger" now={65} />
      </div>
      <div className="neo-wrapper">
        <div className="progress-info">
          <div className="progress-label">
            <span className="dark-text">React</span>
          </div>
          <div className="progress-percent">
            <span>55%</span>
          </div>
        </div>
        <ProgressBar variant="info" now={55} />
      </div>
    </>
  );
};
export default NeoProgressBar;
