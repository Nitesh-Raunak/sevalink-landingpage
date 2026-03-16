"use client";

import { useRef, useEffect, useState } from "react";
import { Smartphone, Download, Shield, Clock } from "lucide-react";

export function GetStartedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [phoneActive, setPhoneActive] = useState(false);
  const [phoneGlowPos, setPhoneGlowPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const trustPoints = [
    { icon: Download, label: "Free Download", description: "No upfront cost" },
    { icon: Shield, label: "No Registration Fee", description: "Book instantly" },
    { icon: Clock, label: "Instant Booking", description: "Within 60 seconds" },
  ];

  const handlePhonePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPhoneGlowPos({ x, y });
  };

  // Phone mockup SVG component
  const PhoneMockup = () => (
    <div className="relative w-64 h-96 mx-auto lg:mx-0">
      {/* Phone frame */}
      <svg
        viewBox="0 0 280 560"
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }}
      >
        {/* Phone bezel - black */}
        <rect x="0" y="0" width="280" height="560" rx="40" fill="#1a1a1a" />

        {/* Screen */}
        <rect x="12" y="12" width="256" height="536" rx="32" fill="#fff3e0" />

        {/* Status bar */}
        <rect x="12" y="12" width="256" height="44" rx="20" fill="#DC2626" />
        <text x="140" y="38" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          9:41
        </text>

        {/* App header */}
        <rect x="12" y="56" width="256" height="80" fill="#DC2626" />
        <text x="140" y="85" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
          SevaLink
        </text>
        <text x="140" y="110" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">
          Emergency Ambulance Booking
        </text>

        {/* Book button area */}
        <rect x="30" y="160" width="220" height="60" rx="12" fill="#DC2626" opacity="0.1" stroke="#DC2626" strokeWidth="2" />
        <text x="140" y="190" textAnchor="middle" fill="#DC2626" fontSize="13" fontWeight="bold">
          TAP TO BOOK AMBULANCE
        </text>

        {/* Features section */}
        <rect x="30" y="250" width="220" height="50" rx="8" fill="#f0f0f0" />
        <circle cx="50" cy="275" r="6" fill="#DC2626" />
        <text x="65" y="280" fill="#1a1a1a" fontSize="11" fontWeight="bold">
          Real-time Tracking
        </text>

        <rect x="30" y="315" width="220" height="50" rx="8" fill="#f0f0f0" />
        <circle cx="50" cy="340" r="6" fill="#DC2626" />
        <text x="65" y="345" fill="#1a1a1a" fontSize="11" fontWeight="bold">
          BLS • ALS • ICU • Neonatal
        </text>

        {/* Animated pulse indicator */}
        <circle cx="140" cy="450" r="8" fill="#DC2626" opacity="0.3">
          <animate attributeName="r" values="8;20" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="450" r="5" fill="#DC2626" />
      </svg>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-fit sm:min-h-[600px] lg:min-h-screen flex items-center landing-section-spacing"
      style={{ backgroundColor: "rgb(246, 62, 62)" }}
    >
      <style>{`
        .gs-content {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .gs-content.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .gs-button {
          transition: all 0.3s ease;
        }
        .gs-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .trust-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .trust-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .gs-phone-interactive {
          position: relative;
          transition: transform 0.35s ease, filter 0.35s ease;
          will-change: transform;
        }
        .gs-phone-interactive:hover {
          transform: translateY(-8px) scale(1.05);
          filter: drop-shadow(0 20px 32px rgba(0, 0, 0, 0.22));
        }
        .gs-phone-interactive.is-active {
          transform: translateY(-6px) scale(1.04);
        }
        .gs-phone-glow {
          position: absolute;
          inset: -14px;
          border-radius: 28px;
          pointer-events: none;
          background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 58%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .gs-phone-interactive:hover .gs-phone-glow,
        .gs-phone-interactive.is-active .gs-phone-glow {
          opacity: 1;
        }
        @keyframes gsFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-10">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
            style={{ textShadow: "0 8px 24px rgba(0, 0, 0, 0.35)" }}
          >
            Get Started
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side: Content */}
          <div
            ref={contentRef}
            className="gs-content text-white"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)" }}
          >
            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-white">
                📱 Download Now
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              Get Emergency Help in <span className="text-yellow-300">Seconds</span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Download the SevaLink app and book a verified ambulance in under 60 seconds. Available on iOS and Android.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="gs-button flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 rounded-2xl font-black text-sm sm:text-base hover:bg-gray-100">
                <Smartphone size={20} />
                <span>App Store</span>
              </button>
              <button className="gs-button flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-2xl font-black text-sm sm:text-base hover:bg-white/30">
                <Smartphone size={20} />
                <span>Google Play</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="space-y-3 sm:space-y-4">
              {trustPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.label}
                    className="trust-item flex items-start gap-3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      transitionDelay: `${isVisible ? idx * 0.1 + 0.3 : 0}s`,
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon size={20} className="text-yellow-300" />
                    </div>
                    <div>
                      <p className="font-black text-white text-sm sm:text-base">{point.label}</p>
                      <p className="text-white/80 text-xs sm:text-sm">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Phone Mockup */}
          <div
            className="hidden lg:flex justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.9)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div className="relative w-[460px] h-[470px] flex items-center justify-center">
              <div
                className={`gs-phone-interactive ${phoneActive ? "is-active" : ""}`}
                style={{ "--gx": `${phoneGlowPos.x}%`, "--gy": `${phoneGlowPos.y}%` } as React.CSSProperties}
                onPointerEnter={() => setPhoneActive(true)}
                onPointerLeave={() => {
                  setPhoneActive(false);
                  setPhoneGlowPos({ x: 50, y: 50 });
                }}
                onPointerMove={handlePhonePointerMove}
                onPointerDown={() => setPhoneActive(true)}
                onPointerUp={() => setPhoneActive(false)}
              >
                <div className="gs-phone-glow" />
                <PhoneMockup />
              </div>

              <div
                className="absolute top-12 left-4 z-20 rounded-xl bg-white/90 backdrop-blur-md border border-white px-3 py-2 text-gray-900 shadow-xl"
                style={{ animation: "gsFloat 3.6s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-yellow-300" />
                  <span className="text-[11px] font-bold">60s Booking</span>
                </div>
              </div>

              <div
                className="absolute top-36 right-4 z-20 rounded-xl bg-white/90 backdrop-blur-md border border-white px-3 py-2 text-gray-900 shadow-xl"
                style={{ animation: "gsFloat 3.9s ease-in-out infinite 0.4s" }}
              >
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-red-600" />
                  <span className="text-[11px] font-bold">Verified Team</span>
                </div>
              </div>

              <div
                className="absolute bottom-12 left-14 z-20 rounded-xl bg-white/90 backdrop-blur-md border border-white px-3 py-2 text-gray-900 shadow-xl"
                style={{ animation: "gsFloat 3.2s ease-in-out infinite 0.2s" }}
              >
                <div className="flex items-center gap-2">
                  <Download size={14} className="text-red-600" />
                  <span className="text-[11px] font-bold">Free Download</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile phone mockup (small) */}
          <div
            className="lg:hidden flex justify-center mt-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.9)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">
              <div
                className={`gs-phone-interactive ${phoneActive ? "is-active" : ""}`}
                style={{ "--gx": `${phoneGlowPos.x}%`, "--gy": `${phoneGlowPos.y}%` } as React.CSSProperties}
                onPointerEnter={() => setPhoneActive(true)}
                onPointerLeave={() => {
                  setPhoneActive(false);
                  setPhoneGlowPos({ x: 50, y: 50 });
                }}
                onPointerMove={handlePhonePointerMove}
                onPointerDown={() => setPhoneActive(true)}
                onPointerUp={() => setPhoneActive(false)}
                onTouchStart={() => setPhoneActive(true)}
                onTouchEnd={() => setPhoneActive(false)}
              >
                <div className="gs-phone-glow" />
                <div className="w-48 h-72 z-10">
                <svg
                  viewBox="0 0 280 560"
                  className="w-full h-full drop-shadow-xl"
                  style={{ filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.3))" }}
                >
                  {/* Phone bezel - black */}
                  <rect x="0" y="0" width="280" height="560" rx="40" fill="#1a1a1a" />

                  {/* Screen */}
                  <rect x="12" y="12" width="256" height="536" rx="32" fill="#fff3e0" />

                  {/* Status bar */}
                  <rect x="12" y="12" width="256" height="44" rx="20" fill="#DC2626" />
                  <text x="140" y="38" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                    9:41
                  </text>

                  {/* App header */}
                  <rect x="12" y="56" width="256" height="80" fill="#DC2626" />
                  <text x="140" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                    SevaLink
                  </text>
                  <text x="140" y="107" textAnchor="middle" fill="white" fontSize="9" opacity="0.9">
                    Emergency Ambulance Booking
                  </text>

                  {/* Book button area */}
                  <rect x="30" y="155" width="220" height="50" rx="10" fill="#DC2626" opacity="0.1" stroke="#DC2626" strokeWidth="2" />
                  <text x="140" y="185" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="bold">
                    TAP TO BOOK
                  </text>

                  {/* Features section */}
                  <rect x="30" y="230" width="220" height="45" rx="8" fill="#f0f0f0" />
                  <circle cx="50" cy="252" r="5" fill="#DC2626" />
                  <text x="63" y="258" fill="#1a1a1a" fontSize="10" fontWeight="bold">
                    Real-time Tracking
                  </text>

                  <rect x="30" y="290" width="220" height="45" rx="8" fill="#f0f0f0" />
                  <circle cx="50" cy="312" r="5" fill="#DC2626" />
                  <text x="63" y="318" fill="#1a1a1a" fontSize="10" fontWeight="bold">
                    BLS • ALS • ICU • Neonatal
                  </text>

                  {/* Pulse indicator */}
                  <circle cx="140" cy="430" r="6" fill="#DC2626" opacity="0.3">
                    <animate attributeName="r" values="6;16" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="430" r="4" fill="#DC2626" />
                </svg>
                </div>
              </div>

              <div
                className="absolute top-8 left-2 z-20 rounded-xl bg-white/90 backdrop-blur-md border border-white px-3 py-2 text-gray-900 shadow-xl"
                style={{ animation: "gsFloat 3.4s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-yellow-300" />
                  <span className="text-[11px] font-bold">60s Booking</span>
                </div>
              </div>

              <div
                className="absolute top-28 right-2 z-20 rounded-xl bg-white/90 backdrop-blur-md border border-white px-3 py-2 text-gray-900 shadow-xl"
                style={{ animation: "gsFloat 3.8s ease-in-out infinite 0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-red-600" />
                  <span className="text-[11px] font-bold">Verified Team</span>
                </div>
              </div>

              <div
                className="absolute bottom-7 left-8 z-20 rounded-xl bg-white/90 backdrop-blur-md border border-white px-3 py-2 text-gray-900 shadow-xl"
                style={{ animation: "gsFloat 3.2s ease-in-out infinite 0.2s" }}
              >
                <div className="flex items-center gap-2">
                  <Download size={14} className="text-red-600" />
                  <span className="text-[11px] font-bold">Free Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
