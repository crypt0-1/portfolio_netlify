
import React, { Component } from "react";
import "./intro.css";


class Intro extends React.Component {
  
    componentWillMount () {

        const script = document.createElement("script");
        
        script.src = './myscript.js';
        
        script.async = true;
        
        document.body.appendChild(script);
    
    
    }
   
    
  render() {
    
    return (
        <div id="aboutme" className="intro">
        
          <div className="headings">
            <p className='greeting'>Hi,my name is</p>
            <p className="hTitle">Prajwal, </p>
            <p className="hsubTitle" id='text'>
           
                I am a
              <span style={{display:'initial'}}> Developer</span>
              <span> Artist</span>
              <span> Designer</span>
              
              
            </p>
           
          </div>
        </div>
      
    );
  }
}
export default Intro;