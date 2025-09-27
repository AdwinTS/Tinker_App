// src/components/Timeline.js (Your main timeline file)

import TimelineItem from './TimeLineItem'; 
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: "Day 1: Oct 25",
    title: "Kick-off & Theme Reveal",
    content: "The event officially begins! Themes are announced, teams finalize, and the clock starts ticking.",
  },
  {
    date: "Day 2: Oct 26",
    title: "Mentoring Sessions",
    content: "Dedicated time for one-on-one sessions with industry experts and tech leads to refine your project plan.",
  },
  {
    date: "Day 3: Oct 27 (Morning)",
    title: "Final Code Freeze",
    content: "All development must stop. Teams prepare their presentations, demos, and submission materials.",
  },
  {
    date: "Day 3: Oct 27 (Evening)",
    title: "Judging & Prize Ceremony",
    content: "Teams present their final projects to the judges, followed by the announcement of winners.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-black text-white" id="timeline">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-white"
        >
          Hackathon Timeline
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <TimelineItem
                title={event.title}
                content={event.content}
                date={event.date}
                isLast={index === timelineEvents.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}