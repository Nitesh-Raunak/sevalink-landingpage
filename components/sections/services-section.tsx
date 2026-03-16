"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full min-h-fit flex items-center landing-section-spacing overflow-hidden bg-gradient-to-b from-[#FFF0E2] to-[#FFE7D2]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - Animated like your original */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
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

        {/* Modern Feature Grid - all content visible for emergency readability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 92%", "end 35%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.3,
  });
  const Icon = service.icon;
  const descriptionColor = useTransform(smoothProgress, [0, 1], ["#374151", "#C2410C"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group"
    >
      <div className="relative h-full min-h-[220px] rounded-[1.75rem] border-2 border-[#E36A6A] bg-[#FEE2AD] p-5 sm:p-6 shadow-[0_10px_24px_rgba(227,106,106,0.15)] transition-all duration-300 group-hover:shadow-[0_18px_38px_rgba(227,106,106,0.25)]">
        {service.tag && (
          <span className="absolute right-4 top-4 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            {service.tag}
          </span>
        )}

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentItemVariants}
          transition={{ duration: 0.35, delay: index * 0.1 + 0.08 }}
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-red-100 bg-white shadow-[0_6px_14px_rgba(157,68,33,0.10)]"
        >
          <motion.div
            animate={inView ? { scale: [1, 1.06, 1] } : { scale: 1 }}
            transition={{
              duration: 2.8,
              repeat: inView ? Infinity : 0,
              ease: "easeInOut",
              delay: index * 0.12,
            }}
            className="flex items-center justify-center"
          >
            <Icon className="h-6 w-6 text-red-600" />
          </motion.div>
        </motion.div>

        <motion.h3
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentItemVariants}
          transition={{ duration: 0.35, delay: index * 0.1 + 0.14 }}
          className="mb-2 pr-16 text-base sm:text-lg font-black tracking-tight text-gray-900"
        >
          {service.title}
        </motion.h3>

        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentItemVariants}
          transition={{ duration: 0.35, delay: index * 0.1 + 0.2 }}
          style={{ color: descriptionColor }}
          className="text-sm sm:text-[15px] leading-relaxed"
        >
          {service.description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentItemVariants}
          transition={{ duration: 0.35, delay: index * 0.1 + 0.26 }}
          className="mt-5 h-1.5 w-12 rounded-full bg-red-200 transition-all duration-300 group-hover:w-16 group-hover:bg-red-400"
        />
      </div>
    </motion.div>
  );
}