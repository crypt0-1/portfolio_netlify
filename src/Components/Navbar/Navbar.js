import React from "react";

import "./Navbar.css";
import ham from "./images/ham.svg";
import exit from "./images/exit.png";

class Nav extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./navi.js";

    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="nav">
        <a href="#" className="hide-desktop">
          <img src={ham} alt="toggle menu" className="menu" id="menu" />
        </a>
        <ul className="show-desktop hide-mobile" id="nav">
          <li id="exit" className="exit-btn hide-desktop">
            <img src={exit} alt="" />
          </li>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="#aboutme">aboutMe</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
