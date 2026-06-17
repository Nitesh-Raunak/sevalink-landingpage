'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowUp } from 'lucide-react';
import { FloatingMedicalIcons } from '../ui/medical-background';
import { COMPANY_LEGAL_NAME } from '@/lib/brand';

const footerLinks = {
  "Services": [
    { name: "Emergency Ambulance" },
    { name: "Homecare Services" },
    { name: "Hospital Appointments" },
    { name: "Family Tracking" },
  ],
  // Platform pages are not yet live — links removed to avoid 404s
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
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10">
        <div className="pt-4 md:pt-6 pb-8 border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-4">

              {/* Column 1: Brand + About */}
              <div>
                <Link href="/" className="inline-flex items-center gap-2 mb-4">
                  <Image src="/assets/brand/SevaLink-logo-r.png" alt="SevaLink" width={520} height={140} className="h-20 sm:h-24 md:h-32 w-auto object-contain" />
                </Link>
                <p className="text-sm text-black mb-5 leading-relaxed line-clamp-4 transition-colors duration-300 hover:text-red-600">
                  Real-time emergency response platform connecting patients, ambulances, hospitals & homecare services.
                </p>
                <div className="flex items-center gap-2 text-sm text-black transition-colors duration-300 hover:text-red-600">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Rajkot, Gujarat, India</span>
                </div>
              </div>

              {/* Column 2: Services */}
              <div>
                <h4 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-wider">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.Services.map((link) => (
                    <li key={link.name}>
                      <Link href="/services" className="hover-link text-sm text-black inline-block cursor-pointer transition-colors duration-300 hover:text-red-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: For Providers */}
              <div>
                <h4 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-wider">For Providers</h4>
                <ul className="space-y-3">
                  <li><Link href="/provider" className="hover-link text-sm text-black hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2 hover:text-red-600">Partner with SevaLink</Link></li>
                  <li><Link href="/provider#hospital" className="hover-link text-sm text-black hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2 hover:text-red-600">Hospitals &amp; Clinics</Link></li>
                  <li><Link href="/provider#fleet" className="hover-link text-sm text-black hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2 hover:text-red-600">Fleet Companies</Link></li>
                  <li><Link href="/provider#driver" className="hover-link text-sm text-black hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2 hover:text-red-600">Independent Drivers</Link></li>
                </ul>
              </div>

              {/* Column 4: Company */}
              <div>
                <h4 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-wider">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.Company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover-link text-sm text-black hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2 hover:text-red-600">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 border-t border-black/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
              <motion.div className="text-center md:text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <p className="text-xs text-black font-medium hover:text-red-600 transition-colors">
                  {`© ${new Date().getFullYear()} ${COMPANY_LEGAL_NAME}. All rights reserved.`}
                </p>
                <p className="text-xs text-black/80 mt-1 hover:text-red-600 transition-colors">
                  Made for faster emergency response in India
                </p>
              </motion.div>
              <div className="mt-2 md:mt-0 w-full md:w-auto flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs text-black text-center">
                <Link href="/privacy-policy" className="hover-link whitespace-nowrap hover:translate-x-0.5 hover:text-red-600 transition-all">Privacy Policy</Link>
                <span className="hidden sm:block w-1 h-1 bg-black/30 rounded-full" />
                <Link href="/terms-and-conditions" className="hover-link whitespace-nowrap hover:translate-x-0.5 hover:text-red-600 transition-all">Terms & Conditions</Link>
                <span className="hidden sm:block w-1 h-1 bg-black/30 rounded-full" />
                <Link href="/refund-policy" className="hover-link whitespace-nowrap hover:translate-x-0.5 hover:text-red-600 transition-all">Refund Policy</Link>
                <span className="hidden sm:block w-1 h-1 bg-black/30 rounded-full" />
                <Link href="/delete-account" className="hover-link whitespace-nowrap hover:translate-x-0.5 hover:text-red-600 transition-all">Delete Account</Link>
                <span className="hidden sm:block w-1 h-1 bg-black/30 rounded-full" />
                <motion.button onClick={scrollToTop} className="text-black flex items-center gap-2 group font-semibold hover:gap-3 hover:text-red-600 transition-all" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  Back to top
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                    <ArrowUp className="w-4 h-4" />
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
