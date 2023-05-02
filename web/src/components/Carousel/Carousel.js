import React, { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/diytgodwa/image/upload/v1682942101/ecommerceapp/Assets/Banner_Nvidia_bayvgj.png",
  "https://res.cloudinary.com/diytgodwa/image/upload/v1682942101/ecommerceapp/Assets/Banner_Astro_k2eoad.jpg",
  "https://res.cloudinary.com/diytgodwa/image/upload/v1682942101/ecommerceapp/Assets/Banner_Ryzen_zmzhyt.jpg",
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel rounded-lg overflow-hidden relative">
      <img
        src={images[currentImage]}
        alt="carousel"
        className="w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 w-full h-10 bg-black bg-opacity-0 text-center text-white">
        {images.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-2 h-2 mx-2 rounded-full cursor-pointer ${
              index === currentImage ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;