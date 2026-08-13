import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, Phone, Send, Sparkles } from 'lucide-react';
import { MUSCLE_EMPIRE_LOCATION, SERVICES_DATA } from '../data/muscleEmpireData';
import { MuscleEmpireLogo } from './MuscleEmpireLogo';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'PERSONAL TRAINING',
    timing: 'Morning (6:00 AM - 12:00 PM)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const messageText = `Hi Muscle Empire GYM! My name is ${formData.name} (${formData.phone}). I would like to join/enquire about ${formData.interest}. Preferred Timing: ${formData.timing}.`;
    const waUrl = `https://wa.me/${MUSCLE_EMPIRE_LOCATION.whatsapp}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative text-neutral-900"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold uppercase text-neutral-900 mb-2">
                INQUIRY RECEIVED!
              </h3>
              <p className="text-xs font-normal text-neutral-600 leading-relaxed mb-6">
                Thank you for inquiring with Muscle Empire GYM. Our team will contact you directly on your phone line.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider"
              >
                CLOSE WINDOW
              </button>
            </div>
          ) : (
            <div>
              {/* Header Logo */}
              <div className="flex items-center gap-3 mb-4">
                <MuscleEmpireLogo size="sm" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 uppercase tracking-tight mb-2">
                JOIN MUSCLE EMPIRE
              </h3>
              <p className="text-xs font-normal text-neutral-600 leading-relaxed mb-6">
                Start your strength and performance journey at Muscle Empire GYM in Mana Wala, Manawala. Fill out the quick details below or call our desk line.
              </p>

              {/* Quick Call Box */}
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between mb-6">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    INSTANT PHONE INQUIRY
                  </span>
                  <a href={MUSCLE_EMPIRE_LOCATION.phoneTel} className="text-sm font-extrabold text-neutral-900 hover:text-red-600">
                    {MUSCLE_EMPIRE_LOCATION.phone}
                  </a>
                </div>
                <a
                  href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                  className="px-3.5 py-1.5 rounded-lg bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-red-700 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL NOW</span>
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0307 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                    SERVICE INTERESTED IN
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="ONLINE CLASSES">ONLINE CLASSES</option>
                    <option value="GENERAL MEMBERSHIP">GENERAL MEMBERSHIP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1">
                    PREFERRED TIME SLOT
                  </label>
                  <select
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900"
                  >
                    <option value="Morning (6:00 AM - 12:00 PM)">Morning (6:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 11:30 PM)">Evening (5:00 PM - 11:30 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
                >
                  <Send className="w-4 h-4 text-red-400" />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
