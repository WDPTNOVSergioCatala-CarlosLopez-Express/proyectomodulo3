import Carousel from "../components/Carousel";
import ProductGallery from "../components/Products/ProductGallery";
import React from "react";

function Index() {
  return (
    <>
      <div className="p-4">
        <Carousel />
      </div>

      <div className="p-6 flex  justify-center">
        <ProductGallery />
      </div>
    </>
  );
}

export default Index;
