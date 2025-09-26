import React from "react";
import graphImage from "../assets/dashboard-graph.png";

const DashboardHome = () => {
  return (
    <div className="w-full min-h-screen bg-[#C7C6FB] py-4 px-2 sm:py-10 sm:px-4">
      {/* Mobile View */}
      <div className="block md:hidden space-y-6">
        {/* Project Items Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 mx-auto w-full max-w-md">
          <p className="text-xl sm:text-2xl font-bold text-black mb-3 tracking-tight">
            Project Items
          </p>
          <p className="text-4xl sm:text-6xl font-semibold text-black mb-4">
            342
          </p>
          <div className="w-full h-3 bg-purple-500 rounded-full mb-2"></div>
          <div className="w-1/3 h-3 bg-gray-300 rounded-full"></div>
        </div>

        {/* Total Services + Messages */}
        <div className="bg-white shadow-md rounded-2xl p-6 mx-auto w-full max-w-md">
          <div className="mb-8">
            <p className="text-xl sm:text-2xl font-bold text-black mb-3 tracking-tight">
              Total Services
            </p>
            <p className="text-4xl sm:text-6xl font-semibold text-black mb-4">
              125
            </p>
            <div className="w-full h-3 bg-green-500 rounded-full mb-2"></div>
            <div className="w-1/3 h-3 bg-gray-300 rounded-full"></div>
          </div>

          {/* New Messages */}
          <div>
            <p className="text-xl sm:text-2xl font-bold text-black mb-3 tracking-tight">
              New Messages
            </p>
            <p className="text-4xl sm:text-6xl font-semibold text-black mb-4">
              18
            </p>
            <div className="w-full h-3 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 mx-auto w-full max-w-md">
          <img
            src={graphImage}
            alt="Revenue graph"
            className="w-full h-48 object-contain mb-4"
          />
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-black mb-3 tracking-tight">
              Revenue
            </p>
            <p className="text-4xl sm:text-6xl font-semibold text-black">
              $12,345
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View (Fixed with min-h) */}
      <div className="hidden md:flex justify-center items-start relative min-h-screen">
        <div className="relative w-full max-w-6xl min-h-[1000px]">
          {/* LEFT CARD – Total Services & Messages */}
          <div className="absolute bg-white shadow-md rounded-2xl w-[373px] h-[470px] top-[152px] left-[135px] p-8">
            {/* Total Services */}
            <div className="mb-28">
              <p className="text-2xl font-bold text-black mb-3 tracking-tight">
                Total Services
              </p>
              <p className="text-6xl font-semibold text-black mb-5">125</p>
              <div className="w-full h-3 bg-green-500 rounded-full mb-2"></div>
              <div className="w-1/3 h-3 bg-gray-300 rounded-full"></div>
            </div>

            {/* New Messages */}
            <div>
              <p className="text-2xl font-bold text-black mb-3 tracking-tight">
                New Messages
              </p>
              <p className="text-6xl font-semibold text-black mb-5">18</p>
              <div className="w-full h-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* TOP RIGHT – Project Items */}
          <div className="absolute bg-white shadow-md rounded-2xl w-[410px] h-[264px] top-[36px] left-[571px] p-8">
            <p className="text-2xl font-bold text-black mb-4 tracking-tight">
              Project Items
            </p>
            <p className="text-6xl font-semibold text-black mb-6">342</p>
            <div className="w-full h-3 bg-purple-500 rounded-full mb-2"></div>
            <div className="w-1/3 h-3 bg-gray-300 rounded-full"></div>
          </div>

          {/* BOTTOM RIGHT – Graph */}
          <div className="absolute bg-white shadow-md rounded-2xl w-[352px] h-[519px] top-[332px] left-[586px] p-8 flex flex-col justify-between">
            <img
              src={graphImage}
              alt="Revenue graph"
              className="w-full h-[300px] object-contain"
            />
            <div className="text-center">
              <p className="text-2xl font-bold text-black mb-3 tracking-tight">
                Revenue
              </p>
              <p className="text-6xl font-semibold text-black">$12,345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

