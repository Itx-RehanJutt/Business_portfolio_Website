import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full h-[80vh] md:h-[90vh] bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-center px-4"
    >
      <div className="max-w-3xl">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Business Portfolio
        </h1>

        {/* Sub Text */}
        <p className="text-white text-base md:text-lg mb-6">
          Your trusted partner for quality and excellence.
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
