import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import productsService from "../services/products";
import { AuthContext } from "../contexts/AuthStore";
import * as FaAi from "react-icons/ai";

function NewNavbar() {
    const [categories, setCategories] = useState([]);
    const { user, logout } = useContext(AuthContext);
  
  
    useEffect(() => {
      productsService
        .listCategories()
        .then((categories) => setCategories(categories))
        .catch((error) => console.error(error));
    }, []);


  return (
    <nav className="bg-slate-950 border-gray-200  rounded-lg shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/diytgodwa/image/upload/v1682450056/ecommerceapp/Assets/HardMartX_Logo_BIG_TRNSP_LTL_i0njgk.png"
            className="h-12 mr-8"
            alt="ecommerce"
          />
        </Link>
        </div>
    </nav>
  )
}

export default NewNavbar;