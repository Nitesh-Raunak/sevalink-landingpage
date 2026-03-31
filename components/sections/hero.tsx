'use client';



import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ambulance, HousePlus } from "lucide-react";
import { FloatingMedicalIcons } from "../ui/medical-background";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_HEIGHT = {
  mobile: "5.5rem", // 88px
  sm: "5rem",      // 80px
  md: "4rem",      // 64px
};

export function HeroSection() {
  // State: 'emergency' or 'homecare'
  const [active, setActive] = useState<'emergency' | 'homecare'>("emergency");
  const inactive = active === "emergency" ? "homecare" : "emergency";
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Data for each hero state
  const heroData = {
    emergency: {
      tag: "Emergency Services",
      headline: ["Every Second", "Matters"],
      desc: "Book a verified ambulance in 30 seconds. GPS-tracked, 24/7 available.",
      image: "/images/ambulance.png",
      cta: "Book Ambulance",
      ctaLink: "/services#ambulance",
      stats: [
        { icon: Ambulance, val: "10 min", label: "Response" },
        { icon: HousePlus, val: "24/7", label: "Available" },
      ],
    },
    homecare: {
      tag: "Home Care",
      headline: ["Professional Care", "At Your Door"],
      desc: "Nursing, elderly support & doctor visits by verified professionals.",
      image: "/images/homecare.avif",
      cta: "Book Home Care",
      ctaLink: "/services#homecare",
      stats: [
        { icon: HousePlus, val: "At Home", label: "Visits" },
        { icon: Ambulance, val: "Verified", label: "Staff" },
      ],
    },
  };



  return (
    <section className="relative min-h-screen bg-background font-display overflow-hidden flex items-center justify-center">
      <FloatingMedicalIcons />
      {/* Subtle background gradient */}
      <div className={`absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 -translate-y-1/2 ${active === "emergency" ? "bg-red-500" : "bg-emerald-400"}`} />
      {/* Removed colored spacing background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 pt-0 lg:pt-0 mt-0 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 pt-0 sm:pt-0 mt-0 md:pt-2 md:mt-0">
            {/* Toggle with framer-motion sliding bg */}
            <div className="relative inline-flex items-center bg-muted rounded-full p-1 mb-2">
              <motion.div
                className={`absolute top-1 bottom-1 rounded-full shadow-lg ${active === "emergency" ? "bg-red-500 shadow-red-400/30" : "bg-emerald-400 shadow-emerald-300/30"}`}
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ left: active === "emergency" ? "4px" : "50%", right: active === "emergency" ? "50%" : "4px" }}
              />
              {["emergency", "homecare"].map((s) => (
                <button
                  key={s}
                  onClick={() => setActive(s as 'emergency' | 'homecare')}
                  className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${active === s ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
                  aria-pressed={active === s}
                >
                  {s === "emergency" ? <Ambulance className="w-4 h-4" /> : <HousePlus className="w-4 h-4" />}
                  {s === "emergency" ? "Emergency" : "Home Care"}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  {heroData[active].tag}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] tracking-tight">
                  {heroData[active].headline[0]}
                  <br />
                  <span className={active === "emergency" ? "text-red-500" : "text-emerald-400"}>{heroData[active].headline[1]}</span>
                </h1>
                <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-sm">{heroData[active].desc}</p>
                <div className="flex items-center gap-4 mt-8">
                  {active === "emergency" ? (
                    <Link
                      href="/services#ambulance"
                      scroll={true}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl transition-all hover:scale-105 bg-red-500 !text-white shadow-red-400/25"
                    >
                      {heroData[active].cta}
                    </Link>
                  ) : (
                    <Link
                      href={heroData[active].ctaLink}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl transition-all hover:scale-105 bg-emerald-400 !text-white shadow-emerald-300/25"
                    >
                      {heroData[active].cta}
                    </Link>
                  )}
                  {active === "homecare" ? (
                    <a href="#homecare-services" className="px-5 py-3.5 rounded-full text-sm font-semibold text-foreground border border-border hover:bg-accent transition-colors">Learn More</a>
                  ) : (
                    <a href="#services" className="px-5 py-3.5 rounded-full text-sm font-semibold text-foreground border border-border hover:bg-accent transition-colors">Learn More</a>
                  )}
                </div>
                <div className="flex gap-6 mt-4 pt-4 border-t border-border">
                  {heroData[active].stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active === "emergency" ? "bg-red-500/10" : "bg-emerald-400/10"}`}>
                        <stat.icon className={`w-5 h-5 ${active === "emergency" ? "text-red-500" : "text-emerald-400"}`} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{stat.val}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right Images — Asymmetric, animated, swipeable on mobile */}
          <div className="lg:col-span-7 relative min-h-[38vh] h-[220px] xs:h-[280px] sm:h-[340px] md:h-[440px] lg:h-[540px]">
            {/* Main Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 right-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl z-10"
              >
                <Image
                  src={heroData[active].image}
                  alt="Hero main image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute bottom-4 left-4 px-4 py-2 rounded-full text-xs font-bold text-white ${active === "emergency" ? "bg-red-500/90" : "bg-emerald-400/90"}`}>
                  {active === "emergency" ? "⚡ ETA: 10 min" : "✓ Verified Professional"}
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Peeking Image (clickable) */}
            <motion.div
              className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20 cursor-pointer"
              onClick={() => setActive(inactive)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={heroData[inactive].image}
                alt="Hero peeking image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 30vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-3">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-xs shadow-md transition-all bg-white/90 !text-black border border-gray-200 select-none cursor-default"
                >
                  {heroData[inactive].cta}
                </span>
              </div>
            </motion.div>
            {/* Mobile swipe support */}
            {isMobile && (
              <div
                className="absolute inset-0 z-30 cursor-pointer"
                onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
                onTouchMove={e => { touchEndX.current = e.touches[0].clientX; }}
                onTouchEnd={() => {
                  const dx = touchEndX.current - touchStartX.current;
                  if (Math.abs(dx) > 40) {
                    if (dx < 0) setActive("homecare");
                    if (dx > 0) setActive("emergency");
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
