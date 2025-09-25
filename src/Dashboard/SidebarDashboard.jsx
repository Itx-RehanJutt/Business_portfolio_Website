import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboard.png";
import servicesIcon from "../assets/arcticons_services.png";
import portfolioIcon from "../assets/Vector.png";
import testimonialsIcon from "../assets/testimonials.png";
import messagesIcon from "../assets/message.png";
import { LogOut, Menu, X } from "lucide-react";

const SidebarDashboard = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: dashboardIcon },
    { name: "Services", path: "/dashboard/services", icon: servicesIcon }, 
    { name: "Portfolio", path: "/dashboard/portfolio", icon: portfolioIcon },
    { name: "Testimonials", path: "/dashboard/testimonials", icon: testimonialsIcon },
    { name: "Message", path: "/dashboard/message", icon: messagesIcon },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="sm:hidden flex flex-col items-start bg-indigo-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold mb-2">Logo</h1>
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-lg flex flex-col z-50 transform transition-transform duration-300
          w-[280px] sm:w-[349px]
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        {/* Close Btn (Mobile) */}
        <div className="sm:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Logo */}
        <div className="sm:block mt-12 ml-8 text-4xl font-bold">Logo</div>

        {/* === MENU === */}
        <nav className="mt-20 flex flex-col items-top px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center w-full sm:w-[264px] px-3 py-4 mb-3 rounded-md
                          transition-colors duration-200 cursor-pointer text-base sm:text-lg font-bold
                          ${
                            location.pathname === item.path
                              ? "bg-white text-black"
                              : "hover:bg-white hover:text-black"
                          }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="mr-3 object-contain w-6 h-6 sm:w-[26px] sm:h-[26px]"
              />
              <span className="text-lg sm:text-xl font-bold">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* === LOGOUT === */}
        <Link
          to="/login"
          className="mt-auto mb-10 mx-auto w-[80%] sm:w-[264px] h-[60px] sm:h-[68px]
                     bg-green-500 hover:bg-green-600 text-white rounded-[10px]
                     flex items-center justify-center gap-2 text-lg sm:text-xl font-bold
                     shadow-md"
        >
          <LogOut size={22} /> Log Out
        </Link>
      </aside>
    </>
  );
};

export default SidebarDashboard;


