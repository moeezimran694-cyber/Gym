import React from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowUpRight, Laptop, Video, Phone } from 'lucide-react';
import { MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

interface OnlineClassesSectionProps {
  onOpenJoinModal: () => void;
}

export const OnlineClassesSection: React.FC<OnlineClassesSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="online-classes" className="py-20 sm:py-24 bg-neutral-50/90 text-neutral-900 border-b border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-md relative overflow-hidden">
          {/* Subtle Background Icon */}
          <Globe className="absolute -right-8 -bottom-8 w-64 h-64 text-neutral-100 pointer-events-none stroke-[1]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[11px] font-bold uppercase tracking-wider mb-3">
                <Laptop className="w-3.5 h-3.5" />
                <span>ONLINE FITNESS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight mb-4">
                TRAIN BEYOND THE GYM.
              </h2>

              <p className="text-base font-normal text-neutral-600 max-w-2xl leading-relaxed mb-6">
                Muscle Empire GYM offers live and remote online workout sessions, allowing you to maintain your training discipline, follow expert guidance, and connect with our fitness coaches from wherever you are.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-red-600 shrink-0" />
                  Guided Remote Workouts
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-red-600 shrink-0" />
                  Train From Anywhere
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center"
            >
              <button
                onClick={onOpenJoinModal}
                className="w-full py-4 px-6 rounded-xl bg-neutral-900 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>ASK ABOUT ONLINE CLASSES</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform" />
              </button>

              <a
                href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                className="w-full py-4 px-6 rounded-xl bg-white text-neutral-900 border border-neutral-300 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>CALL: {MUSCLE_EMPIRE_LOCATION.phone}</span>
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
