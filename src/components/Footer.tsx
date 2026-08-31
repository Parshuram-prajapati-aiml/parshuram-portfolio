import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200/80 pt-16 pb-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand & Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-[#4F7CFF] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                P
              </div>
              <span className="font-heading font-bold text-lg text-[#1D1D1F] tracking-wide">
                {PERSONAL_INFO.brand}
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              {PERSONAL_INFO.subheadline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-xs font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#4F7CFF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="w-10 h-10 rounded-2xl bg-white hover:bg-[#E8F2FF] border border-slate-200 hover:border-[#4F7CFF]/40 text-slate-600 hover:text-[#4F7CFF] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Crafted with Geometric Balance light theme aesthetics & precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
