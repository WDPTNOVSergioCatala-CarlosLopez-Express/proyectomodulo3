import Carousel from "../Carousel";
import ProductGallery from "../Products/ProductGallery";
import React from 'react'

function Index() {
  return (
    <>
    <div className="p-4 "> <Carousel /></div>
        
          
          <div className="p-6 flex  justify-center">
            <ProductGallery/>
          </div>
          </>
  )
}

export default Index
