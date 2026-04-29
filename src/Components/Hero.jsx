import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-500/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
            Available for Internships
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-blue-500">Sisay Shimelash</span> 👋
            <br />
            MERN Stack Developer
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            I build scalable web applications using modern technologies and help
            Ethiopian students succeed through my platform{" "}
            <span className="text-white font-semibold">Freshminds Academy</span>
            .
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition duration-500"></div>

            {/* Image */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={profile}
                alt="Sisay"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider">
                Ready to Build 🚀
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
