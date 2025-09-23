import React from "react";
import graphImage from "../assets/dashboard-graph.png";

const DashboardContent = () => {
  return (
    <div className="w-full min-h-screen bg-[#C7C6FB] shadow-[0_4px_4px_0_#00000040] flex justify-center items-start py-6 sm:py-10 px-3 sm:px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* LEFT CARD – Total Services & Messages */}
        <div className="bg-white shadow-md rounded-[20px] p-6 sm:p-8 flex flex-col justify-between">
          {/* Total Services */}
          <div className="mb-10">
            <p className="text-lg sm:text-2xl font-bold text-black mb-2 tracking-tight">
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
            <p className="text-lg sm:text-2xl font-bold text-black mb-2 tracking-tight">
              New Messages
            </p>
            <p className="text-4xl sm:text-6xl font-semibold text-black mb-4">
              18
            </p>
            <div className="w-full h-3 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* TOP RIGHT – Project Items */}
        <div className="bg-white shadow-md rounded-[20px] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <p className="text-lg sm:text-2xl font-bold text-black mb-3 tracking-tight">
              Project Items
            </p>
            <p className="text-4xl sm:text-6xl font-semibold text-black mb-4">
              342
            </p>
          </div>
          <div>
            <div className="w-full h-3 bg-purple-500 rounded-full mb-2"></div>
            <div className="w-1/3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* BOTTOM RIGHT – Graph */}
        <div className="bg-white shadow-md rounded-[20px] p-6 sm:p-8 flex flex-col justify-between">
          <img
            src={graphImage}
            alt="Revenue graph"
            className="w-full h-[220px] sm:h-[300px] object-contain mb-6"
          />
          <div className="text-center">
            <p className="text-lg sm:text-2xl font-bold text-black mb-2 tracking-tight">
              Revenue
            </p>
            <p className="text-4xl sm:text-6xl font-semibold text-black">
              $12,345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
