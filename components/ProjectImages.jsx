import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

const ProjectImages = ({ images, video }) => {
  return (
    <section className="s1 project_images">
      <div className="main-container">
        <h4 style={{ textAlign: "center" }}>Project video</h4>
        <div style={{ margin: "auto", marginBottom: "25px", width: "340px" }}>
          <span>
            * please note that the current state of the project might be different from what is
            displayed here
          </span>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "80px",
          }}
        >
          <ReactPlayer url={video} controls width="80%" />
        </div>

        {images && <h4 style={{ textAlign: "center" }}>Project screenshots</h4>}
        <div className="post_wrapper project_ss_wrapper">
          {images?.map((image, i) => (
            <div key={i} className="post project_ss">
              <Image src={image} alt="project image" className="thumbnail" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImages;
