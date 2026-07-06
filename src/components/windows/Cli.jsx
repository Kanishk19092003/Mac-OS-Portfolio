import { useState } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
} from "react-terminal-ui";

import "./cli.scss"

import MacWindow from "./MacWindow";

const Cli = ({ windowName, setWindowsState }) => {
  const [lines, setLines] = useState([
    <TerminalOutput key="welcome1">
      Welcome to Kanishk's Portfolio 🚀
    </TerminalOutput>,

    <TerminalOutput key="welcome2">
      Type "help" to see available commands.
    </TerminalOutput>,

    <TerminalOutput key="welcome3">
      -----------------------------------------
    </TerminalOutput>,
  ]);

  const handleInput = (input) => {
    const command = input.trim().toLowerCase();

    let output = [];

    switch (command) {
      case "help":
        output = [
          "Available Commands",
          "",
          "about      - About me",
          "skills     - My skills",
          "projects   - My projects",
          "resume     - Resume",
          "contact    - Contact information",
          "clear      - Clear terminal",
        ];
        break;

      case "about":
        output = [
          "Hi 👋",
          "I'm Kanishk Yadav.",
          "Passionate MERN Stack Developer with expertise in building modern, responsive, and high-performance web applications. I specialize in creating visually engaging animated websites and scalable full-stack solutions using MongoDB, Express.js, React, and Node.js. I focus on delivering seamless user experiences with clean, efficient, and maintainable code.",
        ];
        break;

      case "skills":
        output = [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "SCSS",
          "Node.js",
          "Express",
          "MongoDB",
        ];
        break;

      case "projects":
        output = [
          "1. MacOS Portfolio",
          "2. Netflix Clone",
          "3. Spotify Clone",
        ];
        break;

      case "resume":
        output = [
          "Resume available at:",
          "/resume.pdf",
        ];
        break;

      case "contact":
        output = [
          "Email : kanishkyadav141@gmail.com",
          "GitHub: https://github.com/Kanishk19092003",
          "LinkedIn: www.linkedin.com/in/kanishkyadav19",
        ];
        break;

      case "clear":
        setLines([]);
        return;

      default:
        output = [`Command not found: ${command}`];
    }

    setLines((prev) => [
      ...prev,

      <TerminalOutput key={Date.now()}>
        $ {command}
      </TerminalOutput>,

      ...output.map((line, index) => (
        <TerminalOutput key={`${Date.now()}-${index}`}>
          {line}
        </TerminalOutput>
      )),
    ]);
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}
    title="Terminal" width="45vw" height="55vh">
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Terminal
          colorMode={ColorMode.Dark}
          prompt="➜"
          onInput={handleInput}
        >
          {lines}
        </Terminal>
      </div>
    </MacWindow>
  );
};

export default Cli;