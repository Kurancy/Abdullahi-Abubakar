import React, { useState, useEffect } from 'react';
import { GeometricBackground } from './components/GeometricBackground.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LeadershipSection } from './components/LeadershipSection.tsx';
import { ExpertiseSection } from './components/ExpertiseSection.tsx';
import { BuildingAxionSection } from './components/BuildingAxionSection.tsx';
import { VenturesSection } from './components/VenturesSection.tsx';
import { PhilosophySection } from './components/PhilosophySection.tsx';
import { JourneySection } from './components/JourneySection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { AxionModal } from './components/AxionModal.tsx';
import { VentureDetailModal } from './components/VentureDetailModal.tsx';
import { VentureItem } from './types.ts';

export default function App() {
  // Dark mode as default flagship theme (#07101F)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('axion-theme');
      if (saved) return saved === 'dark';
      return true; // Default to dark mode
    }
    return true;
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAxionOpen, setIsAxionOpen] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState<VentureItem | null>(null);

  // Synchronize HTML class for Tailwind dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#07101F';
      document.body.style.color = '#FFFFFF';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#07101F';
    }
    localStorage.setItem('axion-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="executive-website-root"
      className={`min-h-screen relative selection:bg-sky-500/30 selection:text-sky-300 ${
        isDark
          ? 'bg-[#07101F] text-white bg-grid-pattern-dark'
          : 'bg-white text-slate-900 bg-grid-pattern-light'
      }`}
    >
      {/* Subtle Custom Desktop Cursor */}
      <CustomCursor isDark={isDark} />

      {/* Global Background Subtle Geometric Movement */}
      <GeometricBackground isDark={isDark} density="normal" />

      {/* Primary Horizontal Header (NO SIDEBAR) */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          isDark={isDark}
          onExploreClick={() => scrollToSection('about')}
          onConnectClick={() => setIsContactOpen(true)}
        />

        {/* 2. About Section */}
        <AboutSection isDark={isDark} />

        {/* 3. Leadership Section */}
        <LeadershipSection isDark={isDark} />

        {/* 4. Expertise Section */}
        <ExpertiseSection isDark={isDark} />

        {/* 5. Building Axion Section */}
        <BuildingAxionSection
          isDark={isDark}
          onExploreAxion={() => setIsAxionOpen(true)}
        />

        {/* 6. Ventures / Selected Work */}
        <VenturesSection
          isDark={isDark}
          onSelectVenture={(venture) => setSelectedVenture(venture)}
        />

        {/* 7. Philosophy Section */}
        <PhilosophySection isDark={isDark} />

        {/* 8. Journey Section */}
        <JourneySection isDark={isDark} />

        {/* 9. Contact CTA Section */}
        <ContactSection
          isDark={isDark}
          onGetInTouch={() => setIsContactOpen(true)}
          onConnect={() => setIsContactOpen(true)}
        />
      </main>

      {/* Executive Footer */}
      <Footer
        isDark={isDark}
        onNavigate={scrollToSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Executive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isDark={isDark}
      />

      {/* Explore Axion Modal */}
      <AxionModal
        isOpen={isAxionOpen}
        onClose={() => setIsAxionOpen(false)}
        isDark={isDark}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Venture Architecture Detail Modal */}
      <VentureDetailModal
        venture={selectedVenture}
        onClose={() => setSelectedVenture(null)}
        isDark={isDark}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
