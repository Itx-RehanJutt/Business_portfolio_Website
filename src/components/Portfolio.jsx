import React, { useState } from "react";
import PortfolioImage from "/Portfolio/category.png"; // Assuming the image path is correct.

const projects = [
  { id: 1, title: "Project One", category: "Category 1", img: PortfolioImage },
  { id: 2, title: "Project Two", category: "Category 1", img: PortfolioImage },
  {
    id: 3,
    title: "Project Three",
    category: "Category 1",
    img: PortfolioImage,
  },
  { id: 4, title: "Project Four", category: "Category 2", img: PortfolioImage },
  { id: 5, title: "Project Five", category: "Category 2", img: PortfolioImage },
  { id: 6, title: "Project Six", category: "Category 2", img: PortfolioImage },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto px-12 py-10">
      <h1 className="text-6xl font-bold text-center mb-10">Portfolio</h1>

      {/* Filter buttons centered */}
     <div className="flex justify-center mb-20 space-x-8">
  <button
    onClick={() => setFilter("All")}
    className={`px-14 py-2 text-black rounded-lg text-xl sm:text-sm md:text-2xl font-semibold transition duration-300 
      ${filter === "All" ? "bg-blue-400 text-white" : "bg-gray-200 hover:bg-blue-400"}`}
  >
    All
  </button>

  <button
    onClick={() => setFilter("Category 1")}
    className={`px-6 py-2 text-black rounded-lg text-xl sm:text-sm md:text-2xl font-semibold transition duration-300
      ${filter === "Category 1" ? "bg-blue-400 text-white" : "bg-gray-200 hover:bg-blue-400"}`}
  >
    Category 1
  </button>

  <button
    onClick={() => setFilter("Category 2")}
    className={`px-6 py-2 text-black rounded-lg text-xl sm:text-lg md:text-2xl font-semibold transition duration-300 
      ${filter === "Category 2" ? "bg-blue-400 text-white" : "bg-gray-200 hover:bg-blue-400"}`}
  >
    Category 2
  </button>
</div>


      {/* Portfolio grid with filtered projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {filteredProjects.map((project) => (
          <div
  key={project.id}
  className="border-gray-400 w-full rounded-lg overflow-hidden p-4 sm:p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl mb-8 sm:mb-10"
>
  <img
    src={project.img}
    alt={project.title}
    className="w-full h-100 sm:h-60 md:h-100 lg:h-120 p-6 border object-cover rounded-xl border-white"
  />
  <div className="p-4 text-center">
    <h3 className="text-xl sm:text-3xl font-bold mb-4">{project.title}</h3>
    <p className="text-black font-semibold text-sm sm:text-base">
      Lorem ipsum dolor sit amet,
      <br /> consectetur adipiscing elit.
    </p>
    <span className="inline-block mt-2 text-sm sm:text-lg font-semibold text-white bg-blue-400 px-5 py-1 border rounded-lg">
      {project.category}
    </span>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Portfolio;