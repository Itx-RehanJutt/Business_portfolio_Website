import { Outlet } from 'react-router';
import ScrollToTop from './components/ScrollToTop.';
import NavbarDashboard from './Dashboard/NavbarDashboard';
import SidebarDashboard from './Dashboard/SidebarDashboard';

function Admin() {
  return (
    <div className="flex min-h-screen">
        <ScrollToTop />
      {/* Sidebar */}
      <SidebarDashboard />
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <NavbarDashboard />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Admin;