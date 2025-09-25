import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditServiceForm = ({ services, setServices }) => {
  const { index } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (services && services[index]) {
      setTitle(services[index].title || "");
      setDescription(services[index].description || "");
    }
  }, [index, services]);

  const handleUpdate = () => {
    if (!title.trim()) {
      alert("Service title is required!");
      return false;
    }
    const confirmUpdate = window.confirm("Are you sure you want to update this service?");
    if (!confirmUpdate) return false;

    const updated = [...services];
    updated[index] = { title, description };
    setServices(updated);

    return true; // success flag
  };

  return (
    <div className="bg-[#B7B0F5] min-h-screen flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-[560px] p-6 sm:p-10 rounded-2xl shadow-md">
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-800">
          Edit Service
        </h3>

        {/* Title */}
        <label className="block font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-700">
          Service Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-12 sm:h-14 px-4 sm:px-5 mb-6 sm:mb-8 rounded-md bg-gray-100 outline-none text-base sm:text-lg"
          placeholder="Update service title"
        />

        {/* Description */}
        <label className="block font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-700">
          Service Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-12 sm:h-14 px-4 sm:px-5 mb-8 sm:mb-10 rounded-md bg-gray-100 outline-none text-base sm:text-lg"
          placeholder="Update service description"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Update Button */}
          <Link
            to="/dashboard/services"
            onClick={(e) => {
              if (!handleUpdate()) e.preventDefault(); // only navigate if update success
            }}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-md text-white bg-[#00B787] hover:bg-[#00a37a] text-base sm:text-lg font-semibold text-center"
          >
            Update
          </Link>

          {/* Cancel Button */}
          <Link
            to="/dashboard/services"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-md bg-gray-300 hover:bg-gray-400 text-base sm:text-lg font-semibold text-center"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditServiceForm;
