'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/sevalinkcare', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/sevalinkcare', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/sevalinkcare/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/sevalinkcare/', label: 'LinkedIn' },
];

const footerLinks = {
  "Services": [
    { name: "Emergency Ambulance", href: "/services/emergency-ambulance" },
    { name: "Real-Time Tracking", href: "/services/tracking" },
    { name: "Hospital Selection", href: "/services/hospital" },
    { name: "Family Tracking", href: "/services/family-tracking" },
    { name: "BLS/ALS & ICU/Neo", href: "/services/bls-als" },
    { name: "Transparent Pricing", href: "/services/pricing" },
    { name: "24/7 Support", href: "/services/support" },
  ],
  "For Users": [
    { name: "Patient Portal", href: "#patient" },
    { name: "Hospital Network", href: "#hospital" },
    { name: "Admin Panel", href: "#admin" },
  ],
  "Support": [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

export const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{ backgroundColor: "#FFF3E0" }}
    >
      {/* Newsletter */}
      <div className="relative z-10 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Stay Updated with SevaLink
              </h3>
              <p className="text-gray-600">
                Get health tips, updates, and emergency preparedness guides.
              </p>
            </div>
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full flex-1 rounded-lg border border-red-200 bg-white/80 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700 sm:w-auto flex items-center justify-center gap-2"
              >
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/assets/brand/sevalink-f.png" alt="SevaLink Logo" width={130} height={130} className="object-contain" />
            </Link>
            <p className="mb-6 max-w-sm text-gray-700">
              Your trusted healthcare partner for emergencies and everyday wellness.
            </p>
            <div className="space-y-3">
              <a href="tel:108" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/70 group-hover:bg-red-100 transition-colors">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Emergency Helpline</div>
                  <div className="text-sm text-gray-600">108 (24/7)</div>
                </div>
              </a>
              <a href="mailto:help@sevalinkcare.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/70 group-hover:bg-red-100 transition-colors">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Email Support</div>
                  <div className="text-sm text-gray-600">help@sevalinkcare.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/70">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Headquarters</div>
                  <div className="text-sm text-gray-600">Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-gray-900">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-600 transition-colors inline-flex items-center group hover:text-red-500">
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-red-100">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SevaLinkCare Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-white/60 hover:bg-red-50 text-gray-500 hover:text-red-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <p className="flex items-center gap-1 text-sm text-gray-600">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;