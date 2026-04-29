import { User, GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CARD */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-2xl group-hover:bg-blue-500/30 transition duration-500"></div>

          <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <User className="text-blue-500" /> My Journey
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I’m a Software Engineering student focused on becoming a strong
              MERN stack developer. My journey started with simple HTML and CSS,
              but quickly grew into building full web applications with
              real-world functionality.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Beyond coding, I’m passionate about helping Ethiopian students
              through my platform{" "}
              <span className="text-white font-semibold">
                Freshminds Academy
              </span>
              , where I simplify complex university courses and share practical
              knowledge.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineering Student
                  </h4>
                  <p className="text-xs text-gray-500 uppercase">
                    Current Focus
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">MERN Stack Developer</h4>
                  <p className="text-xs text-gray-500 uppercase">Skillset</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          <h3 className="text-4xl font-bold leading-tight">
            Building modern apps that connect{" "}
            <span className="text-blue-500">users</span> and{" "}
            <span className="text-blue-500">technology</span>
          </h3>

          <p className="text-lg text-gray-400">
            I focus on creating applications that are clean, fast, and scalable.
            From frontend interfaces to backend logic and databases, I enjoy
            working across the full stack and solving real-world problems.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <span className="text-blue-500 font-bold text-xl">Scalable</span>
              <p className="text-sm text-gray-500">
                Built to handle growth and real users.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <span className="text-blue-500 font-bold text-xl">Efficient</span>
              <p className="text-sm text-gray-500">
                Optimized APIs and performance.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <span className="text-blue-500 font-bold text-xl">
                Responsive
              </span>
              <p className="text-sm text-gray-500">
                Works on all devices smoothly.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
              <span className="text-blue-500 font-bold text-xl">Modern</span>
              <p className="text-sm text-gray-500">
                Using up-to-date technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
