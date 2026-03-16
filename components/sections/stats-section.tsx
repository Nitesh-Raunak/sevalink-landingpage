"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Star, MapPin, Heart } from "lucide-react";

const stats = [
  { Icon: Zap,    value: 10,  suffix: " Min", label: "Avg Response Time",  color: "#DC2626" },
  { Icon: Star,   value: 4.8, suffix: "",     label: "Patient Rating",     color: "#F59E0B", decimals: 1 },
  { Icon: MapPin, value: 50,  suffix: "+",    label: "Cities Covered",     color: "#DC2626" },
  { Icon: Heart,  value: 10,  suffix: "K+",   label: "Lives Saved",        color: "#DC2626" },
];

function AnimatedCounter({ value, suffix, decimals = 0, inView }: { value: number; suffix: string; decimals?: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) { setCount(0); return; }
    let start = 0;
    const duration = 2000, steps = 60, increment = value / steps, interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else { setCount(parseFloat(start.toFixed(decimals))); }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, value, decimals]);
  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full min-h-fit sm:min-h-[500px] lg:min-h-screen flex items-center py-8 sm:py-12 lg:py-20 px-3 sm:px-4" style={{ backgroundColor: "#FFF3E0" }}>
      <div className="max-w-5xl mx-auto w-full">

        {/* Divider */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="flex-1 h-px" style={{ backgroundColor: "#DC262620" }} />
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase whitespace-nowrap" style={{ color: "#DC2626" }}>Trusted Across India</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#DC262620" }} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div
                className="rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                style={{ backgroundColor: "#ffffff", borderColor: "#DC262615", boxShadow: "0 2px 16px #DC262608" }}
              >
                {/* Lucide Icon */}
                <div className="flex justify-center mb-2">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.Icon size={20} color={stat.color} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Counter */}
                <div className="text-lg sm:text-2xl lg:text-3xl font-black mb-1 tabular-nums" style={{ color: "#111827", fontFamily: "Georgia, serif" }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} inView={inView} />
                </div>

                {/* Label */}
                <div className="text-[10px] sm:text-xs font-medium tracking-wide uppercase" style={{ color: "#6B7280" }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}