import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Bussiness Portfolio</h2>
          <p className="text-sm text-gray-500">©Copyright</p>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-sm">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2 font-bold text-gray-600">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Features</li>
              <li className="hover:text-black cursor-pointer">Pricing</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2 font-bold text-gray-600">
              <li className="hover:text-black cursor-pointer">Documentation</li>
              <li className="hover:text-black cursor-pointer">FAQ</li>
              <li className="hover:text-black cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Column 3 - Social Icons */}
          <div className="flex space-x-5 md:justify-end">
            <a href="#">
              <i className="ri-instagram-line text-gray-600 hover:text-pink-500 text-xl"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-line text-gray-600 hover:text-sky-500 text-xl"></i>
            </a>
            <a href="#">
              <i className="ri-facebook-fill text-gray-600 hover:text-blue-600 text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}