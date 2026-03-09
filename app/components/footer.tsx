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
    { name: "AI Triage", href: "/services/ai-triage" },
    { name: "Teleconsultation", href: "/services/teleconsultation" },
    { name: "Appointments", href: "/services/appointments" },
    { name: "Homecare", href: "/services/homecare" },
    { name: "Pharmacy", href: "/services/pharmacy" },
    { name: "MRU Response", href: "/services/mru" },
    { name: "Lab Tests", href: "/services/lab-tests" },
  ],
  "Company": [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Partner With Us", href: "#partners" },
    { name: "Press & Media", href: "#press" },
  ],
  "Support": [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQs", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

interface FooterProps {
  isDark?: boolean;
}

export const Footer = ({ isDark = false }: FooterProps) => {
  const [email, setEmail] = useState('');

  return (
    <footer className={`border-t ${isDark ? 'bg-gray-950 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>

      {/* Newsletter */}
      <div className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Stay Updated with SevaLink
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                Get health tips, updates, and emergency preparedness guides.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-3" onSubmit={(e) => { e.preventDefault(); setEmail(''); }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-red-500 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
              />
              <button type="submit" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2 transition-colors">
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/assets/brand/image.png" alt="SevaLink Logo" width={40} height={40} className="object-contain" />
              <span className="text-xl font-bold text-red-500">SevaLink</span>
            </Link>
            <p className={`mb-6 max-w-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Your trusted healthcare partner for emergencies and everyday wellness.
            </p>

            <div className="space-y-3">
              <a href="tel:108" className={`flex items-center gap-3 transition-colors group ${isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-red-500/10 group-hover:bg-red-500/20' : 'bg-red-50 group-hover:bg-red-100'}`}>
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Emergency Helpline</div>
                  <div className="text-sm">108 (24/7)</div>
                </div>
              </a>

              <a href="mailto:help@sevalinkcare.com" className={`flex items-center gap-3 transition-colors group ${isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-red-500/10 group-hover:bg-red-500/20' : 'bg-red-50 group-hover:bg-red-100'}`}>
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Email Support</div>
                  <div className="text-sm">help@sevalinkcare.com</div>
                </div>
              </a>

              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-red-500/10' : 'bg-red-50'}`}>
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Headquarters</div>
                  <div className="text-sm">Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}
                      className={`text-sm transition-colors inline-flex items-center group ${isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
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
      <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} SevaLinkCare Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <motion.a key={social.label} href={social.href} aria-label={social.label}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-red-500/20 text-gray-300 hover:text-red-400' 
                    : 'bg-gray-200 hover:bg-red-50 text-gray-600 hover:text-red-500'
                }`}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <p className={`flex items-center gap-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;