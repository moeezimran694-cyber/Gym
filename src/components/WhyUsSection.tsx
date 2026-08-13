import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Users, Dumbbell, Laptop } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/muscleEmpireData';

export const WhyUsSection: React.FC = () => {
  const icons = [
    <UserCheck className="w-6 h-6 text-red-600" />,
    <Users className="w-6 h-6 text-red-600" />,
    <Dumbbell className="w-6 h-6 text-red-600" />,
    <Laptop className="w-6 h-6 text-red-600" />
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-neutral-50/80 text-neutral-900 border-y border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
            WHY US
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight">
            MORE THAN A WORKOUT.
          </h2>
        </div>

        {/* 4 Minimal Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-6">
                  {icons[idx]}
                </div>

                <h3 className="text-lg font-extrabold uppercase tracking-tight text-neutral-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs font-normal text-neutral-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  0{idx + 1} • MUSCLE EMPIRE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
