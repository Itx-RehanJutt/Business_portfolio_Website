import React from "react";
import Profile from "../assets/profile.png";
import Message from "../assets/message.png";
import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";

function PortfolioDashboard() {
  return (
    <div className="min-h-screen bg-[#C7C6FB] w-full py-8 px-0 flex flex-col items-center">
      {/* Title Section */}
      <h2 className="text-2xl sm:text-3xl sm:text-center md:text-4xl lg:text-5xl font-semibold text-center text-white mt-4 mb-12">
        Profile Management
      </h2>

      {/* Profile Cards */}
      <div className=" w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-19 md:gap-139 px-4">
        {/* Profile Card */}
        <div className=" w-135 bg-white pt-10 pb-2 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img
            src={Profile}
            alt="Profile"
            className="w-full pb-5 object-cover rounded-lg"
          />
          <div className="m-4">
            <div className="mt-4 flex flex-wrap justify-center gap-6 sm:gap-1 md:gap-8 sm:flex-row">
              {/* Buttons */}
              <button className="bg-green-500 text-white font-semibold px-2 py-2 rounded-md transition duration-300 hover:bg-green-600 flex items-center space-x-2">
                <span>Edit</span>
                <img src={Edit} alt="edit" />
              </button>

              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md transition duration-300 hover:bg-yellow-600 flex items-center space-x-2">
                <img src={Message} alt="message" />
              </button>

              <button className="text-white px-2 py-2 sm:px-3 sm:py-1 text-lg sm:text-sm rounded-md transition duration-300 hover:bg-gray-200 flex items-center space-x-2">
                <img src={Delete} alt="delete" />
              </button>

              <button className="bg-gray-400 px-4 py-1 font-semibold text-white rounded-md transition duration-300 hover:bg-gray-500 flex items-center space-x-2">
                <span>View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Duplicate the Profile Cards for Demo */}
        <div className=" w-135 bg-white pt-10 pb-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img
            src={Profile}
            alt="Profile"
            className="w-full pb-5 object-cover rounded-lg"
          />
          <div className="mt-4">
            <div className="mt-4 flex flex-wrap justify-center gap-6 sm:gap-1 md:gap-8 sm:flex-row">
              {/* Buttons */}
              <button className="bg-green-500 text-white font-semibold px-2 py-2 sm:px-3 sm:py-1 text-lg sm:text-sm rounded-md transition duration-300 hover:bg-green-600 flex items-center space-x-2">
                <span>Edit</span>
                <img src={Edit} alt="edit" />
              </button>

              <button className="bg-yellow-500 text-white px-4 py-2 sm:px-3 sm:py-1 text-lg sm:text-sm rounded-md transition duration-300 hover:bg-yellow-600 flex items-center space-x-2">
                <img src={Message} alt="message" />
              </button>

              <button className="text-white px-2 py-2 sm:px-3 sm:py-1 text-lg sm:text-sm rounded-md transition duration-300 hover:bg-gray-200 flex items-center space-x-2">
                <img src={Delete} alt="delete" />
              </button>

              <button className="bg-gray-400 px-4 py-2 sm:px-3 sm:py-1 text-lg sm:text-sm font-semibold text-white rounded-md transition duration-300 hover:bg-gray-500 flex items-center space-x-2">
                <span>View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Add more profile cards as needed */}
      </div>
    </div>
  );
}

export default PortfolioDashboard;
