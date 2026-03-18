"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type DetailItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ServiceDetailGridProps = {
  title: string;
  description?: string;
  items: DetailItem[];
  columns?: 2 | 3 | 4;
};

export function ServiceDetailGrid({
  title,
  description,
  items,
  columns = 3,
}: ServiceDetailGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className="relative overflow-hidden landing-section-spacing">
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
          className={`grid grid-cols-1 gap-6 ${gridColsClass}`}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="h-full rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition-all duration-500"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    borderColor: "rgb(239, 68, 68)",
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
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
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
