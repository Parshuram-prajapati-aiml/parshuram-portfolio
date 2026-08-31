import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <div className={`max-w-6xl mx-auto transition-all duration-300 rounded-[24px] ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-xl shadow-sm border border-white/90 py-3 px-5 sm:px-6' 
          : 'bg-white/60 backdrop-blur-md border border-white/80 py-4 px-5 sm:px-7'
      }`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-[#4F7CFF] flex items-center justify-center text-white font-bold text-base shadow-sm shadow-[#4F7CFF]/25 group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold tracking-wider text-sm sm:text-base text-[#1D1D1F] group-hover:text-[#4F7CFF] transition-colors">
                {PERSONAL_INFO.brand}
              </span>
              <span className="text-[10px] text-slate-400 font-medium -mt-1 hidden sm:block">
                AI & Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                    isActive
                      ? 'text-[#4F7CFF] font-bold'
                      : 'text-slate-600 hover:text-[#1D1D1F] hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#E8F2FF] rounded-full -z-10 border border-[#4F7CFF]/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              id="nav-cta-contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#4F7CFF] hover:bg-[#3d6bf0] text-white shadow-sm shadow-[#4F7CFF]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-toggle"
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100/80 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-slate-200/90"
            id="mobile-nav-menu"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#E8F2FF] text-[#4F7CFF] font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#4F7CFF]" />}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="w-full py-2.5 text-center rounded-xl text-sm font-bold bg-[#4F7CFF] text-white shadow-sm"
                >
                  Let's Connect 🚀
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
