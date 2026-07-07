import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./NavBar.module.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          SISAY.DEV
        </a>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}

          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/sisayshimelash-collab"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sisay-shimelash-2b6732379?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:sisayshimelash@email.com"
              className={styles.socialLink}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className={styles.mobileButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className={styles.mobileSocials}>
            <a href="https://github.com/sisayshimelash-collab">
              <FaGithub size={24} />
            </a>

            <a href="https://www.linkedin.com/in/sisay-shimelash-2b6732379?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <FaLinkedin size={24} />
            </a>

            <a href="mailto:sisayshimelash@email.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
