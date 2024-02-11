import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import PropTypes from "prop-types";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/item/Item";
import "./CSS/ShopCategory.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleProduct, setVisibleProduct] = useState(12);

  const handleLoadMore = () => {
    setVisibleProduct((prevVisibleProduct) => prevVisibleProduct + 12);
  };

  const filteredProducts = all_product.filter(
    (item) => props.category === item.category
  );

  return (
    <div className="shopCategory">
      <img src={props.banner} className="poster" alt="" />
      <div className="shopcategory-index">
        <p>
          <strong>Showing</strong>
          <span>
            &nbsp; 1-{Math.min(visibleProduct, filteredProducts.length)}
          </span>{" "}
          Out of {filteredProducts.length}
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=" " />
        </div>
      </div>
      <div className="shopcategory-product">
        {filteredProducts.slice(0, visibleProduct).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {visibleProduct < filteredProducts.length && (
        <div className="shopcategory-loadmore" onClick={handleLoadMore}>
          Explore more
        </div>
      )}
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
