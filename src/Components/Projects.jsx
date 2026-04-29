import { ExternalLink, Code2, Loader, CheckCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "FreshMinds Academy",
    description:
      "An educational platform built to help Ethiopian university students understand core subjects easily and succeed academically.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    github: "#",
    demo: "#",
    status: "In Progress",
    type: "ongoing",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A fully responsive developer portfolio showcasing projects, skills, and contact system. Built with modern UI/UX design principles.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    github: "#",
    demo: "#",
    status: "Completed",
    type: "completed",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            A mix of ongoing development and completed real-world applications.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition group"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* STATUS BADGE */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-white">
                  {project.type === "ongoing" ? (
                    <Loader size={14} className="text-blue-400 animate-spin" />
                  ) : (
                    <CheckCircle size={14} className="text-green-400" />
                  )}

                  {project.status}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* TOP ROW */}
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-xs px-3 py-1 border rounded-full ${
                      project.type === "ongoing"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-green-500/10 text-green-400 border-green-500/20"
                    }`}
                  >
                    {project.type === "ongoing" ? "Ongoing" : "Completed"}
                  </span>

                  <div className="flex gap-3 text-gray-400">
                    <a href={project.github}>
                      <FaGithub
                        size={18}
                        className="hover:text-white transition"
                      />
                    </a>

                    <a href={project.demo}>
                      <ExternalLink
                        size={18}
                        className="hover:text-white transition"
                      />
                    </a>
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300 flex items-center gap-1"
                    >
                      <Code2 size={12} className="text-blue-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white border-b border-white/10 pb-1"
          >
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
