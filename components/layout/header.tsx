'use client';

import { useState, useEffect } from "react";
import { Phone, Menu } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/assets/brand/sevalink.png"
              alt="SevaLink"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors relative group ${
                  isActivePath(link.href) ? "text-red-600" : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:109" className="flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors">
              <Phone className="w-4 h-4" />
              109
            </a>
            <Link href="/services/ambulance" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl">
              Book Ambulance
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
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <Image
                    src="/assets/brand/sevalink.png"
                    alt="SevaLink"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                
                <nav className="p-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`px-4 py-3 text-base font-semibold rounded-lg transition-all ${
                        isActivePath(link.href)
                          ? "text-red-600 bg-red-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
                    <a 
                      href="tel:109" 
                      className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-red-600 rounded-lg hover:bg-red-50 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Call 109
                    </a>
                    <Link 
                      href="/services/ambulance" 
                      className="px-4 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white text-base font-semibold hover:shadow-lg transition-all text-center"
                      onClick={() => setMobileOpen(false)}
                    >
                      Book Ambulance
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