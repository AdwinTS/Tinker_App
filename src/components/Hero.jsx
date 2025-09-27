// src/components/Hero.js
import { motion } from "framer-motion";

import Aurora from './Aurora';

export default function Hero() {

  
  const auroraColors = ["#1D4ED8", "#06B6D4", "#A855F6"]; // Blue, Cyan, Purple

  return (
    
    <div
      className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-black"
      
    >
      
    
      <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={auroraColors}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
      </div>
      
    
      <div className="absolute inset-0 bg-black opacity-60 z-[1]"></div>

      {/* 3. MAIN CONTENT (Sits highest, z-index 10) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 px-6" // z-10 ensures content is above the overlay
      >
        
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          TinkHack 2025
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          The flagship hackathon by <span className="text-cyan-400">TinkerHub MEC</span>
        </p>
        <motion.a
          href="#register"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold shadow-lg"
        >
          Register Now
        </motion.a>
        
      </motion.div>
    </div>
  );
}
