import React, { useEffect, useRef, useState } from "react";
import { SquareArrowRight, BadgeCheck, Handshake } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <SquareArrowRight size={40} strokeWidth={1.5} />,
    value: 50,
    prefix: "+",
    label: "Project done successfully",
  },
  {
    icon: <Handshake size={40} strokeWidth={1.5} />,
    value: 100,
    suffix: "%",
    label: "Commitments Fulfilled",
  },
  {
    icon: <BadgeCheck size={40} strokeWidth={1.5} />,
    value: 2,
    prefix: "+",
    label: "Years of Experience",
  },
];

// Animated counter hook
function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, animate }: { stat: Stat; animate: boolean }) {
  const count = useCountUp(stat.value, 1500, animate);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-white opacity-90">{stat.icon}</div>
      <p className="text-white text-4xl font-bold tracking-tight">
        {stat.prefix ?? ""}
        {animate ? count : 0}
        {stat.suffix ?? ""}
      </p>
      <p className="text-[#a0a8c8] text-sm font-medium">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  // Trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full border-y border-[#2a2560] py-10 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-[#2a2560]">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex justify-center">
            <StatItem stat={stat} animate={animate} />
          </div>
        ))}
      </div>
    </div>
  );
}
