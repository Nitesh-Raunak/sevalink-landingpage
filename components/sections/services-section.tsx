"use client";

import { useRef } from "react";
import { motion, useInView, useMotionTemplate, useScroll, useTransform } from "framer-motion";
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
  details: string[];
  tag: string | null;
};

const services: ServiceItem[] = [
  {
    icon: Ambulance,
    title: "Emergency Ambulance",
    description: "Nearest BLS/ALS ambulance dispatched within minutes, 24/7.",
    details: [
      "Fast dispatch with emergency-ready drivers",
      "Coverage across key high-demand areas",
      "Real-time response workflow from request to pickup",
    ],
    tag: "Most Used",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Live GPS tracking from dispatch to hospital arrival.",
    details: [
      "Families can follow trip status instantly",
      "Route updates with ETA visibility",
      "Transparent movement logs for coordination",
    ],
    tag: null,
  },
  {
    icon: Hospital,
    title: "Hospital Selection",
    description: "AI-powered hospital matching based on emergency type.",
    details: [
      "Smart nearest-fit hospital mapping",
      "Specialty and urgency based routing",
      "Reduced delay in admission handoff",
    ],
    tag: "AI Powered",
  },
  {
    icon: Users,
    title: "Family Tracking",
    description: "Share live location and updates with family in real time.",
    details: [
      "Secure updates for trusted contacts",
      "Live status messages during transfer",
      "Peace of mind through visibility",
    ],
    tag: null,
  },
  {
    icon: Brain,
    title: "BLS/ALS & ICU/Neo",
    description: "Specialized ambulances with trained paramedics for critical care.",
    details: [
      "Multiple emergency support categories",
      "Advanced and neonatal transport options",
      "Trained staff for sensitive situations",
    ],
    tag: "Specialized",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. Know the cost before ambulance arrives.",
    details: [
      "Clear fare visibility before confirmation",
      "Simple structure without hidden add-ons",
      "Trust-focused billing process",
    ],
    tag: null,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock helpline for all emergency queries.",
    details: [
      "Always-on contact assistance",
      "Quick escalation for urgent needs",
      "Support from booking to completion",
    ],
    tag: "Always On",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
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
  const MotionIcon = motion(Icon);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 96%", "end 8%"],
  });

  const descriptionColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#7F1D1D", "#991B1B", "#7F1D1D", "#450A0A"]
  );
  const detailColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#7F1D1D", "#991B1B", "#7F1D1D", "#450A0A"]
  );
  const iconColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.85, 1],
    ["#9CA3AF", "#EAB308", "#F59E0B", "#EF4444", "#7F1D1D"]
  );
  const tagTextColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#7F1D1D", "#92400E", "#B91C1C", "#FFFFFF"]
  );
  const tagBgColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#FEF3C7", "#FDE68A", "#FCA5A5", "#DC2626"]
  );
  const titleWeight = useTransform(scrollYProgress, [0, 0.5, 1], [700, 860, 950]);
  const bodyWeight = useTransform(scrollYProgress, [0, 0.5, 1], [520, 700, 820]);
  const detailWeight = useTransform(scrollYProgress, [0, 0.5, 1], [500, 680, 780]);
  const contentGlow = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["0 0 0 rgba(0,0,0,0)", "0 0 8px rgba(250,204,21,0.35)", "0 0 10px rgba(239,68,68,0.22)", "0 0 0 rgba(0,0,0,0)"]
  );
  const bgStart = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#FFFBF5", "#F6E7C6", "#EAC47F", "#FFFBF5"]
  );
  const bgMid = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#FEE2AD", "#F2CC8A", "#DDA45C", "#FEE2AD"]
  );
  const bgEnd = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["#FFD6A5", "#F3B97A", "#CC8440", "#FFD6A5"]
  );
  const cardBorderColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ["rgba(227, 106, 106, 0.3)", "rgba(194, 89, 89, 0.5)", "rgba(153, 27, 27, 0.7)", "rgba(227, 106, 106, 0.3)"]
  );
  const cardShadow = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [
      "0 10px 24px rgba(227,106,106,0.15)",
      "0 16px 32px rgba(180,83,9,0.24)",
      "0 18px 36px rgba(127,29,29,0.3)",
      "0 10px 24px rgba(227,106,106,0.15)",
    ]
  );
  const dynamicCardBackground = useMotionTemplate`linear-gradient(135deg, ${bgStart} 0%, ${bgMid} 50%, ${bgEnd} 100%)`;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileTap={{ scale: 0.985 }}
      className="perspective"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative h-full min-h-[280px] overflow-hidden rounded-[1.75rem] border-2 p-6 backdrop-blur-sm sm:p-7"
        style={{
          background: dynamicCardBackground,
          borderColor: cardBorderColor,
          boxShadow: cardShadow,
        }}
      >
        {/* Mobile-friendly always-on subtle glow */}
        <motion.div
          animate={inView ? { opacity: [0.08, 0.2, 0.08] } : { opacity: 0.08 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-red-500/16 to-transparent"
        />
        <motion.div
          animate={inView ? { x: [0, 10, 0], y: [0, -8, 0] } : {}}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-16 -right-20 h-44 w-44 rounded-full bg-red-300/12 blur-3xl"
        />

        {service.tag && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.6, y: -10 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05 + 0.1, type: "spring", stiffness: 200 }}
            style={{ color: tagTextColor, backgroundColor: tagBgColor }}
            className="absolute right-4 top-4 z-10 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-xl backdrop-blur-sm border border-red-300/40"
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
            className="relative mb-6 inline-flex h-18 w-18 items-center justify-center overflow-hidden rounded-3xl border-2 border-red-200/80 bg-gradient-to-br from-red-50 via-red-100 to-red-100/60 shadow-[0_10px_25px_rgba(220,38,38,0.18)]"
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
              <MotionIcon className="h-8 w-8" style={{ color: iconColor }} />
            </motion.div>
          </motion.div>

          {/* Title with enhanced hover */}
          <motion.h3
            initial={{ opacity: 0, y: 10, color: "#111827" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.35, delay: index * 0.05 + 0.14 }}
            className="mb-3 pr-12 text-lg font-black tracking-tight text-gray-900 sm:text-xl"
            style={{ color: "#DC2626", fontWeight: titleWeight, textShadow: contentGlow }}
          >
            {service.title}
          </motion.h3>

          {/* Description with better styling */}
          <motion.p
            initial={{ opacity: 0, y: 10, color: "#6b7280" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.35, delay: index * 0.05 + 0.2 }}
            className="mb-7 text-sm leading-relaxed text-gray-700 sm:text-[15px]"
            style={{ color: descriptionColor, fontWeight: bodyWeight, textShadow: contentGlow }}
          >
            {service.description}
          </motion.p>

          <div className="mb-7 space-y-2">
            {service.details.map((detail, detailIndex) => (
              <motion.p
                key={detail}
                initial={{ opacity: 0, y: 8, color: "#6b7280" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: index * 0.04 + detailIndex * 0.05 }}
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: detailColor, fontWeight: detailWeight, textShadow: contentGlow }}
              >
                {detail}
              </motion.p>
            ))}
          </div>

          {/* Enhanced accent bar */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contentItemVariants}
            transition={{ duration: 0.35, delay: index * 0.05 + 0.26 }}
            className="relative"
          >
            <motion.div
              animate={inView ? { width: [48, 96, 72] } : { width: 48 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
              className="h-1 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-400 shadow-[0_4px_12px_rgba(239,68,68,0.3)]"
            />
            <motion.div
              animate={inView ? { x: [0, 8, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 h-1 w-3 rounded-full bg-white/80 blur-sm"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}