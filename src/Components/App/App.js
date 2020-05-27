import React from "react";
import Nav from "../Navbar/Navbar"
import "./App.css";
import Skills from "../Skills/Skills";
import Hero from "../Hero/hero";
import Intro from '../intro/intro';
import Works from "../works/works";
import Contact from "../contact/contact";
import Checkout from '../checkout/checkout';
import Darkmode from "../darkmode/darkmodee";



class App extends React.Component {

  render() {
    return (
      <div className="App">
     <Darkmode />,
       <Nav /> ,
       <Intro />,
       <Hero />,
      
        <Skills />,
        <Works />,
        <Contact />
        <Checkout />
      </div>
    );
  }
}

export default App;
