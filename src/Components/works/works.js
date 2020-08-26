import React from "react";
import "./works.css";
import shot from "./images/screenshot.png";
import you from "./images/you.png";
import restaurant from "./images/Restaurant.PNG";

class Works extends React.Component {
  render() {
    return (
      <div id="projects">
        <div className="projects">Some of my projects</div>
        <div className="work">
        <a href="https://prajwalr308.github.io/RestaurantFinder/" target="_blank"> <img src={restaurant} alt="server graphic" className="screenshot" /></a>
          <div className="heading">
              
          <a href="https://prajwalr308.github.io/RestaurantFinder/" target="_blank"><p className="wTitle">restaurantFinder </p></a>
            <p className="wsubTitle">
              [using yelp api]similar to yelp.I utilized yelp api to find business around a particulatr area
            </p>
          </div>
        </div>
        <div className="work2">
          
          <div className="heading2">
          <a href="https://reactamazonclone.herokuapp.com/" target="_blank"> <img src={you} alt="server graphic" className="screenshot2" /></a>
              <div className="text">
             
              <a href="https://reactamazonclone.herokuapp.com/" target="_blank"><p className="Title2">Amazon clone</p></a>
            <p className="subTitle2">
            Amazon clone using MERN stack,frontend-React,backend-node,mongodb,express.Used redux with react to solve state mangement problems

            </p>
            </div>
            
          </div>
        
      </div>
      <div className="work">
          <a href="https://exercise-trackingapp.herokuapp.com/" target="_blank"><img src={shot} alt="server graphic" className="screenshot" /></a>
          <div className="heading">
              
          <a href="https://exercise-trackingapp.herokuapp.com/" target="_blank"><p className="wTitle">exercise tracker  </p></a>
            <p className="wsubTitle">
            Exercise tracker created with mern stack mongodb,express,react and node.To keep track of users exercises.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Works;