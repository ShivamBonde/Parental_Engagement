import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations here (e.g., clearing tokens, user session)
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Parent Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <NavLink to="/dashboard" className="block px-4 py-2 bg-white text-[#00B6BA] rounded-lg hover:bg-gray-200">
            Student Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/performance" className="block px-4 py-2 bg-white text-[#00B6BA] rounded-lg hover:bg-gray-200">
            Academic Performance
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/notices" className="block px-4 py-2 bg-white text-[#00B6BA] rounded-lg hover:bg-gray-200">
            Important Notices
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/alerts" className="block px-4 py-2 bg-white text-[#00B6BA] rounded-lg hover:bg-gray-200">
            Reminders & Alerts
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/ratings" className="block px-4 py-2 bg-white text-[#00B6BA] rounded-lg hover:bg-gray-200">
            Teacher Ratings
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/meetings" className="block px-4 py-2 bg-white text-[#00B6BA] rounded-lg hover:bg-gray-200">
            Meeting Scheduler
          </NavLink>
        </li>
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="block w-full px-4 py-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
