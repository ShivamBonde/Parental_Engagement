import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaClipboardList, FaRobot, FaChalkboardTeacher, FaChartLine, FaFileAlt } from "react-icons/fa";

const Home = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="font-inter text-gray-900">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-[#00B6BA] text-white py-4 px-6 flex justify-between items-center shadow-md"
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
          <Link to="/login" className="bg-white text-[#00B6BA] px-4 py-2 rounded font-bold shadow-md hover:scale-105 transition">Login</Link>
          <Link to="/signup" className="bg-white text-[#00B6BA] px-4 py-2 rounded font-bold shadow-md hover:scale-105 transition">Sign Up</Link>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-4">
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00B6BA]">
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
          <p className="text-lg text-gray-700 mt-4">
            EduConnect makes it effortless for parents to stay engaged with their child's education. Get real-time updates, track academic progress, and communicate seamlessly with teachers – all in one place.
          </p>
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img 
            src="/public/assets/img1.jpeg" 
            alt="Educational Illustration" 
            className="w-2/3 h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Feature Section */}
      <div className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#00B6BA] mb-6">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <FaClipboardList size={40} />, title: "Notice Board", desc: "Stay updated with school notices and announcements." },
            { icon: <FaRobot size={40} />, title: "AskBot", desc: "AI-powered assistant to answer all academic queries." },
            { icon: <FaChalkboardTeacher size={40} />, title: "Teacher Connect", desc: "Seamless parent-teacher communication." }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-grey-700 hover:shadow-2xl transition hover:scale-105"
            >
              <div className="text-[#FFC470] mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-6">
          {[
            { icon: <FaChartLine size={40} />, title: "Performance Tracker", desc: "Monitor student progress with analytics." },
            { icon: <FaFileAlt size={40} />, title: "Reports", desc: "Download and review academic reports anytime." }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 border border-grey-700 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition hover:scale-105  "
            >
              <div className="text-[#FFC470] mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
