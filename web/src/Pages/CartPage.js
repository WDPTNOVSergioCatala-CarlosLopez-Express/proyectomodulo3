import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthStore";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import cartService from "../services/cart";
import orderService from "../services/order";
import { motion } from "framer-motion";

function Cart() {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const id = user.id;
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
    let total = 0;
    cart.items.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }

  function handleCheckout() {
    const orderItems = cart.items.map((item) => {
      return {
        product: item.product._id,
        quantity: item.quantity,
      };
    });
    const shippingAddress = {
      address: "",
      city: "",
      postalCode: "",
      country: "",
    };
    const paymentMethod = "PayPal";
    const totalPrice = getTotalPrice();

    orderService
      .create({
        orderNumber: Math.floor(Math.random() * 1000000),
        orderItems,
        totalPrice,
        shippingAddress,
        paymentMethod,
      })
      .then((order) => {
        navigate(`/order/${order._id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <motion.div
      className="mx-auto bg-slate-950 p-10 text-white rounded-lg"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
    >
      <img
        src="https://res.cloudinary.com/diytgodwa/image/upload/v1682450056/ecommerceapp/Assets/HardMartX_Logo_BIG_TRNSP_LTL_i0njgk.png"
        alt="HardMartX Logo"
        className="h-12 w-auto mx-auto mb-4"
      />
      <h1 className="text-center mb-4 text-3xl font-bold">Shopping Cart</h1>
      <table className="border-collapse border-2 border-gray-500 mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Product</th>
            <th className="p-2">Unit Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.items &&
            cart.items.length > 0 &&
            cart.items.map((item) => (
              <tr key={item.product._id}>
                <td className="p-2">{item.product.name}</td>
                <td className="p-2">{item.product.price} €</td>
                <td className="p-2">
                  <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                    onClick={async () => {
                      const updatedCart = await cartService.add(
                        item.product.id,
                        -1
                      );
                      setCart(updatedCart);
                    }}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                    onClick={async () => {
                      const updatedCart = await cartService.add(
                        item.product.id,
                        +1
                      );
                      setCart(updatedCart);
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="p-2">
                  {(item.product.price * item.quantity).toFixed(2)} €
                </td>
                <td className="p-2">
                  <button
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                    onClick={async () => {
                      const updatedCart = await cartService.add(
                        item.product.id,
                        -item.quantity
                      );
                      setCart(updatedCart);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          {!cart.items ||
            (cart.items.length === 0 && (
              <tr>
                <td className="p-2 text-center" colSpan="5">
                  Cart is empty
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-200">
            <td className="p-2" colSpan="3">
              Total: {getTotalPrice().toFixed(2)} €
            </td>
            <td className="p-2" colSpan="2">
              <button
                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
                onClick={handleCheckout}
              >
                Checkout{" "}
                <FaShoppingCart className="inline-block align-middle ml-2" />
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </motion.div>
  );
}

export default Cart;
