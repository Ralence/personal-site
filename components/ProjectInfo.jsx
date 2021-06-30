import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectInfo = ({ title, image, projectLink, linkTitle, children }) => {
  return (
    <section className="s1" style={{ paddingTop: "25px" }}>
      <div className="main-container">
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div className="browser-dot"></div>
              <div className="browser-dot"></div>
              <div className="browser-dot"></div>
            </div>

            <ul className="navigation">
              <li>
                <Link href="/">
                  <a>Back</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="left-column project_title">
            <h3 style={{ textAlign: "center" }}>{title}</h3>
            <div className="project_cover">
              <Image src={image} alt="project page image" />
            </div>
          </div>

          <div className="right-column  project_description">
            <h5>
              Link to the project page:
              <a href={projectLink} target="_blank" rel="noreferrer">
                {" "}
                {linkTitle}
              </a>
            </h5>

            <div className="preview project_preview">
              <div id="corner-tl" className="corner corner-tl"></div>
              <div id="corner-tr" className="corner corner-tr"></div>

              <h5>Description</h5>

              {children}

              <div id="corner-bl" className="corner corner-bl"></div>
              <div id="corner-br" className="corner corner-br"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
