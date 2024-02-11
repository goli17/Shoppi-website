import React from "react";
import Hero from "../components/Hero/Hero";
import NewCollections from "../components/NewCollections/NewCollections";
import Newsletter from "../components/Newsletter/Newsletter";
import Offer from "../components/offter/Offer";
import Popular from "../components/popular/Popular";
import PopulerMen from "../components/PopularMen/PopulerMen";
import Watches from "../components/watch/Watches";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <Hero />
      </motion.div>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <Popular />
      </motion.div>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <PopulerMen />
      </motion.div>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <Watches />
      </motion.div>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <Offer />
      </motion.div>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <NewCollections />
      </motion.div>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <Newsletter />
      </motion.div>
    </>
  );
};

export default Home;
