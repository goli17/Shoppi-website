import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers in your E-Mail</h1>
      <p>Subscribe to our newsletter and stay updated </p>
      <div className="input">
        <input type="email" placeholder="Enter your email id...." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
