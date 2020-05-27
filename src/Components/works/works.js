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
        <a href="https://github.com/crypt0-1/RestaurantFinder" target="_blank"> <img src={restaurant} alt="server graphic" className="screenshot" /></a>
          <div className="heading">
              
          <a href="https://github.com/crypt0-1/RestaurantFinder" target="_blank"><p className="wTitle">restaurantFinder </p></a>
            <p className="wsubTitle">
              [using yelp api]similar to yelp.I utilized yelp api to find business around a particulatr area
            </p>
          </div>
        </div>
        <div className="work2">
          
          <div className="heading2">
          <a href="https://github.com/crypt0-1/youtube-channel-api-flutter-" target="_blank"> <img src={you} alt="server graphic" className="screenshot2" /></a>
              <div className="text">
             
              <a href="https://github.com/crypt0-1/youtube-channel-api-flutter-" target="_blank"><p className="Title2">youtube channel(api) </p></a>
            <p className="subTitle2">
              I used youtube api and flutter to create an app that displays a particular channel and it's videos 

            </p>
            </div>
            
          </div>
        
      </div>
      <div className="work">
          <a href="https://github.com/crypt0-1/ecommerce_website" target="_blank"><img src={shot} alt="server graphic" className="screenshot" /></a>
          <div className="heading">
              
          <a href="https://github.com/crypt0-1/ecommerce_website" target="_blank"><p className="wTitle">Ecommerce website </p></a>
            <p className="wsubTitle">
             i am Building a fully functional eccomerce website.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Works;