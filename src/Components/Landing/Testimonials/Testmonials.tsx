import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Thomas Shelbi",
    role: "CEO, TechVanguard",
    text: "Fahad's approach to AI integration is truly visionary. He transformed our complex data challenges into seamless, human-like intelligence. His work isn't just code; it's a competitive advantage.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas&backgroundColor=b6e3f4",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Manager at Betopia",
    text: "One of the most talented AI engineers I've ever worked with. The precision of his models and the clean architecture of his pipelines are outstanding. He's always ahead of the curve.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Aurelius",
    role: "Lead Engineer, AI Innovations",
    text: "The way Fahad handles neural network optimization is masterclass. He doesn't just build models; he crafts intelligence that scales. A true asset to any high-stakes project.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=c0aede",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Data Scientist",
    text: "From Pytorch to TensorFlow, Fahad's technical depth is matched only by his creative problem-solving. He makes the impossible feel like a solved problem.",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=d1d4f9",
    rating: 5,
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...testimonials, ...testimonials];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="relative shrink-0 w-110 mx-6 group h-full">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-[#7c3aed]/20 to-[#a855f7]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card body */}
      <div
        className="
          relative
          h-full
          flex flex-col
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          hover:border-[#7c3aed]/50
          transition-all duration-300
          overflow-hidden
        "
      >
        {/* Background Quote Icon */}
        <Quote className="absolute -top-4 -right-2 w-24 h-24 text-white/5 -rotate-12" />

        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#7c3aed]/50 transition-colors">
              <img
                src={item.avatar}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#3fb950] border-2 border-[#13133a] rounded-full" />
          </div>

          <div>
            <h4 className="text-white font-bold text-lg">{item.name}</h4>
            <p className="text-[#8b8bb0] text-sm">{item.role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#f5a623] text-[#f5a623]" />
          ))}
        </div>

        <p className="text-[#c8cee8] text-base leading-relaxed italic relative z-10 flex-1">
          "{item.text}"
        </p>

        {/* Bottom decoration */}
        <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-xs text-[#5c5c7b]">
          <span>Verified Testimonial</span>
          <span className="opacity-50">2024 Project</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center py-28 relative overflow-hidden bg-primary"
    >
      {/* Dynamic Glowing Background Blobs */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-[#7c3aed]/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-[#a855f7]/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-150 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10 text-[#7c3aed] text-xs font-bold uppercase tracking-widest animate-glow">
          Testimonials
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Trusted by{" "}
          <span className="bg-linear-to-r from-[#7c3aed] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
            Industry Leaders
          </span>
        </h2>
        <p className="text-[#8b8bb0] max-w-xl mx-auto text-lg leading-relaxed">
          Insights from the people I've collaborated with on game-changing AI
          solutions.
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="w-full relative py-4">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-48 z-10 bg-linear-to-r from-primary via-primary/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-48 z-10 bg-linear-to-l from-primary via-primary/80 to-transparent" />

        {/* Scrolling track */}
        <div className="flex overflow-hidden group/track h-110">
          <div
            className="flex animate-marquee group-hover/track:[animation-play-state:paused] h-full py-6"
            style={{
              width: "max-content",
            }}
          >
            {marqueeItems.map((item, idx) => (
              <TestimonialCard key={`${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
