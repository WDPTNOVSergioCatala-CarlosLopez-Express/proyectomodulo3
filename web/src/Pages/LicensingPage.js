import React from "react";
import { motion } from "framer-motion";

function LicensingPage() {
  const bgImageUrl =
    "https://res.cloudinary.com/diytgodwa/image/upload/v1683304522/ecommerceapp/Walls%20for%20pages/pexels-ron-lach-7858745_ta7ldi.jpg";

  return (
    <motion.div
      className="p-10 text-white rounded-lg ml-4 mr-4"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
    >
      <h1 className="text-4xl font-bold mb-4">Licensing</h1>
      <p className="text-lg mb-4">
        At HardMartX, we take licensing and compliance seriously. We work hard
        to ensure that all of our products are sourced from legitimate,
        authorized distributors and that they meet all necessary regulations and
        requirements.
      </p>
      <p className="text-lg mb-4">
        All of our software products are properly licensed and come with the
        appropriate documentation and proof of purchase. We also offer support
        for our software products, ensuring that you have a hassle-free
        experience from start to finish.
      </p>
      <p className="text-lg mb-4">
        We are committed to providing our customers with the highest level of
        service and ensuring that all of our products are legitimate and fully
        licensed. If you have any questions or concerns about licensing, please
        don't hesitate to reach out to our customer service team.
      </p>
    </motion.div>
  );
}

export default LicensingPage;
