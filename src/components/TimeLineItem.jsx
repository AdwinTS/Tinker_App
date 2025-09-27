// src/components/TimelineItem.jsx (Create this new file)

import React from 'react';

// You'll likely need an icon here. Install a library like lucide-react or heroicons.
// Example: import { Clock } from 'lucide-react'; 

const TimelineItem = ({ title, content, date, isLast }) => {
  return (
    <div className="flex relative items-start pb-12">
      {/* This is the main line and the arrow point.
        The line is created by the ::before pseudo-element.
        The arrow is created by the ::after pseudo-element.
      */}
      <div className="h-full w-1 absolute inset-0 left-3 bg-gray-700 pointer-events-none">
        {/* Hide the line on the last item to prevent it from going past the last event */}
        {!isLast && (
          <div className="absolute top-0 bottom-0 w-full bg-gray-700 group-last:hidden"></div>
        )}
      </div>

      {/* The Arrow and Point (The Connector) */}
      <div className="z-10 flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600 ring-4 ring-gray-900 absolute left-0.5 top-0">
        {/* The Arrowhead is created here using a div and rotation */}
        <div className="w-2 h-2 bg-cyan-600 transform rotate-45 -translate-y-1/2 absolute top-full mt-1.5"></div>
        {/* You can replace this inner div with an Icon component */}
        <div className="w-2 h-2 rounded-full bg-black"></div> 
      </div>

      {/* Content Card */}
      <div className="ml-12 p-4 bg-gray-800 rounded-lg shadow-lg w-full">
        <p className="text-sm font-light text-cyan-400 mb-1">{date}</p>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;