import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Dumbbell, Award, Flame, Users, CheckCircle } from 'lucide-react';
import { GYM_STATS, MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-neutral-50/80 text-neutral-900 border-y border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
            ABOUT US
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight">
            WHERE STRENGTH<br />
            BECOMES A LIFESTYLE.
          </h2>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Large Gym Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-300/80 shadow-md aspect-[4/3] sm:aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
                alt="Muscle Empire GYM Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-900">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block">
                  MUSCLE EMPIRE MANAWALA
                </span>
                <span className="text-[11px] font-normal text-neutral-600 block mt-0.5">
                  Lahore - Sheikhupura - Faisalabad Road, Mana Wala
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-base sm:text-lg font-normal text-neutral-600 leading-relaxed mb-6">
              Muscle Empire GYM is a premier fitness destination focused on helping members improve their strength, fitness and overall training experience.
            </p>
            <p className="text-sm font-normal text-neutral-600 leading-relaxed mb-8">
              Whether your goal is progressive strength building, athletic conditioning, body composition transformation, or joining high-energy group fitness, Muscle Empire GYM provides a disciplined environment, commercial-grade equipment, and certified training guidance to ensure real progress.
            </p>

            {/* Concise Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                "Targeted Strength & Hypertrophy Protocols",
                "High-Energy Aerobics, Zumba & Cycling",
                "Certified Personal Training Mentorship",
                "Remote Online Fitness Classes"
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Statistics Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200">
              {GYM_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs flex flex-col justify-between"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-none mb-1">
                    {stat.value}
                  </span>
                  <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[9px] font-normal text-neutral-400 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
