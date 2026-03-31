import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, MapPin, Shield, Heart, Home, Download } from "lucide-react";
import ambulanceImg from "@/assets/ambulance-hero.jpg";
import homecareImg from "@/assets/homecare-hero.jpg";

const tabs = [
  { id: "emergency", label: "Emergency", icon: Phone },
  { id: "homecare", label: "Home Care", icon: Home },
] as const;

type TabId = (typeof tabs)[number]["id"];

const content: Record<TabId, {
  badge: string;
  title: string[];
  highlight: string;
  subtitle: string;
  image: string;
  cta: string;
  ctaColor: string;
  stats: { icon: typeof Clock; label: string; value: string }[];
  floatingBadges: { text: string; sub: string; position: string }[];
}> = {
  emergency: {
    badge: "Trusted by 10,000+ families",
    title: ["Every Second", "In An Emergency"],
    highlight: "Matters",
    subtitle: "Book an ambulance in under 30 seconds. SevaLink connects you to the nearest verified ambulance with real-time tracking.",
    image: ambulanceImg,
    cta: "Book Ambulance",
    ctaColor: "bg-emergency text-emergency-foreground hover:bg-emergency/90",
    stats: [
      { icon: Clock, label: "Avg Response", value: "10 min" },
      { icon: Shield, label: "Always Available", value: "24/7" },
    ],
    floatingBadges: [
      { text: "Live Tracking", sub: "GPS enabled", position: "left-[-40px] top-[40%]" },
      { text: "Verified", sub: "All ambulances", position: "right-[-30px] bottom-[20%]" },
    ],
  },
  homecare: {
    badge: "Trusted by 10,000+ families",
    title: ["Professional", "At Your Doorstep"],
    highlight: "Care",
    subtitle: "From nursing care to elderly support and doctor home visits — quality healthcare delivered to your home by verified professionals.",
    image: homecareImg,
    cta: "Book Home Care",
    ctaColor: "bg-homecare text-homecare-foreground hover:bg-homecare/90",
    stats: [
      { icon: MapPin, label: "Care Visits", value: "At Home" },
      { icon: Heart, label: "Verified Care", value: "24/7" },
    ],
    floatingBadges: [
      { text: "Professional", sub: "Verified staff", position: "left-[-40px] top-[30%]" },
      { text: "Affordable", sub: "Transparent pricing", position: "right-[-30px] bottom-[25%]" },
    ],
  },
};

const HeroToggle = () => {
  const [active, setActive] = useState<TabId>("emergency");
  const data = content[active];

  return (
    <section className="min-h-[90vh] bg-background font-display">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">🪷 SevaLink</span>
        </div>
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

      {/* Toggle */}
      <div className="flex justify-center mt-4">
        <div className="relative flex bg-card rounded-full p-1 shadow-sm border border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                active === tab.id ? "text-card" : "text-muted-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {active === tab.id && (
                <motion.div
                  layoutId="toggle-bg"
                  className={`absolute inset-0 rounded-full ${tab.id === "emergency" ? "bg-emergency" : "bg-homecare"}`}
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emergency/10 text-emergency text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emergency animate-pulse" />
                {data.badge}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {data.title[0]}{" "}
                <span className={active === "emergency" ? "text-emergency" : "text-homecare"}>
                  {data.highlight}
                </span>
                <br />
                {data.title[1]}
              </h1>

              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                {data.subtitle}
              </p>

              <button className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition-all ${data.ctaColor}`}>
                <Download className="w-4 h-4" />
                Install App
              </button>

              <div className="flex gap-8 mt-8">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <stat.icon className={`w-5 h-5 ${active === "emergency" ? "text-emergency" : "text-homecare"}`} />
                    <div>
                      <p className="font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card p-3 max-w-md">
                <img
                  src={data.image}
                  alt={active === "emergency" ? "Ambulance service" : "Home care service"}
                  className="rounded-2xl w-full h-[400px] object-cover"
                  width={800}
                  height={600}
                />
                {active === "emergency" && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-homecare/90 text-homecare-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                    ETA: 10 min
                  </div>
                )}
              </div>

              {/* Floating badges */}
              {data.floatingBadges.map((badge) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`absolute ${badge.position} bg-card rounded-xl shadow-lg px-4 py-2.5 hidden lg:block`}
                >
                  <p className="text-sm font-semibold text-foreground">{badge.text}</p>
                  <p className="text-xs text-muted-foreground">{badge.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative crosses */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute text-emergency/40 text-xl"
            style={{ top: `${15 + i * 15}%`, left: `${5 + i * 18}%` }}
          >
            ✕
          </span>
        ))}
      </div>
    </section>
  );
};

export default HeroToggle;
