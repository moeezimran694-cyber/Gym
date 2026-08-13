import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PersonalTrainingSection } from './components/PersonalTrainingSection';
import { OnlineClassesSection } from './components/OnlineClassesSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { TimingsSection } from './components/TimingsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleOpenJoinModal = () => {
    setIsJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-600 selection:text-white font-sans antialiased">
      {/* Sticky Top Navbar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      <main>
        {/* Full-screen Editorial Hero */}
        <Hero onOpenJoinModal={handleOpenJoinModal} />

        {/* About Muscle Empire GYM */}
        <AboutSection />

        {/* Our Services: Aerobics, Cycling, Kickboxing, Nutrition Consulting, Personal Training, Youth Classes, Zumba */}
        <ServicesSection onOpenJoinModal={handleOpenJoinModal} />

        {/* Dedicated Personal Training Section */}
        <PersonalTrainingSection onOpenJoinModal={handleOpenJoinModal} />

        {/* Dedicated Online Classes Section */}
        <OnlineClassesSection onOpenJoinModal={handleOpenJoinModal} />

        {/* Asymmetrical Fitness Experience Gallery */}
        <GallerySection />

        {/* Why Us / More Than A Workout */}
        <WhyUsSection />

        {/* Opening Hours */}
        <TimingsSection />

        {/* Location & Map */}
        <LocationSection />

        {/* Contact Section & Form */}
        <ContactSection />

        {/* Final CTA */}
        <FinalCTASection onOpenJoinModal={handleOpenJoinModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Join & Inquiry Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoinModal} />
    </div>
  );
}
