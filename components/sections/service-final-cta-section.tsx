"use client";

import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";

type ServiceFinalCtaSectionProps = {
  heading: string;
  subheading?: string;
  primaryCta: {
    text: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
  };
};

export function ServiceFinalCtaSection({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
}: ServiceFinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden landing-section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-red-50 via-orange-50 to-red-50" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-red-200/60 bg-gradient-to-br from-white via-red-50/30 to-orange-50/30 p-12 shadow-2xl"
        >
          <div className="text-center">
            <motion.h2
              className="mb-4 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {heading}
            </motion.h2>

            {subheading && (
              <motion.p
                className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {subheading}
              </motion.p>
            )}

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={primaryCta.onClick}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/40"
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                {primaryCta.text}
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              {secondaryCta && (
                <motion.button
                  onClick={secondaryCta.onClick}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-white px-8 py-4 text-base font-black uppercase tracking-wide text-gray-900 transition-all duration-300 hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                  {secondaryCta.text}
                </motion.button>
              )}
            </motion.div>

            <motion.p
              className="mt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              No booking fee • Quick response • Available 24/7
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
