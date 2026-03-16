"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Ambulance,
  Brain,
  MapPin,
  Hospital,
  Users,
  CreditCard,
  Headphones,
} from "lucide-react";

const services = [
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
      className="w-full min-h-fit sm:min-h-[600px] lg:min-h-screen flex items-center py-8 sm:py-12 lg:py-20 px-3 sm:px-4 overflow-hidden"
      style={{ backgroundColor: "#FFF3E0" }}
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

        {/* Dynamic Grid - Fixes the layout issue */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Top Row: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {services.slice(0, 4).map((service, i) => (
              <ServiceCard key={i} service={service} index={i} inView={inView} />
            ))}
          </div>
          
          {/* Bottom Row: 3 Cards Centered on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 lg:px-24">
            {services.slice(4).map((service, i) => (
              <ServiceCard key={i + 4} service={service} index={i + 4} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Original Advanced CSS Restored */
        .seva-card {
          position: relative;
          min-height: 240px;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          background: #1a1a1a; /* Dark base for the neon glow effect */
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .seva-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.3);
        }

        /* The Neon Border/Glow effect from your code */
        .seva-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(315deg, #DC2626, #FF6B6B);
          z-index: 0;
        }

        .seva-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(315deg, #DC2626, #FF6B6B);
          filter: blur(35px);
          opacity: 0;
          transition: 0.4s;
          z-index: 0;
        }

        .seva-card:hover::after {
          opacity: 0.8;
        }

        .seva-card-inner {
          position: absolute;
          inset: 3px; /* Border thickness */
          background: linear-gradient(135deg, #FFF3E0 0%, #FFE4E6 100%);
          border-radius: 21px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px;
          transition: all 0.4s;
        }

        /* Icon Animation Logic */
        .seva-card-icon {
          position: absolute;
          z-index: 3;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .seva-card:hover .seva-card-icon {
          transform: translateY(-50px) scale(0.85);
        }

        /* Description Reveal Logic */
        .seva-card-content {
          position: absolute;
          z-index: 3;
          bottom: -20px;
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 20px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .seva-card:hover .seva-card-content {
          opacity: 1;
          bottom: 30px;
        }

        .seva-card-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 10;
          font-size: 9px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 100px;
          background: #DC2626;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, index, inView }: any) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="seva-card">
        {service.tag && <span className="seva-card-tag">{service.tag}</span>}

        <div className="seva-card-inner">
          <div className="seva-card-icon">
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-red-50">
               <Icon size={40} className="text-red-600" />
            </div>
            <span className="text-gray-900 font-bold text-sm tracking-tight">
              {service.title}
            </span>
          </div>

          <div className="seva-card-content">
            <h3 className="text-gray-900 font-black text-sm uppercase mb-2">
              {service.title}
            </h3>
            <p className="text-red-900/70 text-[11px] leading-relaxed font-medium">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}