import { motion } from "framer-motion";
import { User, GraduationCap, Code } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Background glow */}
      <div className={styles.bgGradient} />

      <div className={styles.container}>
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.leftCard}
        >
          <div className={styles.cardGlow} />

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <User />
              My Journey
            </h2>

            <p className={styles.cardText}>
              I'm an AI-Powered Full-Stack Developer specializing in building intelligent web applications 
              that combine the power of modern frameworks with cutting-edge AI technologies. 
              My expertise spans from crafting seamless user experiences to architecting robust backend systems 
              with AI integration.
            </p>

            <p className={styles.cardText}>
              I create{" "}
              <span className={styles.cardTextHighlight}>
                production-ready applications
              </span>{" "}
              with features like RAG systems, semantic search, vector embeddings, and AI-driven Q&A platforms. 
              Currently pursuing Software Engineering to deepen my technical foundation while actively 
              building real-world solutions.
            </p>

            {/* INFO BLOCKS */}
            <div className={styles.infoBlocks}>
              <motion.div whileHover={{ scale: 1.03 }} className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <Code size={20} />
                </div>
                <div className={styles.infoText}>
                  <h4>AI-Powered Full-Stack Developer</h4>
                  <p>Skillset</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} className={styles.infoBlock}>
                <div className={styles.infoIcon}>
                  <GraduationCap size={20} />
                </div>
                <div className={styles.infoText}>
                  <h4>Software Engineering Student</h4>
                  <p>Education</p>
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
          className={styles.rightContent}
        >
          {/* TITLE */}
          <h3 className={styles.mainTitle}>
            Building intelligent apps that blend{" "}
            <span className={styles.mainTitleHighlight}>AI capabilities</span> with{" "}
            <span className={styles.mainTitleHighlight}>full-stack development</span>
          </h3>

          {/* DESCRIPTION */}
          <p className={styles.mainDescription}>
            I create next-generation applications by integrating AI models, semantic search, 
            and RAG systems into robust full-stack architectures. Every project combines powerful 
            backend engineering with intelligent, context-aware features.
          </p>

          {/* FEATURE GRID */}
          <div className={styles.featureGrid}>
            {[
              {
                title: "AI Integration",
                desc: "Gemini, RAG systems.",
              },
              {
                title: "Scalable Architecture",
                desc: "Service-layer, MySQL optimization.",
              },
              {
                title: "Modern Frontend",
                desc: "React 19, Vite, animations.",
              },
              {
                title: "Secure Backend",
                desc: "JWT, bcrypt, validation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={styles.featureCard}
              >
                <span className={styles.featureTitle}>{item.title}</span>
                <p className={styles.featureDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
