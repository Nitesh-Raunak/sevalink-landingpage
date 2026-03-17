"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Ambulance,
  Brain,
  MapPin,
  Hospital,
  Users,
  CreditCard,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string | null;
};

const services: ServiceItem[] = [
  {
    icon: Ambulance,
    title: "Emergency Ambulance",
    description: "Nearest BLS/ALS ambulance dispatched within minutes, 24/7.",
    tag: "Most Used",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Live GPS tracking from dispatch to hospital arrival.",
    tag: null,
  },
  {
    icon: Hospital,
    title: "Hospital Selection",
    description: "AI-powered hospital matching based on emergency type.",
    tag: "AI Powered",
  },
  {
    icon: Users,
    title: "Family Tracking",
    description: "Share live location and updates with family in real time.",
    tag: null,
  },
  {
    icon: Brain,
    title: "BLS/ALS & ICU/Neo",
    description: "Specialized ambulances with trained paramedics for critical care.",
    tag: "Specialized",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. Know the cost before ambulance arrives.",
    tag: null,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock helpline for all emergency queries.",
    tag: "Always On",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-fit flex items-center landing-section-spacing overflow-hidden bg-gradient-to-b from-[#FFF0E2] to-[#FFE7D2]"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-red-600/10 text-red-600">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-900 tracking-tight leading-tight">
            Everything You Need <span className="text-red-600 italic">in a Crisis</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-base lg:text-lg leading-relaxed">
            From dispatch to recovery — SevaLink covers every step of your emergency journey.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Container */}
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                inView={inView}
              />
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-red-50 transition-colors duration-200 hover:shadow-xl border border-red-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-red-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-red-50 transition-colors duration-200 hover:shadow-xl border border-red-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-red-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
  inView: boolean;
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function ServiceCard({ service, index, inView }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -14, rotateX: 8, transition: { duration: 0.4 } }}
      className="flex-shrink-0 w-80 sm:w-96 group perspective"
      style={{ perspective: "1200px" }}
    >
      <div className="relative h-full min-h-[280px] rounded-[1.75rem] border-2 bg-gradient-to-br from-[#FFFBF5] via-[#FEE2AD] to-[#FFD6A5] p-6 sm:p-7 shadow-[0_10px_24px_rgba(227,106,106,0.15)] transition-all duration-500 group-hover:shadow-[0_40px_60px_rgba(227,106,106,0.35)] overflow-hidden backdrop-blur-sm"
        style={{
          background: "linear-gradient(135deg, #FFFBF5 0%, #FEE2AD 50%, #FFD6A5 100%)",
          position: "relative",
          borderColor: "rgba(227, 106, 106, 0.3)",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          animate={inView ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "conic-gradient(from 0deg, rgba(220,38,38,0.4), rgba(239,68,68,0.2), rgba(220,38,38,0.4))",
            filter: "blur(8px)",
          }}
        />

        {/* Multi-layer glow effects - enhanced */}
        <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-red-500/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <motion.div
          animate={inView ? { x: [0, 20, 0], y: [0, -20, 0] } : {}}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-400/12 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
        <motion.div
          animate={inView ? { x: [0, -15, 0], y: [0, 15, 0] } : {}}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-300/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {/* Additional floating orbs */}
        <motion.div
          animate={inView ? { scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] } : {}}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 w-32 h-32 bg-red-200/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
        
        {/* Shimmer effect - enhanced */}
        <div className="absolute inset-0 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-[1.75rem]"
          />
        </div>

        {service.tag && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.6, y: -10 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05 + 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl z-10 backdrop-blur-sm border border-red-300/30"
          >
            {service.tag}
          </motion.span>
        )}

        <div className="relative z-10">
          {/* Icon with enhanced animations */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentItemVariants}
            transition={{ duration: 0.35, delay: index * 0.05 + 0.08 }}
            whileHover={{ scale: 1.2, rotate: 12 }}
            className="mb-6 inline-flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-red-50 via-red-100 to-red-100/60 border-2 border-red-200/80 shadow-[0_10px_25px_rgba(220,38,38,0.18)] transition-all duration-300 group-hover:shadow-[0_15px_40px_rgba(220,38,38,0.3)] relative overflow-hidden"
          >
            {/* Icon glow rings */}
            <motion.div
              animate={inView ? { scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] } : {}}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl border-2 border-red-400/40"
            />
            <motion.div
              animate={inView ? { scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] } : {}}
              transition={{ duration: 2.4, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 rounded-3xl border border-red-300/20"
            />

            <motion.div
              animate={inView ? { scale: [1, 1.15, 1], y: [0, -2, 0] } : { scale: 1 }}
              transition={{
                duration: 2.2,
                repeat: inView ? Infinity : 0,
                ease: "easeInOut",
                delay: index * 0.08,
              }}
              className="flex items-center justify-center relative z-10"
            >
              <Icon className="h-8 w-8 text-red-600" />
            </motion.div>
          </motion.div>

          {/* Title with enhanced hover */}
          <motion.h3
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentItemVariants}
            transition={{ duration: 0.35, delay: index * 0.05 + 0.14 }}
            className="mb-3 pr-12 text-lg sm:text-xl font-black tracking-tight text-gray-900 group-hover:text-red-700 transition-colors duration-400 group-hover:scale-105 origin-left"
          >
            {service.title}
          </motion.h3>

          {/* Description with better styling */}
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentItemVariants}
            transition={{ duration: 0.35, delay: index * 0.05 + 0.2 }}
            className="text-sm sm:text-[15px] leading-relaxed text-gray-700 mb-7 group-hover:text-gray-900 transition-colors duration-400 group-hover:font-medium"
          >
            {service.description}
          </motion.p>

          {/* Enhanced accent bar */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentItemVariants}
            transition={{ duration: 0.35, delay: index * 0.05 + 0.26 }}
            className="relative"
          >
            <motion.div
              className="h-1 w-12 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-400 transition-all duration-400 group-hover:w-24 shadow-[0_4px_12px_rgba(239,68,68,0.3)] group-hover:shadow-[0_6px_16px_rgba(239,68,68,0.4)]"
              whileHover={{ height: "6px" }}
            />
            <motion.div
              animate={inView ? { x: [0, 8, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 h-1 w-3 rounded-full bg-white/80 blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}