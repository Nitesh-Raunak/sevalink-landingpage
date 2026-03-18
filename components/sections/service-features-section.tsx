"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ServiceFeaturesSectionProps = {
  title: string;
  description?: string;
  features: Feature[];
};

export function ServiceFeaturesSection({
  title,
  description,
  features,
}: ServiceFeaturesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden landing-section-spacing bg-gradient-to-b from-gray-50 to-white">
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
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    borderColor: "#ff6b6b",
                  }}
                >
                  <motion.div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="mb-2 text-lg font-black tracking-tight text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
