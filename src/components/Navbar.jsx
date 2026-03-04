import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070513]/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="font-bold text-lg cursor-pointer hover:text-emerald-400 transition"
        >
          Jegatheesh
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-white transition"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-white transition"
          >
            Experience
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-white transition"
          >
            Portfolio
          </button>
        </nav>

        {/* Contact Button */}
        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-emerald-500 hover:bg-emerald-600 text-black"
        >
          Contact Me
        </Button>

      </div>
    </header>
  );
}