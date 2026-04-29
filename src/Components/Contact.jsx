import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sisayshimelash@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 mb-5 text-xs font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
        >
          Get In Touch
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Let's <span className="text-blue-500">Build Something</span> Together
        </motion.h2>

        <p className="text-gray-400 mb-12 text-base md:text-lg max-w-2xl mx-auto">
          I'm open to internships, collaborations, and real-world projects.
          Let’s turn ideas into scalable applications.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* EMAIL CARD */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 hover:border-blue-500/30 transition relative"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500/10 text-blue-500 rounded-2xl shadow-lg shadow-blue-500/10">
              <Mail size={32} />
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">
                Email
              </p>

              <span className="text-white text-sm break-all">
                sisayshimelash@gmail.com
              </span>

              {/* Copy Button */}
              <button
                onClick={copyEmail}
                className="mt-3 flex items-center gap-2 text-xs text-blue-400 hover:text-white transition"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </motion.div>

          {/* LINKEDIN */}
          <motion.a
            whileHover={{ y: -10, scale: 1.02 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 hover:border-blue-500/30 transition"
          >
            <FaLinkedin size={34} className="text-blue-500" />

            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">
                LinkedIn
              </p>
              <span className="text-white hover:text-blue-500 transition">
                Sisay Shimelash
              </span>
            </div>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            whileHover={{ y: -10, scale: 1.02 }}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 hover:border-blue-500/30 transition"
          >
            <FaGithub size={34} className="text-blue-500" />

            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">
                GitHub
              </p>
              <span className="text-white hover:text-blue-500 transition">
                Sisay Shimelash
              </span>
            </div>
          </motion.a>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-600 text-xs mt-12"
        >
          Available for internship • Remote collaboration • Freelance projects
        </motion.p>
      </div>
    </section>
  );
}
