import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, ShieldCheck, Dumbbell } from 'lucide-react';
import { MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

interface FinalCTASectionProps {
  onOpenJoinModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="py-20 sm:py-28 bg-white text-neutral-900 border-t border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
                YOUR NEXT REP STARTS HERE
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 leading-none mb-6">
                READY TO BUILD<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-red-600">
                  YOUR EMPIRE?
                </span>
              </h2>

              <p className="text-base sm:text-lg font-normal text-neutral-600 max-w-xl leading-relaxed mb-8">
                Take the first step toward peak fitness, strength and athletic conditioning at Muscle Empire GYM in Mana Wala, Manawala.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenJoinModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-neutral-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>JOIN MUSCLE EMPIRE</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform" />
                </button>

                <a
                  href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                  className="w-full sm:w-auto px-7 py-4 rounded-lg bg-white text-neutral-900 border border-neutral-300 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all flex items-center justify-center gap-2 group"
                >
                  <Phone className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" />
                  <span>CALL {MUSCLE_EMPIRE_LOCATION.phone}</span>
                </a>
              </div>
            </motion.div>

            {/* Right Integrated Fitness Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-300 shadow-md aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Muscle Empire GYM Final CTA"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-900">
                  <span className="text-xs font-bold uppercase tracking-wider block">
                    MUSCLE EMPIRE GYM MANAWALA
                  </span>
                  <span className="text-[11px] font-normal text-neutral-600 block mt-0.5">
                    Build Strength. Build Confidence.
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
