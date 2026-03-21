'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Activity, Shield, Lock } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/sevalink', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/sevalink', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/sevalink', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/sevalink', label: 'Instagram' },
];

const footerLinks = {
  "Services": [
    { name: "Emergency Ambulance", href: "/services/emergency-ambulance" },
    { name: "Homecare Services", href: "/services/homecare" },
    { name: "Hospital Appointments", href: "/services/hospital" },
    { name: "Family Tracking", href: "/services/family-tracking" },
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

const trustItems = [
  { icon: Activity, label: "Real-time tracking" },
  { icon: Shield, label: "Verified providers" },
  { icon: Lock, label: "Secure data" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#E0E0E0]">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Need urgent help?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Fast, reliable medical coordination — available now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ y: -3, scale: 1.03 }}>
                <Link
                  href="/services/emergency-ambulance"
                  className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 inline-block text-center shadow-lg hover:shadow-red-900/60 hover:shadow-2xl"
                >
                  Request Ambulance
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.03 }}>
                <Link
                  href="/services/homecare"
                  className="px-8 py-3 border border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-semibold rounded-lg transition-all duration-300 inline-block text-center"
                >
                  Book Homecare
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.03 }}>
                <Link
                  href="/services/hospital"
                  className="px-8 py-3 border border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-semibold rounded-lg transition-all duration-300 inline-block text-center"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-20 pb-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-16">
            
            {/* Column 1: Brand + About */}
            <div>
              <Link href="/" className="inline-block mb-4 transition-all duration-300 hover:opacity-80">
                <Image 
                  src="/assets/brand/sevalink-f.png" 
                  alt="SevaLink Logo" 
                  width={140} 
                  height={40} 
                  className="brightness-0 invert object-contain"
                />
              </Link>
              <p className="text-sm text-gray-300 mb-8 leading-relaxed line-clamp-4 transition-colors duration-300">
                Real-time emergency response platform connecting patients, ambulances, hospitals & homecare services.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-300">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                <span>India</span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider transition-colors duration-300">Services</h4>
              <ul className="space-y-4">
                {footerLinks.Services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-400 hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block hover:underline underline-offset-2"
                    >
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
                      className="text-sm text-gray-400 hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block hover:underline underline-offset-2"
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
                      className="text-sm text-gray-400 hover:text-red-500 hover:translate-x-1 transition-all duration-300 inline-block hover:underline underline-offset-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Section */}
          <div className="py-14 border-t border-white/15 mt-6">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-center md:justify-start">
              {trustItems.map((item) => (
                <motion.div 
                  key={item.label} 
                  className="flex items-center gap-5 group cursor-pointer transition-all duration-300"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-7 h-7 text-cyan-300 transition-all duration-300 group-hover:text-cyan-100 group-hover:drop-shadow-lg group-hover:scale-110" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-all duration-300 font-semibold">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-14 border-t border-white/15 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
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
            <div className="flex items-center gap-6 text-xs text-gray-400 transition-all duration-300">
              <Link href="/privacy" className="hover:text-red-500 transition-all duration-300 hover:underline hover:translate-x-0.5">Privacy Policy</Link>
              <span className="w-1 h-1 bg-gray-700 rounded-full transition-all duration-300"></span>
              <Link href="/terms" className="hover:text-red-500 transition-all duration-300 hover:underline hover:translate-x-0.5">Terms of Service</Link>
              <span className="w-1 h-1 bg-gray-700 rounded-full transition-all duration-300"></span>
              <motion.button 
                onClick={scrollToTop}
                className="hover:text-white text-gray-400 transition-all duration-300 flex items-center gap-2 group font-semibold hover:gap-3"
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