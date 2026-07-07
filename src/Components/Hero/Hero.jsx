import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profile from "../../assets/profile.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Glow */}
      <div className={styles.bgGlowRight}></div>
      <div className={styles.bgGlowLeft}></div>

      <div className={styles.container}>
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.textContent}
        >
          <span className={styles.badge}>Available for Internships</span>

          <h1 className={styles.title}>
            Hi, I'm <span className={styles.titleHighlight}>Sisay Shimelash</span> 👋
            <br />
            AI-Powered Full-Stack Application Developer
          </h1>

          <p className={styles.description}>
            I specialize in building intelligent, scalable web applications by combining the{" "}
            <span className={styles.descriptionHighlight}>MERN stack</span> with{" "}
            <span className={styles.descriptionHighlight}>AI technologies</span> like Google Gemini, RAG systems, and vector embeddings. 
            From semantic search to context-aware applications, I create solutions that are both powerful and user-friendly.
          </p>

          <div className={styles.buttonGroup}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryButton}
            >
              View Projects <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryButton}
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
          className={styles.imageSection}
        >
          <div className={styles.imageWrapper}>
            {/* Glow */}
            <div className={styles.imageGlow}></div>

            {/* Image */}
            <div className={styles.imageContainer}>
              <img
                src={profile}
                alt="Sisay"
                className={styles.profileImage}
              />
            </div>

            {/* Floating Badge */}
            <div className={styles.floatingBadge}>
              <span>Ready to Build 🚀</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
