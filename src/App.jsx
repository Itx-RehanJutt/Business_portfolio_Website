import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardContent from "./components/DashboardContent";
import ServicesTable from "./components/ServicesTable";
import AddServiceForm from "./components/AddServiceForm";
import EditServiceForm from "./components/EditServiceForm";
import ServicesGrid from "./components/ServicesGrid"; 

function App() {
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("services");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  return (
    <Routes>
      <Route path="/services-grid" element={<ServicesGrid />} />
      <Route
        path="/*"
        element={
          <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <Sidebar />

            {/* Right Content with Navbar */}
            <div className="flex-1 flex flex-col">
              <Navbar />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<DashboardContent />} />
                  <Route
                    path="/services"
                    element={
                      <ServicesTable
                        services={services}
                        setServices={setServices}
                      />
                    }
                  />
                  <Route
                    path="/add-service"
                    element={
                      <AddServiceForm
                        services={services}
                        setServices={setServices}
                      />
                    }
                  />
                  <Route
                    path="/edit-service/:index"
                    element={
                      <EditServiceForm
                        services={services}
                        setServices={setServices}
                      />
                    }
                  />
                  <Route path="/portfolio" element={<div>Portfolio Page</div>} />
                  <Route
                    path="/testimonials"
                    element={<div>Testimonials Page</div>}
                  />
                  <Route path="/messages" element={<div>Messages Page</div>} />
                </Routes>
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;