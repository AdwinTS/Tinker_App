// src/components/Registration.js
import { motion } from "framer-motion";

// **Define the external registration link here**
const REGISTRATION_LINK = "YOUR_EXTERNAL_REGISTRATION_FORM_LINK"; 
// Example: "https://forms.google.com/d/e/1FAIpQLScz7tM_tX_fFmQ/viewform"

export default function Registration() {
  return (
    <section
      id="register"
      className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Optional: Add subtle background animation/pattern for visual interest */}
      <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", damping: 10, stiffness: 100 }}
        viewport={{ once: true }}
        className="z-10 text-center max-w-4xl"
      >
        
        {/* New motivational sentence */}
        <h1 className="text-2xl md:text-3xl font-light text-gray-400 mb-6">
          Ready to turn ideas into reality?
        </h1>
        
        {/* Main Title / CTA */}
        <motion.h2
          className="text-6xl md:text-8xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tighter drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Let's Enter the CodeVerse!
        </motion.h2>

        {/* The Animated Button that links out */}
        <motion.a
          href={REGISTRATION_LINK}
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer"
          
          // Framer Motion properties
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(52, 211, 235, 1)" }} // Glowing effect on hover
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}

          // Tailwind Styling
          className="inline-block px-12 py-4 mt-8 
                     bg-gradient-to-r from-cyan-500 to-blue-600 
                     text-black text-2xl font-bold 
                     rounded-full shadow-xl 
                     transition-all duration-300 
                     transform hover:rotate-1"
        >
          Register for TinkHack 2025
        </motion.a>

        <p className="mt-6 text-base text-gray-500">
            Clicking the button above will take you to the official registration form.
        </p>

      </motion.div>
    </section>
  );
}