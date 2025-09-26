import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop.";
import NavbarDashboard from "./Dashboard/NavbarDashboard";
import SidebarDashboard from "./Dashboard/SidebarDashboard";

function Admin() {
  // ervices State
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("services");
    return saved
      ? JSON.parse(saved)
      : [{ title: "Web Development" }, { title: "App Development" }];
  });

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  // Messages State
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="flex min-h-screen">
      <ScrollToTop />

      {/* Sidebar */}
      <SidebarDashboard />

      {/* Main content – push over by sidebar width */}
      <div className="flex-1 flex flex-col sm:ml-[349px]"> 
        {/* matches sm:w-[349px] of SidebarDashboard */}
        <NavbarDashboard />
        <main className="p-6 flex-1 bg-gray-50">
          {/* Pass services + messages into Outlet */}
          <Outlet
            context={{
              services,
              setServices,
              messages,
              setMessages,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default Admin;
