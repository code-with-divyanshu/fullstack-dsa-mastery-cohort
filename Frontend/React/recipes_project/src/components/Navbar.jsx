import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="h-20 w-full flex justify-between gap-5 items-center mb-10 bg-sky-400 px-10 lg:px-20">
      <img
        src={logo}
        width={100}
        height={100}
        className="w-15 h-15 rounded-full"
        alt=""
      />
      <nav className="flex justify-center items-center gap-10 lg:gap-30">
        <NavLink
          to="/"
          className={(e) =>
            `text-lg font-bold transition-all duration-200 ease-[ease]  ${
              e.isActive ? "text-pink-500 border-b-4 border-purple-700" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={(e) =>
            `text-lg font-bold transition-all duration-200 ease-[ease]  ${
              e.isActive ? "text-pink-500 border-b-4 border-purple-700" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/recipes"
          className={(e) =>
            `text-lg font-bold transition-all duration-200 ease-[ease]  ${
              e.isActive ? "text-pink-500 border-b-4 border-purple-700" : ""
            }`
          }
        >
          Recipes
        </NavLink>
        <NavLink
          to="/create-recipes"
          className={(e) =>
            `text-lg font-bold transition-all duration-200 ease-[ease] px-4 py-2 bg-pink-700 rounded-md  ${
              e.isActive ? "!bg-fuchsia-600" : ""
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
