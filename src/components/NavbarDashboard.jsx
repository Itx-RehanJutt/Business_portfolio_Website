import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../assets/profile.png";

const NavbarDashboard = ({ userName = "User Name" }) => {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-4 sm:px-6 py-3 gap-3 sm:gap-0">
        {/* Left: Welcome Text */}
        <h1 className="text-sm sm:text-base md:text-xl font-semibold text-black text-center sm:text-left">
          Welcome, <span className="font-bold">[{userName}]</span>!
        </h1>

        {/* Right: Button + Icon */}
        <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 lg:ml-auto">
          <Link
            to="/add-service"
            className="bg-[#FFA500] hover:bg-[#ff9400] text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            Add Service
          </Link>

          <img
            src={profileIcon}
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
