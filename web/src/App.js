import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthStore from "./contexts/AuthStore";
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <>
      <AuthStore>
        <div className="flex flex-col h-screen">
          <div className="p-4 ">
            <Navbar />
          </div>
          <AnimatedRoutes />
          <div className="p-4 ">
            <Footer />
          </div>
        </div>
      </AuthStore>
    </>
  );
}

export default App;
