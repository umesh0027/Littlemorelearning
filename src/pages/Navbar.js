import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-[#f2daed] shadow-md font-semibold">
      <div className="flex items-center space-x-4">
        <NavLink to="/">
          <img src="/logo.png" alt="Logo" className="w-12" />
        </NavLink>
        <h1 className="text-[#3b3092] text-2xl font-semibold">
          Little More Learning
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/notes"
          className={({ isActive }) =>
            isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
          }
        >
          Notes
        </NavLink>
        <NavLink
          to="/tutorials"
          className={({ isActive }) =>
            isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
          }
        >
          Tutorials
        </NavLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#3b3092]">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-4 left-0 right-0 bg-[#f2daed] flex flex-col items-center space-y-6 py-6 mt-12 shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
            }
            onClick={toggleMenu}
          >
            Videos
          </NavLink>
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
            }
            onClick={toggleMenu}
          >
            Notes
          </NavLink>
          <NavLink
            to="/tutorials"
            className={({ isActive }) =>
              isActive ? "text-[#ff3131] font-bold" : "text-[#3b3092] hover:text-[#ff3131]"
            }
            onClick={toggleMenu}
          >
            Tutorials
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
