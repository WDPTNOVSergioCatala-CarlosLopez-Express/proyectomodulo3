import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AuthStore from "./contexts/AuthStore";
import ProfilePage from "./Pages/ProfilePage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <AuthStore>
        <div className="flex flex-col h-screen">
          <div className="p-4 ">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>

          <div className="p-4 ">
            <Footer />
          </div>
        </div>
      </AuthStore>
    </>
  );
}

export default App;
