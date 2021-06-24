import React from "react";

const Contact = () => {
  return (
    <section className="s2">
      <div className="main-container">
        <h3 style={{ "text-align": "center" }}>Get In Touch</h3>

        <form action="" className="contact-form">
          <label htmlFor="name">Name</label>
          <input className="input-field" type="text" name="name" />

          <label htmlFor="subject">Subject</label>
          <input className="input-field" type="text" name="subject" />

          <label htmlFor="email">Email</label>
          <input className="input-field" type="email" name="email" />

          <label>Message</label>
          <textarea className="input-field" name="message"></textarea>
          <input className="submit-btn" type="submit" value="send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
