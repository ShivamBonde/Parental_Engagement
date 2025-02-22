import React, { useState } from "react";

const MeetingScheduler = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">📅 Schedule a Meeting</h1>
      <label className="block mt-3">Select Date:</label>
      <input
        type="date"
        className="w-full p-2 border rounded-md"
        onChange={(e) => setDate(e.target.value)}
      />
      <label className="block mt-3">Select Time:</label>
      <input
        type="time"
        className="w-full p-2 border rounded-md"
        onChange={(e) => setTime(e.target.value)}
      />
      <button className="w-full bg-green-500 text-white p-2 rounded-md mt-3">
        Schedule Meeting
      </button>
    </div>
  );
};

export default MeetingScheduler;
