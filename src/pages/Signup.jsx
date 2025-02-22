import React, { useState } from "react";
import { FaMobileAlt, FaLock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isValidMobile, setIsValidMobile] = useState(false);

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);
    setIsValidMobile(/^\d{10}$/.test(value)); // Validates 10-digit mobile number
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-gray-900 font-inter">
      {/* Sign Up Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all duration-300 hover:scale-105">
        
        <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-6 text-lg font-medium">
          "Join us in making parent-teacher communication effortless."
        </p>
        
        <motion.div 
          whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
          className="flex items-center bg-gray-100 p-4 rounded-xl mb-4 shadow-inner border-2 border-transparent hover:border-blue-500 transition-all">
          <FaUser className="text-gray-500 mr-3 text-xl" />
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full bg-transparent focus:outline-none text-lg" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
          className="flex items-center bg-gray-100 p-4 rounded-xl mb-4 shadow-inner border-2 border-transparent hover:border-blue-500 transition-all">
          <FaMobileAlt className="text-gray-500 mr-3 text-xl" />
          <input 
            type="text" 
            placeholder="Enter your mobile number" 
            className="w-full bg-transparent focus:outline-none text-lg" 
            value={mobile}
            onChange={handleMobileChange}
          />
        </motion.div>
        
        {isValidMobile && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center bg-gray-100 p-4 rounded-xl mb-6 shadow-inner">
            <FaLock className="text-gray-500 mr-3 text-xl" />
            <input 
              type="text" 
              placeholder="Enter OTP" 
              className="w-full bg-transparent focus:outline-none text-lg" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </motion.div>
        )}
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 rounded-xl font-bold text-xl shadow-lg transition ${!isValidMobile ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isValidMobile}
        >
          Sign Up
        </motion.button>
        
        <p className="text-center text-gray-600 text-md mt-6">
          Already have an account? <Link to="/" className="text-blue-500 hover:underline font-medium">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
