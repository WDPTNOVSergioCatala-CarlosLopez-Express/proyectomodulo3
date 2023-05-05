import React from "react";

function AboutPage() {
  const bgImageUrl = "https://res.cloudinary.com/diytgodwa/image/upload/v1683304522/ecommerceapp/Walls%20for%20pages/pexels-ron-lach-7858745_ta7ldi.jpg"; // replace with your background image URL

  return (
    <div
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
    >
      <h1 className="text-4xl font-bold mb-4">About HardMartX</h1>
      <p className="text-lg mb-4">
        HardMartX is a tech ecommerce that specializes in PC components and
        gaming equipment. We are passionate about bringing the latest and
        greatest products to our customers at an affordable price.
      </p>
      <p className="text-lg mb-4">
        Our team of experts has years of experience in the tech industry and is
        dedicated to providing top-notch customer service. Whether you're a
        seasoned PC builder or just getting started, we're here to help you find
        the perfect components for your needs.
      </p>
      <p className="text-lg mb-4">
        At HardMartX, we believe that everyone should have access to the best
        technology on the market. That's why we work hard to bring you the best
        deals and the latest products from the biggest brands in the industry.
      </p>
    </div>
  );
}

export default AboutPage;
