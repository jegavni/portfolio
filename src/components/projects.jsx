import { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full MERN stack e-commerce platform with authentication, cart system, cart management, protected routes and secure backend APIs. Deployed using Vercel and Render.",
      live: "https://ecommerce-t7cc.onrender.com/",
      github: "https://github.com/jegavni/ecommerce",
    },
    {
      title: "Employee Management System",
      description:
        "Complete CRUD application with image upload, real-time validation, modal-based UI and RESTful backend using Express. Built with React and Node.js.",
      live: "https://your-employee-link.com",
      github: "https://github.com/jegavni/employee-management",
    },
    {
      title: "Chat Application (Socket.io)",
      description:
        "Real-time chat application built using Socket.io for instant messaging, online status tracking, and live communication between users.",
      live: "https://your-chatapp-link.com",
      github: "https://github.com/jegavni/chatapp",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern responsive developer portfolio with editable sections and contact form email integration using Nodemailer.",
      live: "https://your-portfolio-link.com",
      github: "https://github.com/jegavni/portfolio",
    },
  ];

  return (
    <section id="projects" className="bg-[#070513] text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-emerald-500 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm font-medium transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-emerald-500 px-4 py-2 rounded text-sm font-medium hover:bg-emerald-500 hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}