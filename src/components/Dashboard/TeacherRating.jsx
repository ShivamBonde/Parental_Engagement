import React, { useState } from "react";

const TeacherRating = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">⭐ Rate Your Teacher</h1>
      <select className="w-full p-2 border rounded-md my-3">
        <option>Select Teacher</option>
        <option>Mr. Smith (Maths)</option>
        <option>Ms. Johnson (English)</option>
      </select>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
            onClick={() => setRating(star)}
          >
            ★
          </button>
        ))}
      </div>
      <textarea
        placeholder="Leave feedback (optional)"
        className="w-full p-2 border rounded-md mt-3"
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white p-2 rounded-md mt-3">
        Submit Rating
      </button>
    </div>
  );
};

export default TeacherRating;
