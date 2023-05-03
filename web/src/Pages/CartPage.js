
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthStore";
import { useNavigate } from 'react-router-dom';

import cartService from '../services/cart'
import orderService from '../services/order'

function Cart() {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const id = user.id
  useEffect(() => {
    async function fetchCart() {
      try {
        const cart = await cartService.detail(id);
        setCart(cart);
        
      } catch (error) {
        console.error(error);
        const errorStatus = error.response?.status;
        if (errorStatus === 404) {
          navigate("/products");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, [id, navigate]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!cart) {
    return <div>Error: Cart not found.</div>;
  }
  function getTotalPrice() {
    let total = 0
    cart.items.forEach(item => {
      total += item.product.price * item.quantity
    })
    return total
  }

  function handleCheckout() {
    const orderItems = cart.items.map(item => {
      return {
        product: item.product._id,
        quantity: item.quantity
      }
    });
    const shippingAddress = {
      address: "",
      city: "",
      postalCode: "",
      country: ""
    };
    const paymentMethod = "PayPal";
    const totalPrice = getTotalPrice();

    orderService.create({
      orderNumber: Math.floor(Math.random() * 1000000),
      orderItems,
      totalPrice,
      shippingAddress,
      paymentMethod
    })
      .then(order => {
        navigate(`/order/${order._id}`);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div class="mx-auto">
      <h1 class="text-center mb-4 text-3xl font-bold">Shopping Cart</h1>
      <table class="border-collapse border-2 border-gray-500 mx-auto">
        <thead>
          <tr class="bg-gray-200">
            <th class="p-2">Product</th>
            <th class="p-2">Unit Price</th>
            <th class="p-2">Quantity</th>
            <th class="p-2">Price</th>
            <th class="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.items && cart.items.length > 0 && (
            cart.items.map((item) => (
              <tr key={item.product._id}>
                <td class="p-2">{item.product.name}</td>
                <td class="p-2">{item.product.price}</td>
                <td class="p-2">
                  <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={async () => {
                    const updatedCart = await cartService.add(item.product.id, -1);
                    setCart(updatedCart);
                  }}>
                    -
                  </button>
                  <span class="mx-2">{item.quantity}</span>
                  <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={async () => {
                    const updatedCart = await cartService.add(item.product.id, +1);
                    setCart(updatedCart);
                  }}>
                    +
                  </button>
                </td>
                <td class="p-2">{(item.product.price * item.quantity).toFixed(2)}€</td>
                <td class="p-2">
                  <button class="bg-red-500 text-white p-2 rounded hover:bg-red-700" onClick={async () => {
                    const updatedCart = await cartService.add(item.product.id, -item.quantity);
                    setCart(updatedCart);
                  }}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
          {!cart.items && cart.items.length === 0 && (
            <div>Cart is empty</div>
          )}
        </tbody>
        <tfoot>
          <tr class="bg-gray-200">
            <td class="p-2" colSpan="3">Total: {getTotalPrice().toFixed(2)} €</td>
          </tr>
        </tfoot>
      </table>
      <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-2" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
