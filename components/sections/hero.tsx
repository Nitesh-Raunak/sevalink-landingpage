'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Ambulance, Phone, Timer } from "lucide-react";
import Aurora from '../ui/Aurora';

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center min-h-fit sm:min-h-screen lg:min-h-[80vh]"
      style={{ 
        backgroundColor: "#FFF3E0", 
        marginTop: "-80px", 
        paddingTop: "80px" 
      }}
    >
      {/* --- Aurora Background --- */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Aurora 
          colorStops={["#ec7490", "#c44f55", "#bf2222"]} 
          blend={0.8} 
          amplitude={1.1} 
          speed={0.5} 
        />
      </div>

      <div className="relative mx-auto max-w-7xl landing-section-spacing lg:px-8 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                Available 24/7 Across The Nation
              </span>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-3 sm:mb-6 text-gray-900">
              {["Emergency", "Healthcare When", "You Need It Most"].map((line, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }} className="block">
                  <motion.span whileHover={{ x: 8 }} transition={{ duration: 0.2 }} className="inline-block cursor-default text-red-600">
                    {line}
                  </motion.span>
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-950 font-bold text-xs sm:text-sm lg:text-base max-w-xl mb-4 sm:mb-8 leading-relaxed"
            >
              SevaLink connects patients, hospitals, and ambulance services for faster emergency medical transportation. One click connects you to life-saving care.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-8">
              <Link href="/book" className="animated-btn group">
                <span className="btn-text flex items-center gap-2">
                  <Ambulance className="w-5 h-5" /> Book Ambulance
                </span>
                <span className="btn-circle" />
                <svg className="arr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
              </Link>
              <Link href="tel:108" className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold rounded-full transition-all hover:scale-105 text-xs sm:text-sm lg:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> Call 108
              </Link>
            </motion.div>
          </div>

          {/* Right — Ambulance Image + Floating Cards */}
          <div className="flex-1 relative flex items-center justify-center w-full" style={{ minHeight: "450px" }}>
            
            {/* Image Container - Balanced Size: max-w-[320px] on large screens */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} 
              className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] px-2"
            >
              <Image 
                src="/images/ambulance.png" 
                alt="SevaLink Ambulance" 
                width={500} 
                height={375} 
                // Rounded corners and a very deep, smooth red glow shadow
                className="h-auto w-full rounded-[2.5rem] drop-shadow-[0_25px_40px_rgba(220,38,38,0.35)]" 
                priority 
              />
            </motion.div>

            {/* Floating Info Cards - Re-positioned for balanced image size */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="absolute top-10 right-2 sm:right-6 lg:right-10 z-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 border border-white/20">
              <Shield className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Certified</p>
                <p className="text-xs font-bold text-gray-900">Paramedics</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="absolute top-20 left-2 sm:left-6 lg:left-10 z-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl px-3 py-2 border border-white/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Live BPM</p>
              </div>
              <div className="flex items-end gap-1">
                <div className="flex items-end gap-0.5">
                  {[12, 20, 16, 24, 14].map((h, i) => (
                    <div key={i} className={`w-1.5 rounded-sm ${i === 3 ? "bg-red-600" : "bg-red-400"}`} style={{ height: `${h}px` }} />
                  ))}
                </div>
                <p className="text-xl font-bold text-gray-900 ml-1">72</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="absolute bottom-6 left-10 sm:left-20 z-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 border border-white/20">
              <Timer className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Response</p>
                <p className="text-xs font-bold text-gray-900">8 Minutes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated Button Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .animated-btn { position: relative; display: flex; align-items: center; gap: 4px; padding: 14px 32px; border: 4px solid transparent; font-size: 15px; background-color: #DC2626; border-radius: 100px; font-weight: 600; color: white; box-shadow: 0 0 0 2px #DC2626; cursor: pointer; overflow: hidden; transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); text-decoration: none; }
        .animated-btn .arr-1 { position: absolute; width: 24px; fill: white; z-index: 9; right: 16px; transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .animated-btn .btn-text { position: relative; z-index: 1; transform: translateX(-12px); transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .animated-btn .btn-circle { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; background-color: #b91c1c; border-radius: 50%; opacity: 0; transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
        .animated-btn:hover .btn-circle { width: 300px; height: 300px; opacity: 1; }
        .animated-btn:hover .btn-text { transform: translateX(12px); }
        .animated-btn:hover .arr-1 { right: -25%; opacity: 0; }
      `}} />
    </section>
  );
}