
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-50">

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Application Area */}
      <main className="ml-64 min-h-screen min-w-0">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="w-full min-w-0 p-5 md:p-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
}

export default DashboardLayout;
