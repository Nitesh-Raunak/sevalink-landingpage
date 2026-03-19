"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceHeroSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText: string;
  ctaAction?: () => void;
};

export function ServiceHeroSection({
  title,
  subtitle,
  description,
  icon: Icon,
  iconBg,
  imageSrc,
  imageAlt,
  ctaText,
  ctaAction,
}: ServiceHeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,165,120,0.15),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,110,110,0.12),transparent_45%),linear-gradient(180deg,#fff8ef_0%,#ffeedc_60%,#ffe7d2_100%)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBg} text-white shadow-2xl`}
            >
              <Icon className="h-10 w-10" strokeWidth={1.5} />
            </motion.div>

            <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
              {subtitle}
            </span>

            <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {description}
            </p>

            <motion.button
              onClick={ctaAction}
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/40 hover:scale-105"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative h-72 sm:h-80 md:h-96 lg:h-[28rem] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
          >
            {imageSrc ? (
              <>
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? `${title} preview`}
                  fill
                  className="object-cover object-center z-10"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent z-20" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`h-48 w-48 rounded-3xl bg-gradient-to-br ${iconBg} opacity-20 blur-3xl`}
                />
                <Icon className="absolute h-32 w-32 text-gray-300" strokeWidth={0.5} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
