import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import { MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-neutral-50/80 text-neutral-900 border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
            FIND US
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight">
            COME TRAIN WITH US.
          </h2>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Location Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[11px] font-bold uppercase tracking-wider mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>OFFICIAL GYM LOCATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 mb-4">
                {MUSCLE_EMPIRE_LOCATION.name}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-0.5">
                      ADDRESS
                    </span>
                    <p className="text-sm font-normal text-neutral-800 leading-relaxed">
                      {MUSCLE_EMPIRE_LOCATION.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-0.5">
                      DIRECT DESK PHONE
                    </span>
                    <a
                      href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                      className="text-lg font-extrabold text-neutral-900 hover:text-red-600 transition-colors block"
                    >
                      {MUSCLE_EMPIRE_LOCATION.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-0.5">
                      HOURS
                    </span>
                    <p className="text-xs font-normal text-neutral-700">
                      Monday – Sunday: 6:00 AM – 11:30 PM<br />
                      <span className="text-neutral-500 font-normal">(Friday: Contact gym for hours)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-neutral-100">
              <a
                href={MUSCLE_EMPIRE_LOCATION.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2 group shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-lg bg-white text-neutral-900 border border-neutral-300 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <Phone className="w-3.5 h-3.5 text-red-600 group-hover:text-white transition-colors" />
                <span>CALL NOW</span>
              </a>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-300 shadow-md bg-white h-[450px] relative"
          >
            <iframe
              title="Muscle Empire GYM Location Map"
              src={MUSCLE_EMPIRE_LOCATION.mapEmbedUrl}
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              allowFullScreen
            />
            
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-sm text-neutral-900 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>MANA WALA, MANAWALA, PAKISTAN</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
