"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Ambulance, MapPin, CheckCircle } from "lucide-react";
import { Map } from "@/components/ui/map";

const steps = [
  { id: "01", icon: Smartphone, title: "Book Ambulance", description: "Open SevaLink app and tap 'Book Now'. Share your location in one click." },
  { id: "02", icon: Ambulance, title: "Instant Dispatch", description: "Nearest BLS/ALS ambulance is dispatched within 60 seconds automatically." },
  { id: "03", icon: MapPin, title: "Live Tracking", description: "Track ambulance in real-time on map. Share live status with family." },
  { id: "04", icon: CheckCircle, title: "Safe Arrival", description: "Reach verified hospital. Full trip summary and invoice sent instantly." },
];

const EASE = "easeOut";
const DURATION = 0.45;

function MapScreen() {
  // Noida/Delhi region coordinates - center of map [latitude, longitude]
  const mapCenter: [number, number] = [28.5355, 77.3910];
  
  // Sample ambulance location marker
  const ambulanceMarker = [
    { lat: 28.5355, lng: 77.3910, label: "Hospital" }
  ];

  return (
    <div className="relative isolate w-full h-full overflow-hidden rounded-2xl bg-gray-100">
      {/* Top overlays - always visible above map layers */}
      <div className="absolute top-2 left-2 right-2 z-20 flex items-center pointer-events-none">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-white/50 px-3 py-1.5 shadow-lg shadow-black/10 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-red-600"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="text-[10px] font-bold text-gray-800 uppercase tracking-tighter whitespace-nowrap">Live Tracking</span>
        </div>
      </div>

      {/* Interactive Map Component - with scroll zoom enabled */}
      <Map 
        center={mapCenter} 
        zoom={15}
        className="h-full w-full"
        markers={ambulanceMarker}
        showControls={true}
        scrollZoom={true}
        dragging={true}
      />

      {/* Bottom Driver Card - Ambulance Status */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 p-3 bg-white/97 backdrop-blur-sm border-t border-gray-100 z-20"
      >
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
      </motion.div>
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
        <p className="text-[10px] sm:text-[11px] font-black text-red-600 tracking-widest uppercase mb-1.5">Step {step.id}</p>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-3">{step.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="w-full min-h-fit flex items-center landing-section-spacing bg-[#FEF3E2] overflow-hidden">
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
            className="relative z-0 order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-red-200/40 blur-[60px] rounded-full -z-10 translate-y-8" />
            {/* Phone frame */}
            <div className="relative isolate z-0 w-52 sm:w-64 lg:w-[240px] h-96 sm:h-[480px] lg:h-[480px] rounded-3xl sm:rounded-[40px] border-4 sm:border-[8px] border-slate-900 bg-[#1a1a2e] shadow-2xl overflow-hidden">
              {/* Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
                <div className="w-16 h-3 bg-black rounded-b-xl flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full" />
                </div>
              </div>

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