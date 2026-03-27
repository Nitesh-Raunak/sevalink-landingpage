'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowUp } from 'lucide-react';
import { FloatingMedicalIcons } from '../ui/medical-background';

const footerLinks = {
  "Services": [
    { name: "Emergency Ambulance" },
    { name: "Homecare Services" },
    { name: "Hospital Appointments" },
    { name: "Family Tracking" },
  ],
  "Platforms": [
    { name: "Patient App", href: "/platforms/patient" },
    { name: "Driver App", href: "/platforms/driver" },
    { name: "Fleet Dashboard", href: "/platforms/fleet" },
    { name: "Hospital Dashboard", href: "/platforms/hospital" },
    { name: "Homecare Dashboard", href: "/platforms/homecare" },
  ],
  "Company": [
    { name: "About SevaLink", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/help" },
    { name: "Emergency Guidelines", href: "/emergency-guidelines" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-red-50/65 via-white to-red-50/40 text-black">
      <FloatingMedicalIcons />
      <div className="absolute inset-0 z-0 bg-white/45" />
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10">
      {/* Main Footer Content */}
      <div className="pt-16 md:pt-20 pb-10 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-16">
            
            {/* Column 1: Brand + About */}
            <div>
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <Image 
                  src="/assets/brand/SevaLink-logo-r.png" 
                  alt="SevaLink" 
                  width={480} 
                  height={130} 
                  className="h-28 sm:h-32 md:h-36 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-black mb-8 leading-relaxed line-clamp-4 transition-colors duration-300 hover:text-red-600">
                Real-time emergency response platform connecting patients, ambulances, hospitals & homecare services.
              </p>
              <div className="flex items-center gap-2 text-sm text-black transition-colors duration-300 hover:text-red-600">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-sm font-bold text-red-600 mb-6 uppercase tracking-wider transition-colors duration-300">Services</h4>
              <ul className="space-y-4">
                {footerLinks.Services.map((link) => (
                  <li key={link.name}>
                    <Link href="/services" className="hover-link text-sm text-black inline-block cursor-pointer transition-colors duration-300 hover:text-red-600">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Platforms */}
            <div>
              <h4 className="text-sm font-bold text-red-600 mb-6 uppercase tracking-wider transition-colors duration-300">Platforms</h4>
              <ul className="space-y-4">
                {footerLinks.Platforms.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover-link text-sm text-black hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2 hover:text-red-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company + Support */}
            <div>
              <h4 className="text-sm font-bold text-red-600 mb-6 uppercase tracking-wider transition-colors duration-300">Company</h4>
              <ul className="space-y-4">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover-link text-sm text-black hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2 hover:text-red-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-14 border-t border-black/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
            <motion.div 
              className="text-center md:text-left transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs text-black font-medium transition-colors duration-300 hover:text-red-600">
                © 2026 SevaLink. All rights reserved.
              </p>
              <p className="text-xs text-black/80 mt-2 transition-colors duration-300 hover:text-red-600">
                Made for faster emergency response in India
              </p>
            </motion.div>
            <div className="mt-2 md:mt-0 w-full md:w-auto flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-black text-center transition-all duration-300">
              <Link href="/privacy-policy" className="hover-link whitespace-nowrap transition-all duration-300 hover:translate-x-0.5 hover:text-red-600">Privacy Policy</Link>
              <span className="hidden sm:block w-1 h-1 bg-black/30 rounded-full transition-all duration-300"></span>
              <Link href="/terms-and-conditions" className="hover-link whitespace-nowrap transition-all duration-300 hover:translate-x-0.5 hover:text-red-600">Terms & Conditions</Link>
              <span className="hidden sm:block w-1 h-1 bg-black/30 rounded-full transition-all duration-300"></span>
              <Link href="/refund-policy" className="hover-link whitespace-nowrap transition-all duration-300 hover:translate-x-0.5 hover:text-red-600">Refund Policy</Link>
              <span className="hidden sm:block w-1 h-1 bg-black/30 rounded-full transition-all duration-300"></span>
              <motion.button 
                onClick={scrollToTop}
                className="mt-1 sm:mt-0 text-black transition-all duration-300 flex items-center gap-2 group font-semibold hover:gap-3 hover:text-red-600"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to top 
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="group-hover:animate-none"
                >
                  <ArrowUp className="w-4 h-4 transition-all duration-300" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;