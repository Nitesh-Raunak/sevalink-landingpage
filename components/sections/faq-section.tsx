"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is SevaLink?",
    a: "SevaLink is an emergency ambulance booking platform that connects patients with the nearest verified ambulance in under 10 minutes. We support BLS, ALS, ICU, and Neonatal ambulance types across India.",
  },
  {
    q: "How do I book an ambulance?",
    a: "Simply open SevaLink, tap 'Book Ambulance', share your location, and we'll dispatch the nearest ambulance within 60 seconds. You can also call 108 directly for immediate assistance.",
  },
  {
    q: "Is SevaLink available 24/7?",
    a: "Yes! SevaLink operates 24 hours a day, 7 days a week, 365 days a year — including all holidays and emergencies.",
  },
  {
    q: "Which areas are covered?",
    a: "We currently operate across major cities including Delhi, Mumbai, Bengaluru, Ahmedabad, Hyderabad, and are rapidly expanding Pan India. Coverage updates are available in the app.",
  },
  {
    q: "How much does it cost?",
    a: "SevaLink follows transparent pricing with no hidden charges. You'll see the full estimated fare before confirming the booking. Pricing varies by ambulance type and distance.",
  },
  {
    q: "How does family tracking work?",
    a: "Once an ambulance is dispatched, you receive a live tracking link that you can share with family members. They can track the ambulance and patient in real-time without needing the app.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-[#FFF3E0]">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-[11px] font-black tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base">
            Everything you need to know about SevaLink
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "border-red-200 bg-white shadow-md shadow-red-50"
                  : "border-orange-100 bg-white/60 hover:border-red-200"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className={`font-bold text-base ${openIndex === i ? "text-red-600" : "text-gray-800"}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  openIndex === i ? "bg-red-600 text-white" : "bg-orange-100 text-red-600"
                }`}>
                  {openIndex === i ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                </div>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                  transition: "max-height 0.35s ease",
                  overflow: "hidden",
                }}
              >
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
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