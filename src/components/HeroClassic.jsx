import { Button } from "@/components/ui/button";

export default function HeroClassic() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-[#070513] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 rounded-full border-4 border-emerald-500 p-2 overflow-hidden shadow-lg shadow-emerald-500/20">
            <img
              src="https://res.cloudinary.com/djyg0sy4u/iage/upload/v1772603967/products/updated-1772603966861.jpg"
              alt="Jegatheesh"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Intro Content */}
        <div className="text-center md:text-left">
          <p className="text-zinc-400 mb-3 tracking-wide">
            Hi, I'm
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Jegatheesh
          </h1>

          <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg">
            A freelance{" "}
            <span className="text-emerald-400 font-medium">
              Full Stack Developer
            </span>{" "}
            specializing in MERN stack applications with modern UI and scalable backend systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-6"
            >
              Hire Me
            </Button>

           <Button
  variant="outline"
  onClick={() =>
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth" })
  }
  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black px-6"
>
  View Projects
</Button>
          </div>
        </div>

      </div>
    </section>
  );
}