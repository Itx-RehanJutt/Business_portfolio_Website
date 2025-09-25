import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboard.png";
import servicesIcon from "../assets/arcticons_services.png";
import portfolioIcon from "../assets/Vector.png";
import testimonialsIcon from "../assets/testimonials.png";
import messagesIcon from "../assets/message.png";
import { LogOut, Menu, X } from "lucide-react";

const SidebarDashboard = () => {
  const navigate = useNavigate();
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
    <div className="sm:hidden flex flex-col items-start bg-indigo-600 text-white p-4 shadow-md">
      {/* Logo */}
       <h1 className="text-xl font-bold mb-2">Logo</h1>

      {/* Hamburger Menu under Logo */}
       <button onClick={() => setIsOpen(true)}>
          <Menu className="w-7 h-7" />
         </button>
    </div>
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-[0px_4px_4px_0px_#00000040] flex flex-col z-50 transform transition-transform duration-300
          w-[280px] sm:w-[349px]
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >

        <div className="sm:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="sm:block mt-12 ml-8 text-4xl font-bold">
          Logo
        </div>

        {/* === MENU === */}
        <nav className="mt-20 flex flex-col items-top px-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false); 
              }}
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
            </button>
          ))}
        </nav>

        {/* === LOGOUT === */}
        <button
          onClick={() => alert("Logging out")}
          className="mt-auto mb-10 mx-auto w-[80%] sm:w-[264px] h-[60px] sm:h-[68px]
                     bg-green-500 hover:bg-green-600 text-white rounded-[10px]
                     flex items-center justify-center gap-2 text-lg sm:text-xl font-bold
                     shadow-[0px_4px_4px_0px_#00000040]"
        >
          <LogOut size={22} /> Log Out
        </button>
      </aside>
    </>
  );
};

export default SidebarDashboard;
