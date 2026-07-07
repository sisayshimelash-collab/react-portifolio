import { ExternalLink, Code2, Loader, CheckCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import image1 from "../../assets/image.png";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "AI-Powered Evangadi Forum",
    description:
      "Full-stack Q&A platform with AI-powered semantic search and RAG document intelligence. Users can ask questions, get AI-generated answers, and upload PDFs for context-aware responses.",
    tech: [
      "React 19",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "Google Gemini",
      "Vector Embeddings",
      "RAG",
      "JWT Auth",
    ],
    features: [
      "RAG system with vector similarity search",
      "JWT authentication with protected routes",
      "PDF parsing and intelligent chunking",
      "Service-layer architecture with 15+ API endpoints",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    github: "#",
    demo: "#",
    status: "Completed",
    type: "completed",
  },

  {
    title: "ChatGPT Clone",
    description:
      "A fully functional ChatGPT clone with real-time AI conversations. Features include chat history, message streaming, and a clean interface mimicking the original ChatGPT experience.",
    tech: ["React", "Node.js", "Express", "OpenAI API", "CSS Modules"],
    features: [
      "Real-time AI chat with streaming responses",
      "Chat history management",
      "Conversation persistence",
      "Responsive ChatGPT-style interface",
    ],
    image:
      "https://images.unsplash.com/photo-1676277791608-ac0ab0abf4e4?auto=format&fit=crop&q=80&w=1000",
    github: "#",
    demo: "#",
    status: "Completed",
    type: "completed",
  },

  {
    title: "Netflix Clone",
    description:
      "A pixel-perfect Netflix clone featuring movie browsing, trailers, and a complete streaming UI. Integrated with TMDB API for real movie data and responsive design across all devices.",
    tech: ["React", "TMDB API", "CSS Modules", "Axios", "React Router"],
    features: [
      "Movie browsing with categories",
      "Trailer playback integration",
      "Search functionality",
      "Responsive Netflix-style UI",
    ],
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1000",
    github: "#",
    demo: "#",
    status: "Completed",
    type: "completed",
  },

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
    tech: ["React", "CSS Modules", "Framer Motion"],
    image: image1,
    github: "#",
    demo: "#",
    status: "Completed",
    type: "completed",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            My <span className={styles.titleHighlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A mix of ongoing development and completed real-world applications.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />

                <div className={styles.imageOverlay} />

                {/* STATUS BADGE */}
                <div
                  className={`${styles.statusBadge} ${
                    styles[project.type]
                  }`}
                >
                  {project.type === "ongoing" ? (
                    <Loader size={14} className="animate-spin" />
                  ) : (
                    <CheckCircle size={14} />
                  )}
                  {project.status}
                </div>
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                {/* TOP ROW */}
                <div className={styles.topRow}>
                  <span
                    className={`${styles.typeBadge} ${styles[project.type]}`}
                  >
                    {project.type === "ongoing" ? "Ongoing" : "Completed"}
                  </span>

                  <div className={styles.socialLinks}>
                    <a href={project.github}>
                      <FaGithub size={18} />
                    </a>

                    <a href={project.demo}>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* TITLE */}
                <h3 className={styles.projectTitle}>{project.title}</h3>

                {/* DESCRIPTION */}
                <p className={styles.description}>{project.description}</p>

                {/* KEY FEATURES (only for AI project) */}
                {project.features && (
                  <div className={styles.features}>
                    <h4 className={styles.featuresTitle}>Key Features:</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature) => (
                        <li key={feature} className={styles.featureItem}>
                          <span className={styles.featureBullet}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* TECH STACK */}
                <div className={styles.techStack}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      <Code2 size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className={styles.footer}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
