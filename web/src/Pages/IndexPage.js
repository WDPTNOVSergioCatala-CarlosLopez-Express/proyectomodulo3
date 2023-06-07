import Carousel from "../components/Carousel/Carousel";
import ProductGallery from "../components/Products/ProductGallery";
import React from "react";
import { motion } from "framer-motion";

function Index() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
    >
      <div className="p-4">
        <Carousel />
      </div>

      <div className="p-6 flex  justify-center">
        <ProductGallery />
      </div>
    </motion.div>
  );
}

export default Index;
