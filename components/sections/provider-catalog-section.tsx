"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Ambulance,
  Users,
  ArrowRight,
  CheckCircle2,
  Home,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PROVIDER_FORM_LINKS } from "@/lib/provider-form-links";

type ProviderRole = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  requirementsTitle: string;
  requirements: string[];
  extraListTitle?: string;
  extraList?: string[];
  benefitsTitle: string;
  benefits: string[];
  ctaText: string;
  formUrl: string;
  icon: LucideIcon;
  iconBg: string;
  imageSrc: string;
  imageAlt: string;
};

const providers: ProviderRole[] = [
  {
    id: "driver",
    eyebrow: "Individual Driver",
    title: "Join as an Individual Driver",
    description:
      "Earn by providing emergency ambulance services in your area with quick dispatch matching and strong city-wide demand.",
    requirementsTitle: "Eligibility Requirements",
    requirements: [
      "Valid driving license (commercial preferred)",
      "Basic knowledge of routes and emergency handling",
      "Must be available within 5 km service radius",
      "Should own or operate an ambulance",
    ],
    extraListTitle: "Ambulance Requirements",
    extraList: [
      "Basic medical equipment (stretcher, oxygen cylinder)",
      "Clean and well-maintained vehicle",
      "GPS-enabled smartphone",
    ],
    benefitsTitle: "Benefits",
    benefits: ["Earn per ride", "Flexible working hours", "Continuous demand"],
    ctaText: "Join Us",
    formUrl: PROVIDER_FORM_LINKS.driverFleet,
    icon: Ambulance,
    iconBg: "from-red-500 to-red-600",
    imageSrc: "/images/5889811436_32ab8f2a07_b.jpg",
    imageAlt: "Ambulance driver ready for emergency duty",
  },
  {
    id: "hospital",
    eyebrow: "Hospital",
    title: "Partner with Us as a Hospital",
    description:
      "Manage patient inflow and ambulance coordination efficiently using SevaLink workflow tools and rapid dispatch visibility.",
    requirementsTitle: "Requirements",
    requirements: [
      "Registered hospital or clinic",
      "Basic emergency handling infrastructure",
      "Dedicated staff for coordination",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Increased patient reach",
      "Dashboard for managing requests",
      "Better emergency coordination",
    ],
    ctaText: "Join Us",
    formUrl: PROVIDER_FORM_LINKS.hospital,
    icon: Building2,
    iconBg: "from-blue-600 to-sky-500",
    imageSrc: "/images/hospital-appointment.webp",
    imageAlt: "Hospital operations and emergency coordination team",
  },
  {
    id: "fleet",
    eyebrow: "Fleet Owner",
    title: "Join as a Fleet Owner",
    description:
      "Manage multiple ambulances, coordinate drivers at scale, and maximize earnings through smart routing and fallback demand.",
    requirementsTitle: "Requirements",
    requirements: [
      "Own or manage multiple ambulances",
      "Ability to handle multiple drivers",
      "Operational coordination capability",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Higher earning potential",
      "Fallback request system when no individual driver is available",
      "Business growth opportunity",
    ],
    ctaText: "Join Us",
    formUrl: PROVIDER_FORM_LINKS.driverFleet,
    icon: Users,
    iconBg: "from-red-500 to-orange-500",
    imageSrc: "/images/Network_providers.jpg",
    imageAlt: "Fleet operations dashboard and dispatch planning",
  },
  {
    id: "homecare",
    eyebrow: "Homecare",
    title: "Homecare Service",
    description:
      "Get professional healthcare services at home including nursing, elderly care, and medical assistance.",
    requirementsTitle: "Services Provided",
    requirements: [
      "Nursing support at home",
      "Elderly care services",
      "Post-hospital recovery assistance",
      "Medical equipment setup",
    ],
    benefitsTitle: "Why Choose Homecare",
    benefits: [
      "Professional medical care",
      "Comfort of your home",
      "Personalized attention",
    ],
    ctaText: "Join Us",
    formUrl: PROVIDER_FORM_LINKS.homecare,
    icon: Home,
    iconBg: "from-green-600 to-emerald-500",
    imageSrc: "/images/nurse.webp",
    imageAlt: "Professional nurse providing homecare assistance",
  },
];

function ProviderSectionBlock({
  provider,
  reverse,
}: {
  provider: ProviderRole;
  reverse: boolean;
}) {
  const Icon = provider.icon;

  return (
    <section id={provider.id} className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="grid grid-cols-1 items-center gap-8 rounded-[2rem] border border-blue-100/80 bg-white/80 p-5 shadow-[0_20px_45px_rgba(14,56,107,0.1)] backdrop-blur-sm md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
      >
        <div className={reverse ? "order-1 lg:order-2" : "order-1"}>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-100/80 bg-slate-100 shadow-[0_16px_36px_rgba(20,60,120,0.18)]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={provider.imageSrc}
                alt={provider.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3A75]/25 via-transparent to-transparent" />
              
              {/* Coming Soon Badge */}
              {provider.id === "homecare" && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute top-4 right-4 z-10"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 shadow-lg border border-amber-200">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Coming Soon</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className={reverse ? "order-2 lg:order-1" : "order-2"}>
          <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700">
            {provider.eyebrow}
          </span>

          <div className="mb-5 flex items-center gap-3">
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${provider.iconBg} text-white shadow-lg`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">{provider.title}</h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{provider.description}</p>

          <h3 className="mt-6 text-sm font-black uppercase tracking-[0.15em] text-red-600">
            {provider.requirementsTitle}
          </h3>
          <div className="mt-3 space-y-2.5">
            {provider.requirements.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>

          {provider.extraListTitle && provider.extraList ? (
            <>
              <h3 className="mt-6 text-sm font-black uppercase tracking-[0.15em] text-red-600">
                {provider.extraListTitle}
              </h3>
              <div className="mt-3 space-y-2.5">
                {provider.extraList.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </>
          ) : null}

          <h3 className="mt-6 text-sm font-black uppercase tracking-[0.15em] text-red-600">
            {provider.benefitsTitle}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {provider.benefits.map((benefit) => (
              <span
                key={benefit}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700"
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={provider.formUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-black uppercase tracking-wide !text-white hover:!text-white active:!text-white shadow-[0_10px_25px_rgba(220,38,38,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700"
            >
              {provider.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function ProviderCatalogSection() {
  return (
    <section className="relative overflow-hidden landing-section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_10%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_84%_16%,rgba(239,68,68,0.14),transparent_40%),linear-gradient(180deg,#f7fbff_0%,#eef6ff_55%,#eaf2fd_100%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <p className="mb-3 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700">
            SevaLink Provider Network
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Join SevaLink as a Provider
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore each provider role, verify your eligibility, and register in seconds with a phone-first join flow.
          </p>
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {providers.map((provider, index) => (
            <ProviderSectionBlock
              key={provider.id}
              provider={provider}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
