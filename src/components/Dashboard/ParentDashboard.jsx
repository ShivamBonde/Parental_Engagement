import React from "react";

const ParentDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">📊 Parent Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-semibold">📚 Student Profile</h2>
          <p>Name: John Doe</p>
          <p>Grade: 5th</p>
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <h2 className="text-lg font-semibold">📅 Upcoming Events</h2>
          <p>Parent-Teacher Meeting: 15th March</p>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
