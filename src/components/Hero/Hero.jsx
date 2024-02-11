import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>Collections </p>
          <p>For Everyone </p>
        </div>
        <Link
          to="/Clothes"
          style={{
            textDecoration: "none",
            color: "#eaeaea",
            fontweight: "1000",
          }}
        >
          <div className="hero-latest-button">
            <div>Latest Collections</div>
            <img src={arrow_icon} alt="" />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_img} />
      </div>
    </div>
  );
};

export default Hero;
