import Navbar from "./components/Navbar";

import HeroClassic from "./components/HeroClassic";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <HeroClassic />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}