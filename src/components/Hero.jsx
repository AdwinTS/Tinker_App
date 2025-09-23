export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">TinkHack 2025</h1>
      <p className="text-lg max-w-xl">
        The flagship hackathon of TinkerHub MEC – Innovate, Build, and Create with the brightest minds.
      </p>
      <a href="#registration" className="mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-gray-100">
        Register Now
      </a>
    </section>
  );
}
