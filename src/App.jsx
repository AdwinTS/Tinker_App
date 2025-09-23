// src/App.js
import Hero from './components/Hero';
import EventOverview from './components/EventOverview';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';


function App() {
  return (
    <main className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Event Overview */}
      <EventOverview />

      {/* Timeline */}
      <Timeline />

      {/* Registration */}
      <Registration />

      {/* Sponsors */}
      <Sponsors />

      {/* Contact */}
      <Contact />
    </main>
  );
}

export default App;
