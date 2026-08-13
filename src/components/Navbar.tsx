import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';
import { MuscleEmpireLogo } from './MuscleEmpireLogo';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple current timing status check based on local time
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      // Open between 6 AM and 11:30 PM (23:30)
      if (hour >= 6 && hour < 24) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkOpenStatus();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Personal Training', href: '#personal-training' },
    { name: 'Online Classes', href: '#online-classes' },
    { name: 'Experience', href: '#experience' },
    { name: 'Hours', href: '#hours' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro banner on clean white/off-white */}
      <div className="bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-200/80 text-xs text-neutral-600 py-1.5 px-4 sm:px-8 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 font-normal">
            <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span>{MUSCLE_EMPIRE_LOCATION.shortAddress}</span>
          </span>
          <a
            href={MUSCLE_EMPIRE_LOCATION.phoneTel}
            className="flex items-center gap-1.5 font-normal text-neutral-700 hover:text-red-600 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Call Desk:</span>
            <span className="font-extrabold text-neutral-900">{MUSCLE_EMPIRE_LOCATION.phone}</span>
          </a>
        </div>
        <div className="flex items-center gap-3 ml-auto text-[11px] sm:text-xs">
          <span className="hidden md:inline-flex items-center gap-1.5 font-semibold text-neutral-700 uppercase tracking-wider text-[10px]">
            <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
            STRENGTH • DISCIPLINE • COMMUNITY
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 shadow-2xs font-normal">
            <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
            {isOpenNow ? 'Open Today 6:00 AM – 11:30 PM' : 'Opens 6:00 AM'}
          </span>
        </div>
      </div>

      {/* Main White Navbar */}
      <nav
        className={`w-full px-6 lg:px-8 py-3.5 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/90'
            : 'bg-white/90 backdrop-blur-sm border-b border-neutral-200/60'
        }`}
      >
        {/* Single cohesive horizontal flex container */}
        <div className="w-full flex items-center justify-between gap-6">
          
          {/* Left Block (Brand / Logo) */}
          <a href="#hero" className="flex items-center shrink-0 group">
            <MuscleEmpireLogo size="md" />
          </a>

          {/* Center Block (Navigation Links) */}
          <div className="hidden xl:flex items-center justify-center gap-6 2xl:gap-7 flex-1 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-xs font-bold text-neutral-700 hover:text-red-600 transition-colors uppercase tracking-wider py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Block (Action Button) - Only JOIN THE GYM button */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenJoinModal}
              className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-neutral-800 transition-all cursor-pointer border border-neutral-800 group"
            >
              <span>JOIN THE GYM</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer (Pure White Theme) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[88px] bg-white border-b border-neutral-200 shadow-xl p-6 transition-all animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 py-2 border-b border-neutral-100 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                className="w-full py-3 rounded-md bg-white text-neutral-900 border border-neutral-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>CALL NOW:</span>
                <span className="font-extrabold">{MUSCLE_EMPIRE_LOCATION.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-md bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>JOIN THE GYM</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
