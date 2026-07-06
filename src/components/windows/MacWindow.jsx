import { Rnd } from "react-rnd";
import { useMemo } from "react";
import "./window.scss";



const MacWindow = ({ children, width = "40vw", height = "40vh" ,windowName,setWindowsState }) => {

const position = useMemo(() => {
    return {
      x: Math.floor(Math.random() * (window.innerWidth * 0.35)) + 50,
      y: Math.floor(Math.random() * (window.innerHeight * 0.2)) + 50,
    };
  }, []);

  return (
    <Rnd
    dragHandleClassName="nav"
    enableUserSelectHack={false}
      default={{
        x: position.x,
        y: position.y,
        width: width,
        height: height,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
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
