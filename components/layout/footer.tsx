'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/sevalink', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/sevalink', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/sevalink', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/sevalink', label: 'Instagram' },
];

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
    <footer className="bg-[#0A0A0A] text-[#E0E0E0]">
      {/* Main Footer Content */}
      <div className="pt-16 md:pt-20 pb-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-16">
            
            {/* Column 1: Brand + About */}
            <div>
              <Link href="/" className="inline-block mb-4 transition-all duration-300 hover:opacity-80">
                <Image 
                  src="/assets/brand/SevaLink-icon-f.png" 
                  alt="SevaLink Icon" 
                  width={80} 
                  height={80} 
                  className="h-30 w-30 object-cover transition-opacity duration-300"
                />
              </Link>
              <p className="text-sm text-gray-300 mb-8 leading-relaxed line-clamp-4 transition-colors duration-300">
                Real-time emergency response platform connecting patients, ambulances, hospitals & homecare services.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-300">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider transition-colors duration-300">Services</h4>
              <ul className="space-y-4">
                {footerLinks.Services.map((link) => (
                  <li key={link.name}>
                    <Link href="/services" className="hover-link text-sm text-gray-400 inline-block cursor-pointer">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Platforms */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider transition-colors duration-300">Platforms</h4>
              <ul className="space-y-4">
                {footerLinks.Platforms.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover-link text-sm text-gray-400 hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company + Support */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider transition-colors duration-300">Company</h4>
              <ul className="space-y-4">
                {footerLinks.Company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="hover-link text-sm text-gray-400 hover:translate-x-1 transition-all duration-300 inline-block underline-offset-2"
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
      <div className="py-14 border-t border-white/15 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
            <motion.div 
              className="text-center md:text-left transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs text-gray-400 font-medium transition-colors duration-300 hover:text-gray-300">
                © 2026 SevaLink. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-2 transition-colors duration-300 hover:text-gray-400">
                Made for faster emergency response in India
              </p>
            </motion.div>
            <div className="mt-2 md:mt-0 w-full md:w-auto flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-gray-400 text-center transition-all duration-300">
              <Link href="/privacy-policy" className="hover-link whitespace-nowrap transition-all duration-300 hover:translate-x-0.5">Privacy Policy</Link>
              <span className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full transition-all duration-300"></span>
              <Link href="/terms-and-conditions" className="hover-link whitespace-nowrap transition-all duration-300 hover:translate-x-0.5">Terms & Conditions</Link>
              <span className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full transition-all duration-300"></span>
              <Link href="/refund-policy" className="hover-link whitespace-nowrap transition-all duration-300 hover:translate-x-0.5">Refund Policy</Link>
              <span className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full transition-all duration-300"></span>
              <motion.button 
                onClick={scrollToTop}
                className="mt-1 sm:mt-0 hover:text-white text-gray-400 transition-all duration-300 flex items-center gap-2 group font-semibold hover:gap-3"
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
    </footer>
  );
};

export default Footer;