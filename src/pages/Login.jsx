import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="text"
          placeholder="Enter mobile number"
          className="w-full p-2 border rounded-md mb-3"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded-md">
          Login with OTP
        </button>
      </div>
    </div>
  );
};

export default Login;
