import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating/Rating";
import cartService from "../../services/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductItem({ product }) {
  const ratings = product.reviews.map((review) => review.rating);
  const averageRating =
    ratings.length > 0
      ? (
          ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
        ).toFixed(1)
      : "No hay comentarios";

  const handleSubmit = (ev) => {
    ev.preventDefault();
    toast.success("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
    cartService.add(ev.target.id.value, 1);
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <Link to={`/products/${product.id}`}>
        <img
          className="p-8 rounded-t-lg"
          src={product.images[0]}
          alt={product.name}
        />
      </Link>

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
          {product.name}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <Rating>{averageRating}</Rating>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
            {averageRating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">
            {product.price}€
          </span>
          <form onSubmit={handleSubmit}>
            <input
              name="id"
              type="text"
              defaultValue={product.id}
              className="hidden"
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Add to cart
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ProductItem;
