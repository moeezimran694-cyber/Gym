import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { MUSCLE_EMPIRE_LOCATION, SERVICES_DATA } from '../data/muscleEmpireData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'PERSONAL TRAINING',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send via WhatsApp
    const messageText = `Hi Muscle Empire GYM! My name is ${formData.name} (${formData.phone}). I am interested in ${formData.service}. Message: ${formData.message || 'I would like to enquire about training.'}`;
    const waUrl = `https://wa.me/${MUSCLE_EMPIRE_LOCATION.whatsapp}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Contact Desk */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">
              GET IN TOUCH
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 leading-tight mb-6">
              READY TO START?
            </h2>

            <p className="text-base font-normal text-neutral-600 leading-relaxed mb-8">
              Have questions about memberships, classes or training? Get in touch with Muscle Empire GYM.
            </p>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-white w-full mb-8 border border-neutral-800 shadow-lg">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                OFFICIAL DESK LINE
              </span>
              <a
                href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                className="text-2xl sm:text-3xl font-extrabold text-white hover:text-red-400 transition-colors block mb-4"
              >
                {MUSCLE_EMPIRE_LOCATION.phone}
              </a>

              <a
                href={MUSCLE_EMPIRE_LOCATION.phoneTel}
                className="w-full py-3.5 px-4 rounded-lg bg-red-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-red-700 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Mana Wala, Lahore - Sheikhupura - Faisalabad Road</span>
            </div>
          </motion.div>

          {/* Right Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-xs"
          >
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold uppercase text-neutral-900 mb-2">
                  INQUIRY SENT!
                </h3>
                <p className="text-xs font-normal text-neutral-600 max-w-md leading-relaxed mb-6">
                  Thank you for reaching out to Muscle Empire GYM. Our team will contact you directly on your phone number shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 mb-2">
                  MEMBERSHIP & TRAINING INQUIRY
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5">
                    SERVICE INTERESTED IN
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="ONLINE CLASSES">ONLINE CLASSES</option>
                    <option value="GENERAL MEMBERSHIP">GENERAL MEMBERSHIP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase tracking-wider mb-1.5">
                    YOUR MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about training schedules, equipment, or online classes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-xs font-normal text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4 text-red-400" />
                  <span>SUBMIT INQUIRY TO MUSCLE EMPIRE</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
