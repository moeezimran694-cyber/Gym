import React from 'react';
import { motion } from 'motion/react';
import { INSTAGRAM_POSTS, SMARTGYM_LOCATION } from '../data/smartgymData';
import { Instagram, Heart, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-24 px-4 sm:px-8 bg-neutral-50/50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-neutral-200 text-neutral-800 text-[11px] font-bold tracking-widest uppercase mb-3 shadow-2xs">
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              INSTAGRAM COMMUNITY
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase leading-[1.05]">
              FOLLOW THE JOURNEY.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              {SMARTGYM_LOCATION.instagram}
            </span>
            <a
              href={SMARTGYM_LOCATION.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-xs group"
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={SMARTGYM_LOCATION.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                    <div className="flex items-center gap-1.5 font-bold text-sm">
                      <Heart className="w-5 h-5 fill-white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-sm">
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  {/* Date Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-neutral-900 border border-neutral-200/80 shadow-2xs">
                    {post.date}
                  </div>
                </div>

                {/* Caption Body */}
                <div className="p-4">
                  <p className="text-xs font-normal text-neutral-700 leading-relaxed line-clamp-3 mb-3">
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Post Footer */}
              <div className="px-4 pb-4 flex items-center justify-between text-[11px] font-semibold text-neutral-500 border-t border-neutral-100 pt-3">
                <span>{post.tag}</span>
                <span className="text-neutral-900 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  VIEW POST <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
