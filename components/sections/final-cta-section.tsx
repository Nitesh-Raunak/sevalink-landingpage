"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { Ambulance, Phone } from "lucide-react";

const trustPoints = ["No Hidden Charges", "10 Minute Response", "Pan India Coverage"];

export function FinalCTASection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-fit sm:min-h-[500px] lg:min-h-screen flex items-center justify-center landing-section-spacing"
      style={{
        background: "linear-gradient(135deg, #1a0000 0%, #3d0000 40%, #7f1d1d 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "auto",
      }}
    >
      {/* Glow blobs */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(220,38,38,0.3), transparent)",
        filter: "blur(80px)", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(255,107,107,0.2), transparent)",
        filter: "blur(80px)", zIndex: 0,
      }} />

      {/* Floating plus icons */}
      <style>{`
        @keyframes ctaFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(45deg); opacity: 0.2; }
        }
        .cta-plus { position: absolute; color: #ff6b6b; animation: ctaFloat ease-in-out infinite; pointer-events: none; }
      `}</style>
      {[
        { left: "5%", top: "20%", size: 24, dur: "8s", delay: "0s" },
        { left: "90%", top: "15%", size: 18, dur: "11s", delay: "1s" },
        { left: "80%", top: "70%", size: 30, dur: "9s", delay: "2s" },
        { left: "15%", top: "75%", size: 20, dur: "13s", delay: "0.5s" },
        { left: "50%", top: "8%", size: 14, dur: "10s", delay: "3s" },
      ].map((p, i) => (
        <div key={i} className="cta-plus" style={{ left: p.left, top: p.top, animationDuration: p.dur, animationDelay: p.delay, zIndex: 1 }}>
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      ))}

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          borderRadius: "999px", border: "1px solid rgba(239,68,68,0.4)",
          background: "rgba(127,29,29,0.4)", padding: "clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px)",
          fontSize: "clamp(9px, 2vw, 11px)", fontWeight: 800, letterSpacing: "3px",
          textTransform: "uppercase", color: "#fca5a5", marginBottom: "clamp(24px, 4vw, 32px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f87171", animation: "pulse 1.5s infinite" }} />
          Available 24/7
        </div>

        {/* Heading */}
        <h2 style={{
          fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
          fontWeight: 900, color: "white",
          lineHeight: 1.15, marginBottom: "clamp(16px, 3vw, 24px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}>
          Medical Emergency? <br />
          <span style={{ color: "#f87171" }}>We Are Available 24/7</span>
        </h2>

        {/* Trust Points */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          gap: "clamp(16px, 3vw, 24px)", marginBottom: "clamp(32px, 6vw, 48px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
        }}>
          {trustPoints.map((point, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "20px", height: "20px", borderRadius: "50%",
                background: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: "clamp(12px, 2vw, 14px)" }}>{point}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(12px, 2vw, 16px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
        }}>
          <Link
            href="/book"
            style={{
              padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)", background: "#dc2626",
              color: "white", fontWeight: 900, borderRadius: "999px",
              fontSize: "clamp(12px, 2vw, 15px)", textDecoration: "none",
              boxShadow: "0 8px 30px rgba(220,38,38,0.4)",
              transition: "background 0.3s ease, transform 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#b91c1c")}
            onMouseLeave={e => (e.currentTarget.style.background = "#dc2626")}
          >
            <Ambulance className="w-5 h-5" /> Book Ambulance Now
          </Link>
          <Link
            href="tel:108"
            style={{
              padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)",
              border: "2px solid rgba(255,255,255,0.3)",
              color: "white", fontWeight: 900, borderRadius: "999px",
              fontSize: "clamp(12px, 2vw, 15px)", textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "border 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={e => (e.currentTarget.style.border = "2px solid rgba(255,255,255,0.7)")}
            onMouseLeave={e => (e.currentTarget.style.border = "2px solid rgba(255,255,255,0.3)")}
          >
            <Phone className="w-5 h-5" /> Call 108
          </Link>
        </div>

      </div>
    </section>
  );
}