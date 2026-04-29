import { motion } from "framer-motion";
import { User, GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-2xl group-hover:bg-blue-500/30 transition duration-500" />

          <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <User className="text-blue-500" />
              My Journey
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I’m a Software Engineering student focused on becoming a strong
              MERN stack developer. My journey started with HTML and CSS and
              evolved into building full-stack applications with real-world
              impact.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I also built{" "}
              <span className="text-white font-semibold">
                Freshminds Academy
              </span>
              , a platform that helps Ethiopian students understand university
              courses in a simple and practical way.
            </p>

            {/* INFO BLOCKS */}
            <div className="space-y-5">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineering Student
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Current Focus
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">MERN Stack Developer</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Skillset
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* TITLE */}
          <h3 className="text-4xl font-bold leading-tight">
            Building modern apps that connect{" "}
            <span className="text-blue-500">people</span> and{" "}
            <span className="text-blue-500">technology</span>
          </h3>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-400">
            I focus on creating scalable, clean, and efficient full-stack
            applications. I enjoy solving real-world problems through code and
            improving user experience across all devices.
          </p>

          {/* FEATURE GRID */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Scalable",
                desc: "Built for growth and real users.",
              },
              {
                title: "Efficient",
                desc: "Optimized backend and APIs.",
              },
              {
                title: "Responsive",
                desc: "Works perfectly on all devices.",
              },
              {
                title: "Modern",
                desc: "Using latest web technologies.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition"
              >
                <span className="text-blue-500 font-bold text-lg">
                  {item.title}
                </span>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
