import React from "react";
import "./contact.css";

class Contact extends React.Component {
  
 
  render() {
    return (
      <div id="contact" class="container">
        <h2 className="contact">Contact me </h2>
        <a
          href="mailto:prajwalr.thedeveloper@gmail.com"
          target="_blank"
          class="cta"
        >
          say hello
        </a>
      </div>
    );
  }
}

export default Contact;
