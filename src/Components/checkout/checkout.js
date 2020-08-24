import React from "react";
import "./checkout.css";
import git from "./images/github.png";
import twit from "./images/twitter.png";
import insta from "./images/instagram.png";
import link from "./images/linkedin.png";

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout">
        <h2>check out my</h2>
        <div className="icons">
          <a href="https://github.com/crypt0-1">
            <img src={git} />
          </a>
          <a href="https://twitter.com/prajwal33793961">
            <img src={twit} />
          </a>
          <a href="https://www.instagram.com/prajwalthedeveloper/">
            <img src={insta} />
          </a>
          <a href="https://www.linkedin.com/in/prajwal-r-0189aa1aa/">
            <img src={link} />
          </a>
        </div>
      </div>
    );
  }
}

export default Checkout;
