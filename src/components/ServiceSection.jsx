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
    title: "Professional Consultation",
    desc: "Get expert guidance tailored to your specific needs, helping you make the right decisions for your business or personal goals.",
    img: service1,
  },
  {
    id: 2,
    title: "Custom Solutions",
    desc: "We design and deliver services that are personalized to fit your requirements, ensuring maximum value and efficiency.",
    img: service2,
  },
  {
    id: 3,
    title: "Maintenance & Support",
    desc: "We offer ongoing maintenance and support services to ensure your solutions remain effective and up-to-date.",
    img: service3,
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "We help you reach your target audience through effective digital marketing strategies, including SEO, social media, and content marketing.",
    img: service4,
  },
  {
    id: 5,
    title: "Content Creation",
    desc: "We create high-quality, engaging content tailored to your audience, helping you communicate your message effectively.",
    img: service5,
  },
  {
    id: 6,
    title: "Graphic Design",
    desc: "We create visually stunning designs that effectively communicate your brand message and engage your audience.",
    img: service6,
  },
];

const ServiceSection = () => {
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

export default ServiceSection;
