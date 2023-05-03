import React from 'react'

function ServicesPage() {
    return (
      <div className="p-10 text-white bg-slate-950 rounded-lg ml-4 mr-4">
        <h1 className="text-4xl font-bold mb-4">Payment Methods</h1>
        <h2 className="text-2xl font-bold mb-4">Visa</h2>
        <p className="text-lg mb-4">
          At HardMartX, we accept Visa credit and debit cards as a secure payment method. Visa is a trusted brand known for its security and reliability, and we're proud to offer it as an option for our customers.
        </p>
        <h2 className="text-2xl font-bold mb-4">Mastercard</h2>
        <p className="text-lg mb-4">
          Another payment option we offer is Mastercard credit and debit cards. Like Visa, Mastercard is a well-known and respected brand that provides secure and convenient payment options to customers worldwide.
        </p>
        <h2 className="text-2xl font-bold mb-4">PayPal</h2>
        <p className="text-lg mb-4">
          For those who prefer to use a digital payment method, we also accept PayPal. PayPal is a popular and widely used payment service that offers secure transactions and fast checkout times.
        </p>
        <p className="text-lg mb-4">
          At HardMartX, we're committed to providing our customers with a variety of payment options to suit their needs. Whether you prefer to use a credit card or a digital payment method, we've got you covered.
        </p>
      </div>
    );
  }
  
  export default ServicesPage;