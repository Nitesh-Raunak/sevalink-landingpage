'use client';

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Providers", href: "/#providers" },
    { name: "Pricing", href: "/#pricing" },
  ];

  useEffect(() => {
    setIsScrolled(window.scrollY > 20);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? "rgba(255, 243, 224, 0.55)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.a href="/" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Image
              src="/assets/brand/image.png"
              alt="SevaLink Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2 text-sm font-medium transition-colors group ${
                  pathname === item.href ? "text-red-600" : "text-gray-900 hover:text-black"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-sm text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl bg-[rgba(255,255,255,0.95)]"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href}
                  className="py-2 text-lg font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Link href="/login" className="py-2 text-center text-red-600 border border-red-600 rounded-lg">Login</Link>
                <Link href="/signup" className="py-2 text-center bg-red-600 text-white rounded-lg">Sign Up</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;