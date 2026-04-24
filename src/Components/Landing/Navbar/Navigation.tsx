
import logo from "../../../assets/2.png";
export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-white/5 shadow-[0_0_20px_rgba(124,58,237,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 cursor-pointer group">
            <a href="#home" className="relative">
              <div className="absolute inset-0 bg-[#7c3aed]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={logo} alt="Logo" loading="lazy" className="relative h-12 drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              Home
            </a>
            <a href="#about" className="text-foreground/80 hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              About me
            </a>
            <a href="#experience" className="text-foreground/80 hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              Experience
            </a>
            <a href="#skills" className="text-foreground/80 hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              Skill
            </a>
            <a href="#projects" className="text-foreground/80 hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              Projects
            </a>
            {/* <a href="#testimonials" className="text-foreground/80 hover:text-white transition-all hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              Testimonials
            </a> */}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="px-6 py-2 border border-white/20 rounded-full text-white/90 bg-white/5 hover:bg-white/10 hover:border-[#7c3aed]/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14" />
              </svg>
              Download CV
            </a>
            <a href="#contact" className="px-6 py-2 bg-linear-to-r from-[#6d28d9] to-[#a855f7] rounded-full text-white hover:opacity-90 transition-all shadow-[0_8px_24px_rgba(139,77,255,0.35)] hover:shadow-[0_12px_32px_rgba(139,77,255,0.5)]">
              Contact me
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
