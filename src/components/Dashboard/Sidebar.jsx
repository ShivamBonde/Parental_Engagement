import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChartLine, FaCalendarAlt, FaClipboardList, FaBell, FaStar, FaVideo, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Academic Performance", path: "/dashboard/performance", icon: <FaChartLine /> },
    { name: "Upcoming Events", path: "/dashboard/events", icon: <FaCalendarAlt /> },
    { name: "Important Notices", path: "/dashboard/notices", icon: <FaClipboardList /> },
    { name: "Reminders & Alerts", path: "/dashboard/alerts", icon: <FaBell /> },
    { name: "Teacher Ratings", path: "/dashboard/ratings", icon: <FaStar /> },
    { name: "Meeting Scheduler", path: "/dashboard/meetings", icon: <FaVideo /> },
  ];

  return (
    <nav className="h-full flex flex-col">
      {/* Sidebar Header */}
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Student Panel</h2>

      {/* Menu Items */}
      <ul className="space-y-4 flex-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              onClick={onClose} // Closes sidebar when clicking on an item (for mobile)
              className={`flex items-center gap-3 p-3 rounded-lg text-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-white text-[#00B6BA] font-semibold"
                  : "text-white hover:bg-[#00E6E9]/20"
              }`}
            >
              {item.icon} {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button (Red) */}
      <div className="mt-auto">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-3 p-3 rounded-lg text-lg transition-all duration-200 bg-red-500 text-white hover:bg-red-600"
        >
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;


