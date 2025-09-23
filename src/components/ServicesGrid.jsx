import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";

const servicesData = [
  {
    id: 1,
    title: "SERVICE ONE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service1,
  },
  {
    id: 2,
    title: "SERVICE SECOND",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service2,
  },
  {
    id: 3,
    title: "SERVICE THIRD",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service3,
  },
  {
    id: 4,
    title: "SERVICE FOURTH",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service4,
  },
  {
    id: 5,
    title: "SERVICE FIFTH",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service5,
  },
  {
    id: 6,
    title: "SERVICE SIXTH",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: service6,
  },
];

const ServicesGrid = () => {
  return (
    <main className="w-full bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div
        className="
          max-w-6xl w-full
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 sm:gap-10
        "
      >
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="
              bg-white rounded-xl shadow-md
              p-6 sm:p-8 text-center
              hover:shadow-lg transition-transform
              hover:-translate-y-1
              flex flex-col items-center
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="mb-5 w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServicesGrid;
