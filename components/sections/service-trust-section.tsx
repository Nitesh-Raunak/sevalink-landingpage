"use client";

import { motion } from "framer-motion";
import { CheckCircle, Star, Shield, Award } from "lucide-react";

type TrustItem = {
  icon: typeof CheckCircle;
  title: string;
  description: string;
};

type ServiceTrustSectionProps = {
  title: string;
  description?: string;
  trustItems: TrustItem[];
};

export function ServiceTrustSection({
  title,
  description,
  trustItems,
}: ServiceTrustSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden landing-section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_50%,rgba(255,165,120,0.12),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                {description}
              </p>
            )}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-5"
            >
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <motion.div
                      className="h-6 w-6 flex-shrink-0 pt-1"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Icon className="h-full w-full text-green-500" />
                    </motion.div>
                    <div>
                      <h3 className="font-black text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "10K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
              { number: "500+", label: "Professionals" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 text-center shadow-sm"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-black text-red-600">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-bold text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
