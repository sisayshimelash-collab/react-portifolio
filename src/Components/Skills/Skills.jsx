import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiApachespark,
  SiVite,
  SiAxios,
  SiVitest,
} from "react-icons/si";

import {
  Shield,
  Lock,
  Upload,
  Key,
  Sparkles,
  Brain,
  Zap,
  FileSearch,
  Database as DatabaseIcon,
  Search,
  CheckCircle,
  Route,
  Layers,
} from "lucide-react";

import styles from "./Skills.module.css";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Vite", icon: SiVite, color: "text-purple-500" },
      { name: "Axios", icon: SiAxios, color: "text-blue-400" },
      { name: "React Router", icon: Route, color: "text-red-400" },
      { name: "Context API", icon: Layers, color: "text-cyan-500" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-300" },
      { name: "REST API", icon: SiApachespark, color: "text-indigo-400" },
      { name: "JWT Auth", icon: Key, color: "text-yellow-500" },
      { name: "bcrypt", icon: Lock, color: "text-red-400" },
      { name: "Multer", icon: Upload, color: "text-orange-400" },
      { name: "Validation", icon: Shield, color: "text-green-400" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
      { name: "Schema Design", icon: DatabaseIcon, color: "text-indigo-400" },
      { name: "Full-Text Search", icon: FileSearch, color: "text-purple-400" },
      { name: "Query Optimization", icon: Search, color: "text-teal-400" },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Google Gemini", icon: Sparkles, color: "text-pink-400" },
      { name: "Vector Embeddings", icon: Brain, color: "text-purple-500" },
      { name: "RAG", icon: Zap, color: "text-yellow-400" },
      { name: "Semantic Search", icon: Search, color: "text-cyan-400" },
      { name: "PDF Processing", icon: FileSearch, color: "text-orange-400" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Vitest", icon: SiVitest, color: "text-yellow-500" },
      { name: "React Testing", icon: CheckCircle, color: "text-green-500" },
    ],
  },
  {
    category: "Tools",
    skills: [{ name: "Git", icon: FaGitAlt, color: "text-red-500" }],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Tech <span className={styles.titleHighlight}>Stack</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies I use to build full-stack web applications with AI
            integration
          </p>
        </motion.div>

        {/* CATEGORIES */}
        <div className={styles.categories}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category}>
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className={styles.categoryTitle}
              >
                {category.category}
              </motion.h3>

              {/* Skills Grid */}
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      className={styles.skillCard}
                    >
                      <div className={styles.skillIcon}>
                        <Icon size={36} className={skill.color} />
                      </div>
                      <span className={styles.skillName}>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
