import React from 'react';
import { motion } from 'motion/react';
import { Clock, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';
import { OPENING_HOURS, MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

export const TimingsSection: React.FC = () => {
  return (
    <section id="hours" className="py-20 sm:py-28 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              OPENING HOURS
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight mb-6">
              MAKE TIME<br />TO TRAIN.
            </h2>

            <p className="text-base font-normal text-neutral-600 leading-relaxed mb-8">
              Muscle Empire GYM operates extended hours throughout the week so you can fit your workout into early morning cardio, afternoon strength training, or late-night sessions.
            </p>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 text-neutral-800 w-full mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>FRIDAY SCHEDULE NOTICE</span>
              </div>
              <p className="text-xs font-normal text-neutral-600 leading-relaxed">
                For Friday operational hours, please call our desk line directly at <a href={MUSCLE_EMPIRE_LOCATION.phoneTel} className="font-extrabold text-neutral-900 underline hover:text-red-600">{MUSCLE_EMPIRE_LOCATION.phone}</a>.
              </p>
            </div>

            <a
              href={MUSCLE_EMPIRE_LOCATION.phoneTel}
              className="px-6 py-3.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-2 group"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>CALL DESK: {MUSCLE_EMPIRE_LOCATION.phone}</span>
            </a>
          </div>

          {/* Right Hours Schedule Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3">
              {OPENING_HOURS.map((item, index) => {
                const isSpecial = item.status === 'Special';

                return (
                  <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                      isSpecial
                        ? 'bg-amber-50/60 border-amber-200 text-amber-950'
                        : 'bg-white border-neutral-200 hover:border-neutral-900 text-neutral-900 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSpecial ? 'bg-amber-200 text-amber-900' : 'bg-neutral-100 text-neutral-800'
                      }`}>
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-tight text-neutral-900 block">
                          {item.day}
                        </span>
                        <span className="text-[10px] font-normal text-neutral-500 uppercase tracking-widest block">
                          MUSCLE EMPIRE GYM
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${
                        isSpecial ? 'text-amber-900 font-bold' : 'text-neutral-900'
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
