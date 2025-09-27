// src/components/Sponsors.js
import { motion } from "framer-motion";

const sponsors = [
  { name: "GlobalTech", logo: "/sponsors/globaltech.png" },
  { name: "Quantum Innovations", logo: "/sponsors/quantum.png" },
  { name: "CipherSoft", logo: "/sponsors/ciphersoft.png" },
  { name: "DevX", logo: "/sponsors/devx.png" },
  { name: "CodeHub", logo: "/sponsors/codehub.png" },
  { name: "DigitalForge", logo: "/sponsors/digitalforge.png" },
  { name: "NextGen Solutions", logo: "/sponsors/nextgen.png" },
  { name: "TechWave", logo: "/sponsors/techwave.png" },
];

// Animation variants for the logos
const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="min-h-screen bg-black flex flex-col items-center px-6 py-20 relative overflow-hidden" // Changed to bg-black for continuity with Hero
    >
      {/* Optional: Add subtle background grid/pattern for texture */}
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

      {/* Title with slightly larger text for impact */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
      >
        Our Power Sources
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="z-10 text-xl text-gray-400 mb-16 text-center max-w-2xl"
      >
        We are proudly supported by the industry leaders who power innovation and growth.
      </motion.p>

      <div className="z-10 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl w-full">
        {sponsors.map((sponsor, i) => (
          <motion.div
            key={i}
            // Animate each logo as it scrolls into view
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of item is visible
            
            // Hover effect and styling
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 211, 235, 0.6)" }} // Added glowing shadow
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-2xl flex items-center justify-center cursor-pointer transition duration-300"
          >
            {/* The image should be styled to blend with the dark theme */}
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              // **Note:** Your logos should ideally be PNGs or SVGs with a transparent background.
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}