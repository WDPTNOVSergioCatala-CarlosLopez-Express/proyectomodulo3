import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../Products/Rating/Rating';
import cartService from "../../services/cart";
import productService from "../../services/products";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await productService.detail(id);
        setProduct(product);
      } catch (error) {
        console.error(error);
        const errorStatus = error.response?.status;
        if (errorStatus === 404) {
          navigate('/products');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id, navigate]);
 
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>Error: Product not found.</div>;
  }
  
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex justify-center items-center">
          <img src={product.images[0]} alt={product.name} className="max-h-80" />
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex items-center mt-2">
            <span className="font-bold text-xl">{product.price.toFixed(2)}€</span>
            {product.stock > 0 ? (
              <span className="ml-2 bg-green-500 text-white py-1 px-2 rounded-full">In stock</span>
            ) : (
              <span className="ml-2 bg-red-500 text-white py-1 px-2 rounded-full">Out of stock</span>
            )}
          </div>
          <div className="flex items-center mt-4">
            <span className="font-bold text-gray-700 mr-2">Category:</span>
            <span className="text-gray-600">{product.category}</span>
          </div>
          <div className="flex items-center mt-4">
            <span className="font-bold text-gray-700 mr-2">Reference:</span>
            <span className="text-gray-600">{product.reference}</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        {product.reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">{review.author}</span>
                    <span className="text-gray-500 text-sm">{new Date(review.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Rating>{review.rating}</Rating>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
