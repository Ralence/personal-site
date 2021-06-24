import React from "react";
import Image from "next/image";

import comingSoon from "../public/coming_soon.png";

const Projects = () => {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ "text-align": "center" }}>Some of my past projects</h3>

        <div className="post-wrapper">
          <div>
            <div className="post">
              <Image src={comingSoon} alt="project thumbnail" className="thumbnail" />
              <div className="post-preview">
                <h6 className="post-title">Post Title</h6>
                <p className="post-intro">this is a sentence. some text</p>
                <a href="/post.html">Read more</a>
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
