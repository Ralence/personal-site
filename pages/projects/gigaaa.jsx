import React from "react";
import ProjectInfo from "../../components/ProjectInfo";
import ProjectImages from "../../components/ProjectImages";
import { NextSeo } from "next-seo";
import gigaaa_4 from "../../public/gigaaa_4.png";
import gigaaa_1 from "../../public/gigaaa_1.png";
import gigaaa_2 from "../../public/gigaaa_2.png";
import gigaaa_3 from "../../public/gigaaa_3.png";
import gigaaa from "../../public/gigaaa.png";

const images = [gigaaa, gigaaa_1, gigaaa_2, gigaaa_3];

function Gigaaa() {
  return (
    <div>
      <NextSeo
        title="Ranko Ostojic | gigaaa project"
        description="Ranko Ostojic is a front end web developer with extensive knowledge in creating SPAs with JavaScript, HTML and SCC especially proficient with React JS Library."
      />
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
      <ProjectImages video="/gigaaa_demo.mp4" />
    </div>
  );
}

export default Gigaaa;
