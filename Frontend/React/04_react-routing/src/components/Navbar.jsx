import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-15 flex justify-center items-center bg-black mb-5">
      <nav className="flex justify-center items-center gap-2 py-5">
        {/* Navlink is another react-router-dom component which give as a callback function in style and className */}
        <NavLink
          className={(e) =>
            `px-4 py-2 transition-colors duration-300 ${
              e.isActive ? "text-purple-600" : ""
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            `px-4 py-2 transition-colors duration-300 ${
              e.isActive ? "text-purple-600" : ""
            }`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) =>
            `px-4 py-2 transition-colors duration-300 ${
              e.isActive ? "text-purple-600" : ""
            }`
          }
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={(e) =>
            `px-4 py-2 transition-colors duration-300 ${
              e.isActive ? "text-purple-600" : ""
            }`
          }
          to="/product"
        >
          Product
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
