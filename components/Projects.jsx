import React from "react";
import Image from "next/image";
import Link from "next/link";

import comingSoon from "../public/coming_soon.png";
import gigaaa_cover from "../public/gigaaa_4.png";

const Projects = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ "text-align": "center" }}>Some of my past projects</h3>

        <div className="post-wrapper">
          <Link href="/projects/gigaaa" passHref>
            <a>
              <div>
                <div className="post">
                  <Image src={gigaaa_cover} alt="project thumbnail" className="thumbnail" />
                  <div className="post-preview">
                    <h6 className="post-title">gigaaa Website Plug-in</h6>
                    <p className="post-intro">
                      Chat plugin for gigaaa AI personal assistant with NLP integration. Supports
                      all gigaaa AI services.{" "}
                    </p>
                    Read more
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <div>
            <div className="post">
              <Image src={comingSoon} alt="project thumbnail" className="thumbnail" />
              <div className="post-preview">
                <h6 className="post-title">Post Title</h6>
                <p className="post-intro">this is a sentence. some text</p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>

          <div>
            <div className="post">
              <Image src={comingSoon} alt="project thumbnail" className="thumbnail" />
              <div className="post-preview">
                <h6 className="post-title">Post Title</h6>
                <p className="post-intro">this is a sentence. some text</p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
