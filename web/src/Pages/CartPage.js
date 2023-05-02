import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthStore";
import { updateCartItem, deleteCartItem } from "./api/cart";
import cartService from '../services/cart'

function Cart() {
  const { user } = useContext(AuthContext);
  const [updatingItem, setUpdatingItem] = useState(null);
  const [cart, setCart] = useState(cartService.list);

  const handleUpdateItem = (itemId, quantity) => {
    setUpdatingItem(itemId);
    updateCartItem(itemId, quantity).then((updatedItem) => {
      setCart((prevCart) => {
        const itemIndex = prevCart.items.findIndex((item) => item._id === itemId);
        if (itemIndex !== -1) {
          const newItems = [...prevCart.items];
          newItems.splice(itemIndex, 1, updatedItem);
          return { ...prevCart, items: newItems };
        }
        return prevCart;
      });
      setUpdatingItem(null);
    });
  };

  const handleDeleteItem = (itemId) => {
    deleteCartItem(itemId).then(() => {
      setCart((prevCart) => {
        const newItems = prevCart.items.filter((item) => item._id !== itemId);
        return { ...prevCart, items: newItems };
      });
    });
  };

  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button disabled={updatingItem === item._id} onClick={() => handleUpdateItem(item._id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button disabled={updatingItem === item._id} onClick={() => handleUpdateItem(item._id, item.quantity + 1)}>
                  +
                </button>
              </td>
              <td>
                <button disabled={updatingItem === item._id} onClick={() => handleDeleteItem(item._id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:</td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
