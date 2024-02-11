import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Discriptionbox from "../components/Discriptionbox/Discriptionbox";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
import { motion } from "framer-motion";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <Breadcrum product={product} />
      </motion.div>

      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <ProductDisplay product={product} />
      </motion.div>

      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <Discriptionbox />
      </motion.div>

      <motion.div whileHover={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
        <RelatedProduct />
      </motion.div>
    </div>
  );
};

export default Product;
