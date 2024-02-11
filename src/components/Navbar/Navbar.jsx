import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import logo_png from "../imgss/icone2.png";
import Cart_icon from "../imgss/cart.png";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from "../Assets/drop.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const { getTotalCartItems } = useContext(ShopContext);
  const menuref = useRef();

  const dropdown_toggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src={logo_png}
            alt=""
            onClick={() => {
              setMenu("home");
            }}
          />
        </Link>
        <p>ShOppi</p>
      </div>
      <img
        src={dropdown}
        alt=""
        className={`dropdown ${isDropdownVisible ? "open" : ""}`}
        onClick={dropdown_toggle}
      />

      <ul
        ref={menuref}
        onClick={dropdown_toggle}
        className={`nav-items ${isDropdownVisible ? "nav-item-visible" : ""}`}
      >
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#eaeaea",
              fontWeight: "500",
            }}
          >
            HOME
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Clothes");
          }}
        >
          <Link
            to="/Clothes"
            style={{
              textDecoration: "none",
              color: "#eaeaea",
              fontweight: "1000",
            }}
          >
            CLOTHES
          </Link>
          {menu === "Clothes" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Watches");
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#eaeaea",
              fontweight: "1000",
            }}
            to="/Watches"
          >
            WATCHES
          </Link>
          {menu === "Watches" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("About");
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#eaeaea",
              fontweight: "1000",
            }}
            to="/about"
          >
            ABOUT US
          </Link>
          {menu === "About" ? <hr /> : <></>}
        </li>
        {isDropdownVisible ? (
          <>
            <li>
              <Link
                to="/Signuplogin"
                style={{
                  textDecoration: "none",
                  color: "#eaeaea",
                  fontweight: "1000",
                }}
              >
                LOGIN
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "#eaeaea",
                  fontweight: "1000",
                }}
              >
                CART
              </Link>
            </li>
          </>
        ) : (
          <div className="nav-login-cart">
            {localStorage.getItem("auth-token") ? (
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/Signuplogin">
                <button>Login</button>
              </Link>
            )}
            <Link to="/cart">
              <img src={Cart_icon} alt="" className="cart-img" />
            </Link>
            <div className="nav-login-cart-count">{getTotalCartItems()}</div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
