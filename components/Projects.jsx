import React from "react";
import Image from "next/image";
import Link from "next/link";

import comingSoon from "../public/coming_soon.png";
import gigaaa_cover from "../public/gigaaa_4.png";
import hub_cover from "../public/hub.webp";

const Projects = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ "text-align": "center" }}>Check out my latest projects</h3>

        <div className="post-wrapper">
          <Link href="projects/hub" passHref>
            <a>
              <div>
                <div className="post">
                  <Image
                    src={hub_cover}
                    alt="project thumbnail"
                    className="thumbnail"
                    height={210}
                    width={340}
                  />
                  <div className="post-preview">
                    <h6 className="post-title">Hub by GoDaddy</h6>
                    <p className="post-intro">
                      Manage both your clients and their websites all from a single dashboard. Bulk
                      updates for WordPress core, plugins, and themes. Compatible with all hosting
                      providers.
                    </p>
                  </div>
                  <div style={{ margin: "15px", marginTop: "auto" }}>
                    <a>Read more</a>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/projects/gigaaa" passHref>
            <a>
              <div>
                <div className="post">
                  <Image
                    src={gigaaa_cover}
                    alt="project thumbnail"
                    className="thumbnail"
                    height={210}
                    width={340}
                  />
                  <div className="post-preview">
                    <h6 className="post-title">gigaaa Website Plug-in</h6>
                    <p className="post-intro">
                      Chat plugin for gigaaa AI personal assistant with NLP integration. Supports
                      all gigaaa AI services.{" "}
                    </p>
                  </div>
                  <div style={{ margin: "15px", marginTop: "auto" }}>
                    <a>Read more</a>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
