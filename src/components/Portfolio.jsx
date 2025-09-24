import React from "react";
import Profile from "/images/portfolio/profile.png";
import Message from "/images/portfolio/message.png";
import Delete from "/images/portfolio/delete.png";
import Edit from "/images/portfolio/edit.png";

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#C7C6FB] py-8 px-4 flex flex-col justify-center items-center">
      {/* Title Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white mt-4 mb-24">
        Profile Management
      </h2>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Profile Card */}
        <div className="bg-white pt-10 pb-6 items-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img
            src={Profile}
            alt="Profile"
            className="w-full pb-5 object-cover rounded-lg"
          />
          <div className="mt-4">
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 sm:flex-row">
              {/* Buttons */}
              <button className="bg-green-500 text-white font-semibold px-4 py-1 rounded-md transition duration-300 hover:bg-green-600 flex items-center space-x-2">
                <span>Edit</span>
                <img src={Edit} alt="edit" />
              </button>

              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md transition duration-300 hover:bg-yellow-600 flex items-center space-x-2">
                <img src={Message} alt="message" />
              </button>

              <button className="text-white rounded-md transition duration-300 hover:bg-red-200 flex items-center space-x-2">
                <img src={Delete} alt="delete" />
              </button>

              <button className="bg-gray-400 px-4 py-1 font-semibold text-white rounded-md transition duration-300 hover:bg-gray-500 flex items-center space-x-2">
                <span>View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Duplicate the Profile Cards for Demo */}
        <div className="bg-white pt-10 pb-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img
            src={Profile}
            alt="Profile"
            className="w-full pb-5 object-cover rounded-lg"
          />
          <div className="mt-4">
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-7 sm:flex-row">
              {/* Buttons */}
              <button className="bg-green-500 text-white font-semibold px-4 py-1 rounded-md transition duration-300 hover:bg-green-600 flex items-center space-x-2">
                <span>Edit</span>
                <img src={Edit} alt="edit" />
              </button>

              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md transition duration-300 hover:bg-yellow-600 flex items-center space-x-2">
                <img src={Message} alt="message" />
              </button>

              <button className="text-white rounded-md transition duration-300 hover:bg-black-50 hover:bg-red-200 flex items-center space-x-2">
                <img src={Delete} alt="delete" />
              </button>

              <button className="bg-gray-400 px-4 py-1 font-semibold text-white rounded-md transition duration-300 hover:bg-gray-500 flex items-center space-x-2">
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

export default Portfolio;
