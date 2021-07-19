import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingOverlay from "react-loading-overlay";
import { Tick } from "react-crude-animated-tick";

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(false);
    setSent(false);
    try {
      const response = await fetch(`/api/contact/`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({ mail_info: data }), // body data type must match "Content-Type" header
      });

      const result = await response.json();

      if (result.success) {
        setLoading(false);
        setError(false);
        setSent(true);
        reset();
      } else {
        setLoading(false);
        setError(true);
      }

      console.log("ordered", result); // parses JSON response into native JavaScript objects
    } catch (error) {
      console.log(error);
      // setLoading(false);
      // setOrderSuccess(false);
    }
  };

  console.log(watch("name"));
  return (
    <section className="s2">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>
        <LoadingOverlay
          active={loading}
          spinner
          text="Sending your message..."
          styles={{
            overlay: (base) => ({
              ...base,
              opacity: 0.4,
            }),
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form" id="contact-form">
            {error && (
              <p style={{ color: "#f00", margin: 0 }}>
                There was en error sending the mail! Please try again or get in touch on{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ranko-ostojic-front-end-developer/"
                >
                  LinkedIn
                </a>
              </p>
            )}

            {sent && (
              <div style={{ textAlign: "center" }}>
                <Tick size={50} />
                <p>Great! Your message has been sent!</p>
              </div>
            )}

            <>
              <label>Name</label>
              <input
                className="input-field"
                type="text"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p style={{ color: "#f00", margin: 0 }}>Name is required</p>
              )}

              <label>Subject</label>
              <input
                className="input-field"
                type="text"
                name="subject"
                {...register("subject", { required: true })}
              />
              {errors.subject?.type === "required" && (
                <p style={{ color: "#f00", margin: 0 }}>Subject is required</p>
              )}

              <label>Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p style={{ color: "#f00", margin: 0 }}>Email is required</p>
              )}

              <label>Message</label>
              <textarea
                className="input-field"
                name="message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message?.type === "required" && (
                <p style={{ color: "#f00", margin: 0 }}>Message is required</p>
              )}
              <input className="submit-btn" type="submit" />
            </>
          </form>
        </LoadingOverlay>
      </div>
    </section>
  );
};

export default Contact;
