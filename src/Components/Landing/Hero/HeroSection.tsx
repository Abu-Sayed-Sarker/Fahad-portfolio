import image from "../../../assets/Istiaq kflghlfk[1] 1 (1).png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-primary"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-150 w-150 rounded-full bg-primary/30 blur-[160px] animate-pulse-slow" />
        <div className="absolute right-[-10%] top-[-10%] h-150 w-150 rounded-full bg-[#4f2ad9]/20 blur-[140px] animate-pulse-slow delay-700" />
        <div className="absolute left-[30%] bottom-[-10%] h-125 w-125 rounded-full bg-[#7c3aed]/15 blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute right-[20%] bottom-[10%] h-100 w-100 rounded-full bg-[#ec4899]/10 blur-[100px] animate-pulse-slow delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Soft backdrop for text readability */}
            <div className="absolute -left-20 -top-20 h-120 w-120 rounded-full bg-white/2 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8 animate-fade-in-up">
              <div>
                <p className="text-[#a78bfa] text-lg font-medium mb-3 tracking-wider uppercase">
                  Hi, I am
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                  Istiaq Ahmmed <span className="text-white/90">Fahad</span>
                </h1>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-linear-to-r from-[#7c3aed] to-transparent" />
                  <p className="text-2xl text-white/90 font-light">
                    HTO at{" "}
                    <span className="font-semibold text-white underline decoration-[#7c3aed]/50 underline-offset-4">
                      Join Venture AI
                    </span>
                  </p>
                </div>
                <p className="text-white/60 text-lg max-w-lg leading-relaxed">
                  A sister concern of the{" "}
                  <span className="text-white/90 font-medium">
                    Betopia Group
                  </span>
                  . Leading the charge in AI innovation and architectural
                  excellence.
                </p>
              </div>

              <div className="pt-4">
                <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-[#7c3aed] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(124,58,237,0.4)] pb-4">
                  AI / ML Engineer
                </h2>
                <p className="text-white/50 text-xl font-light italic">
                  "Researching and Crafting Human-Like Intelligence with Code &
                  Curiosity"
                </p>
              </div>

              {/* Social Links with Glow */}
              <div className="flex gap-5 pt-4">
                {[
                  {
                    icon: "M6.5 9H4v11h2.5V9zM5.2 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM20 13.7c0-3-1.6-4.4-3.8-4.4-1.7 0-2.4 1-2.8 1.7V9H11v11h2.5v-5.7c0-1.5.3-3 2-3 1.7 0 1.8 1.6 1.8 3.1V20H20v-6.3z",
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/istiaq-ahmmed-fahad/"
                  },
                  {
                    icon: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.2-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.6 0 0 .8-.2 2.7 1a9 9 0 0 1 5 0c1.9-1.2 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6a4 4 0 0 1 1 2.7c0 3.9-2.4 4.8-4.6 5 .4.3.8 1 .8 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
                    label: "GitHub",
                    link: "https://github.com/iaf12"
                  },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.link}
                    target="_blank"
                    className="w-12 h-12 relative group flex items-center justify-center border border-white/10 rounded-2xl hover:border-[#7c3aed]/50 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                    aria-label={s.label}
                  >
                    <div className="absolute inset-0 bg-[#7c3aed]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <svg
                      className="w-6 h-6 relative z-10 text-white/70 group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-10">
                <a
                  href="#projects"
                  className="px-10 py-4 border border-white/20 rounded-2xl text-white font-medium bg-white/5 hover:bg-white/10 hover:border-[#7c3aed]/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all text-center backdrop-blur-md"
                >
                  View Projects
                </a>
                <a
                  href="#chat"
                  className="px-10 py-4 bg-linear-to-r from-[#6d28d9] to-[#a855f7] rounded-2xl text-white font-bold hover:opacity-90 transition-all shadow-[0_15px_35px_rgba(139,77,255,0.4)] hover:shadow-[0_20px_45px_rgba(139,77,255,0.6)] hover:-translate-y-1 text-center"
                >
                  Ask AI Fahad
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center animate-slide-in-right">
            {/* Image Frame with Glow */}
            <div className="relative w-full aspect-square max-w-lg">
              <div className="absolute -inset-5 bg-[#7c3aed]/10 blur-[60px] rounded-full animate-pulse-slow pointer-events-none" />

              <div className="absolute inset-8 rounded-[48px] border border-[#7c3aed]/30 rotate-12 animate-float shadow-[0_0_30px_rgba(124,58,237,0.2)]" />
              <div className="absolute inset-4 rounded-[40px] border border-white/10 -rotate-6 backdrop-blur-sm" />

              <div className="absolute inset-8 overflow-hidden rounded-[36px] bg-[#0d0d2b]/50 border border-white/5 shadow-2xl">
                <img
                  src={image}
                  alt="Istiaq Ahmmed Fahad"
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter brightness-110 contrast-105"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute right-0 top-10 w-16 h-16 rounded-3xl border border-[#7c3aed]/40 flex items-center justify-center bg-white/5 backdrop-blur-md animate-float [animation-delay:1s]">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#7c3aed] to-[#a855f7] shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
              </div>
              <div className="absolute -bottom-8 right-12 text-6xl text-white/20 font-light select-none">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
