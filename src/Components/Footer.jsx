export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-medium">
            Sisay Shimelash - MERN Developer Portfolio
          </span>
          . All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
