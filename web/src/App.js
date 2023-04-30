import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IndexPage from "./components/Pages/IndexPage";
import ProductGallery from "./components/Products/ProductGallery";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/Pages/ProductPage";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="p-4 ">
          {" "}
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="/products/:id" element={<ProductPage/>}/>
        </Routes>

        <div className="p-4 ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
