// src/components/Contact.js
import { motion } from "framer-motion";

// Helper component for the animated contact card
const ContactCard = ({ title, content, link, icon, glow }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: glow ? "0 0 40px rgba(52, 211, 235, 1)" : "0 0 10px rgba(100, 100, 100, 0.5)" }}
    viewport={{ once: true, amount: 0.5 }}
    className={`
      flex flex-col items-center justify-center p-8 text-center 
      rounded-3xl shadow-2xl transition-all duration-300 backdrop-blur-sm
      border ${glow ? 'border-cyan-500/50 bg-gray-900/70' : 'border-gray-700/50 bg-gray-800/50'}
      ${glow ? 'animate-pulse-slow' : ''}
    `}
    // Custom animation for a subtle pulse glow on the primary card
    style={{
        '--tw-animate-pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }}
  >
    <div className={`text-4xl mb-4 ${glow ? 'text-cyan-400' : 'text-purple-400'}`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 break-words">{content}</p>
  </motion.a>
);

export default function Contact() {
  // SVG Icons
  const MailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );
  const SocialIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 0-12 0c0 7 8 13 8 13s8-6 8-13z"/><circle cx="12" cy="7" r="2"/></svg>
  );
  
  return (
    <section
      id="contact"
      className="min-h-screen bg-black flex flex-col items-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
      >
        Connect with the Hub
      </motion.h2>
      
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="z-10 text-xl text-gray-400 mb-16 text-center max-w-2xl"
      >
        We're here to help you tinker. Reach out to the team for any queries regarding TinkHack 2025.
      </motion.p>

      {/* Contact Cards Grid */}
      <div className="z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Primary Email (Has the glow effect) */}
        <ContactCard
          title="Official Query Mail"
          content="team@tinkerhubmec.in"
          link="mailto:team@tinkerhubmec.in"
          icon={MailIcon}
          glow={true}
        />

        {/* Card 2: Social Media Link */}
        <ContactCard
          title="TinkerHub MEC"
          content="Follow us for real-time updates"
          link="https://instagram.com/tinkerhubmec" // Replace with actual social link
          icon={SocialIcon}
          glow={false}
        />
        
        {/* Card 3: Discord/Support Link */}
        <ContactCard
          title="Discord / Chat Support"
          content="Join our community server"
          link="https://discord.gg/tinkerhubmec" // Replace with actual discord link
          icon={SocialIcon}
          glow={false}
        />
      </div>
      
      {/* Footer Text */}
      <p className="z-10 mt-20 text-gray-600 text-sm text-center">
        TinkHack 2025 is proudly organized by TinkerHub MEC.
      </p>

    </section>
  );
}