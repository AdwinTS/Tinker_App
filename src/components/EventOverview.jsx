

import AccordionItem from './AccordionItem'; 
import { motion } from 'framer-motion';


const overviewData = [
  { 
    title: "What is TinkHack 2025?", 
    content: (
      <p>TinkHack 2025 is the flagship hackathon by <span className="text-cyan-400">TinkerHub MEC</span>. It brings together the brightest innovators to solve real-world problems with creativity and technology. Join us for 48 hours of intense coding, learning, and collaboration.</p>
    )
  },
  { 
    title: "Who is this Hackathon for?", 
    content: (
      <div className="space-y-3">
        <p>TinkHack is primarily designed for college students (undergraduate and postgraduate) from all streams who are passionate about technology, design, and problem-solving.</p>
        <p className="text-gray-400">It is perfect for:</p>
        <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
          <li>Aspiring Developers (frontend, backend, full-stack)</li>
          <li>Product Designers (UI/UX)</li>
          <li>Data Scientists & ML Enthusiasts</li>
          <li>Innovators with a unique idea, regardless of their coding expertise!</li>
        </ul>
      </div>
    )
  },
  { 
    title: "Can anyone participate? (Eligibility & Team Info)", 
    content: (
      <div className="space-y-3">
        <p>Yes, the competition is open! While we welcome participants from all colleges, the event is geared towards current students.</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li>Team Size: Teams must consist of 2 to 4 members. Solo participation is generally discouraged but can be requested.</li>
          <li>Cross-College Teams: Mixing students from different colleges is allowed and highly encouraged to foster collaboration.</li>
          <li>Prerequisites:Just bring your laptop, enthusiasm, and a hunger to build something amazing!</li>
        </ul>
      </div>
    )
  },
  { 
    title: "Key Dates and Location", 
    content: (
      <ul className="list-disc list-inside space-y-1 text-gray-300">
        <li>Dates: October 25th - 27th (48 hours)</li>
        <li>Venue: Main Auditorium, MEC Campus</li>
        <li>Registration Deadline: October 15th</li>
      </ul>
    )
  },
  { 
    title: "Prizes & Swag", 
    content: (
      <p>Win cash prizes, exclusive internships, and tons of cool swag from our sponsors! The total prize pool details will be revealed soon on the sponsors page. Expect amazing goodies for all participants!</p>
    )
  }
];
export default function EventOverview() {
  return (
    <section
      id="overview"
      className="min-h-screen bg-[#0d0c15] flex flex-col items-center px-6 py-20" // Use a dark theme color
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-16"
      >
        Event Overview
      </motion.h2>

      {/* Accordion Container */}
      <div className="w-full max-w-3xl space-y-4">
        {overviewData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gray-800/60 rounded-xl shadow-2xl backdrop-blur-sm overflow-hidden"
          >
            <AccordionItem 
              title={item.title} 
              content={item.content} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
