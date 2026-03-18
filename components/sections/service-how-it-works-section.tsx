"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  time?: string;
};

type ServiceHowItWorksSectionProps = {
  title: string;
  description?: string;
  steps: Step[];
};

export function ServiceHowItWorksSection({
  title,
  description,
  steps,
}: ServiceHowItWorksSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden landing-section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-red-400 to-transparent translate-x-full" />
                )}

                <div className="relative flex flex-col items-start">
                  {/* Step Badge */}
                  <motion.div
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500 font-black text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-black tracking-tight text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {step.time && (
                    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-xs font-bold text-green-700">
                        {step.time}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
