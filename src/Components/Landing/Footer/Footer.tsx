import { Mail, Phone, Facebook, Linkedin, Github } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Skill", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Testimonial", href: "#testimonials" },
  { name: "Contact me", href: "#contact" },
];
import logo from "../../../assets/2.png";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 flex flex-col items-center gap-12 relative overflow-hidden bg-primary">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#7c3aed]/5 blur-[120px] pointer-events-none" />

      {/* Signature / Logo */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[#7c3aed]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        <a
          href="#home"
          className="relative cursor-pointer block transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            loading="lazy"
            className="h-18 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />
        </a>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 relative z-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-[#c8cee8]/80 text-sm tracking-wide transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.5)] ${
              link.name === "Contact me"
                ? "underline underline-offset-8 decoration-[#7c3aed]/50 hover:decoration-[#7c3aed]"
                : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex items-center gap-6 relative z-10">
        {[
          { icon: <Facebook size={18} />, href: "#" },
          { icon: <Linkedin size={18} />, href: "#" },
          { icon: <Github size={18} />, href: "#" },
        ].map(({ icon, href }, idx) => (
          <a
            key={idx}
            href={href}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#c8cee8] hover:text-[#7c3aed] hover:border-[#7c3aed] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-center items-center gap-12 relative z-10">
        <div className="flex items-center gap-3 text-[#c8cee8] text-sm font-medium group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#7c3aed] transition-colors">
            <Mail
              size={18}
              className="text-white group-hover:text-[#7c3aed] transition-colors"
            />
          </div>
          <span className="group-hover:text-white transition-colors">
            IAfahad24@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#c8cee8] text-sm font-medium group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#7c3aed] transition-colors">
            <Phone
              size={16}
              className="text-white group-hover:text-[#7c3aed] transition-colors"
            />
          </div>
          <span className="group-hover:text-white transition-colors">
            +8801256985223
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-4xl border-t border-white/5 relative z-10" />

      {/* Credit */}
      <div className="text-center relative z-10">
        <p className="text-[#5c5c7b] text-xs">
          © 2024 Istiaq Ahmmed Fahad. All rights reserved.
        </p>
        <p className="text-[#3c3c4b] text-[10px] mt-2 italic">
          Designed with passion by Abu Sayed
        </p>
      </div>
    </footer>
  );
}
