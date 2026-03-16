'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Providers", href: "/#providers" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.a href="/">
            <Image
              src="/assets/brand/sevalink.png"
              alt="SevaLink Logo"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </motion.a>

          {/* Desktop Nav - Visibility Optimized */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                // Changed text to slate-950 and font-black for maximum contrast
                className={`relative px-5 py-2 text-sm font-black transition-colors group ${
                  pathname === item.href ? "text-red-600" : "text-slate-950 hover:text-red-600"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center leading-none rounded-xl bg-white/90 border border-red-100 shadow-sm text-slate-900 hover:bg-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 shrink-0" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/35"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[78%] max-w-sm border-l border-red-100 bg-white shadow-2xl"
            >
              <div className="flex h-full flex-col p-5">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-base font-black text-slate-900">Menu</p>
                  <button
                    type="button"
                    aria-label="Close drawer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-slate-900"
                  >
                    <X className="h-5 w-5 shrink-0" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="rounded-xl px-3 py-3 text-base font-bold text-slate-900 hover:bg-red-50 hover:text-red-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;