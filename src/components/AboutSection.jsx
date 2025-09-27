import React from "react";
import AboutPerson from "/About/AboutPerson.png";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={AboutPerson}
            alt="About Us"
            className="w-80 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">About Us</h2>
          <p className="text-gray-600 font-medium text-sm">
            We are a passionate local business dedicated to delivering exceptional services tailored to your needs. With a focus on quality, reliability, and customer satisfaction, our mission is to make your experience seamless and memorable. Whether you're looking for professional expertise or creative solutions, we are here to help you achieve your goals.
          </p>
        </div>
      </div>
    </section>
  );
}
