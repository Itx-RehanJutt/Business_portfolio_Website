import React from "react";
import { useMessages } from "../components/MessagesContext.jsx";

const MessageDashboard = () => {
  const { messages } = useMessages();

  return (
    <div className="bg-[#B7B0F5] min-h-screen flex items-center justify-center px-4 py-10">
      {/* Wrapper with fixed width */}
      <div className="w-full max-w-[1016px] flex flex-col items-center justify-center gap-10 sm:gap-12 md:gap-[51px]">
        
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Messages Management
        </h2>

        {/* Mobile / Tablet View – Stacked Cards */}
        <div className="block md:hidden w-full space-y-5 sm:space-y-6">
          {messages.length === 0 ? (
            <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 text-center">
              <p className="text-gray-500 font-semibold text-base sm:text-lg">No messages yet.</p>
            </div>
          ) : (
            messages.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-5 sm:p-6 space-y-2"
              >
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  <span className="font-bold">Name:</span> {item.name}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800 break-words">
                  <span className="font-bold">Email:</span> {item.email}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  <span className="font-bold">Message:</span> {item.message}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Desktop View – Table */}
        <div className="hidden md:block w-full">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-3 sm:border-spacing-y-4">
              <thead>
                <tr>
                  <th className="bg-white py-3 sm:py-4 px-4 sm:px-6 text-base md:text-lg lg:text-xl text-gray-800 font-bold text-left rounded-t-md">
                    Sender Name
                  </th>
                  <th className="bg-white py-3 sm:py-4 px-4 sm:px-6 text-base md:text-lg lg:text-xl text-gray-800 font-bold text-left rounded-t-md">
                    Email
                  </th>
                  <th className="bg-white py-3 sm:py-4 px-4 sm:px-6 text-base md:text-lg lg:text-xl text-gray-800 font-bold text-left rounded-t-md">
                    Messages
                  </th>
                </tr>
              </thead>
              <tbody>
                {messages.length === 0 ? (
                  <tr>
                    <td
                      colSpan="3"
                      className="bg-white py-5 sm:py-6 px-4 sm:px-6 text-center text-gray-500 font-semibold text-base sm:text-lg md:text-xl rounded-md"
                    >
                      No messages yet.
                    </td>
                  </tr>
                ) : (
                  messages.map((item, index) => (
                    <tr key={index}>
                      <td className="bg-white py-4 sm:py-5 px-4 sm:px-6 text-gray-800 font-semibold rounded-l-md text-base sm:text-lg md:text-xl">
                        {item.name}
                      </td>
                      <td className="bg-white py-4 sm:py-5 px-4 sm:px-6 text-gray-800 break-words text-base sm:text-lg md:text-xl">
                        {item.email}
                      </td>
                      <td className="bg-white py-4 sm:py-5 px-4 sm:px-6 text-gray-800 rounded-r-md text-base sm:text-lg md:text-xl">
                        {item.message}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MessageDashboard;



