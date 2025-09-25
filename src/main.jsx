import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./components/Home.jsx";
import Admin from "./Admin.jsx";
import Login from "./components/Login.jsx";
import DashboardHome from "./Dashboard/DashboardHome.jsx";
import ServiceDashboard from "./Dashboard/ServiceDashboard.jsx";
import PortfolioDashboard from "./Dashboard/PortfolioDashboard.jsx";
import { MessagesProvider } from "./components/MessagesContext.jsx";
import MessageDashboard from "./Dashboard/MessageDashboard.jsx";
import EditServiceForm from "./components/EditServiceForm";
import AddServiceForm from "./components/AddServiceForm.jsx";

const RootApp = () => {
  // Services state 
  const [services, setServices] = useState([
    { title: "Web Development" },
    { title: "App Development" },
  ]);

  // Router setup
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    // Login Route
    {
      path: "/login",
      element: <Login />,
    },
    // Admin Dashboard Routes
    {
      path: "/dashboard",
      element: <Admin />,
      errorElement: <NotFound />,
      children: [
        { path: "", element: <DashboardHome /> },
        { path: "services", element: <ServiceDashboard services={services} setServices={setServices} /> },
        { path: "edit-service/:index", element: <EditServiceForm services={services} setServices={setServices} /> },
        { path: "add-service", element: <AddServiceForm services={services} setServices={setServices} /> },
        { path: "portfolio", element: <PortfolioDashboard /> },
        { path: "message", element: <MessageDashboard /> },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <MessagesProvider>
        <RouterProvider router={router} />
      </MessagesProvider>
    </React.StrictMode>
  );
};

const root = createRoot(document.querySelector("#root"));
root.render(<RootApp />);

