"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Ambulance, MapPin, CheckCircle } from "lucide-react";

const steps = [
  { id: "01", icon: Smartphone, title: "Book Ambulance", description: "Open SevaLink app and tap 'Book Now'. Share your location in one click." },
  { id: "02", icon: Ambulance, title: "Instant Dispatch", description: "Nearest BLS/ALS ambulance is dispatched within 60 seconds automatically." },
  { id: "03", icon: MapPin, title: "Live Tracking", description: "Track ambulance in real-time on map. Share live status with family." },
  { id: "04", icon: CheckCircle, title: "Safe Arrival", description: "Reach verified hospital. Full trip summary and invoice sent instantly." },
];

const EASE = "easeOut";
const DURATION = 0.45;

function MapScreen() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#e8e0d8]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 380" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="200" height="380" fill="#e8e0d8" />
        <rect x="10" y="20" width="40" height="30" rx="4" fill="#c8e6c9" opacity="0.8" />
        <rect x="140" y="180" width="50" height="40" rx="4" fill="#c8e6c9" opacity="0.8" />
        <rect x="10" y="70" width="25" height="20" rx="2" fill="#d4c9bc" />
        <rect x="40" y="65" width="18" height="25" rx="2" fill="#ccc0b3" />
        <line x1="100" y1="0" x2="100" y2="380" stroke="#f5d86e" strokeWidth="8" />
        <line x1="0" y1="190" x2="200" y2="190" stroke="#f5d86e" strokeWidth="8" />
        <line x1="60" y1="0" x2="60" y2="380" stroke="#f0f0e8" strokeWidth="4" />
        <line x1="140" y1="0" x2="140" y2="380" stroke="#f0f0e8" strokeWidth="4" />

        {/* Animated Path */}
        <motion.path
          d="M 60 280 L 60 190 L 100 190 L 100 120"
          fill="none" stroke="#4285f4" strokeWidth="5"
          strokeLinecap="round" strokeDasharray="250" strokeDashoffset={250}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
        />

        {/* Ambulance Marker */}
        <motion.circle cx="60" cy="280" r="5" fill="white" stroke="#DC2626" strokeWidth="2"
          animate={{ cx: [60, 60, 100, 100], cy: [280, 190, 190, 120] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
        />

        {/* Destination Pin */}
        <path d="M100 126 C100 126 88 114 88 107 C88 100.4 93.4 95 100 95 C106.6 95 112 100.4 112 107 C112 114 100 126 100 126Z" fill="#4285f4" />
      </svg>

      {/* Top Header Card — notch ke neeche dikhega ab */}
      <div className="absolute left-0 right-0 p-2 bg-white/95" style={{ top: "28px" }}>
        <div className="flex items-center gap-1.5">
          <motion.div className="w-2 h-2 rounded-full bg-red-600" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
          <span className="text-[10px] font-bold text-gray-800 uppercase tracking-tighter">Live Tracking</span>
        </div>
      </div>

      {/* Bottom Driver Card */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/97 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center">
              <Ambulance size={14} color="#DC2626" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-900 leading-none">Ambulance En Route</p>
              <p className="text-[9px] text-gray-500 mt-1">1.2 km away</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-red-600 leading-none">4 min</p>
            <p className="text-[8px] text-gray-400 mt-1 uppercase">ETA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, align }: { step: typeof steps[0]; align: "left" | "right" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === "right" ? 50 : -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: DURATION, ease: EASE }}
      className={`flex ${align === "right" ? "lg:flex-row-reverse lg:text-right" : "flex-row text-left"} items-start gap-4 w-full`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.15, type: "spring" }}
        className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-200"
      >
        <Icon size={24} color="white" />
      </motion.div>
      <div>
        <p className="text-[9px] sm:text-[10px] font-black text-red-600 tracking-widest uppercase mb-1">Step {step.id}</p>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight mb-2">{step.title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="w-full min-h-fit sm:min-h-[700px] lg:min-h-screen flex items-center landing-section-spacing bg-[#FEF3E2] overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-3 sm:mb-4">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
            Emergency Help in <span className="text-red-600">4 Simple Steps</span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">

          {/* Left Steps */}
          <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-xs sm:max-w-sm lg:max-w-[320px] order-2 lg:order-1">
            <StepCard step={steps[0]} align="right" />
            <StepCard step={steps[1]} align="right" />
          </div>

          {/* Center Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-red-200/40 blur-[60px] rounded-full -z-10 translate-y-8" />
            {/* Phone frame */}
            <div className="relative w-52 sm:w-64 lg:w-[240px] h-96 sm:h-[480px] lg:h-[480px] rounded-3xl sm:rounded-[40px] border-4 sm:border-[8px] border-slate-900 bg-[#1a1a2e] shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-2xl z-20" />
              <MapScreen />
            </div>
          </motion.div>

          {/* Right Steps */}
          <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-xs sm:max-w-sm lg:max-w-[320px] order-3 lg:order-3">
            <StepCard step={steps[2]} align="left" />
            <StepCard step={steps[3]} align="left" />
          </div>

        </div>

        {/* Bottom Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-12 sm:mt-16 lg:mt-20">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-[8px] sm:text-[10px] font-black shadow-lg">
                0{i + 1}
              </div>
              {i < 3 && <div className="w-6 sm:w-8 h-[2px] bg-red-100" />}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}