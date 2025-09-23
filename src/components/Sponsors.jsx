export default function Sponsors() {
  const sponsors = ["Google", "Microsoft", "GitHub", "Figma"]; // replace with logos

  return (
    <section className="py-16 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Sponsors</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((s, idx) => (
          <div key={idx} className="p-4 bg-gray-100 rounded-lg shadow w-32 h-20 flex items-center justify-center">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
