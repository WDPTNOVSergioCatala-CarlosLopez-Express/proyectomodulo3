import "./App.css";
import React from "react";


import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductItem from "./components/Products/ProductItem";

function App() {
  return (
    <>
    <Navbar />
    <Sidebar/>
    <ProductItem/>
    <Footer />
    
    </>
  );
}

export default App;
