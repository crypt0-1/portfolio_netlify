import React from "react";
import "./hero.css";
import computer from "./images/computer.png";

class Hero extends React.Component {
  render() {
    return (
      <div>
        
        <div className="hero1">
          <img src={computer} alt="server graphic" className="computer" />
          <div className="aheadings">
            <p className="Title">About me. </p>
            <p className="subTitle">
              Hello! I'm prajwal,I enjoy creating things that live on the
              internet, whether that is websites, applications, or anything in
              between and I love learning about new technologies.
            </p>
          </div>
        </div>
        <a className="a" href="https://www.linkedin.com/in/prajwal-r-0189aa1aa/" target="_blank">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get in Touch
        </a>
      </div>
    );
  }
}
export default Hero;
