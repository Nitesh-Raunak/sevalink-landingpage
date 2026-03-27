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

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActivePath = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-[5.5rem] sm:h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Image
              src="/assets/brand/SevaLink-logo-r.png"
              alt="SevaLink"
              width={440}
              height={110}
              className="h-[5.5rem] sm:h-20 md:h-28 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 md:absolute md:left-1/2 md:-translate-x-1/2">
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

          {/* CTA - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 !text-white visited:!text-white hover:!text-white active:!text-white text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer border-none"
            >
              <Ambulance className="w-4 h-4" />
              Book Ambulance
            </Link>
            <Link
              href="/services#homecare"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 !text-white visited:!text-white hover:!text-white active:!text-white text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer border-none"
            >
              <HousePlus className="w-4 h-4" />
              Book Home Care
            </Link>
          </div>

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
                      className="h-[5.5rem] sm:h-20 md:h-20 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
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
                      href="/#services"
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
      </div>
    </header>
  );
};

export default Header;