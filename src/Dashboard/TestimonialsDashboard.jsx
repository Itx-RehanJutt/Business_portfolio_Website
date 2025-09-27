import React from "react";
import AboutImg1 from "/About/AboutImg1-min.png";
import AboutImg2 from "/About/AboutImg2-min.png";
import AboutImg3 from "/About/AboutImg3-min.png";
import AboutImg4 from "/About/Review_Img.png";

const testimonials = [
  {
    id: 1,
    name: "First Client",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    image: AboutImg1,
  },
  {
    id: 2,
    name: "First Client",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    image: AboutImg2,
  },
  {
    id: 3,
    name: "First Client",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    image: AboutImg3,
  },
  {
    id: 4,
    name: "First Client",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    image: AboutImg4,
  },
];

export default function testimonialsDashboard() {
  return (
    <div className="flex-1 bg-[#d9d2f7] min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center text-white mb-8">
        Testimonials Management
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
          >
            {/* Left: Image + Text */}
            <div className="flex items-center space-x-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="font-bold">{t.name}</h2>
                <p className="text-gray-600 text-sm">{t.text}</p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex space-x-3">
              <button className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-md text-sm">
                <i className="ri-edit-line mr-1"></i> Edit
              </button>
              <button className="flex items-center bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
                <i className="ri-mail-line mr-1"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
