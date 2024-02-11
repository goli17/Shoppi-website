import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
          <div className="aboutUs-aboutus">
            {" "}
            <h3>About us</h3>
            <p>
              Welcome to ShOppi, your premier destination for stylish watches
              and fashionable clothing for men, women, and kids. At ShOppi,
              we're dedicated to helping you showcase your individuality through
              our carefully curated collection of high-quality products.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
          <div className="aboutUs-what-we-offer">
            <h3>What We Offer</h3>
            <p>
              Discover our extensive selection of men's watches, designed to
              seamlessly blend classic sophistication with modern flair. Whether
              you're in search of a sleek timepiece for everyday wear or a bold
              accessory to make a statement, ShOppi has the perfect watch to
              complement your lifestyle. In addition to our impressive watch
              collection, ShOppi offers a wide array of clothing for men, women,
              and kids. <br />
              From timeless men's attire and elegant women's dresses to adorable
              kids' outfits, we've got something for every member of the family.
              With a keen eye for fashion trends and an unwavering commitment to
              quality, we handpick each item to ensure that you look and feel
              your best, no matter the occasion.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
          <div className="aboutUs-ourMission">
            <h3>Our Mission</h3>
            <p>
              At ShOppi, our mission is to redefine online shopping by offering
              a diverse range of trendy watches and clothing that cater to every
              taste and occasion. We're committed to providing an exceptional
              shopping experience by delivering top-notch customer service and
              premium products that elevate your style.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
          <div className="aboutUs-why-choose-shoppi">
            {" "}
            <h3>Why Choose ShOppi</h3>
            <ul>
              <li>
                Quality Assurance: We partner with trusted brands and suppliers
                to deliver products of the highest quality and durability.
              </li>
              <li>
                Affordable Prices: Enjoy competitive prices on all our products,
                allowing you to shop stylishly without breaking the bank.
              </li>
              <li>
                Convenient Shopping: Experience hassle-free shopping from the
                comfort of your home, with fast and reliable delivery straight
                to your doorstep.
              </li>
              <li>
                Dedicated Support: Our dedicated customer support team is here
                to assist you every step of the way, ensuring a seamless
                shopping experience from browsing to checkout.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
