'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/sevalink', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/sevalink', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/sevalink', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/sevalink', label: 'Instagram' },
];

const footerLinks = {
  "Services": [
    { name: "Emergency Ambulance", href: "/services/emergency-ambulance" },
    { name: "Real-Time Tracking", href: "/services/tracking" },
    { name: "Hospital Selection", href: "/services/hospital" },
    { name: "Family Tracking", href: "/services/family-tracking" },
    { name: "Homecare", href: "/services/homecare" },
  ],
  "For Users": [
    { name: "Patient Portal", href: "/portal/patient" },
    { name: "Hospital Network", href: "/hospitals" },
    { name: "Admin Panel", href: "/admin" },
  ],
  "Support": [
    { name: "Help Center", href: "/support/help" },
    { name: "Contact Us", href: "/support/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#E0E0E0] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand + Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/assets/brand/sevalink-f.png" 
                alt="SevaLink Logo" 
                width={140} 
                height={40} 
                className="brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Your trusted healthcare partner for emergencies and everyday wellness. We bridge the gap between patients and medical services.
            </p>
            <div className="space-y-4">
              <a href="tel:+911234567890" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-gray-500 group-hover:text-white" />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:info@sevalink.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-gray-500 group-hover:text-white" />
                <span>info@sevalink.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Columns 2-4: Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Social */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Connect With Us</h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                  whileHover={{ y: -3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-white transition-colors uppercase tracking-widest group"
            >
              Back to top 
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SevaLink. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <Link href="/support/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;