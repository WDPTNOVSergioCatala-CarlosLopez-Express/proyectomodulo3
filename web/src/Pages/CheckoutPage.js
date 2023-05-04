import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function CheckoutPage() {
  return (
    <div className="container mx-auto p-10 text-white bg-slate-950 rounded-lg">
      <div className="flex items-center mb-8">
        <img
          src="https://res.cloudinary.com/diytgodwa/image/upload/v1682450056/ecommerceapp/Assets/HardMartX_Logo_BIG_TRNSP_LTL_i0njgk.png"
          alt="HardMartX Logo"
          className="h-12 mr-2"
        />
        <h1 className="text-4xl font-bold">Checkout</h1>
      </div>
      <div className="flex mb-8">
        <div className="w-1/2 mr-4">
          <h2 className="text-2xl font-bold mb-2">Billing Information</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 rounded-lg bg-slate-850 border border-slate-700 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 rounded-lg bg-slate-850 border border-slate-700 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="font-bold mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="p-2 rounded-lg bg-slate-850 border border-slate-700 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="font-bold mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="p-2 rounded-lg bg-slate-850 border border-slate-700 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="state" className="font-bold mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="p-2 rounded-lg bg-slate-850 border border-slate-700 text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="zip" className="font-bold mb-1">
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                className="p-2 rounded-lg bg-slate-850 border border-slate-700 text-white"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2 ml-4">
          <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
          <div className="bg-slate-850 rounded-lg p-4">
            <div className="flex justify-between mb-4">
              <div className="text-lg">Subtotal:</div>
              <div className="text-lg font-bold">$299.99</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-lg">Shipping:</div>
              <div className="text-lg font-bold">$5.99</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-lg">Taxes:</div>
              <div className="text-lg font-bold">$20.99</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="text-lg">Total:</div>
              <div className="text-lg font-bold">$326.97</div>
            </div>
            <button className="w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-8">
              Place Order{" "}
              <FaShoppingCart className="inline-block align-middle ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Thank you for shopping with us!</p>
        <p>We hope to see you again soon.</p>
        <Link
          to="/"
          className="text-blue-400 hover:text-blue-600 inline-block mt-4"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default CheckoutPage;
