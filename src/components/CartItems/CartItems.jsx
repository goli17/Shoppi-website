import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Cartitems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem && cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartItems-format-main">
                <img className="cart-product-icon " src={e.image} />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className="cartitems-quantity">{cartItem[e.id]}</button>
                <p>₹{e.new_price * cartItem[e.id]}</p>
                <img
                  className="cartItem-remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItem-total-item">
              <p>Sub Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed ToCheck Out</button>
        </div>
        <div className="cartItem-promocode">
          <p>If you have promocode apply here</p>
          <div className="cartItem-promobox">
            <input type="text" placeholder="Enter Promo Code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
