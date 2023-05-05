import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthStore";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import userService from "../services/user";
import orderService from "../services/order";
import { motion } from "framer-motion";

function AccountPage() {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const orders = await orderService.list(user.id);
        setOrders(orders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, [user]);

  function handleInputChange(event) {
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value,
    });
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleCancel() {
    setEditMode(false);
  }

  async function handleSave() {
    try {
      const updated = await userService.update(updatedUser);
      setUser(updated);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function handlePasswordChange() {
    try {
      const newPassword = prompt("Enter new password:");
      await userService.changePassword(user.email, newPassword);
      alert("Password changed successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to change password");
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="mx-auto bg-gray-100 p-4 rounded-md"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
    >
      <h1 className="text-center mb-4 text-3xl font-bold">My Account</h1>
      <table className="border-collapse border-2 border-gray-500 mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Field</th>
            <th className="p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <MdEmail className="inline-block align-middle mr-2" />
              Email:
            </td>
            {editMode ? (
              <td className="p-2">
                <input
                  className="border-2 border-gray-500 rounded-md px-2 py-1"
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                />
              </td>
            ) : (
              <td className="p-2">{user.email}</td>
            )}
          </tr>
          <tr>
            <td className="p-2">
              <RiLockPasswordLine className="inline-block align-middle mr-2" />
              Password:
            </td>
            {editMode ? (
              <td className="p-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-medium py-1 px-3 rounded-md mr-2"
                  onClick={handlePasswordChange}
                >
                  Change Password
                </button>
              </td>
            ) : (
              <td className="p-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-md mr-2"
                  onClick={handleEdit}
                >
                  <FaEdit className="inline-block align-middle mr-1" />
                  Edit
                </button>
              </td>
            )}
          </tr>
        </tbody>
      </table>
      {editMode && (
        <div className="mt-4 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-md mr-2"
            onClick={handleSave}
          >
            Save Changes
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-1 px-3 rounded-md mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      )}
      <h2 className="text-center my-4 text-2xl font-bold">My Orders</h2>
      <table className="border-collapse border-2 border-gray-500 mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Order Number</th>
            <th className="p-2">Date</th>
            <th className="p-2">Total Price</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="p-2">{order.orderNumber}</td>
              <td className="p-2">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="p-2">{order.totalPrice.toFixed(2)} €</td>
              <td className="p-2">{order.status}</td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td className="p-2 text-center" colSpan="4">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
}

export default AccountPage;
