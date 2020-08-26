import React from "react";
import "./Skills.css";

import skilllevels from "./images/skill.png";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message:
        "I enjoy working on websites.designing,implementing apis and working on backend.I have designed few frontend designs and implemented api with react.I also have worked ecomerce website to build a fullly functional backend project with node.js.Check out my github page",
      stateOne: true,
      states: [
        { stateOne: true },
        { stateTwo: false },
        { StateThree: false },
        { StateFour: false },
      ],
    };
  }
  toggleOne = () => {
    this.setState({
      image: false,
      message:
        "I enjoy working on websites.designing,implementing apis and working on backend.I have designed few frontend designs and implemented api with react.I also have worked ecomerce website to build a fullly functional backend project with node.js.Check out my github page",
    });
    this.setState({
      stateOne: true,
      stateTwo: false,
      StateThree: false,
      StateFour: false,
    });
  };
  toggleTwo = () => {
    this.setState({
      image: false,
      message:
        "React.js was amazing choice i made. it was the best framework i used for building website.I built few React apps like restuarantfinder with yelp api , Amazon clone and more.Check out my github page",
    });
    this.setState({
      stateTwo: true,
      stateOne: false,
      StateThree: false,
      StateFour: false,
    });
  };
  toggleThree = () => {
    this.setState({
      image: false,
      message:
        "I worked in fishokart as a full-stack webdeveloper from 2018 to 2019.fishokart is a startup that involves online delivery service to deliver fishes.I created eccomerce website for the startup project.Check out my github page",
    });
    this.setState({
      StateThree: true,
      stateOne: false,
      stateTwo: false,
      StateFour: false,
    });
  };
  toggleFour = () => {
    this.setState({ message: false, image: skilllevels });
    this.setState({
      StateFour: true,
      stateOne: false,
      stateTwo: false,
      StateThree: false,
    });
  };

  updateContent = () => {
    this.setState({ message: "Updated Content!" });
  };
  render() {
    return (
      <div id="skill">
        <p className="works">Experience and Skill level</p>

        <div className="skills">
          <div className="select place">
            <div>
              <div
                className={this.state.stateOne ? "changeColor1" : "select1"}
                onClick={this.toggleOne}
              >
                Web
              </div>
              <div
                className={this.state.stateTwo ? "changeColor2" : "select2"}
                onClick={this.toggleTwo}
              >
                React
              </div>
              <div
                className={this.state.StateThree ? "changeColor3" : "select3"}
                onClick={this.toggleThree}
              >
                Experience
              </div>
              <div
                className={this.state.StateFour ? "changeColor4" : "select4"}
                onClick={this.toggleFour}
              >
                Skill level
              </div>
            </div>
          </div>
          <div className="levels">
            <div className="para place">{this.state.message}</div>

            <img src={this.state.image} className="skillLevel" />
          </div>
        </div>
        <a
          className="github"
          href="https://github.com/crypt0-1"
          target="_blank"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Github
        </a>
      </div>
    );
  }
}

export default Skills;
