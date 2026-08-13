import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle, ShieldCheck, Phone, UserCheck } from 'lucide-react';
import { MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

interface PersonalTrainingSectionProps {
  onOpenJoinModal: () => void;
}

export const PersonalTrainingSection: React.FC<PersonalTrainingSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="personal-training" className="py-20 sm:py-28 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
              PERSONAL TRAINING
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-6">
              TRAIN WITH<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-white">
                PURPOSE.
              </span>
            </h2>

            <p className="text-base sm:text-lg font-normal text-neutral-300 leading-relaxed mb-8">
              Personal training is available for members who want more focused guidance, structured workout programming and direct accountability at Muscle Empire GYM.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              {[
                "1-on-1 Form Oversight & Safety",
                "Custom Progressive Overload Plans",
                "Body Composition Goal Tracking",
                "Dedicated Motivation & Accountability"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs font-normal text-neutral-300">
                  <UserCheck className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-neutral-900 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>ENQUIRE NOW</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                className="w-full sm:w-auto px-6 py-4 rounded-lg bg-neutral-800 text-white border border-neutral-700 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-neutral-700 transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-red-400 group-hover:rotate-12 transition-transform" />
                <span>CALL DESK: {MUSCLE_EMPIRE_LOCATION.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Fitness Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-800 shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
                alt="Muscle Empire Personal Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    1-ON-1 COACHING
                  </div>
                  <div className="text-[11px] font-normal text-neutral-400 mt-0.5">
                    Tailored training programs at Muscle Empire GYM
                  </div>
                </div>
                <span className="px-3 py-1 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  PREMIUM
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
