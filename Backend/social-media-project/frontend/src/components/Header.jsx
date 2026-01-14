import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "All Post", link: "/all-posts" },
    { id: 2, title: "My Post", link: "/my-posts" },
    { id: 3, title: "Profile", link: "/profile", auth: true },
    { id: 4, title: "Create Post", link: "/create-post", auth: true },
    { id: 5, title: "Login", link: "/login", auth: false },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 backdrop-blur-lg bacshadow-xl rounded-xl fixed top-5 md:left-15 md:right-15 z-10 left-5 right-5">
        <Link
          to="/"
          className="text-yellow-300 text-3xl font-serif hover:scale-110 transition-transform"
        >
          Insta Muze
        </Link>

        <div className="hidden md:flex gap-10 text-lg text-white items-center">
          {links.map((link) => {
            if (
              (link.auth && !isAuthenticated) ||
              (link.auth === false && isAuthenticated)
            )
              return null;

            return (
              <NavLink
                key={link.id}
                to={link.link}
                className={({ isActive }) =>
                  `hover:text-blue-400 transition-colors ${
                    isActive ? "border-b-4 border-blue-400" : ""
                  }`
                }
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 md:hidden rounded-b-xl">
            {links.map((link) => {
              if (
                (link.auth && !isAuthenticated) ||
                (link.auth === false && isAuthenticated)
              )
                return null;

              return (
                <NavLink
                  key={link.id}
                  to={link.link}
                  className={({ isActive }) =>
                    `text-white text-lg hover:text-blue-400 transition-colors ${
                      isActive ? "border-b-2 border-blue-400" : ""
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </NavLink>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
