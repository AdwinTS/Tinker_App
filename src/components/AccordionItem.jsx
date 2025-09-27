// src/components/AccordionItem.jsx (Create this new file)

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// For the arrow icon: you'll need to install an icon library like lucide-react (npm install lucide-react)
// For simplicity, we'll use a standard character for the icon
import { ChevronDown } from 'lucide-react'; // If you installed lucide-react

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700/50 w-full">
      {/* Header (The Clickable 'Box Lid') */}
      <motion.button
        className="flex justify-between items-center w-full py-4 px-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        {/* Animated Arrow Icon */}
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-cyan-400"
        >
          {/* Replace this with an actual icon component like <ChevronDown size={24} /> if available */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </motion.div>
      </motion.button>

      {/* Content Body (The 'Open Box Content') */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="py-2 px-4 pb-6 text-gray-300">
              {/* You can render complex content here, not just a string */}
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;