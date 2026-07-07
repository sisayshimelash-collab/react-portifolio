import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left side */}
        <p className={styles.copyright}>
          © {new Date().getFullYear()}{" "}
          <span className={styles.copyrightName}>
            Sisay Shimelash - AI-Powered Full-Stack Developer
          </span>
          . All rights reserved.
        </p>

        {/* Links */}
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
