import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold tracking-tight hover:text-blue-400 transition duration-300"
          >
            Profile Seeker
          </NavLink>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium hover:text-blue-300 transition duration-300 ${
                  isActive ? "font-bold border-b-2 border-blue-400 pb-1" : ""
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-lg font-medium hover:text-blue-300 transition duration-300 ${
                  isActive ? "font-bold border-b-2 border-blue-400 pb-1" : ""
                }`
              }
            >
              Admin
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
