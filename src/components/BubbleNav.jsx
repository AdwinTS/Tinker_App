// src/components/BubbleNav.jsx (or wherever you define your navigation)

import React from 'react';
import BubbleMenu from './BubbleMenu'; 

const tinkHackItems = [
 
  { label: 'Overview', href: '#overview', ariaLabel: 'Event Overview', rotation: -8, hoverStyles: { bgColor: '#06b6d4', textColor: '#000000' } },
  { label: 'Timeline', href: '#timeline', ariaLabel: 'Hackathon Schedule', rotation: 8, hoverStyles: { bgColor: '#6366f1', textColor: '#ffffff' } },
  { label: 'Register', href: '#register', ariaLabel: 'Register for Event', rotation: -8, hoverStyles: { bgColor: '#22d3ee', textColor: '#000000' } },
  { label: 'Sponsors', href: '#sponsors', ariaLabel: 'View Sponsors', rotation: 8, hoverStyles: { bgColor: '#374151', textColor: '#ffffff' } },
  { label: 'Contact', href: '#contact', ariaLabel: 'Contact Information', rotation: -8, hoverStyles: { bgColor: '#a855f7', textColor: '#ffffff' } }
];


export default function BubbleNavWrapper() {

  
  const tinkHackLogo = (
    <span className="text-2xl font-extrabold text-cyan-400">TinkHack</span>
  );

  return (
    <BubbleMenu
      logo={tinkHackLogo}
      items={tinkHackItems}
      menuAriaLabel="TinkHack navigation menu"
      
      
      menuBg="#111827" // Darker background for the closed button (gray-900 equivalent)
      menuContentColor="#ffffff" 
      
      
      useFixedPosition={true} 
      
    
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
}
