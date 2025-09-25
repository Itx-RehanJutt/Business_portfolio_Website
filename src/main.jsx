import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from './components/NotFound.jsx';
import Home from './components/Home.jsx';
import { createRoot } from 'react-dom/client';
import Admin from './Admin.jsx';
import Login from './components/Login.jsx';
import DashboardHome from './Dashboard/DashboardHome.jsx';
import ServiceDashboard from './Dashboard/ServiceDashboard.jsx';
import PortfolioDashboard from './Dashboard/PortfolioDashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
    // Login Route
  {
    path: "/login",
    element: <Login />,
  },
  // Admin Dashboard
  {
    path: '/dashboard',
    element: <Admin />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <DashboardHome /> },
      { path: 'services', element: <ServiceDashboard /> },
      { path: 'portfolio', element: <PortfolioDashboard /> },
      // { path: 'contact', element: <ContactDashboard /> },
      // { path: 'feedback', element: <FeedbackDashboard /> },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
