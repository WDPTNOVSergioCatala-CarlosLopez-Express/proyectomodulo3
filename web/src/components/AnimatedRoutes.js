import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "../Pages/IndexPage";
import ProductPage from "../Pages/ProductPage";
import Register from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";import ProfilePage from "../Pages/ProfilePage";
import CartPage from "../Pages/CartPage";
import AboutPage from "../Pages/AboutPage";
import ServicesPage  from "../Pages/ServicesPage";
import ContactPage from "../Pages/ContactPage";
import LicensingPage from "../Pages/LicensingPage";
import PrivacyPage from "../Pages/PrivacyPage";

import { AnimatePresence } from "framer-motion"
import AuthStore from "../contexts/AuthStore";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AuthStore>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<IndexPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/licensing" element={<LicensingPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
    </AnimatePresence>
    </AuthStore>
  );
}

export default AnimatedRoutes;
