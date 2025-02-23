import React from "react";
import UpcomingEvents from "./UpcomingEvents";

const StudentProfile = () => {
  return (
    <div className="bg-gray-700 text-white p-8 min-h-screen w-[calc(100vw-300px)] flex flex-col items-center overflow-hidden">
      {/* Student ID Card */}
      <div className="relative bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-3xl flex items-center border-2 border-[#00B6BA] mt-6 transition-all duration-500 hover:scale-105 hover:shadow-[#00B6BA]/50 hover:border-[#00E6E9]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-10"></div>

        <div className="w-44 h-44 rounded-lg overflow-hidden border-4 border-[#00B6BA] shadow-md hover:shadow-[#00B6BA] transition-all duration-300 mr-14">
          <img src="/assets/student.png" alt="Student Profile" className="w-full h-full object-cover" />
        </div>

        <div className="text-left flex-1">
          <h3 className="text-4xl font-extrabold text-[#00B6BA] mb-4 hover:text-[#00E6E9] transition-all duration-300">
            John Doe
          </h3>
          <div className="text-lg text-gray-300 mt-6 font-medium space-y-3">
            <p>Grade: <span className="text-white">8</span></p>
            <p>Attendance: <span className="text-white">95%</span></p>
            <p>Roll No: <span className="text-white">23</span></p>
            <p>Section: <span className="text-white">A</span></p>
            <p>Student ID: <span className="text-white">STU-10023</span></p>
            <p>Guardian: <span className="text-white">Mr. Doe</span></p>
            <p>Contact: <span className="text-white">+123 456 7890</span></p>
            <p>Address: <span className="text-white">123 Elm Street, Springfield</span></p>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <UpcomingEvents />
    </div>
  );
};

export default StudentProfile;
