import React from "react";
import "./Offer.css";
import exclusive_img from "../Assets/exclusive_image.png";
import arrow_icon from "../Assets/arrow.png";
import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You </h1>
        <p>ONLY ON BEST SELLER PRODUCT </p>
        <Link
          to="/Clothes"
          style={{
            textDecoration: "none",
            color: "#eaeaea",
            fontweight: "1000",
          }}
        >
          {" "}
          <button>
            Check now <img src={arrow_icon} alt=" " className="img" />{" "}
          </button>
        </Link>
      </div>
      <div className="offer-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offer;
