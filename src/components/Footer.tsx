import React from 'react';
import { MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';
import { MapPin, Phone, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { MuscleEmpireLogo } from './MuscleEmpireLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Personal Training', href: '#personal-training' },
    { name: 'Online Classes', href: '#online-classes' },
    { name: 'Gallery', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#hero" className="mb-4 group">
              <MuscleEmpireLogo size="md" darkText={false} />
            </a>

            <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">
              BUILD STRENGTH. BUILD CONFIDENCE.
            </p>

            <p className="text-xs font-normal text-neutral-400 max-w-sm leading-relaxed mb-6">
              Muscle Empire GYM is a premier athletic fitness destination in Mana Wala, Manawala offering strength training, group aerobics, kickboxing, personal coaching and remote online fitness.
            </p>

            <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-xs text-neutral-300 w-full max-w-sm">
              <div className="font-bold uppercase text-white mb-1">
                LOCATION
              </div>
              <p className="text-neutral-400 leading-relaxed font-normal">
                {MUSCLE_EMPIRE_LOCATION.address}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-neutral-800">
              NAVIGATION
            </div>
            <ul className="space-y-2.5 text-xs font-normal text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors uppercase tracking-wider block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-neutral-800">
              CONTACT & HOURS
            </div>
            
            <div className="space-y-3 text-xs font-normal text-neutral-300 mb-6">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    PHONE DESK
                  </span>
                  <a
                    href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                    className="text-base font-extrabold text-white hover:text-red-400 transition-colors"
                  >
                    {MUSCLE_EMPIRE_LOCATION.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    OPENING HOURS
                  </span>
                  <span>Monday – Sunday: 6:00 AM – 11:30 PM</span>
                </div>
              </div>
            </div>

            <a
              href={MUSCLE_EMPIRE_LOCATION.phoneTel}
              className="w-full py-3 px-4 rounded-lg bg-red-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW: {MUSCLE_EMPIRE_LOCATION.phone}</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-neutral-500">
          <div>
            © {new Date().getFullYear()} MUSCLE EMPIRE GYM. All rights reserved. Mana Wala, Manawala.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-neutral-700">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
