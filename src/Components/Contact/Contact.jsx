import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sisayshimelash@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* Glow background */}
      <div className={styles.bgGradient} />

      <div className={styles.container}>
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.badge}
        >
          Get In Touch
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          Let's <span className={styles.titleHighlight}>Build Something</span> Together
        </motion.h2>

        <p className={styles.subtitle}>
          I'm open to internships, collaborations, and real-world projects.
          Let's turn ideas into scalable applications.
        </p>

        {/* Cards */}
        <div className={styles.cardsGrid}>
          {/* EMAIL CARD */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className={styles.contactCard}
          >
            <div className={styles.cardIcon}>
              <Mail size={32} />
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>Email</p>

              <span className={styles.cardValue}>
                sisayshimelash@gmail.com
              </span>

              {/* Copy Button */}
              <button onClick={copyEmail} className={styles.copyButton}>
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
            className={styles.contactCard}
          >
            <div className={styles.cardIcon}>
              <FaLinkedin size={34} />
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>LinkedIn</p>
              <span className={styles.cardValue}>Sisay Shimelash</span>
            </div>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            whileHover={{ y: -10, scale: 1.02 }}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.cardIcon}>
              <FaGithub size={34} />
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardLabel}>GitHub</p>
              <span className={styles.cardValue}>Sisay Shimelash</span>
            </div>
          </motion.a>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.footerNote}
        >
          Available for internship • Remote collaboration • Freelance projects
        </motion.p>
      </div>
    </section>
  );
}
