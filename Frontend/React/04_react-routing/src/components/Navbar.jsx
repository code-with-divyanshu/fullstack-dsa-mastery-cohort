import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-15 flex justify-center items-center bg-black mb-5">
      <nav className="flex justify-center items-center gap-10 py-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/product">Product</Link>
      </nav>
    </header>
  );
};

export default Navbar;
