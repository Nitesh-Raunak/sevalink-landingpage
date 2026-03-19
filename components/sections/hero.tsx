'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Aurora from "../ui/Aurora";

const stats = [
  { icon: Clock, value: "< 8 min", label: "Avg Response" },
  { icon: MapPin, value: "500+", label: "Cities Covered" },
  { icon: Shield, value: "24/7", label: "Always Available" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Aurora background (light, non-muddy palette) */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Aurora
          colorStops={["#f7a3b5", "#ec7490", "#c44f55"]}
          blend={0.62}
          amplitude={0.95}
          speed={0.48}
        />
      </div>

      <div className="absolute inset-0 z-0 bg-white/30" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200/50 bg-red-50/50 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-semibold text-red-700">Trusted by 10,000+ families</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-gray-900">
              Every Second{" "}
              <span className="text-red-600">Matters</span>
              <br />
              In An Emergency
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md">
              Book an ambulance in under 30 seconds. SevaLink connects you to the nearest verified ambulance with real-time tracking.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="mb-10 flex flex-wrap gap-3"
            >
              <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/book?service=ambulance"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl px-8 text-base font-semibold text-white shadow-[0_14px_30px_rgba(220,38,38,0.35)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />
                  <motion.span
                    aria-hidden
                    className="absolute -left-16 top-0 h-full w-16 bg-white/25 blur-md"
                    animate={{ x: [0, 260, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Book Ambulance Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-gray-300 bg-white/80 px-8 text-base font-semibold backdrop-blur-sm hover:bg-white"
                >
                  <Link href="/services" className="inline-flex items-center gap-2">
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-6 sm:gap-8"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 leading-tight">{value}</div>
                    <div className="text-xs text-gray-600">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl bg-white/80 backdrop-blur-md border border-white/60 p-8 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/ambulance.png"
                  alt="Emergency Ambulance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 to-orange-100/20" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50/90 border border-green-200 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-700">ETA: 10 min</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-6 top-1/3 bg-white/90 backdrop-blur-md border border-white rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Live Tracking</div>
                    <div className="text-[10px] text-gray-600">GPS enabled</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-md border border-white rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Verified</div>
                    <div className="text-[10px] text-gray-600">All ambulances</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom emergency bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-red-50/80 backdrop-blur-sm border-t border-red-100/50 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-4 text-sm">
          <Phone className="w-4 h-4 text-red-600" />
          <span className="text-gray-700 font-medium">Emergency?</span>
          <a href="tel:108" className="font-bold text-red-600 hover:text-red-700 transition-colors">
            Call 108 Now
          </a>
          <span className="text-gray-300">|</span>
          <a href="tel:112" className="font-bold text-red-600 hover:text-red-700 transition-colors">
            Call 112
          </a>
        </div>
      </div>
    </section>
  );
}
