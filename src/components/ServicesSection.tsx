import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X, Dumbbell, Sparkles, Phone } from 'lucide-react';
import { SERVICES_DATA, ServiceItem, MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

interface ServicesSectionProps {
  onOpenJoinModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenJoinModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              OUR SERVICES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight">
              TRAIN YOUR WAY.
            </h2>
          </div>
          <p className="text-sm font-normal text-neutral-600 max-w-md">
            Explore our specialized fitness offerings at Muscle Empire GYM, designed to accommodate every strength, endurance and conditioning goal.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-xl hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                {/* Image Box */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-neutral-900 border border-neutral-200/80 shadow-2xs">
                      {service.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-neutral-900" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-neutral-900 mb-2.5 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-normal text-neutral-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-neutral-100 mt-2">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider group-hover:text-neutral-900 transition-colors">
                  VIEW DETAILS
                </span>
                <span className="text-xs font-bold text-neutral-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn More &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden border border-neutral-200 shadow-2xl relative text-neutral-900"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-48 sm:h-56 w-full">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-2.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest mb-1.5 inline-block">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-normal text-neutral-600 leading-relaxed mb-6">
                  {selectedService.fullDesc}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                    KEY SERVICE BENEFITS
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedService.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-xs font-normal text-neutral-700">
                        <Check className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-neutral-200">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onOpenJoinModal();
                    }}
                    className="w-full sm:w-1/2 py-3 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ENQUIRE ABOUT {selectedService.title}</span>
                  </button>
                  <a
                    href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                    className="w-full sm:w-1/2 py-3 rounded-lg bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    <span>CALL: {MUSCLE_EMPIRE_LOCATION.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Export as TrainingSection as well to keep existing imports clean
export { ServicesSection as TrainingSection };
