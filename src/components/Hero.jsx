// src/components/Hero.js
import { motion } from "framer-motion";
// Remove Vanta imports (useEffect, useRef, THREE, WAVES) if you are using the image as the background.
import fullPageBackground from '../assets/gem.png'; // **1. IMPORT THE NEW BACKGROUND IMAGE**

export default function Hero() {

  // **2. REMOVE THE useEffect and useRef** for Vanta.js setup here

  return (
    // **3. UPDATE THE OUTER DIV**
    // We add a background image, set it to cover, and center it.
    <div
      className="h-screen flex items-center justify-center text-center relative overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${fullPageBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* 4. ADD AN OVERLAY for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

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
        
        {/* **5. OPTIONAL: KEEP your small rotating logo** (make sure the path is correct) */}
        {/* If you want the rotating logo, you'll need to define geminiLogo and the animation */}
        {/*
        <motion.img
          src={geminiLogo} // make sure to re-import geminiLogo if you use it
          alt="logo"
          className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        */}
      </motion.div>
    </div>
  );
}