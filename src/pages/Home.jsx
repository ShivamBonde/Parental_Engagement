import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="font-inter text-gray-900">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-[#4793AF] text-white py-4 px-6 flex justify-between items-center shadow-md"
      >
        <h1 className="text-2xl font-bold">EduConnect</h1>
        <div className="flex items-center gap-4">
          <select
            className="bg-white text-gray-900 px-2 py-1 rounded cursor-pointer"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <Link to="/login" className="bg-white text-[#4793AF] px-4 py-2 rounded font-bold shadow-md hover:scale-105 transition">Login</Link>
          <Link to="/signup" className="bg-white text-[#4793AF] px-4 py-2 rounded font-bold shadow-md hover:scale-105 transition">Sign Up</Link>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-2/3 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4793AF]">
            <Typewriter 
              options={{
                strings: [
                  "Bridging the Gap Between Parents & Education",
                  "Stay Connected with Your Child's Learning",
                  "Making Parent-Teacher Talks Effortless"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-lg">
            EduConnect makes it effortless for parents to stay engaged with their child's education. Get real-time updates, track academic progress, and communicate seamlessly with teachers – all in one place.
          </p>
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/3 flex justify-end"
        >
          <img 
            src="/public/assets/img1.jpeg" 
            alt="Educational Illustration" 
            className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
