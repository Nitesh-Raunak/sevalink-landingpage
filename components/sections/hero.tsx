'use client';



import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ambulance, HousePlus } from "lucide-react";
import { FloatingMedicalIcons } from "../ui/medical-background";
import clsx from "clsx";

export function HeroSection() {
    // State: true = ambulance is large, false = homecare is large
    const [isAmbulanceLarge, setIsAmbulanceLarge] = useState(true);
    // For swipeable mobile carousel
    const [mobileIdx, setMobileIdx] = useState(0); // 0 = ambulance, 1 = homecare
    const [isMobile, setIsMobile] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    // SSR-safe effect
    React.useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Image data
    const images = [
      {
        src: "/images/ambulance.png",
        alt: "Ambulance service",
        label: "Emergency",
        border: "border-red-100/80",
        badge: "bg-red-100/95 text-red-700",
        icon: <Ambulance className="h-4 w-4" />,
        link: "/#services",
        btn: "bg-red-600 hover:bg-red-700",
        btnText: "Book Ambulance",
      },
      {
        src: "/images/homecare.avif",
        alt: "Homecare service",
        label: "Home Care",
        border: "border-emerald-100/80",
        badge: "bg-emerald-100/95 text-emerald-700",
        icon: <HousePlus className="h-4 w-4" />,
        link: "/services#homecare",
        btn: "bg-emerald-600 hover:bg-emerald-700",
        btnText: "Book Home Care",
      },
    ];

    // Determine which is large/small
    const largeIdx = isAmbulanceLarge ? 0 : 1;
    const smallIdx = isAmbulanceLarge ? 1 : 0;

    return (
      <section className="relative overflow-hidden sm:pt-8 md:pt-10">
        <FloatingMedicalIcons />
        <div className="absolute inset-0 z-0 bg-white/45" />
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-6 md:py-8 relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* LEFT: Content unchanged */}
              <div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                    Book <span className="text-red-600">Ambulance</span> &amp; <span className="text-emerald-600">Homecare</span> Services in Minutes
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
                    Fast, reliable healthcare at your doorstep - anytime, anywhere.
                  </p>
                </div>
                <div className="mt-4 mb-2 sm:mt-8 sm:mb-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start justify-center md:justify-start">
                  <Link
                    href="/#services"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-bold !text-white visited:!text-white hover:!text-white active:!text-white shadow-md transition-colors hover:bg-red-700"
                  >
                    <Ambulance className="h-4 w-4" />
                    Book Ambulance
                  </Link>
                  <Link
                    href="/services#homecare"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-bold !text-white visited:!text-white hover:!text-white active:!text-white shadow-md transition-colors hover:bg-emerald-700"
                  >
                    <HousePlus className="h-4 w-4" />
                    Book Home Care
                  </Link>
                </div>
              </div>

              {/* RIGHT: Layered images with swap interaction (desktop/tablet) or swipeable (mobile) */}
              <div className="relative w-[400px] h-[300px] sm:w-[480px] sm:h-[350px] md:w-[520px] md:h-[380px] mx-auto mt-0 mb-2 select-none">
                {/* Mobile: swipeable image carousel */}
                {isMobile ? (
                  <div
                    className="relative w-full h-[180px] sm:h-[220px] rounded-2xl shadow-xl border bg-white overflow-hidden flex items-center justify-center select-none"
                    onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
                    onTouchMove={e => { touchEndX.current = e.touches[0].clientX; }}
                    onTouchEnd={() => {
                      const dx = touchEndX.current - touchStartX.current;
                      if (Math.abs(dx) > 40) {
                        if (dx < 0 && mobileIdx < images.length - 1) setMobileIdx(mobileIdx + 1);
                        if (dx > 0 && mobileIdx > 0) setMobileIdx(mobileIdx - 1);
                      }
                    }}
                  >
                    <Image
                      src={images[mobileIdx].src}
                      alt={images[mobileIdx].alt}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="100vw"
                      priority
                    />
                    <span className={clsx(
                      "absolute top-3 left-3 z-20 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm",
                      images[mobileIdx].badge
                    )}>
                      {images[mobileIdx].label}
                    </span>
                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          className={clsx(
                            "w-2.5 h-2.5 rounded-full transition-all",
                            mobileIdx === idx ? "bg-red-500 scale-110" : "bg-gray-300"
                          )}
                          style={{ outline: "none", border: "none" }}
                          aria-label={`Show ${images[idx].label}`}
                          onClick={() => setMobileIdx(idx)}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Large image: always top-right, absolute */}
                    <div
                      className={clsx(
                        "absolute transition-all duration-300 ease-in-out rounded-2xl shadow-xl border overflow-hidden bg-white",
                        images[largeIdx].border,
                        isAmbulanceLarge
                          ? "w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[440px] md:h-[320px]"
                          : "w-[160px] h-[120px] sm:w-[200px] sm:h-[150px] md:w-[220px] md:h-[160px]",
                        "top-0 right-0 z-10"
                      )}
                      style={{
                        boxShadow: "0 8px 32px 0 rgba(44,62,80,0.13)",
                        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                      }}
                    >
                      <Image
                        src={images[largeIdx].src}
                        alt={images[largeIdx].alt}
                        fill
                        className="object-cover transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <span className={clsx(
                        "absolute top-3 left-3 z-20 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm",
                        images[largeIdx].badge
                      )}>
                        {images[largeIdx].label}
                      </span>
                    </div>
                    {/* Small image: always bottom-left, absolute, higher z-index, clickable */}
                    <div
                      className={clsx(
                        "absolute transition-all duration-300 ease-in-out rounded-xl shadow-lg border overflow-hidden cursor-pointer group",
                        images[smallIdx].border,
                        isAmbulanceLarge
                          ? "w-[160px] h-[120px] sm:w-[200px] sm:h-[150px] md:w-[220px] md:h-[160px]"
                          : "w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[440px] md:h-[320px]",
                        "bottom-0 left-0 z-20"
                      )}
                      style={{
                        boxShadow: "0 4px 16px 0 rgba(44,62,80,0.13)",
                        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                      }}
                      tabIndex={0}
                      aria-label={images[smallIdx].label + " image toggle"}
                      onClick={() => setIsAmbulanceLarge((v) => !v)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIsAmbulanceLarge(v => !v); }}
                    >
                      <Image
                        src={images[smallIdx].src}
                        alt={images[smallIdx].alt}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                        sizes="140px"
                      />
                      <span className={clsx(
                        "absolute top-2 left-2 z-20 inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide shadow-sm bg-white/80 text-gray-700"
                      )}>
                        {images[smallIdx].label}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
