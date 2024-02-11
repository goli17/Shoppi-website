import React from "react";
import data_watch from "./data3";
import Item from "../item/Item";
import "./watch.css";

const Watches = () => {
  return (
    <div className="watches">
      <h1>Mens Watch Collection</h1>
      <hr />
      <div className="watches-item">
        {data_watch.map((item, i) => {
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

export default Watches;
