import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full h-20 lg:px-20 sm:px-10 px-5 flex justify-between gap-5 items-center bg-bg-primary border-b-2 border-border-shadow">
      <img
        src={logo}
        width={100}
        height={100}
        className="sm:w-15 sm:h-15 w-10 h-10 rounded-full"
        alt="Logo"
      />
      <nav className="flex justify-center items-center gap-5 md:px-20 md:gap-10 lg:gap-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `sm:text-lg font-semibold text-text-primary transition-all duration-200 ease-[ease] ${
              isActive ? "text-accent border-b-4 border-highlight" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `sm:text-lg font-semibold text-text-primary transition-all duration-200 ease-[ease] ${
              isActive ? "text-accent border-b-4 border-highlight" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            `sm:text-lg font-semibold text-text-primary transition-all duration-200 ease-[ease] ${
              isActive ? "text-accent border-b-4 border-highlight" : ""
            }`
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            `sm:text-lg font-semibold text-text-primary transition-all duration-200 ease-[ease] ${
              isActive ? "text-accent border-b-4 border-highlight" : ""
            }`
          }
        >
          Favourites
        </NavLink>
        <NavLink
          to="/create-recipes"
          className={({ isActive }) =>
            `text-lg font-semibold transition-all duration-200 ease-[ease] sm:px-4 sm:py-2 px-2 bg-accent rounded-md flex text-bg-primary hover:scale-105 ${
              isActive ? "bg-hover" : ""
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
