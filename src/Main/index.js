import React, { useEffect } from "react";
import "./main.scss";
import Intro from "./components/Intro";
import Work from "./components/Work/index";
import About from "./components/About";

const Main = (props) => {
  const iFrameEventListener = (event) => {
    const CHATBOT_OPEN_HEIGHT = "600px";
    const CHATBOT_OPEN_WIDTH = "400px";
    const CHATBOT_OPEN_EXPANDED_HEIGHT = "90vh";
    const CHATBOT_OPEN_EXPANDED_WIDTH = "90vw";
    const CHATBOT_CLOSED_WITH_GREETING_HEIGHT = "140px";
    const CHATBOT_CLOSED_WITH_GREETING_WIDTH = "260px";
    const CHATBOT_CLOSED_NO_GREETING_HEIGHT = "48px";
    const CHATBOT_CLOSED_NO_GREETING_WIDTH = "48px";

    if (event.data.type === "resize") {
      const iframe = document.getElementById("pryon-chatbot-iframe");
      let iframeHeight = "0";
      let iframeWidth = "0";
      if (event.data.open) {
        iframeHeight = CHATBOT_OPEN_HEIGHT;
        iframeWidth = CHATBOT_OPEN_WIDTH;

        if (event.data.expanded) {
          iframeHeight = CHATBOT_OPEN_EXPANDED_HEIGHT;
          iframeWidth = CHATBOT_OPEN_EXPANDED_WIDTH;
        }
      } else {
        iframeHeight = CHATBOT_CLOSED_NO_GREETING_HEIGHT;
        iframeWidth = CHATBOT_CLOSED_NO_GREETING_WIDTH;

        if (event.data.greetingOpen) {
          iframeHeight = CHATBOT_CLOSED_WITH_GREETING_HEIGHT;
          iframeWidth = CHATBOT_CLOSED_WITH_GREETING_WIDTH;
        }
      }

      iframe.style.height = iframeHeight;
      iframe.style.width = iframeWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("message", iFrameEventListener);
    return () => {
      window.removeEventListener("message", iFrameEventListener);
    };
  }, []);

  const skills = [
    "Node.js",
    "React",
    "HTML",
    "CSS",
    "Python",
    "Express",
    "GraphQL",
    "TypeScript",
    "EJS",
    "Sass",
    "SQL/Sequelize",
    "PostgreSQL",
    "Git",
    "MongoDB/Mongoose",
    "Materialize/Material UI",
    "Bootsrap/Reactstrap",
  ];

  return (
    <div className="main" id="home">
      <iframe
        src="https://admin-prod.pryon.net/apps/b9103afc-55e0-48f4-af8b-f10fa3ccea0c"
        style={{
          width: "400px",
          height: "600px",
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 10000,
          borderWidth: "0px",
          borderStyle: "unset",
          borderColor: "unset",
          borderImage: "unset",
        }}
        id="pryon-chatbot-iframe"
        title="Test Chatbot"
      />
      <Intro />
      <div id="projects">
        <Work />
      </div>
      <div id="about">
        <About skills={skills} />
      </div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <a href="#home" className="links-page">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Main;
