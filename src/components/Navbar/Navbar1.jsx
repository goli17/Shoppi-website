import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_png from "../imgss/icone2.png";
import Cart_icon from "../imgss/cart.png";
import "./Navbar.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import drop_icon from "../Assets/drop.png";

const Navbar1 = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo_png} alt="" />
        <p>ShOppi</p>
      </div>

      <ul className={`nav-items ${dropdown ? "open" : ""}`}>
        <Link
          to="/"
          onClick={closeDropdown}
          style={{
            textDecoration: "none",
            color: "#eaeaea",
            fontWeight: "500",
          }}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/Clothes"
          onClick={closeDropdown}
          style={{
            textDecoration: "none",
            color: "#eaeaea",
            fontWeight: "500",
          }}
        >
          <li>Clothes</li>
        </Link>
        <Link
          to="/Watches"
          onClick={closeDropdown}
          style={{
            textDecoration: "none",
            color: "#eaeaea",
            fontWeight: "500",
          }}
        >
          <li>Watches</li>
        </Link>
        <Link
          to="/About"
          onClick={closeDropdown}
          style={{
            textDecoration: "none",
            color: "#eaeaea",
            fontWeight: "500",
          }}
        >
          <li>About us</li>
        </Link>
      </ul>

      <div className="nav-login-cart">
        <Link to="/Signuplogin">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={Cart_icon} alt="" />
        </Link>
        <div className="nav-login-cart-count">{getTotalCartItems()}</div>
        <img
          alt=""
          src={drop_icon}
          className={`dropdown ${dropdown ? "open" : ""}`}
          onClick={() => {
            setDropdown(!dropdown);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar1;
