import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Home, ArrowRight, Clock, Shield, MapPin, Heart, Sparkles } from "lucide-react";
import ambulanceImg from "@/assets/ambulance-hero.jpg";
import homecareImg from "@/assets/homecare-hero.jpg";

/**
 * Variant 5: Asymmetric Overlap Hero
 * Large overlapping images with asymmetric layout, one service dominates while other peeks
 */

type ActiveService = "emergency" | "homecare";

const services = {
  emergency: {
    tag: "Emergency Services",
    headline: ["Every Second", "Matters"],
    desc: "Book a verified ambulance in 30 seconds. GPS-tracked, 24/7 available.",
    image: ambulanceImg,
    cta: "Book Ambulance",
    stats: [
      { icon: Clock, val: "10 min", label: "Response" },
      { icon: Shield, val: "24/7", label: "Available" },
    ],
  },
  homecare: {
    tag: "Home Care",
    headline: ["Professional Care", "At Your Door"],
    desc: "Nursing, elderly support & doctor visits by verified professionals.",
    image: homecareImg,
    cta: "Book Home Care",
    stats: [
      { icon: MapPin, val: "At Home", label: "Visits" },
      { icon: Heart, val: "Verified", label: "Staff" },
    ],
  },
};

const HeroAsymmetric = () => {
  const [active, setActive] = useState<ActiveService>("emergency");
  const inactive: ActiveService = active === "emergency" ? "homecare" : "emergency";
  const data = services[active];
  const otherData = services[inactive];
  const isEmergency = active === "emergency";

  return (
    <section className="min-h-screen bg-background font-display overflow-hidden relative">
      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 lg:px-16 py-5">
        <span className="text-2xl font-bold text-foreground">🪷 SevaLink</span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Services</a>
          <a href="#" className="hover:text-foreground transition-colors">Provider</a>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full bg-emergency text-emergency-foreground text-sm font-semibold hidden sm:block">
            Book Ambulance
          </button>
          <button className="px-4 py-2 rounded-full bg-homecare text-homecare-foreground text-sm font-semibold hidden sm:block">
            Book Home Care
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 lg:pt-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Content — 5 cols */}
          <div className="lg:col-span-5 pt-4">
            {/* Service Tabs */}
            <div className="relative inline-flex items-center bg-muted rounded-full p-1 mb-8">
              {/* Sliding indicator */}
              <motion.div
                className={`absolute top-1 bottom-1 rounded-full shadow-lg ${
                  isEmergency ? "bg-emergency shadow-emergency/30" : "bg-homecare shadow-homecare/30"
                }`}
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                  left: isEmergency ? "4px" : "50%",
                  right: isEmergency ? "50%" : "4px",
                }}
              />
              {(["emergency", "homecare"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setActive(s)}
                  className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    active === s ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s === "emergency" ? <Phone className="w-3.5 h-3.5" /> : <Home className="w-3.5 h-3.5" />}
                  {s === "emergency" ? "Emergency" : "Home Care"}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  <Sparkles className={`w-3.5 h-3.5 ${isEmergency ? "text-emergency" : "text-homecare"}`} />
                  {data.tag}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] tracking-tight">
                  {data.headline[0]}
                  <br />
                  <span className={isEmergency ? "text-emergency" : "text-homecare"}>
                    {data.headline[1]}
                  </span>
                </h1>

                <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-sm">
                  {data.desc}
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <button
                    className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl transition-all hover:scale-105 ${
                      isEmergency
                        ? "bg-emergency text-white shadow-emergency/25"
                        : "bg-homecare text-white shadow-homecare/25"
                    }`}
                  >
                    {data.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-5 py-3.5 rounded-full text-sm font-semibold text-foreground border border-border hover:bg-accent transition-colors">
                    Learn More
                  </button>
                </div>

                {/* Stats */}
                <div className="flex gap-6 mt-10 pt-8 border-t border-border">
                  {data.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isEmergency ? "bg-emergency/10" : "bg-homecare/10"}`}>
                        <stat.icon className={`w-5 h-5 ${isEmergency ? "text-emergency" : "text-homecare"}`} />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{stat.val}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Images — 7 cols, overlapping */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[580px]">
            {/* Main Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 right-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl z-10"
              >
                <img src={data.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className={`absolute bottom-4 left-4 px-4 py-2 rounded-full text-xs font-bold text-white ${isEmergency ? "bg-emergency/90" : "bg-homecare/90"}`}>
                  {isEmergency ? "⚡ ETA: 10 min" : "✓ Verified Professional"}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background / Other Image — peeking */}
            <motion.div
              className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-background z-20 cursor-pointer"
              onClick={() => setActive(inactive)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={otherData.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-sm font-bold">{otherData.cta}</p>
                  <p className="text-white/60 text-xs mt-1">Click to switch</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className={`absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 -translate-y-1/2 ${isEmergency ? "bg-emergency" : "bg-homecare"}`} />
    </section>
  );
};

export default HeroAsymmetric;
