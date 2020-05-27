import React from "react";
import "./Skills.css";

import skilllevels from "./images/skill.png"

class Skills extends React.Component {
  constructor(props) {
    super(props);
 
    
    this.state = {
      
      message: "I enjoy working on websites.designing,implementing apis and working on backend.I have designed few frontend designs and implemented api with react.I also have worked ecomerce website to build a fullly functional backend project with django.Check out my github page",
      stateOne:true,
      states:[
        {stateOne:true},
        {stateTwo:false},
        {StateThree:false},
        {StateFour:false},
      ],
      
  }
}
  toggleOne = () => {
    
   
    this.setState({image:false, message: "I enjoy working on websites.designing,implementing apis and working on backend.I have designed few frontend designs and implemented api with react.I also have worked ecomerce website to build a fullly functional backend project with django.Check out my github page" });
      this.setState({
      stateOne: true,
      stateTwo:false,
      StateThree:false,
      StateFour:false,
      
      });
   
  };
  toggleTwo = () => {
   
    this.setState({ image:false, message: "Flutter was amazing choice i made. it was the best framework i used for building apps.I built few flutter apps like youtube channel api , restuarant app and few front designs.Check out my github page" });
    this.setState({
    stateTwo: true,
    stateOne:false,
    StateThree:false,
    StateFour:false,
   
    });
 
};
toggleThree = () => {
 
  this.setState({ image:false,
    message: "I am an artist so i like designing ui/ux for website and apps.Check out my github page" });
  this.setState({
  StateThree: true,
  stateOne:false,
    stateTwo:false,
    StateFour:false
  });

};
toggleFour = () => {
  this.setState({ message:false,
    image:skilllevels });
  this.setState({
  StateFour: true,
  stateOne:false,
    stateTwo:false,
    StateThree:false
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
       <ul>
         <li 
           className={this.state.stateOne   ?  "changeColor1" : "select1" }
           onClick={this.toggleOne}
         >
           <p >Web</p>
         </li>
         <li  className={this.state.stateTwo   ?   "changeColor2" : "select2" }
           onClick={this.toggleTwo}>
           <p>Flutter</p>
         </li>
         <li className={this.state.StateThree ?   "changeColor3" : "select3" }
           onClick={this.toggleThree}
          
         >
           <p>Designs</p>
         </li>
         <li  className={this.state.StateFour ?   "changeColor4" : "select4" }
           onClick={this.toggleFour}
           
         >
           <p>Skill level</p>
         </li>
       </ul>
     </div>
     <div className='levels'> 
     <div className="para place">{this.state.message}</div>
    
     <img src={this.state.image} className='skillLevel' />
     
     </div>
    
     
   </div>
   <a className="github" href="https://github.com/crypt0-1" target="_blank">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Github
        </a></div>
    );
  }
}

export default Skills;
