import React, { useState, useEffect } from 'react';
import { NauticalHUD, ActiveSection } from '@/components/navigation/NauticalHUD';
import { HeroVoyage } from '@/components/sections/HeroVoyage';
import { Day1Outpost } from '@/components/sections/Day1Outpost';
import { Day2Pandemonium } from '@/components/sections/Day2Pandemonium';
import { Day3Carnival } from '@/components/sections/Day3Carnival';
import { Hack2FutureSection } from '@/components/sections/Hack2FutureSection';
import { EventDetailModal } from '@/components/modals/EventDetailModal';
import { GlobalSearchBar } from '@/components/navigation/GlobalSearchBar';
import { EventItem } from '@/data/avinyaData';
import {
  MapPin,
  Mail,
  Compass,
  Anchor,
  Rocket,
  ExternalLink,
  ChevronUp,
  Navigation
} from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Set up intersection observer to detect current scroll section accurately
  useEffect(() => {
    const sectionIds: ActiveSection[] = ['hero', 'day1', 'day2', 'day3', 'hack2future'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -40% 0px',
          threshold: [0.2, 0.4, 0.6]
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: ActiveSection) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEventDossier = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Nautical HUD (Desktop top bar + right sea route tracker, mobile bottom dock) */}
      <NauticalHUD
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Event Search Bar Overlay (Ctrl+K or Header Trigger) */}
      <GlobalSearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectEvent={handleOpenEventDossier}
      />

      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. HERO EXPEDITION VOYAGE */}
        <HeroVoyage
          onSetSail={() => scrollToSection('day1')}
          onOpenHackathon={() => scrollToSection('hack2future')}
        />

        {/* TRANSITION: Abyssal Ocean to Arrakis Desert Rim */}
        <div className="relative h-20 sm:h-28 bg-gradient-to-b from-[#040814] via-[#0A0605] to-[#0E0806] flex items-center justify-center overflow-hidden border-y border-[#D9531E]/20">
          <div className="flex items-center gap-2 sm:gap-4 font-mono-tech text-[10px] sm:text-xs text-amber-500/70 tracking-widest uppercase">
            <span className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#D9531E]/60" />
            <Navigation className="w-3.5 h-3.5 text-[#D9531E] animate-pulse" />
            <span>CROSSING STRAIT // ENTERING ARRAKIS SAND SECTOR</span>
            <span className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#D9531E]/60" />
          </div>
        </div>

        {/* 2. DAY 1: THE LAST OUTPOST (Dune Desert Aesthetic) */}
        <Day1Outpost onSelectEvent={handleOpenEventDossier} />

        {/* TRANSITION: Dune Desert to Neo-Dharwad Cyber Island */}
        <div className="relative h-20 sm:h-28 bg-gradient-to-b from-[#12071F] via-[#0A0518] to-[#070314] flex items-center justify-center overflow-hidden border-y border-[#FF007F]/20">
          <div className="flex items-center gap-2 sm:gap-4 font-mono-tech text-[10px] sm:text-xs text-[#00F5D4]/80 tracking-widest uppercase">
            <span className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#FF007F]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-ping" />
            <span>OPTICAL LINK ESTABLISHED // SYNTHWAVE GRID ONLINE</span>
            <span className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#00F5D4]/60" />
          </div>
        </div>

        {/* 3. DAY 2: THE PANDEMONIUM (Cyberpunk Synthwave Aesthetic) */}
        <Day2Pandemonium onSelectEvent={handleOpenEventDossier} />

        {/* TRANSITION: Cyberpunk Sprawl to Celestial Harbor Festival */}
        <div className="relative h-20 sm:h-28 bg-gradient-to-b from-[#021820] via-[#021F2D] to-[#021826] flex items-center justify-center overflow-hidden border-y border-[#FFB703]/20">
          <div className="flex items-center gap-2 sm:gap-4 font-mono-tech text-[10px] sm:text-xs text-[#FFB703]/80 tracking-widest uppercase">
            <span className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#FFB703]/60" />
            <Anchor className="w-3.5 h-3.5 text-[#FFB703] animate-pulse" />
            <span>APPROACHING CELESTIAL HARBOR // FESTIVAL FLOTILLA MOORED</span>
            <span className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#FFB703]/60" />
          </div>
        </div>

        {/* 4. DAY 3: THE CARNIVAL ISLAND (Night Festival & Harbor Gala) */}
        <Day3Carnival onSelectEvent={handleOpenEventDossier} />

        {/* TRANSITION: Archipelago Waters to Low Earth Orbit */}
        <div className="relative h-24 sm:h-32 bg-gradient-to-b from-[#020308] via-[#050B18] to-[#020308] flex items-center justify-center overflow-hidden border-y border-cyan-500/20">
          <div className="flex items-center gap-2 sm:gap-4 font-mono-tech text-[10px] sm:text-xs text-cyan-300 tracking-widest uppercase">
            <span className="w-8 sm:w-20 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <Rocket className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>STAGE 3 BURNOUT // COMMENCING ORBITAL INSERTION (408 KM)</span>
            <span className="w-8 sm:w-20 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>

        {/* 5. FLAGSHIP HACKATHON: HACK2FUTURE 2027 */}
        <Hack2FutureSection />
      </main>

      {/* EVENT DETAILS DOSSIER MODAL */}
      <EventDetailModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* THEMED IIIT DHARWAD AVINYA 2027 FOOTER */}
      <footer className="relative bg-[#02040B] text-slate-300 border-t border-white/10 overflow-hidden pt-16 pb-24 md:pb-16 font-mono-tech">
        {/* Ambient Footer Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-cyan-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
            {/* Fest Identity & Patrons */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-amber-500/20 border border-cyan-400/40 text-cyan-400">
                  <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '35s' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-white tracking-wider">
                    AVINYA 2027
                  </h3>
                  <p className="text-xs text-cyan-400/80">
                    FLAGSHIP TECHNO-CULTURAL FEST OF IIIT DHARWAD
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-md">
                Indian Institute of Information Technology Dharwad (IIIT Dharwad) is an Institute of
                National Importance established by the Ministry of Education, Government of India.
                Avinya brings together the brightest engineers, artists, and creators across the
                nation for an unforgettable 3-day voyage.
              </p>

              <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-300">
                  March 12 - 14, 2027
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-cyan-300">
                  35+ Arenas
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-amber-400 font-bold">
                  ₹5,00,000+ Prizes
                </span>
              </div>
            </div>

            {/* Archipelago Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                ARCHIPELAGO WAYPOINTS
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <span>00 // The Embarkation (Hero)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('day1')}
                    className="hover:text-[#E6C280] transition-colors flex items-center gap-2"
                  >
                    <span>01 // Day 1: The Last Outpost</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('day2')}
                    className="hover:text-[#00F5D4] transition-colors flex items-center gap-2"
                  >
                    <span>02 // Day 2: The Pandemonium</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('day3')}
                    className="hover:text-[#FFB703] transition-colors flex items-center gap-2"
                  >
                    <span>03 // Day 3: Celestial Harbor</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('hack2future')}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <span>04 // Orbit: Hack2Future 2027</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Campus Coordinates & Venue Map */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                EXPEDITION HEADQUARTERS
              </h4>
              <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">IIIT Dharwad Permanent Campus</span>
                    <span className="text-slate-400 block text-[11px]">
                      Ittigatti Road, Near Sattur Colony, Dharwad, Karnataka 580009
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-cyan-300 font-mono-tech pt-1">
                  NAV COORDINATES: 15.4589° N, 75.0078° E
                </div>

                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-2 text-[11px]">
                  <a
                    href="https://maps.google.com/?q=IIIT+Dharwad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Google Maps Route</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="mailto:avinya@iiitdwd.ac.in"
                    className="text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3 text-cyan-400" />
                    <span>avinya@iiitdwd.ac.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Accreditation & Back to Top */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2027 AVINYA • Indian Institute of Information Technology Dharwad. All Rights
              Reserved.
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 p-2 rounded-lg bg-white/5"
              >
                <span>Ascend to Top</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
