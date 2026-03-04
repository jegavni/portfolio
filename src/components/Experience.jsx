import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      role: "Software Intern",
      company: "Stackup Pvt Ltd",
      period: "April 2025 — Present",
      points: [
        "Developing full-stack MERN applications with authentication and RESTful APIs",
        "Building responsive UI components using React and Tailwind CSS",
        "Integrating backend services with MongoDB and Express",
        "Collaborating on real-world projects following scalable architecture practices",
        "Debugging, testing, and optimizing application performance",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2024 — 2025",
      points: [
        "Built MERN applications with authentication and secure API integration",
        "Designed modern, responsive user interfaces",
        "Deployed production-ready applications on cloud platforms",
      ],
    },
    {
      role: "Backend Developer",
      company: "Learning Phase",
      period: "2023 — 2024",
      points: [
        "Developed Node.js and Express APIs",
        "Designed MongoDB schemas and data models",
        "Implemented JWT-based authentication systems",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-[#070513] text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="relative border-l border-zinc-800 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="pl-8 relative">
              <div className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-emerald-500"></div>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>

                  <p className="text-emerald-400 text-sm mb-3">
                    {exp.company} • {exp.period}
                  </p>

                  <ul className="space-y-2 text-zinc-400 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}