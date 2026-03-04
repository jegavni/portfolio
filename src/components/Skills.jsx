import { useState } from "react";
import EditableSection from "./EditableSection";
import { Input } from "@/components/ui/input";

export default function Skills() {
  const [skills, setSkills] = useState([
    "MongoDB",
    "Express",
    "React",
    "Node.js",
  ]);

  const handleChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  return (
  <section id="projects" className="bg-[#070513] text-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        <EditableSection
          onSave={() => {}}
          form={
            <div className="space-y-2">
              {skills.map((skill, i) => (
                <Input
                  key={i}
                  value={skill}
                  onChange={(e) => handleChange(i, e.target.value)}
                />
              ))}
            </div>
          }
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded"
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