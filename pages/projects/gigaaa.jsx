import React from "react";
import ProjectInfo from "../../components/ProjectInfo";
import gigaaa_4 from "../../public/gigaaa_4.png";

function Gigaaa() {
  return (
    <div>
      <ProjectInfo
        title="gigaaa website Plug-in"
        image={gigaaa_4}
        projectLink="https://gigaaa.com/gigaaa-plug-in/"
        linkTitle="gigaaa/plug-in"
      >
        <div style={{ textAlign: "left" }}>
          <p>
            The project was built from scratch using React for UI rendering and Redux for state
            management.
          </p>
          <p>
            It is a chat plug-in that connects the browser and gigaaa AI personal assistant
            implementing all available gigaaa services. It works with text or speech input and
            understands multiple languages.
          </p>
          <p>
            Some of the technologies used:
            <ul style={{ fontStyle: "italic", fontWeight: "bold" }}>
              <li>styled-components</li>
              <li>web-speech API</li>
              <li>Azure speech recognition</li>
              <li>i18next</li>
              <li>web-sockets</li>
              <li>...</li>
            </ul>
          </p>
        </div>
      </ProjectInfo>
    </div>
  );
}

export default Gigaaa;
