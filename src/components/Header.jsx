import React, { useState } from "react";
import Logo from "/Logo/LogoLight.png"; // apna logo replace karo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 left-0 bg-white font-serif z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex font-medium space-x-8 text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white font-[lato] shadow-lg">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
