import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="w-full h-20 lg:px-20 sm:px-10 px-5 flex justify-between gap-5 items-center bg-cyan-400">
      <img
        src={logo}
        width={100}
        height={100}
        className="sm:w-15 sm:h-15 w-10 h-10 rounded-full"
        alt=""
      />
      <nav className="flex justify-center items-center gap-5 md:px-20 md:gap-10 lg:gap-20">
        <NavLink
          to="/"
          className={(e) =>
            `sm:text-lg font-semibold transition-all duration-200 ease-[ease]  ${
              e.isActive ? "text-pink-500 border-b-4 border-purple-700" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(e) =>
            `sm:text-lg font-semibold transition-all duration-200 ease-[ease]  ${
              e.isActive ? "text-pink-500 border-b-4 border-purple-700" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/recipes"
          className={(e) =>
            `sm:text-lg font-semibold transition-all duration-200 ease-[ease]  ${
              e.isActive ? "text-pink-500 border-b-4 border-purple-700" : ""
            }`
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/create-recipes"
          className={(e) =>
            `text-lg font-semibold transition-all duration-200 ease-[ease] sm:px-4 sm:py-2 px-2 bg-fuchsia-600 rounded-md flex hover:scale-105  ${
              e.isActive ? "! bg-pink-700" : ""
            }`
          }
        >
          Create Recipes <span className="text-xl">+</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
