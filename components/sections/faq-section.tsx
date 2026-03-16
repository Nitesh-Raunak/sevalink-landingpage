"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is SevaLink?", a: "SevaLink is an emergency ambulance booking platform that connects patients with the nearest verified ambulance in under 10 minutes. We support BLS, ALS, ICU, and Neonatal ambulance types across India." },
  { q: "How do I book an ambulance?", a: "Simply open SevaLink, tap 'Book Ambulance', share your location, and we'll dispatch the nearest ambulance within 60 seconds. You can also call 108 directly for immediate assistance." },
  { q: "Is SevaLink available 24/7?", a: "Yes! SevaLink operates 24 hours a day, 7 days a week, 365 days a year — including all holidays and emergencies." },
  { q: "Which areas are covered?", a: "We currently operate across major cities including Delhi, Mumbai, Bengaluru, Ahmedabad, Hyderabad, and are rapidly expanding Pan India." },
  { q: "How much does it cost?", a: "SevaLink follows transparent pricing with no hidden charges. You'll see the full estimated fare before confirming the booking." },
  { q: "How does family tracking work?", a: "Once an ambulance is dispatched, you receive a live tracking link that you can share with family members. They can track in real-time without needing the app." },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="min-h-fit sm:min-h-[600px] lg:min-h-screen flex items-center landing-section-spacing"
      style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #ffe0e0 0%, #FFF3E0 50%, #ffe8d6 100%)" }}
    >

      <style>{`
        @keyframes faqBlob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes faqBlob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-30px, 30px) scale(1.08); }
          66% { transform: translate(25px, -20px) scale(0.97); }
        }
        @keyframes faqBlob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, 25px) scale(1.12); }
        }
      `}</style>

      {/* Blobs — high opacity so clearly visible */}
      <div style={{
        position: "absolute", width: "500px", height: "500px",
        borderRadius: "50%", top: "-150px", left: "-150px",
        background: "radial-gradient(circle, rgba(220,38,38,0.45) 0%, rgba(255,205,210,0.3) 50%, transparent 75%)",
        filter: "blur(50px)",
        animation: "faqBlob1 12s ease-in-out infinite",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", width: "450px", height: "450px",
        borderRadius: "50%", bottom: "-120px", right: "-120px",
        background: "radial-gradient(circle, rgba(251,146,60,0.4) 0%, rgba(255,237,213,0.25) 50%, transparent 75%)",
        filter: "blur(50px)",
        animation: "faqBlob2 15s ease-in-out infinite",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", width: "350px", height: "350px",
        borderRadius: "50%", top: "30%", right: "20%",
        background: "radial-gradient(circle, rgba(220,38,38,0.35) 0%, transparent 70%)",
        filter: "blur(60px)",
        animation: "faqBlob3 10s ease-in-out infinite",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Content */}
      <div style={{ maxWidth: "768px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            display: "inline-block", padding: "6px 16px", borderRadius: "999px",
            background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.25)",
            color: "#DC2626", fontSize: "11px", fontWeight: 800,
            letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px",
          }}>
            FAQ
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#111827", lineHeight: 1.2, marginBottom: "12px" }}>
            Frequently Asked <span style={{ color: "#DC2626" }}>Questions</span>
          </h2>
          <p style={{ color: "#6B7280", fontSize: "14px" }}>
            Everything you need to know about SevaLink
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderRadius: "16px",
                border: openIndex === i ? "1px solid rgba(220,38,38,0.35)" : "1px solid rgba(220,38,38,0.15)",
                background: openIndex === i ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: openIndex === i ? "0 4px 24px rgba(220,38,38,0.1)" : "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", padding: "20px 24px",
                  textAlign: "left", gap: "16px", background: "none", border: "none", cursor: "pointer",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: "15px", color: openIndex === i ? "#DC2626" : "#111827" }}>
                  {faq.q}
                </span>
                <div style={{
                  flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: openIndex === i ? "#DC2626" : "rgba(220,38,38,0.1)",
                  color: openIndex === i ? "white" : "#DC2626",
                  transition: "all 0.3s ease",
                }}>
                  {openIndex === i ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                </div>
              </button>
              <div style={{ maxHeight: openIndex === i ? "200px" : "0px", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                <p style={{ padding: "0 24px 20px", color: "#4B5563", fontSize: "14px", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}