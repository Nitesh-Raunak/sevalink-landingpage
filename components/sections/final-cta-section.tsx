"use client";

import { useRef, useEffect, useState } from "react";
import { Ambulance, Phone } from "lucide-react";
import Link from "next/link";
import styles from "./final-cta-section.module.css";

// Read from environment variables
const SEVALINK_PHONE =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "+918000000000";
const HOMECARE_URL = process.env.NEXT_PUBLIC_HOMECARE_URL ?? "https://homecare.sevalinkcare.com";

const trustPoints = ["No Hidden Charges", "Currently Serving Rajkot, Gujarat"];

export function FinalCTASection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`min-h-fit flex items-center justify-center landing-section-spacing ${styles.ctaSection}`}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "400px", height: "400px", background: "radial-gradient(circle, rgba(220,38,38,0.3), transparent)", filter: "blur(80px)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,107,107,0.2), transparent)", filter: "blur(80px)", zIndex: 0 }} />

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

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "999px", border: "1px solid rgba(239,68,68,0.4)", background: "rgba(127,29,29,0.4)", padding: "clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px)", fontSize: "clamp(9px, 2vw, 11px)", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", color: "#fca5a5", marginBottom: "clamp(24px, 4vw, 32px)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f87171", animation: "pulse 1.5s infinite" }} />
          Available 24/7
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-6" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}>
          Medical Emergency? <br />
          <span style={{ color: "#f87171" }}>We Are Available 24/7</span>
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(16px, 3vw, 24px)", marginBottom: "clamp(32px, 6vw, 48px)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s" }}>
          {trustPoints.map((point, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: "clamp(12px, 2vw, 14px)" }}>{point}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(12px, 2vw, 16px)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s" }}>
          <Link
            href="/services#ambulance"
            className={styles.primaryCtaButton}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
          >
            <Ambulance className="w-5 h-5" /> Book Ambulance Now
          </Link>

          <a
            href={HOMECARE_URL}
            className={styles.primaryCtaButton}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", background: "rgba(34, 197, 94, 0.9)", borderBottom: "3px solid rgba(22, 163, 74, 1)" }}
          >
            Book Home Care
          </a>

          <a
            href={`tel:${SEVALINK_PHONE}`}
            style={{ padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)", border: "2px solid rgba(255,255,255,0.3)", color: "white", fontWeight: 900, borderRadius: "999px", fontSize: "clamp(12px, 2vw, 15px)", textDecoration: "none", backdropFilter: "blur(8px)", display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", transition: "border 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.border = "2px solid rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.border = "2px solid rgba(255,255,255,0.3)")}
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
