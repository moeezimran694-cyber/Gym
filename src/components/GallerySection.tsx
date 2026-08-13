import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Sparkles, Filter, Phone } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, MUSCLE_EMPIRE_LOCATION } from '../data/muscleEmpireData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Experience' },
    { id: 'weights', label: 'Weight Training' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'group', label: 'Group Fitness' },
    { id: 'personal', label: 'Personal Training' },
    { id: 'members', label: 'Members Training' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              FITNESS EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight">
              THE MUSCLE EMPIRE<br />EXPERIENCE.
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isWide = item.aspect === 'wide' || index === 0;
            const isTall = item.aspect === 'tall';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-xs cursor-pointer ${
                  isWide ? 'md:col-span-2' : ''
                }`}
                onClick={() => setActiveLightbox(item)}
              >
                <div className={`relative w-full ${isTall ? 'h-[460px]' : isWide ? 'h-[360px]' : 'h-[300px]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out will-change-transform"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-neutral-900 border border-neutral-200/80 shadow-2xs">
                      {item.title}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Caption Info */}
                  <div className="absolute bottom-4 inset-x-4">
                    <p className="text-xs font-normal text-white/90 leading-relaxed drop-shadow-xs">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightbox && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl text-white"
              >
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-neutral-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={activeLightbox.image}
                    alt={activeLightbox.title}
                    className="max-h-[75vh] w-full object-contain"
                  />
                </div>

                <div className="p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold uppercase tracking-tight text-white mb-1">
                      {activeLightbox.title}
                    </h3>
                    <p className="text-xs font-normal text-neutral-400">
                      {activeLightbox.caption}
                    </p>
                  </div>
                  <a
                    href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                    className="px-5 py-2.5 rounded-lg bg-white text-neutral-900 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-2 self-start sm:self-auto shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    <span>CALL DESK</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
