"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ambulance, HousePlus, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceBlock = {
  id: string;
  eyebrow: string;
  topTag?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  icon: LucideIcon;
  iconBg: string;
  imageSrc: string;
  imageAlt: string;
  highlightsHeading: string;
  highlights: string[];
};

const services: ServiceBlock[] = [
  {
    id: "ambulance",
    eyebrow: "Emergency Ambulance",
    title: "Emergency Ambulance",
    description:
      "Get immediate ambulance dispatch with live route visibility, trained emergency support, and quick hospital coordination when every minute matters.",
    ctaText: "Book Ambulance Now",
    ctaHref: "/services",
    icon: Ambulance,
    iconBg: "from-red-500 to-red-600",
    imageSrc: "/images/5889811436_32ab8f2a07_b.jpg",
    imageAlt: "Emergency ambulance on standby",
    highlightsHeading: "Key Features",
    highlights: [
      "Real-time GPS tracking from dispatch to arrival",
      "Nearest ambulance matching within 5 km zones",
      "ICU, ALS, and BLS-ready support options",
      "Rapid hospital handover coordination",
    ],
  },
  {
    id: "homecare",
    eyebrow: "Homecare",
    title: "Homecare",
    description:
      "Bring professional medical care to your doorstep with qualified nurses, assisted daily routines, and personalized recovery support for families.",
    ctaText: "Book Homecare",
    ctaHref: "/services",
    icon: HousePlus,
    iconBg: "from-blue-500 to-cyan-500",
    imageSrc: "/images/family-service.webp",
    imageAlt: "Nurse assisting family with homecare",
    highlightsHeading: "Services Included",
    highlights: [
      "Certified nursing visits and routine monitoring",
      "Elderly care support for comfort and safety",
      "Post-hospital recovery and mobility assistance",
      "Medication and care-plan follow-up",
    ],
  },
  {
    id: "hospital",
    eyebrow: "Hospital Appointment",
    topTag: "Coming Soon",
    title: "Hospital Appointment",
    description:
      "Find the right specialist quickly, compare availability, and reserve priority slots for faster diagnosis and treatment without long waiting lines.",
    ctaText: "Book Appointment",
    ctaHref: "/services",
    icon: Calendar,
    iconBg: "from-blue-600 to-sky-500",
    imageSrc: "/images/hospital-appointment.webp",
    imageAlt: "Doctor consultation and hospital appointment desk",
    highlightsHeading: "Platform Features",
    highlights: [
      "Search doctors by specialty and experience",
      "Book preferred slots with instant confirmation",
      "Smart reminders for appointments and follow-ups",
      "Priority scheduling for urgent consultations",
    ],
  },
];

function ServiceShowcaseBlock({
  service,
  reverse,
}: {
  service: ServiceBlock;
  reverse: boolean;
}) {
  const Icon = service.icon;

  return (
    <section id={service.id} className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="relative grid grid-cols-1 items-center gap-8 rounded-[2rem] border border-blue-100/80 bg-white/80 p-5 shadow-[0_20px_45px_rgba(14,56,107,0.1)] backdrop-blur-sm md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
      >
        {service.topTag ? (
          <span className="absolute -top-3 left-5 inline-flex items-center rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-amber-800 shadow-sm">
            {service.topTag}
          </span>
        ) : null}

        <div className={reverse ? "order-1 lg:order-2" : "order-1"}>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-100/80 bg-slate-100 shadow-[0_16px_36px_rgba(20,60,120,0.18)]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3A75]/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className={reverse ? "order-2 lg:order-1" : "order-2"}>
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700">
            {service.eyebrow}
          </span>

          <div className="mb-5 flex items-center gap-3">
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconBg} text-white shadow-lg`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">{service.title}</h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{service.description}</p>

          <h3 className="mt-6 text-sm font-black uppercase tracking-[0.15em] text-red-600">
            {service.highlightsHeading}
          </h3>

          <div className="mt-3 space-y-3">
            {service.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-sm text-slate-700">{highlight}</span>
              </motion.div>
            ))}
          </div>

          <Link
            href={service.ctaHref}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(220,38,38,0.35)]"
          >
            {service.ctaText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export function ServicesCatalogSection() {
  return (
    <section className="relative overflow-hidden landing-section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_10%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_84%_16%,rgba(239,68,68,0.14),transparent_40%),linear-gradient(180deg,#f7fbff_0%,#eef6ff_55%,#eaf2fd_100%)]" />

      <div className="mx-auto max-w-7xl scroll-smooth">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <p className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700">
            SevaLink Care Suite
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Healthcare Services, Designed for Fast Action
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Scroll through each service to understand how SevaLink supports emergency response, homecare continuity, and hospital access in one premium experience.
          </p>
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {services.map((service, index) => (
            <ServiceShowcaseBlock
              key={service.id}
              service={service}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
