import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-blue-500 font-mono">
          SISAY.DEV
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          {/* Social Icons (FIXED) */}
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a
              href="https://github.com/sisayshimelash-collab"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sisay-shimelash-2b6732379?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:sisayshimelash@email.com"
              className="text-gray-400 hover:text-white transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <div className="flex gap-6 pt-4 border-t border-white/10">
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
