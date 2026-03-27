'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Shield, Download } from "lucide-react";
import { FloatingMedicalIcons } from "../ui/medical-background";

const emergencyStats = [
  { icon: Clock, value: "10 min", label: "Avg Response" },
  { icon: Shield, value: "24/7", label: "Always Available" },
];

const homecareStats = [
  { icon: MapPin, value: "At Home", label: "Care Visits" },
  { icon: Shield, value: "24/7", label: "Verified Care" },
];

type HeroSectionProps = {
  mode?: "emergency" | "homecare";
};

export function HeroSection({ mode = "emergency" }: HeroSectionProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [canUseParallax, setCanUseParallax] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const isHomecareMode = mode === "homecare";
  const activeStats = isHomecareMode ? homecareStats : emergencyStats;

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReducedMotion);
    setCanUseParallax(isFinePointer && isDesktop && !prefersReducedMotion);
  }, []);

  const handleCardPointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canUseParallax) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const maxTilt = 6;

    setTilt({
      x: (0.5 - py) * maxTilt,
      y: (px - 0.5) * maxTilt,
    });
  };

  const resetCardTilt = () => setTilt({ x: 0, y: 0 });

  const handleScrollToAppDownload = () => {
    document.getElementById("get-started")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden mt-0 pt-6 sm:pt-12 md:pt-16">
      {/* Minimal healthcare background with floating icons */}
      <FloatingMedicalIcons />

      <div className="absolute inset-0 z-0 bg-white/40" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-5 md:py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200/50 bg-red-50/50 backdrop-blur-sm mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-semibold text-red-700">Trusted by 10,000+ families</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-5 text-gray-900">
              {isHomecareMode ? (
                <>
                  Professional <span className="text-emerald-600">Care</span>{" "}
                  <span className="text-black">At Your Doorstep</span>
                </>
              ) : (
                <>
                  Every Second{" "}
                  <span className="text-red-600">Matters</span>
                  <br />
                  In An Emergency
                </>
              )}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-md">
              {isHomecareMode
                ? "From nursing care to elderly support and doctor home visits - quality healthcare delivered to your home by verified professionals."
                : "Book an ambulance in under 30 seconds. SevaLink connects you to the nearest verified ambulance with real-time tracking."}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mb-8 flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="button"
                  onClick={handleScrollToAppDownload}
                  className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl px-8 text-base font-semibold text-white shadow-md ${
                    isHomecareMode ? "bg-emerald-600 hover:bg-emerald-700" : "shadow-[0_14px_30px_rgba(220,38,38,0.35)]"
                  }`}
                >
                  {!isHomecareMode ? (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700 transition-colors duration-200 group-hover:from-red-700 group-hover:via-red-600 group-hover:to-red-800" />
                      <motion.span
                        aria-hidden
                        className="absolute -left-16 top-0 h-full w-16 bg-white/25 blur-md"
                        animate={{ x: [0, 260, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </>
                  ) : null}
                  <span className="relative z-10 inline-flex items-center gap-2 text-white">
                    <Download className="h-5 w-5" />
                    Install App
                  </span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-5 sm:gap-6"
            >
              {activeStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 leading-tight">{value}</div>
                    <div className="text-xs text-gray-600">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Soft ambient AI-style glow pulse */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_45%,rgba(239,68,68,0.24),rgba(239,68,68,0)_68%)] blur-2xl"
              animate={{ opacity: [0.45, 0.75, 0.45], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              onMouseMove={handleCardPointerMove}
              onMouseLeave={resetCardTilt}
              animate={{
                y: reduceMotion || isHomecareMode ? 0 : [0, -12, 0],
                rotateX: tilt.x,
                rotateY: tilt.y,
              }}
              transition={{
                y: isHomecareMode
                  ? { duration: 0 }
                  : { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 0.2, ease: "easeOut" },
                rotateY: { duration: 0.2, ease: "easeOut" },
              }}
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              className="relative rounded-3xl bg-white/80 backdrop-blur-md border border-white/60 p-5 md:p-8 shadow-2xl"
            >
              {/* Very subtle premium light sweep */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-10%", "175%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              />

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={
                    reduceMotion
                      ? { scale: 1, x: 0, y: 0 }
                      : { scale: [1, 1.045, 1], x: [0, 4, 0], y: [0, -3, 0] }
                  }
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ willChange: "transform" }}
                >
                  <Image
                    src={isHomecareMode ? "/images/homecare.avif" : "/images/ambulance.png"}
                    alt={isHomecareMode ? "Professional home care service" : "Emergency Ambulance"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 to-orange-100/20" />
                {!isHomecareMode ? (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50/90 border border-green-200 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-green-700">ETA: 10 min</span>
                  </div>
                ) : null}
              </div>

              {!isHomecareMode ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -left-6 top-1/3 bg-white/90 backdrop-blur-md border border-white rounded-xl p-3 shadow-lg hidden md:block"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <motion.span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-red-400/45"
                          animate={{ scale: [1, 1.75], opacity: [0.55, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        />
                        <MapPin className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">Live Tracking</div>
                        <div className="text-[10px] text-gray-600">GPS enabled</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-md border border-white rounded-xl p-3 shadow-lg hidden md:block"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-900">Verified</div>
                        <div className="text-[10px] text-gray-600">All ambulances</div>
                      </div>
                    </div>
                  </motion.div>
                </>
              ) : null}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
