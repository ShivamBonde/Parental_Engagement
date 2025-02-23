import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const ParentDashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar - Fixed Position */}
      <div className="fixed top-0 left-0 h-full w-64 bg-[#00B6BA] text-white p-6 shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content - Adjusted for Sidebar Width */}
      <div className="ml-64 flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default ParentDashboard;
