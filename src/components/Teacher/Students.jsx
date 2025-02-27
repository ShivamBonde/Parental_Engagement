import React, { useState } from "react";
import { FaUserGraduate, FaSearch, FaSort, FaEnvelope, FaEye } from "react-icons/fa";

const studentsData = [
  { id: 1, name: "John Doe", grade: "10th", section: "A", attendance: 95 },
  { id: 2, name: "Emma Watson", grade: "9th", section: "B", attendance: 88 },
  { id: 3, name: "Chris Evans", grade: "11th", section: "A", attendance: 92 },
  { id: 4, name: "Olivia Brown", grade: "8th", section: "C", attendance: 97 },
  { id: 5, name: "James Smith", grade: "10th", section: "B", attendance: 85 },
];

const Students = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [gradeFilter, setGradeFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");

  // Filtering Students
  let filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Apply Grade & Section Filter
  if (gradeFilter) {
    filteredStudents = filteredStudents.filter((student) => student.grade === gradeFilter);
  }
  if (sectionFilter) {
    filteredStudents = filteredStudents.filter((student) => student.section === sectionFilter);
  }

  // Sorting Students by Attendance
  const handleSort = () => {
    const sorted = [...filteredStudents].sort((a, b) =>
      sortOrder === "asc" ? a.attendance - b.attendance : b.attendance - a.attendance
    );
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <h2 className="text-lg md:text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaUserGraduate className="text-[#00B6BA]" /> Student Section
        </h2>
        <button 
          onClick={handleSort} 
          className="text-[#00B6BA] flex items-center gap-1 border border-[#00B6BA] px-3 py-1.5 text-sm rounded-lg hover:bg-[#00B6BA] hover:text-white transition"
        >
          <FaSort /> Sort by Attendance
        </button>
      </div>

      {/* Search & Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg p-2">
          <FaSearch className="text-gray-500 mx-2" />
          <input
            type="text"
            placeholder="Search student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 text-sm"
          />
        </div>

        {/* Grade Filter */}
        <select
          className="p-2 border border-gray-300 rounded-lg w-full text-sm"
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
        >
          <option value="">All Grades</option>
          <option value="8th">8th</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
        </select>

        {/* Section Filter */}
        <select
          className="p-2 border border-gray-300 rounded-lg w-full text-sm"
          value={sectionFilter}
          onChange={(e) => setSectionFilter(e.target.value)}
        >
          <option value="">All Sections</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>

      {/* Student List (Responsive Table) */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse min-w-[350px] md:min-w-[600px]">
          <thead>
            <tr className="bg-gray-200 text-xs md:text-sm">
              <th className="p-2 text-left text-gray-700">Name</th>
              <th className="p-2 text-left text-gray-700">Grade</th>
              <th className="p-2 text-left text-gray-700">Section</th>
              <th className="p-2 text-left text-gray-700">Attendance</th>
              <th className="p-2 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className={`border-b hover:bg-gray-100 ${student.attendance < 90 ? "bg-red-100" : ""}`}>
                  <td className="p-2 text-xs md:text-sm">{student.name}</td>
                  <td className="p-2 text-xs md:text-sm">{student.grade}</td>
                  <td className="p-2 text-xs md:text-sm">{student.section}</td>
                  <td className="p-2 text-xs md:text-sm font-semibold">
                    {student.attendance}%
                    {student.attendance < 90 && <span className="ml-2 text-red-600">⚠️</span>}
                  </td>
                  <td className="p-2 flex flex-wrap gap-2 text-xs md:text-sm">
                    <button className="text-blue-600 flex items-center gap-1 hover:underline">
                      <FaEye /> View
                    </button>
                    <button className="text-green-600 flex items-center gap-1 hover:underline">
                      <FaEnvelope /> Message
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-2 text-center text-gray-500 text-xs md:text-sm">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
