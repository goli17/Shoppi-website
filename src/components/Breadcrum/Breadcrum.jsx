import React from "react";
import "./Breadcrum.css";
import PropTypes from "prop-types";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      Home
      <img src={arrow_icon} alt="" />
      Shop
      <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} />
      {product.name}
    </div>
  );
};
Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrum;
