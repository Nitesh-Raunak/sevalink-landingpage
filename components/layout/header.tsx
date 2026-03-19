'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Provider", href: "/provider" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (!pathname) return false;
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
            <Link href="/book?service=ambulance" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl">
              Book Ambulance
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActivePath(link.href)
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-200">
                <a href="tel:109" className="flex items-center gap-1.5 text-sm font-semibold text-red-600">
                  <Phone className="w-4 h-4" />
                  Call 109
                </a>
                <Link href="/book?service=ambulance" className="ml-auto px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors">
                  Book
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;