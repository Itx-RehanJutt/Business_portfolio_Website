// import { Link, useOutletContext } from "react-router-dom";
// import editIcon from "../assets/editbtn.png";
// import binIcon from "../assets/bin.png";

// const ServiceDashboard = () => {
//   // Get from Outlet context instead of props
//   const { services, setServices } = useOutletContext();

//   const handleDelete = (index) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete?");
//     if (confirmDelete) {
//       const updated = services.filter((_, i) => i !== index);
//       setServices(updated);
//     }
//   };

//   return (
//     <div className="bg-[#B7B0F5] min-h-screen flex justify-center items-center px-4">
//       <div className="bg-transparent flex flex-col w-full max-w-[833px] h-auto min-h-[500px]">
//         <div className="flex justify-between items-center mb-8">
//           <h2
//             className="text-white font-extrabold text-3xl sm:text-[52px] leading-tight"
//             style={{ fontFamily: "Poppins, sans-serif" }}
//           >
//             Services
//           </h2>
//         </div>

//         {/* Table */}
//         <div className="w-full border border-gray-300 rounded-[12px] overflow-x-auto shadow-md">
//           <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-gray-200 text-black font-bold px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg">
//             <div className="text-left">Title</div>
//             <div className="text-center">Edit</div>
//             <div className="text-center">Delete</div>
//           </div>

//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-white px-4 sm:px-6 py-4 sm:py-5 border-t border-gray-300 text-sm sm:text-base"
//             >
//               <div className="text-black font-semibold text-base sm:text-lg">
//                 {service.title}
//               </div>

//               {/* Edit Button as Link */}
//               <div className="flex justify-center">
//                 <Link
//                   to={`/dashboard/edit-service/${i}`}
//                   className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
//                 >
//                   <img
//                     src={editIcon}
//                     alt="Edit"
//                     className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
//                   />
//                 </Link>
//               </div>

//               {/* Delete Button */}
//               <div className="flex justify-center">
//                 <button
//                   onClick={() => handleDelete(i)}
//                   className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
//                 >
//                   <img
//                     src={binIcon}
//                     alt="Delete"
//                     className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDashboard;

// import React from "react";
// import { useOutletContext } from "react-router-dom";

// const ServiceDashboard = () => {
//   const { services, setServices } = useOutletContext();

//   return (
//     <div className="bg-[#B7B0F5] min-h-screen w-full px-4 py-10">
//       <div className="w-full max-w-5xl mx-auto">
//         <h2 className="text-white font-extrabold text-3xl sm:text-[52px] mb-8">
//           Services
//         </h2>

//         <div className="w-full overflow-x-auto border border-gray-300 rounded-[12px] shadow-md">
//           {/* Header */}
//           <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-gray-200 text-black font-bold px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg">
//             <div>Title</div>
//             <div className="text-center">Edit</div>
//             <div className="text-center">Delete</div>
//           </div>

//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-white px-4 sm:px-6 py-4 sm:py-5 border-t"
//             >
//               <div>{service.title}</div>
//               <button className="text-blue-600 text-center">Edit</button>
//               <button
//                 onClick={() =>
//                   setServices((prev) => prev.filter((_, i) => i !== index))
//                 }
//                 className="text-red-600 text-center"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDashboard;

import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import editIcon from "../assets/editbtn.png";
import binIcon from "../assets/bin.png";

const ServiceDashboard = () => {
  const { services, setServices } = useOutletContext();

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const updated = services.filter((_, i) => i !== index);
      setServices(updated);
    }
  };

  return (
    <div className="bg-[#B7B0F5] min-h-screen w-full px-4 py-10">
      <div className="w-full max-w-5xl mx-auto">
        <h2
          className="text-white font-extrabold text-3xl sm:text-[52px] mb-8 leading-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Services
        </h2>

        {/* Table */}
        <div className="w-full overflow-x-auto border border-gray-300 rounded-[12px] shadow-md">
          {/* Header */}
          <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-gray-200 text-black font-bold px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg">
            <div className="text-left">Title</div>
            <div className="text-center">Edit</div>
            <div className="text-center">Delete</div>
          </div>

          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-white px-4 sm:px-6 py-4 sm:py-5 border-t border-gray-300 text-sm sm:text-base"
            >
              {/* Title */}
              <div className="text-black font-semibold text-base sm:text-lg">
                {service.title}
              </div>

              {/* Edit Button */}
              <div className="flex justify-center">
                <Link
                  to={`/dashboard/edit-service/${index}`}
                  className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={editIcon}
                    alt="Edit"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </Link>
              </div>

              {/* Delete Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleDelete(index)}
                  className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={binIcon}
                    alt="Delete"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;
