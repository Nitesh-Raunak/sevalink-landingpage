"use client";
import { useRef, useEffect, useState } from "react";
import { HeartPulse, Building2, LayoutGrid, Check } from "lucide-react";

const audiences = [
  {
    title: "Individual & Family",
    icon: HeartPulse,
    image: "/images/Individuals&Family.jpg",
    features: ["Book ambulance in 60 seconds", "Family Tracking", "24/7 Support"],
    color: "bg-red-600",
  },
  {
    title: "Hospital Partner",
    icon: Building2,
    image: "/images/Hospital_Partners.jpg",
    features: ["Integrated dispatch system", "Patient Dashboard", "Real-time Records"],
    color: "bg-red-600",
  },
  {
    title: "Network Provider",
    icon: LayoutGrid,
    image: "/images/Network_providers.jpg",
    features: ["Multi-vehicle management", "Driver App", "Instant Settlements"],
    color: "bg-red-600",
  },
];

export function ForWhomSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-fit sm:min-h-[600px] lg:min-h-screen flex items-center landing-section-spacing" style={{ backgroundColor: "#FFF3E0" }}>
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div
          className="text-center mb-10 sm:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-3 sm:mb-4">
            Who We Serve
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Built for <span className="text-red-600">Every Emergency</span>
          </h2>
          <p className="text-gray-500 mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg max-w-xl mx-auto">
            Whether you're an individual, a hospital, or an ambulance provider — SevaLink has a solution for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-orange-100/50 flex flex-col h-full"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease ${i * 0.1 + 0.2}s, transform 0.5s ease ${i * 0.1 + 0.2}s`,
              }}
            >
              {/* Image Header */}
              <div className="relative h-48 sm:h-64 lg:h-72 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center gap-3 sm:gap-4">
                  <div className={`${item.color} p-2 sm:p-3 rounded-xl sm:rounded-2xl text-white shadow-lg`}>
                    <item.icon size={20} className="sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">{item.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3 sm:space-y-4">
                  {item.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Check className="text-red-600 sm:w-3.5 sm:h-3.5" size={12} strokeWidth={3} />
                      </div>
                      <p className="text-gray-700 font-bold text-xs sm:text-sm">{f}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 sm:mt-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-900 text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-red-600 transition-all duration-300 transform active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}