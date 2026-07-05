import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children }) => {
  return (
    <Rnd
    dragHandleClassName="nav"
      default={{
        x: 100,
        y: 100,
        width: 700,
        height: 500,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>kanishkyadav - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
