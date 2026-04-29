import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiApachespark,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },

  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },

  // ✅ UPDATED: MongoDB → MySQL
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },

  { name: "REST API", icon: SiApachespark, color: "text-indigo-400" },

  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="text-blue-500">Stack</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Technologies I use to build full-stack web applications
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition"
              >
                <Icon size={40} className={skill.color} />
                <span className="text-xs text-gray-300">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
