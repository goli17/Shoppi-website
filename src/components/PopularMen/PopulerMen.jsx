import React from "react";
import "./PopularMen.css";
import data_product2 from "../Assets/data2";
import Item from "../item/Item";
const PopulerMen = () => {
  return (
    <div className="PopularMen">
      <h1>POPULAR IN MEN</h1>
      <hr />
      <div className="PopularMen-item">
        {data_product2.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopulerMen;
