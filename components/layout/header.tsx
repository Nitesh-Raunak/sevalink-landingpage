'use client';

import { useState, useEffect } from "react";
import { Ambulance, HousePlus, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Provider", href: "/provider" },
];

type ServiceMode = "emergency" | "homecare";

type HeaderProps = {
  activeMode?: ServiceMode;
  onModeChange?: (mode: ServiceMode) => void;
};

export const Header = ({ activeMode, onModeChange }: HeaderProps = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const showModeToggle = typeof onModeChange === "function" && Boolean(activeMode);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActivePath = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-0 shadow-none [transform:translateZ(0)]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:h-16">
          <div className="flex items-center justify-between h-12 sm:h-16 md:h-auto md:shrink-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <Image
                src="/assets/brand/SevaLink-logo-r.png"
                alt="SevaLink"
                width={440}
                height={110}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Mobile Toggle */}
            {mounted && (
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button
                    className="md:hidden p-2 text-gray-900 focus:outline-none"
                    aria-label="Toggle Menu"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[70%] p-0 border-none bg-white">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-gray-100 flex items-center">
                      <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setMobileOpen(false)}>
                        <Image
                          src="/assets/brand/SevaLink-logo-r.png"
                          alt="SevaLink"
                          width={400}
                          height={100}
                          className="h-[5.5rem] sm:h-20 md:h-20 w-auto object-contain transition-all duration-300"
                        />
                      </Link>
                    </div>

                    <nav className="p-6 flex flex-col gap-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                            isActivePath(link.href)
                              ? "text-red-600 bg-red-50"
                              : "text-gray-700 hover:bg-gray-100 hover-link"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}

                      <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
                        <Link
                          href="/services#ambulance"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-600 !text-white visited:!text-white hover:!text-white active:!text-white text-base font-semibold hover:bg-red-700 hover:shadow-lg transition-all text-center cursor-pointer border-none"
                          onClick={() => setMobileOpen(false)}
                        >
                          <Ambulance className="w-5 h-5" />
                          Book Ambulance
                        </Link>
                        <Link
                          href="/services#homecare"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 !text-white visited:!text-white hover:!text-white active:!text-white text-base font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all text-center cursor-pointer border-none"
                          onClick={() => setMobileOpen(false)}
                        >
                          <HousePlus className="w-5 h-5" />
                          Book Home Care
                        </Link>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center flex-1 gap-1 px-2 mx-auto ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`hover-link px-4 py-2 text-sm font-semibold transition-colors relative group ${
                  isActivePath(link.href) ? "text-red-600" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Toggle - Desktop */}
          <div className="hidden md:flex items-center gap-2 md:shrink-0 pr-2">
            {showModeToggle ? (
              <div className="relative inline-grid grid-cols-2 items-center rounded-full border border-gray-200/70 bg-white/90 p-0.5 shadow-sm backdrop-blur-sm md:ml-2 md:inline-flex">
                <span
                  aria-hidden
                  className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full shadow-sm transition-all duration-300 ease-in-out ${
                    activeMode === "homecare" ? "bg-emerald-600" : "bg-red-600"
                  } ${
                    activeMode === "emergency" ? "left-1" : "left-[calc(50%+0.05rem)]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => onModeChange?.("emergency")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                    activeMode === "emergency" ? "relative z-10 text-white" : "relative z-10 text-gray-800"
                  }`}
                >
                  <Ambulance className="h-3.5 w-3.5" />
                  Emergency
                </button>
                <button
                  type="button"
                  onClick={() => onModeChange?.("homecare")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                    activeMode === "homecare" ? "relative z-10 text-white" : "relative z-10 text-gray-800"
                  }`}
                >
                  <HousePlus className="h-3.5 w-3.5" />
                  Home Care
                </button>
              </div>
            ) : null}
            <Link
              href="/services#ambulance"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 !text-white visited:!text-white hover:!text-white active:!text-white text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer border-none"
            >
              <Ambulance className="w-4 h-4" />
              Book Ambulance
            </Link>
            <Link
              href="/services#homecare"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 !text-white visited:!text-white hover:!text-white active:!text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer border-none"
            >
              <HousePlus className="w-4 h-4" />
              Book Home Care
            </Link>
          </div>

          {showModeToggle ? (
            <div className="pb-2 md:hidden flex justify-center">
              <div className="relative inline-grid grid-cols-2 items-center rounded-full border border-gray-200/70 bg-white/90 p-1 shadow-sm backdrop-blur-sm">
                <span
                  aria-hidden
                  className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full shadow-sm transition-all duration-300 ease-in-out ${
                    activeMode === "homecare" ? "bg-emerald-600" : "bg-red-600"
                  } ${
                    activeMode === "emergency" ? "left-1" : "left-[calc(50%+0.05rem)]"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => onModeChange?.("emergency")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeMode === "emergency" ? "relative z-10 text-white" : "relative z-10 text-gray-800"
                  }`}
                >
                  <Ambulance className="h-3.5 w-3.5" />
                  Emergency
                </button>
                <button
                  type="button"
                  onClick={() => onModeChange?.("homecare")}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeMode === "homecare" ? "relative z-10 text-white" : "relative z-10 text-gray-800"
                  }`}
                >
                  <HousePlus className="h-3.5 w-3.5" />
                  Home Care
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;