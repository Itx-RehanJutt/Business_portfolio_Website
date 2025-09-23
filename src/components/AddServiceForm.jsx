import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddServiceForm = ({ services, setServices }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title.trim()) return;
    const newService = { title, description };
    setServices([...services, newService]);
    navigate("/services");
  };

  const handleCancel = () => {
    navigate("/services");
  };

  return (
    <div className="bg-[#B7B0F5] min-h-screen flex justify-center items-center px-4 sm:px-6 py-8">
      <div className="bg-white w-full max-w-lg sm:max-w-2xl p-6 sm:p-10 rounded-2xl shadow-md">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-800 text-center sm:text-left">
          Add New Service
        </h3>

        {/* Service Title */}
        <label className="block font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-700">
          Service Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-12 sm:h-14 px-4 sm:px-5 mb-6 sm:mb-8 rounded-md bg-gray-100 outline-none text-base sm:text-lg"
          placeholder="Enter service title"
        />

        {/* Service Description */}
        <label className="block font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-gray-700">
          Service Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-12 sm:h-14 px-4 sm:px-5 mb-8 sm:mb-10 rounded-md bg-gray-100 outline-none text-base sm:text-lg"
          placeholder="Enter service description"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-md text-white bg-[#00B787] hover:bg-[#00a37a] text-base sm:text-lg font-semibold"
          >
            Save Service
          </button>
          <button
            onClick={handleCancel}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-md bg-gray-300 hover:bg-gray-400 text-base sm:text-lg font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddServiceForm;
