"use client";

import { useState, useEffect, useRef } from "react";
import {
  Ambulance,
  Stethoscope,
  HousePlus,
  TestTube,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./services-section.css";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
  badge?: string;
  role?: "patient" | "driver" | "fleet" | "hospital";
};

const ambulanceServices: ServiceItem[] = [
  {
    icon: Ambulance,
    title: "Emergency Ambulance",
    description: "Immediate response ambulance service for urgent medical situations",
    iconBg: "bg-red-50",
    iconText: "text-red-500",
    role: "patient",
  },
  {
    icon: Ambulance,
    title: "ICU Ambulance",
    description: "Fully equipped ICU ambulances with advanced life support systems",
    iconBg: "bg-red-50",
    iconText: "text-red-500",
    role: "driver",
  },
  {
    icon: Ambulance,
    title: "Oxygen Ambulance",
    description: "Ambulances with oxygen support for critical patient transport",
    iconBg: "bg-red-50",
    iconText: "text-red-500",
    role: "hospital",
  },
];

// Homecare services to be rendered in separate subsection
const homecareServices: ServiceItem[] = [
  {
    icon: Stethoscope,
    title: "Doctor at Home",
    description: "Verified doctors visit your home for checkups and consultations",
    iconBg: "bg-green-50",
    iconText: "text-green-500",
  },
  {
    icon: HousePlus,
    title: "Nurse at Home",
    description: "Professional nursing care and medical support at your home",
    iconBg: "bg-green-50",
    iconText: "text-green-500",
  },
  {
    icon: TestTube,
    title: "Lab Tests at Home",
    description: "Book diagnostic tests from home with sample collection services",
    iconBg: "bg-green-50",
    iconText: "text-green-500",
  },
];

export default function ServicesSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(ambulanceServices[0]?.title ?? null);
  const [highlightedRole, setHighlightedRole] = useState<string | null>(null);
  const clearHighlightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onFocusRole = (event: Event) => {
      const customEvent = event as CustomEvent<{ role?: string; targetCardId?: string }>;
      const role = customEvent.detail?.role;
      if (!role) return;

      const targetCardId = customEvent.detail?.targetCardId ?? `service-${role}`;
      const targetCard = document.getElementById(targetCardId);

      if (targetCard) {
        requestAnimationFrame(() => {
          targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      }

      setHighlightedRole(role);

      if (clearHighlightTimerRef.current) {
        clearTimeout(clearHighlightTimerRef.current);
      }

      clearHighlightTimerRef.current = setTimeout(() => {
        setHighlightedRole(null);
      }, 1800);
    };

    window.addEventListener("sevalink:focus-service-role", onFocusRole);
    return () => {
      window.removeEventListener("sevalink:focus-service-role", onFocusRole);
      if (clearHighlightTimerRef.current) {
        clearTimeout(clearHighlightTimerRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="w-full min-h-fit landing-section-spacing overflow-hidden bg-gradient-to-b from-[#FFF0E2] to-[#FFE7D2] scroll-smooth">
      <div id="services-section" aria-hidden="true" className="h-0 w-0" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-red-600/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 sm:mb-4 sm:px-5 sm:py-2 sm:text-xs">
            Our Services
          </span>
          <h2 className="text-2xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
            Everything You Need <span className="text-red-600 italic">in a Crisis</span> <span className="text-gray-900 italic">& Beyond</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-gray-500 sm:mt-4 sm:text-base lg:text-lg">
            From emergency response to long-term home care - one platform for all your healthcare needs.
          </p>
        </div>

        {/* Ambulance Services Subsection */}
        <div className="mt-12 sm:mt-16">
          <h3 className="mb-6 text-xl font-bold text-red-600 sm:text-2xl lg:text-3xl">
            Ambulance Services
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {ambulanceServices.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index}
                isActive={activeCardId === service.title}
                isRoleHighlighted={highlightedRole === service.role}
                onIntersect={setActiveCardId}
                cardId={index === 0 ? "service-patient" : undefined}
              />
            ))}
          </div>
        </div>

        {/* Homecare Services Subsection */}
        <div className="mt-12 sm:mt-16">
          <h3 id="homecare-services" className="mb-6 text-xl font-bold text-green-600 sm:text-2xl lg:text-3xl">
            Homecare Services
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {homecareServices.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index}
                isActive={activeCardId === service.title}
                isRoleHighlighted={highlightedRole === service.role}
                onIntersect={setActiveCardId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  service, 
  index, 
  isActive, 
  isRoleHighlighted,
  onIntersect,
  cardId: customCardId
}: { 
  service: ServiceItem; 
  index: number;
  isActive: boolean;
  isRoleHighlighted: boolean;
  onIntersect: (id: string | null) => void;
  cardId?: string;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLElement>(null);
  const cardId = customCardId || (service.role ? `service-${service.role}` : `service-card-${index}`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(service.title);
        }
      },
      {
        // Narrow center band makes activation more reliable on mobile scroll.
        threshold: 0.05,
        rootMargin: "-35% 0px -35% 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [service.title, onIntersect]);

  return (
    <article 
      id={cardId}
      data-role={service.role ?? "none"}
      ref={cardRef}
      className={`service-card relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6 ${cardId === "service-patient" ? "scroll-mt-20 md:scroll-mt-16" : ""} ${
        isRoleHighlighted
          ? "scale-[1.05] border-red-300 ring-2 ring-red-200 shadow-[0_0_0_4px_rgba(239,68,68,0.12),0_16px_26px_rgba(239,68,68,0.18)]"
          : ""
      } ${
        isActive ? "service-card--active" : "service-card--inactive"
      }`}
    >
      {service.badge ? (
        <span className="absolute right-3 top-[-9px] inline-flex items-center rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white">
          {service.badge}
        </span>
      ) : null}

      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg}`}>
        <Icon className={`h-5 w-5 ${service.iconText}`} strokeWidth={2} />
      </div>

      <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900 sm:text-xl transition-all hover:text-red-500 hover:underline cursor-pointer">{service.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
        {service.description}
      </p>
    </article>
  );
}
