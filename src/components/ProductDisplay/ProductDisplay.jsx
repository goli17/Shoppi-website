import React, { useContext } from "react";
import "./ProductDisplay.css";
import PropTypes from "prop-types";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-List">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} className="productdisplay-main-img" alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-star-img">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(1224)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprice">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-newprice">
            {" "}
            ₹{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-discription">
          Embrace comfort and style with our hoodies. Crafted for warmth and
          designed for fashion, these cozy essentials are perfect for casual
          outings or relaxed days. Elevate your wardrobe with our collection,
          offering the ideal blend of comfort and contemporary flair.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-size-chart">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women , Mens , Kids
        </p>
        <p className="productdisplay-right-category">
          <span>Product:</span> T-Shirt , Crop-Top, Hoddies ,Sweaters, Watches
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Morden, Latest, Trending
        </p>
      </div>
    </div>
  );
};
ProductDisplay.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDisplay;
