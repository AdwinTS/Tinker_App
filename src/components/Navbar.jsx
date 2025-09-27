// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

// --- Configuration ---
const navItems = [
  { name: 'Overview', href: '#overview' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Register', href: '#register' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#overview'); // Mock for the active section

  const { scrollY } = useScroll();

  // 1. Logic to change background on scroll
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    // In a full app, you would add IntersectionObserver logic here to set activeSection
    // based on which section is in the viewport.
  });

  // 2. Component for the Nav Link (using motion for the active indicator)
  const NavLink = ({ item }) => {
    const isActive = item.href === activeSection;

    return (
      <a
        href={item.href}
        onClick={() => setActiveSection(item.href)} // Simple click handler for demo
        className={`
          relative px-2 py-1 transition-all duration-300 font-medium 
          ${isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-200'}
        `}
      >
        {item.name}
        {isActive && (
          <motion.div
            layoutId="active-nav-indicator"
            className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full"
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
        )}
      </a>
    );
  };
  
  // 3. Simple Mobile Toggle (for responsive design)
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 
        ${scrolled 
          ? 'bg-black/90 shadow-xl border-b border-gray-700/50' 
          : 'bg-black/20 backdrop-blur-md' // Enhanced transparent look
        }`
      }
    >
      <div className="text-cyan-400 font-extrabold text-2xl tracking-wider">TinkHack</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Hamburger Icon (Using SVG) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={false}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 w-64 h-full bg-gray-900/95 backdrop-blur-lg shadow-2xl p-6 pt-20 md:hidden flex flex-col space-y-4"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => {
              setActiveSection(item.href);
              setIsMenuOpen(false);
            }}
            className="text-white text-xl font-medium border-b border-gray-700 pb-2 hover:text-cyan-400"
          >
            {item.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
}