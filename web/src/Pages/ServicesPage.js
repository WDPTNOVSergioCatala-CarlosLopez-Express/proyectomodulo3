import React from "react";
import { motion } from "framer-motion";

function ServicesPage() {
  const bgImageUrl =
    "https://res.cloudinary.com/diytgodwa/image/upload/v1683321134/ecommerceapp/Walls%20for%20pages/pexels-maur%C3%ADcio-mascaro-6489044_blurry_xi2nxa.jpg";

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
      <h1 className="text-4xl font-bold mb-4">Payment Methods</h1>
      <h2 className="text-2xl font-bold mb-4">Visa</h2>
      <p className="text-lg mb-4">
        At HardMartX, we accept Visa credit and debit cards as a secure payment
        method. Visa is a trusted brand known for its security and reliability,
        and we're proud to offer it as an option for our customers.
      </p>
      <h2 className="text-2xl font-bold mb-4">Mastercard</h2>
      <p className="text-lg mb-4">
        Another payment option we offer is Mastercard credit and debit cards.
        Like Visa, Mastercard is a well-known and respected brand that provides
        secure and convenient payment options to customers worldwide.
      </p>
      <h2 className="text-2xl font-bold mb-4">PayPal</h2>
      <p className="text-lg mb-4">
        For those who prefer to use a digital payment method, we also accept
        PayPal. PayPal is a popular and widely used payment service that offers
        secure transactions and fast checkout times.
      </p>
      <p className="text-lg mb-4">
        At HardMartX, we're committed to providing our customers with a variety
        of payment options to suit their needs. Whether you prefer to use a
        credit card or a digital payment method, we've got you covered.
      </p>
    </motion.div>
  );
}

export default ServicesPage;
