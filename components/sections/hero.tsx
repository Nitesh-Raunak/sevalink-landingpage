'use client';



import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ambulance, HousePlus } from "lucide-react";
import { FloatingMedicalIcons } from "../ui/medical-background";
import clsx from "clsx";

export function HeroSection() {
  // State: 0 = ambulance is large, 1 = homecare is large
  const [largeIdx, setLargeIdx] = useState(0); // 0: ambulance, 1: homecare
  const smallIdx = largeIdx === 0 ? 1 : 0;
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
                {/* Toggle Switch */}
                <div className="mb-3 flex items-center md:justify-start justify-center">
                  <div className="flex rounded-full bg-gray-100 p-1 w-fit shadow-sm transition-all">
                    <button
                      type="button"
                      className={clsx(
                        "px-4 py-1.5 rounded-full font-bold text-sm transition-all duration-300",
                        largeIdx === 0
                          ? "bg-red-600 text-white shadow-md scale-105"
                          : "bg-transparent text-red-700 hover:bg-red-100"
                      )}
                      style={{ outline: 'none', border: 'none' }}
                      onClick={() => {
                        setLargeIdx(0);
                        setMobileIdx(0);
                      }}
                      aria-pressed={largeIdx === 0}
                    >
                      Emergency
                    </button>
                    <button
                      type="button"
                      className={clsx(
                        "px-4 py-1.5 rounded-full font-bold text-sm transition-all duration-300",
                        largeIdx === 1
                          ? "bg-emerald-600 text-white shadow-md scale-105"
                          : "bg-transparent text-emerald-700 hover:bg-emerald-100"
                      )}
                      style={{ outline: 'none', border: 'none' }}
                      onClick={() => {
                        setLargeIdx(1);
                        setMobileIdx(1);
                      }}
                      aria-pressed={largeIdx === 1}
                    >
                      Home Care
                    </button>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                    Book <span className="text-red-600">Ambulance</span> &amp; <span className="text-emerald-600">Homecare</span> Services in Minutes
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
                    {largeIdx === 0
                      ? "Fast, reliable healthcare at your doorstep. Anytime, anywhere."
                      : "Nursing, elderly support & doctor visits by verified professionals."}
                  </p>
                </div>
                <div className="mt-4 mb-2 sm:mt-8 sm:mb-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start justify-center md:justify-start">
                  {largeIdx === 0 ? (
                    <>
                      <Link
                        href="/#services"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-bold !text-white visited:!text-white hover:!text-white active:!text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg"
                      >
                        <Ambulance className="h-4 w-4" />
                        Book Ambulance
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/services#homecare"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-bold !text-white visited:!text-white hover:!text-white active:!text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg"
                      >
                        <HousePlus className="h-4 w-4" />
                        Book Home Care
                      </Link>
                    </>
                  )}
                </div>
                {largeIdx === 0 ? (
                  <div className="mt-2 text-xs sm:text-sm text-gray-700 flex flex-wrap gap-x-4 gap-y-1 items-center justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1"><span className="text-green-600 font-bold">✔</span> 24/7 Available</span>
                    <span className="inline-flex items-center gap-1"><span className="text-green-600 font-bold">✔</span> Verified Providers</span>
                    <span className="inline-flex items-center gap-1"><span className="text-green-600 font-bold">✔</span> Quick Response</span>
                  </div>
                ) : (
                  <div className="mt-2 text-xs sm:text-sm text-gray-700 flex flex-wrap gap-x-4 gap-y-1 items-center justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1"><span className="text-green-600 font-bold">✔</span> At Home Visits</span>
                    <span className="inline-flex items-center gap-1"><span className="text-green-600 font-bold">✔</span> Verified Staff</span>
                  </div>
                )}
              </div>

              {/* RIGHT: Layered images with swap interaction (desktop/tablet) or swipeable (mobile) */}
              <div className="relative w-full md:w-[520px] md:h-[380px] mx-auto mt-0 mb-2 select-none">
                {/* Mobile: swipeable image carousel */}
                {isMobile ? (
                  <div className="px-4 w-full">
                    <div className="rounded-2xl overflow-hidden shadow-md bg-white">
                      <div
                        className="relative w-full h-[180px] sm:h-[250px] select-none"
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
                          className="object-cover"
                          fill
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
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Desktop/Tablet: Layered images */}
                    <div className="px-4 w-full h-full relative">
                      {/* Large image: always top-right, fixed size, absolute */}
                      <div
                        className={clsx(
                          "absolute transition-all duration-300 ease-in-out rounded-2xl overflow-hidden shadow-md bg-white border",
                          images[largeIdx].border,
                          "w-[320px] h-[240px] sm:w-[400px] sm:h-[300px] md:w-[440px] md:h-[320px]",
                          "top-0 right-0 z-10"
                        )}
                        style={{
                          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                        }}
                      >
                        <div className="relative w-full h-full">
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
                      </div>
                      {/* Small image: always bottom-left, fixed size, absolute, higher z-index, clickable */}
                      <div
                        className={clsx(
                          "absolute transition-all duration-300 ease-in-out rounded-xl overflow-hidden shadow-lg border cursor-pointer group bg-white",
                          images[smallIdx].border,
                          "w-[160px] h-[120px] sm:w-[200px] sm:h-[150px] md:w-[220px] md:h-[160px]",
                          "bottom-0 left-0 z-20"
                        )}
                        style={{
                          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                        }}
                        tabIndex={0}
                        aria-label={images[smallIdx].label + " image toggle"}
                        onClick={() => setLargeIdx(smallIdx)}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLargeIdx(smallIdx); }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={images[smallIdx].src}
                            alt={images[smallIdx].alt}
                            fill
                            className="object-cover transition-all duration-300 group-hover:scale-105"
                            sizes="140px"
                          />
                          <span className={clsx(
                            "absolute top-2 left-2 z-20 inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide shadow-sm bg-white/80 text-gray-700"
                          )}>
                            {images[smallIdx].label}
                          </span>
                        </div>
                      </div>
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
