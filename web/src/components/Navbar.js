import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import productsService from "../services/products";
import { AuthContext } from "../contexts/AuthStore";
import * as FaAi from "react-icons/ai";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    productsService
      .listCategories()
      .then((categories) => setCategories(categories))
      .catch((error) => console.error(error));
  }, []);

  return (
    <nav className="bg-slate-950 border-gray-200  rounded-lg shadow h-16">
      <div className="flex items-center flex-grow justify-left">
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/diytgodwa/image/upload/v1682450056/ecommerceapp/Assets/HardMartX_Logo_BIG_TRNSP_LTL_i0njgk.png"
            className="h-12 mt-2 ml-24 mr-8"
            alt="ecommerce"
          />
        </Link>
        <div
          className="flex items-center flex-grow justify-center mt-1 ml-48 pl-10"
          id="mobile-menu-2"
        >
          <ul className="flex mt-12 font-medium  md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 ml-4 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
              >
                Categories{" "}
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/*<!-- Dropdown menu -->*/}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  {categories.sort().map((category) => (
                    <li key={category}>
                      <Link
                        key={category}
                        to={`/products?category=${category}`}
                        className="block px-4 py-2 capitalize hover:bg-gray-100 "
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 mr-4 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center flex-grow justify-end mr-5">
          <div className="flex items-center">
            {user?.email ? (
              <div className="flex items-center flex-grow justify-end mr-5">
                <button
                  type="button"
                  className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full  object-cover"
                    src={user.profilePic}
                    alt="profile pic"
                  />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow  "
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 ">
                      Welcome {user.name}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate ">
                      {user.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        My orders
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center flex-grow justify-end mr-5">
                <Link
                  to="/register"
                  className="text-sm text-gray-300 hover:text-white mx-4"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="text-sm text-gray-300 hover:text-white mx-4"
                >
                  Login
                </Link>
              </div>
            )}
            <div className="flex items-center flex-grow justify-end mr-5">
              <NavLink to="/cart">
                <FaAi.AiOutlineShoppingCart fill="white" size={40} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
