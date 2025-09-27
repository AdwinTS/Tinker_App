// src/App.js
import Hero from "./components/Hero";
import EventOverview from "./components/EventOverview";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <EventOverview />
      <Timeline />
      <Sponsors />
      <Registration />
      <Contact />
    </div>
  );
}

export default App;
