import React from "react";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../assets/profile.png";

const Navbar = () => {
  const location = useLocation();

  const showAddButton = location.pathname === "/services";

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center px-3 sm:px-6 py-3 bg-white border-b gap-2 sm:gap-0">
      {/* Left Section - Welcome Text */}
      <h1 className="text-base sm:text-xl font-bold text-gray-800 text-center sm:text-left">
        Welcome, [User Name]!
      </h1>

      {/* Right Section - Buttons & Profile */}
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">
        {showAddButton && (
          <Link
            to="/add-service"
            className="w-full sm:w-auto text-center px-3 sm:px-5 py-2 bg-[#FFA500] text-white rounded-md font-semibold hover:bg-[#e69500] transition text-sm sm:text-base"
          >
            Add New Service
          </Link>
        )}

        {/* Profile Icon */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
          <img
            src={profileIcon}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
