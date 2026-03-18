"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ambulance, HousePlus, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCard = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  imageSrc?: string;
  imageAlt?: string;
  highlights: string[];
  badge?: string;
  badgeColor?: string;
};

const services: ServiceCard[] = [
  {
    title: "Emergency Ambulance",
    href: "/services/ambulance",
    description:
      "Book an ambulance instantly with real-time tracking and smart hospital matching for faster emergency response.",
    icon: Ambulance,
    iconBg: "from-red-500 to-orange-500",
    highlights: ["Real-time GPS tracking", "5km response time", "ICU & BLS support"],
    badge: "Most Requested",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    title: "Homecare",
    href: "/services/homecare",
    description:
      "Get medical care at home including nursing support, elderly care, and post-hospital recovery services.",
    icon: HousePlus,
    iconBg: "from-emerald-500 to-teal-600",
    highlights: ["Certified nurses", "Elderly care specialist", "Post-op recovery"],
    badge: "At Home Care",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Hospital Appointment",
    href: "/services/hospital",
    description: "Book doctor appointments at hospitals and get priority scheduling for faster care.",
    icon: Calendar,
    iconBg: "from-purple-500 to-blue-600",
    highlights: ["Priority booking", "Specialist doctors", "Zero waiting time"],
    badge: "Schedule Now",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function ServicesCatalogSection() {
  return (
    <section className="relative overflow-hidden landing-section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,165,120,0.18),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(255,110,110,0.14),transparent_40%),linear-gradient(180deg,#fff8ef_0%,#ffeedc_60%,#ffe7d2_100%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <p className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-red-600">
            Our Services
          </p>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Get emergency healthcare support quickly and easily.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={service.href}>
                  <motion.div
                    className="group relative h-full overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-br from-white via-gray-50/40 to-gray-100/30 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out cursor-pointer"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Badge */}
                    {service.badge && (
                      <div
                        className={`absolute top-4 right-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide ${service.badgeColor} transition-transform duration-300 group-hover:scale-105`}
                      >
                        {service.badge}
                      </div>
                    )}

                    <div className="relative z-10 flex h-full flex-col">
                      {/* Icon Section */}
                      {service.imageSrc ? (
                        <motion.div
                          className="relative mb-6 h-36 w-full overflow-hidden rounded-2xl border border-white/70 shadow-md"
                          whileHover={{ scale: 1.02 }}
                        >
                          <Image
                            src={service.imageSrc}
                            alt={service.imageAlt ?? `${service.title} image`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
                        </motion.div>
                      ) : (
                        <motion.div
                          className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconBg} text-white shadow-lg shadow-opacity-40 transition-transform duration-300 group-hover:scale-110`}
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className="h-8 w-8" strokeWidth={1.5} />
                        </motion.div>
                      )}

                      {/* Title */}
                      <h2 className="mb-2 text-xl font-black tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-gray-900 to-gray-600">
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p className="mb-5 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        {service.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="mb-6 space-y-2.5 flex-1">
                        {service.highlights.map((highlight, idx) => (
                          <motion.div
                            key={highlight}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <CheckCircle2 className="h-4.5 w-4.5 flex-shrink-0 mt-0.5 text-green-500 transition-transform duration-300 group-hover:scale-110" />
                            <span className="text-xs font-semibold text-gray-700 leading-snug">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className="inline-flex w-fit items-center gap-2.5 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-3 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-gray-900/20 transition-all duration-300 group-hover:from-gray-800 group-hover:to-black group-hover:shadow-lg group-hover:shadow-gray-900/30"
                        whileHover={{ gap: "0.75rem" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
