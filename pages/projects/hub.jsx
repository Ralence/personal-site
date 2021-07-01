import React from "react";
import ProjectInfo from "../../components/ProjectInfo";
import ProjectImages from "../../components/ProjectImages";
import hub from "../../public/hub.webp";

function Hub() {
  return (
    <div>
      <ProjectInfo
        title="The Hub by GoDaddy Pro"
        image={hub}
        projectLink="https://hub.godaddy.com/"
        linkTitle="GoDaddy Pro Hub"
      >
        <div style={{ textAlign: "left" }}>
          <p>
            GoDaddy Hub integrates tools for project management, site maintenance and client
            management. It an all in one tool that is beneficial for all web professionals, no
            matter what stage their business is at.
          </p>
          <p>
            The project uses cutting edge technology and is based on{" "}
            <i>
              <strong>micro-frontend</strong>
            </i>{" "}
            architecture combining multiple React JS apps.
          </p>
          <p>
            You can read more about the project on{" "}
            <a href="https://uk.godaddy.com/pro/hub-dashboard" target="_blank" rel="noreferrer">
              GoDaddy official site
            </a>
          </p>
        </div>
      </ProjectInfo>
      <ProjectImages video="https://www.youtube.com/watch?v=Z3j0HX9otvw&t=35s&ab_channel=GoDaddy" />
    </div>
  );
}

export default Hub;
