export default function Timeline() {
  const events = [
    { time: "Day 1 - 9:00 AM", activity: "Hackathon Kickoff" },
    { time: "Day 1 - 12:00 PM", activity: "Workshops & Mentoring" },
    { time: "Day 2 - 9:00 AM", activity: "Project Submission" },
    { time: "Day 2 - 2:00 PM", activity: "Final Presentations" },
    { time: "Day 2 - 5:00 PM", activity: "Closing Ceremony" },
  ];

  return (
    <section className="py-16 bg-gray-100 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {events.map((e, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:justify-between p-4 bg-white shadow rounded-lg">
            <span className="font-semibold text-purple-700">{e.time}</span>
            <span className="text-gray-800">{e.activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
