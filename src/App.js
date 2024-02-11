import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pagess/home";
import Cart from "./Pagess/cart";
import About from "./Pagess/About";
//import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import ShopCategory from "./Pagess/ShopCategory";
import men_banner from "./components/Assets/banner_mens.png";
import watch_banner from "./components/watch/watchhhhh.png";
import Product from "./Pagess/Product";
import Signuplogin from "./Pagess/Signuplogin";
import Navbar1 from "./components/Navbar/Navbar1";
function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route exact path="/Signuplogin" element={<Signuplogin />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route excat path="/Product" element={<Product />}>
          <Route excat path=":productId" element={<Product />} />
        </Route>
        <Route
          exact
          path="/Clothes"
          element={<ShopCategory banner={men_banner} category="Clothes" />}
        ></Route>
        <Route
          exact
          path="/Watches"
          element={<ShopCategory banner={watch_banner} category="Watches" />}
        ></Route>
        <Route exact path="/About" element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
