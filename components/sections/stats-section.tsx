"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { icon: "⚡", value: 10, suffix: " Min", label: "Avg Response Time", color: "#DC2626" },
  { icon: "⭐", value: 4.8, suffix: "", label: "Patient Rating", color: "#F59E0B", decimals: 1 },
  { icon: "🏙️", value: 50, suffix: "+", label: "Cities Covered", color: "#DC2626" },
  { icon: "🚑", value: 10, suffix: "K+", label: "Lives Saved", color: "#DC2626" },
];

function AnimatedCounter({ value, suffix, decimals = 0, inView }: { value: number; suffix: string; decimals?: number; inView: boolean; }) {
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <section ref={ref} className="w-full pt-0 pb-12 px-4" style={{ backgroundColor: "#FFF3E0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px" style={{ backgroundColor: "#DC262620" }} />
          <span className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap" style={{ color: "#DC2626" }}>Trusted Across India</span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#DC262620" }} />
        </div>
        {/* 2x2 on mobile, 4 cols on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }} className="relative group">
              <div className="rounded-2xl p-4 sm:p-6 text-center border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1" style={{ backgroundColor: "#ffffff", borderColor: "#DC262615", boxShadow: "0 2px 16px #DC262608" }}>
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black mb-1 tabular-nums" style={{ color: "#111827", fontFamily: "Georgia, serif" }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} inView={inView} />
                </div>
                <div className="text-xs font-medium tracking-wide uppercase" style={{ color: "#6B7280" }}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}