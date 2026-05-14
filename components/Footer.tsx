'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, MapPin, Clock, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#', hoverClass: 'hover:text-[#1877F2] hover:shadow-[0_0_15px_#1877F2/50]' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#', hoverClass: 'hover:text-white hover:shadow-[0_0_15px_white/50]' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#', hoverClass: 'hover:text-[#E4405F] hover:shadow-[0_0_15px_#E4405F/50]' },
    { name: 'Linkedin', icon: <Linkedin className="w-5 h-5" />, href: '#', hoverClass: 'hover:text-[#0A66C2] hover:shadow-[0_0_15px_#0A66C2/50]' },
  ];

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-brand-red/10 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold font-display tracking-tighter text-white">
                Go<span className="text-brand-red">Webpy</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your ultimate destination for professional-grade online tools. GoWebpy simplifies your digital workflow with fast, secure, and user-friendly utilities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverClass} group`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-red rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Contact', 'Privacy Policy', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-brand-red transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-red mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Features */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center relative">
              Tool Features
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-red rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                'Uppercase Converter',
                'Lowercase Converter',
                'Sentence Case Converter',
                'Title Case Converter',
                'Toggle Case Converter'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="/"
                    className="text-gray-400 hover:text-brand-red transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-red mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center relative">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-red rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span>support@gowebpy.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Globe className="w-5 h-5 text-brand-red shrink-0" />
                <span>www.gowebpy.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>Tech Plaza, Silicon Valley, CA, USA</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-brand-red shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-sm">
            <p>© {currentYear} GoWebpy. All Rights Reserved.</p>
            <p>
              Designed with ❤️ by <span className="text-brand-red font-medium">GoWebpy Team</span>
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
