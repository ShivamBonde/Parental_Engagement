import { useState } from "react";
import { FaMobileAlt, FaLock, FaUser, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isValidMobile, setIsValidMobile] = useState(false);
  const [userType, setUserType] = useState("parent");

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);
    setIsValidMobile(/^\d{10}$/.test(value));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-gray-900 font-inter px-4 sm:px-6 lg:px-8">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl transform transition-all duration-300 hover:scale-105"
      >
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-4 sm:mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-lg font-medium mb-4 sm:mb-6">
          "Join us in making parent-teacher communication effortless."
        </p>

        <div className="flex justify-center mb-4 sm:mb-6">
          <motion.div 
            className="flex bg-gray-200 p-1 rounded-full shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold rounded-full flex items-center gap-2 transition-all duration-300 
                ${userType === "parent" ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setUserType("parent")}
            >
              <FaUserTie className="text-lg sm:text-xl" /> Parent
            </button>
            <button 
              className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-bold rounded-full flex items-center gap-2 transition-all duration-300 
                ${userType === "teacher" ? "bg-purple-500 text-white shadow-lg" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setUserType("teacher")}
            >
              <FaUserGraduate className="text-lg sm:text-xl" /> Teacher
            </button>
          </motion.div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
          className="flex items-center bg-gray-100 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 shadow-inner border-2 border-transparent hover:border-blue-500 transition-all"
        >
          <FaUser className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full bg-transparent focus:outline-none text-sm sm:text-lg" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
          className="flex items-center bg-gray-100 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 shadow-inner border-2 border-transparent hover:border-blue-500 transition-all"
        >
          <FaMobileAlt className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
          <input 
            type="text" 
            placeholder="Enter your mobile number" 
            className="w-full bg-transparent focus:outline-none text-sm sm:text-lg" 
            value={mobile}
            onChange={handleMobileChange}
          />
        </motion.div>

        {isValidMobile && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center bg-gray-100 p-3 sm:p-4 rounded-xl mb-4 sm:mb-6 shadow-inner"
          >
            <FaLock className="text-gray-500 mr-2 sm:mr-3 text-lg sm:text-xl" />
            <input 
              type="text" 
              placeholder="Enter OTP" 
              className="w-full bg-transparent focus:outline-none text-sm sm:text-lg" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </motion.div>
        )}

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl shadow-lg transition
            ${!isValidMobile ? 'opacity-50 cursor-not-allowed' : ''}
            ${userType === "parent" ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white" : 
            "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"}`}
          disabled={!isValidMobile}
        >
          Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </motion.button>

        <p className="text-center text-gray-600 text-sm sm:text-md mt-4 sm:mt-6">
          Already have an account? <Link to="/" className="text-blue-500 hover:underline font-medium">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;