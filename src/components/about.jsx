import { useState } from "react";
import EditableSection from "./EditableSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function About() {
  const [about, setAbout] = useState({
    title: "About Me",
    description:
      "I build scalable MERN stack applications with modern UI and strong backend architecture.",
    education: "B.Tech — Anna University",
    shortTermGoal:
      "To strengthen my expertise in full-stack development and contribute to impactful real-world projects.",
    longTermGoal:
      "To become a skilled software architect building scalable and high-performance applications.",
    skills: [
      "MongoDB",
      "MySQL",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "shadcn/ui",
      "JWT Authentication",
    ],
  });

  return (
    <section id="about" className="bg-[#070513] text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <EditableSection
          onSave={() => {}}
          form={
            <>
              <Input
                className="mb-4"
                value={about.title}
                onChange={(e) =>
                  setAbout({ ...about, title: e.target.value })
                }
              />

              <Textarea
                className="mb-4"
                value={about.description}
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
              />

              <Input
                className="mb-4"
                value={about.education}
                onChange={(e) =>
                  setAbout({ ...about, education: e.target.value })
                }
              />

              <Textarea
                className="mb-4"
                value={about.shortTermGoal}
                onChange={(e) =>
                  setAbout({ ...about, shortTermGoal: e.target.value })
                }
              />

              <Textarea
                className="mb-4"
                value={about.longTermGoal}
                onChange={(e) =>
                  setAbout({ ...about, longTermGoal: e.target.value })
                }
              />

              <Input
                placeholder="Enter skills separated by commas"
                value={about.skills.join(", ")}
                onChange={(e) =>
                  setAbout({
                    ...about,
                    skills: e.target.value
                      .split(",")
                      .map((skill) => skill.trim()),
                  })
                }
              />
            </>
          }
        >
          <h2 className="text-3xl font-bold mb-6">
            {about.title}
          </h2>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            {about.description}
          </p>

          <p className="text-emerald-400 mb-4 font-medium">
            🎓 {about.education}
          </p>

          <div className="space-y-4 mb-8 text-left">
            <div>
              <h3 className="text-lg font-semibold">
                Short-Term Goal
              </h3>
              <p className="text-zinc-400">
                {about.shortTermGoal}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Long-Term Goal
              </h3>
              <p className="text-zinc-400">
                {about.longTermGoal}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {about.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </EditableSection>
      </div>
    </section>
  );
}