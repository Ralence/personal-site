/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import githubPicture from "../public/github1.png";
import instagramPicture from "../public/instagram1.jpg";
import linkedinPicture from "../public/linkedin1.png";

function About() {
  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>

            <p>
              I build new projects just to tickle my brain and love teaching others how they're
              made.
            </p>

            <p>
              While I keep busy teaching courses, I still take interviews in search of a great team
              & projects that interest me.
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p>
              Front-end developer with primary focus on React:
              <a target="_blank" href="RankoCV.pdf">
                Download Resume
              </a>
            </p>

            <div className="skills">
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>Jira</li>
              </ul>
              <ul>
                <li>React testing library</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>styled-components</li>
                <li>...</li>
              </ul>
            </div>
          </div>
          <div className="social-links">
            <h3>
              Find me on <span className="social-label">Linkedin</span>,{" "}
              <span className="social-label">GitHub</span> &{" "}
              <span className="social-label">Instagram</span>
            </h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ranko-ostojic-front-end-developer/"
              className="social-img"
            >
              <Image src={linkedinPicture} alt="" />
            </a>
            <a
              className="social-img"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ralence"
            >
              <Image className="social-img" src={githubPicture} alt="" />
            </a>
            <a
              className="social-img"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/ralence84/"
            >
              <Image className="social-img" src={instagramPicture} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
