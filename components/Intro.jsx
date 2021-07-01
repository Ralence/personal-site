import React from "react";
import Image from "next/image";
import MainPageHeading from "./MainPageHeading";
import themes from "../constants/themes";

function Intro({ setTheme }) {
  return (
    <div>
      <section className="s1">
        <MainPageHeading />
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
                  <a href="#contact-form">Contact</a>
                </li>
              </ul>
            </div>
            <div className="left-column">
              <div className="profile_pic" objectFit="contain">
                <Image
                  id="profile_pic"
                  src="/rale.jpg"
                  alt="photo of me chilling"
                  width={200}
                  height={200}
                />
              </div>

              <h5 style={{ textAlign: "center", lineHeight: "0" }}>Personalize Theme</h5>

              <div id="theme-options-wrapper" className="theme-options-wrapper">
                <div
                  data-mode="light"
                  id="light-mode"
                  className="theme-dot light-mode"
                  onClick={() => setTheme(themes.default)}
                ></div>
                <div
                  data-mode="blue"
                  id="blue-mode"
                  className="theme-dot blue-mode"
                  onClick={() => setTheme(themes.blue)}
                ></div>
                <div
                  data-mode="green"
                  id="green-mode"
                  className="theme-dot green-mode"
                  onClick={() => setTheme(themes.green)}
                ></div>
                <div
                  data-mode="purple"
                  id="purple-mode"
                  className="theme-dot purple-mode"
                  onClick={() => setTheme(themes.purple)}
                ></div>
              </div>
            </div>

            <div className="right-column">
              <div className="preview-shadow">
                <div className="preview">
                  <div id="corner-tl" className="corner corner-tl"></div>
                  <div id="corner-tr" className="corner corner-tr"></div>

                  <h3>What I Do</h3>

                  <p>
                    I build responsive web apps with JavaScript, React / Redux and other cool web
                    technologies.
                  </p>

                  <div id="corner-bl" className="corner corner-bl"></div>
                  <div id="corner-br" className="corner corner-br"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
