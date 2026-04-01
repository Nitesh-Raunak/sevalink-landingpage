import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ambulance, HousePlus, Phone, Home } from "lucide-react";
import { FloatingMedicalIcons } from "../ui/medical-background";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_HEIGHT = {
  mobile: "5.5rem", // 88px
  sm: "5rem",      // 80px
  md: "4rem",      // 64px
};

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

export function HeroSection() {
  const [active, setActive] = useState<'emergency' | 'homecare'>("emergency");
  const inactive = active === "emergency" ? "homecare" : "emergency";
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const swipeDetected = useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative bg-white font-display overflow-hidden flex items-center justify-center md:mt-0 px-[20px] sm:px-6 lg:px-8 py-0 pt-6 -mt-[9px]">
      <FloatingMedicalIcons />
      <div className={`absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 -translate-y-1/2 ${active === "emergency" ? "bg-red-500" : "bg-emerald-400"}`} />
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 pt-0 sm:pt-0 lg:pt-0 mt-0 relative z-10">
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[540px] pt-0 sm:pt-0 md:pt-0 lg:pt-0 mt-0">
            {/* Toggle styled like reference HeroToggle */}
            <div className="flex mb-4">
              <div className="relative flex bg-white rounded-full p-1 w-full max-w-xs">
                {[
                  { id: "emergency", label: "Emergency", icon: Phone },
                  { id: "homecare", label: "Home Care", icon: Home },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id as "emergency" | "homecare")}
                    className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 justify-center w-1/2 ${
                      active === tab.id ? "text-white" : "text-muted-foreground"
                    }`}
                    aria-pressed={active === tab.id}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                    {active === tab.id && (
                      <motion.div
                        layoutId="hero-toggle-bg"
                        className={`absolute inset-0 rounded-full ${tab.id === "emergency" ? "bg-red-500" : "bg-emerald-500"}`}
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="ml-2 md:ml-3"
              >
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  {heroData[active].tag}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold text-foreground leading-[1.08] tracking-tight mb-2">
                  {heroData[active].headline[0]}
                  <br />
                  <span className={active === "emergency" ? "text-red-500" : "text-emerald-400"}>{heroData[active].headline[1]}</span>
                </h1>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">{heroData[active].desc}</p>
                <div className="flex items-center gap-3 mt-0 mb-4">
                  <Link
                    href={heroData[active].ctaLink}
                    scroll={true}
                    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl transition-all hover:scale-105 ${active === "emergency" ? "bg-red-500 !text-white shadow-red-400/25" : "bg-emerald-400 !text-white shadow-emerald-300/25"}`}
                  >
                    {heroData[active].cta}
                  </Link>
                </div>
                <div className="flex gap-3 mt-0 mb-0">
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
          <div className="lg:col-span-7 relative min-h-[28vh] h-[220px] xs:h-[240px] sm:h-[320px] md:h-[420px] lg:h-[540px]">
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
              </motion.div>
            </AnimatePresence>
            {/* Peeking Image (clickable) */}
            <motion.div
              className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20 "
             
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
              
            </motion.div>
           
          </div>
        </div>
      </div>
    </section>
  );
}