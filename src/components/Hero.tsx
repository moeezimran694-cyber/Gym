import React from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Flame, Star, Sparkles, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { MUSCLE_EMPIRE_LOCATION, GYM_VALUES } from '../data/muscleEmpireData';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="hero" className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 bg-white text-neutral-900 overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-red-500/5 via-orange-500/5 to-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>MUSCLE EMPIRE GYM • FITNESS & PERFORMANCE</span>
            </div>

            {/* Large Bold Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-neutral-900 leading-[1.02] mb-6">
              BUILD YOUR<br />
              <span>
                STRONGEST <span className="text-red-600">SELF.</span>
              </span>
            </h1>

            {/* Supporting Text in Regular Weight */}
            <p className="text-base sm:text-lg font-normal text-neutral-600 max-w-xl leading-relaxed mb-8">
              Train with purpose, build your strength and become the strongest version of yourself at Muscle Empire GYM.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-neutral-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer group border border-neutral-800"
              >
                <span>JOIN THE GYM</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-lg bg-white text-neutral-900 border border-neutral-300 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 flex items-center justify-center gap-2 group shadow-2xs"
              >
                <span>EXPLORE SERVICES</span>
              </a>

              <a
                href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                className="w-full sm:w-auto px-6 py-4 rounded-lg bg-neutral-50 text-neutral-800 border border-neutral-200 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-red-600 group-hover:text-white transition-colors shrink-0" />
                <span>CALL: {MUSCLE_EMPIRE_LOCATION.phone}</span>
              </a>
            </div>

            {/* Values / Trust Indicators */}
            <div className="pt-6 border-t border-neutral-200/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {GYM_VALUES.map((val) => (
                <span key={val} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Editorial Gym Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                alt="Muscle Empire GYM Training Arena"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md text-neutral-900 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-extrabold text-sm">
                  4.3★
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    GOOGLE RATED
                  </div>
                  <div className="text-[10px] font-normal text-neutral-500">
                    9+ Verified Reviews
                  </div>
                </div>
              </div>

              {/* Bottom Floating Card */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-lg text-neutral-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900 uppercase flex items-center gap-1.5">
                    <span>MANA WALA, MANAWALA</span>
                  </div>
                  <div className="text-[11px] font-normal text-neutral-600 mt-0.5">
                    Call Desk: <a href={MUSCLE_EMPIRE_LOCATION.phoneTel} className="font-extrabold text-neutral-900 hover:text-red-600">{MUSCLE_EMPIRE_LOCATION.phone}</a>
                  </div>
                </div>
                <a
                  href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                  className="px-3.5 py-2 rounded-lg bg-neutral-900 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  <span>CALL</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors group"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center transition-colors border border-neutral-200">
              <ArrowDown className="w-4 h-4 text-neutral-600 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
