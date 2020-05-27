import React from "react";
import "./checkout.css";
import git from './images/github.png';
import twit from './images/twitter.png';
import insta from './images/instagram.png';
import link from './images/linkedin.png';

class Checkout extends React.Component {
  render() {
    return (
        <div className="checkout">
        <h2>check out my</h2>
        <div className="icons"><a href='#'><img src={git} /></a>
        <a href='#'><img src={twit} /></a>
        <a href='#'><img src={insta} /></a>
        <a href='#'><img src={link} /></a></div>
        
    </div>
    )
  }
}

export default Checkout;