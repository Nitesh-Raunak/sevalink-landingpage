'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Aurora from "@/components/ui/Aurora";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden flex items-center min-h-[75vh] lg:min-h-[80vh]" style={{ backgroundColor: "#FFF3E0", marginTop: "-80px", paddingTop: "80px" }}>
      <Aurora colorStops={["#DC2626", "#FF6B6B", "#FFF3E0"]} amplitude={0.3} blend={0.15} speed={0.5} />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl" style={{ backgroundColor: "#FFCDD2", opacity: 0.3 }} />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full blur-3xl" style={{ backgroundColor: "#FFCDD2", opacity: 0.2 }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-20 pb-8 w-full" style={{ zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="flex-1 z-10 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                Available 24/7 Across The Nation
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              {["Emergency", "Healthcare When", "You Need It Most"].map((line, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }} className="block">
                  <motion.span
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block cursor-default text-red-600"
                    style={{ textShadow: "0 0 30px rgba(255,243,224,0.9), 0 2px 8px rgba(255,243,224,0.7)" }}
                  >
                    {line}
                  </motion.span>
                </motion.span>
              ))}
            </motion.h1>

            {/* Paragraph — text shadow for readability on Aurora */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-900 font-bold text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
              style={{ textShadow: "0 0 20px rgba(255,243,224,0.95), 0 0 40px rgba(255,243,224,0.8), 0 2px 4px rgba(255,243,224,0.9)" }}
            >
              SevaLink connects patients, hospitals, and ambulance services for faster emergency medical transportation. One click connects you to life-saving care.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap gap-4 mb-8">
              <Link href="/book" className="animated-btn group">
                <svg className="arr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
                <span className="btn-text">🚑 Book Ambulance</span>
                <span className="btn-circle" />
                <svg className="arr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
              </Link>
              <Link href="tel:108" className="flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold rounded-full transition-all hover:scale-105 text-sm sm:text-base">
                📞 Call 108
              </Link>
            </motion.div>

            <style>{`
              .animated-btn { position: relative; display: flex; align-items: center; gap: 4px; padding: 14px 32px; border: 4px solid transparent; font-size: 15px; background-color: #DC2626; border-radius: 100px; font-weight: 600; color: white; box-shadow: 0 0 0 2px #DC2626; cursor: pointer; overflow: hidden; transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); text-decoration: none; }
              .animated-btn svg { position: absolute; width: 24px; fill: white; z-index: 9; transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
              .animated-btn .arr-1 { right: 16px; }
              .animated-btn .arr-2 { left: -25%; }
              .animated-btn .btn-circle { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; background-color: #b91c1c; border-radius: 50%; opacity: 0; transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
              .animated-btn .btn-text { position: relative; z-index: 1; transform: translateX(-12px); transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
              .animated-btn:hover { box-shadow: 0 0 0 12px transparent; color: white; border-radius: 12px; }
              .animated-btn:hover .arr-1 { right: -25%; }
              .animated-btn:hover .arr-2 { left: 16px; }
              .animated-btn:hover .btn-text { transform: translateX(12px); }
              .animated-btn:hover svg { fill: white; }
              .animated-btn:active { scale: 0.95; box-shadow: 0 0 0 4px #DC2626; }
              .animated-btn:hover .btn-circle { width: 220px; height: 220px; opacity: 1; }
            `}</style>

            {/* Trust badges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex flex-wrap items-center gap-4">
              {["Verified Hospitals", "GPS Tracked", "Under 8 Min Response"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-xs">✓</span>
                  <span
                    className="text-xs sm:text-sm text-gray-900 font-bold"
                    style={{ textShadow: "0 0 15px rgba(255,243,224,0.95), 0 0 30px rgba(255,243,224,0.8)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Ambulance Image + Floating Cards */}
          <div className="flex-1 relative flex items-center justify-center w-full" style={{ minHeight: "350px" }}>
            <div className="absolute inset-4 rounded-3xl" style={{ backgroundColor: "#F5DEB3", opacity: 0.4 }} />

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="absolute top-4 right-2 sm:right-0 z-20 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Certified</p>
                <p className="text-xs font-bold text-gray-900">Paramedics</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="absolute top-8 left-2 sm:left-0 z-20 bg-white rounded-2xl shadow-lg px-3 py-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Live BPM</p>
              </div>
              <div className="flex items-end gap-1">
                <div className="flex items-end gap-0.5">
                  {[12, 20, 16, 24, 14].map((h, i) => (
                    <div key={i} className={`w-1.5 rounded-sm ${i === 3 ? "bg-red-600" : i === 1 ? "bg-red-500" : "bg-red-400"}`} style={{ height: `${h}px` }} />
                  ))}
                </div>
                <p className="text-xl font-bold text-gray-900 ml-1">72</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="absolute bottom-4 left-2 sm:left-4 z-20 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2">
              <span className="text-green-500 text-lg">⏱</span>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Average Response</p>
                <p className="text-xs font-bold text-gray-900">8 Minutes</p>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-lg px-4">
              <Image src="/images/ambulance.png" alt="SevaLink Ambulance" width={600} height={450} className="h-auto w-full drop-shadow-2xl" priority />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}