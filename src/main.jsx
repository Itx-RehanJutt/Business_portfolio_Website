import React from "react";
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
      { path: "services", element: <ServiceDashboard /> },
      { path: "portfolio", element: <PortfolioDashboard /> },
      { path: "message", element: <MessageDashboard /> },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <MessagesProvider>
      <RouterProvider router={router} />
    </MessagesProvider>
  </React.StrictMode>
);