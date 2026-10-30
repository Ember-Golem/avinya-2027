import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import {
  Compass,
  Flame,
  Zap,
  Sparkles,
  Rocket,
  Anchor,
  Search,
  ExternalLink
} from 'lucide-react';

export type ActiveSection = 'hero' | 'day1' | 'day2' | 'day3' | 'hack2future';

interface NauticalHUDProps {
  activeSection: ActiveSection;
  onNavigate: (sectionId: ActiveSection) => void;
  onOpenSearch?: () => void;
}

interface Waypoint {
  id: ActiveSection;
  label: string;
  shortLabel: string;
  dayNumber: string;
  coords: string;
  sectorTag: string;
  accentColor: string;
  icon: React.ReactNode;
}

const WAYPOINTS: Waypoint[] = [
  {
    id: 'hero',
    label: 'The Embarkation',
    shortLabel: 'Embark',
    dayNumber: 'INIT',
    coords: '15.4589° N, 75.0078° E',
    sectorTag: 'SECTOR: ABYSSAL DEEP',
    accentColor: '#00F0FF',
    icon: <Compass className="w-4 h-4" />
  },
  {
    id: 'day1',
    label: 'The Last Outpost',
    shortLabel: 'Day 01',
    dayNumber: 'DAY 1',
    coords: '15.4610° N, 75.0120° E',
    sectorTag: 'SECTOR: ARRAKIS RIM',
    accentColor: '#D9531E',
    icon: <Flame className="w-4 h-4" />
  },
  {
    id: 'day2',
    label: 'The Pandemonium',
    shortLabel: 'Day 02',
    dayNumber: 'DAY 2',
    coords: '15.4695° N, 75.0234° E',
    sectorTag: 'SECTOR: NEON SPREE',
    accentColor: '#FF007F',
    icon: <Zap className="w-4 h-4" />
  },
  {
    id: 'day3',
    label: 'Carnival Island',
    shortLabel: 'Day 03',
    dayNumber: 'DAY 3',
    coords: '15.4740° N, 75.0312° E',
    sectorTag: 'SECTOR: CELESTIAL HARBOR',
    accentColor: '#FFB703',
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    id: 'hack2future',
    label: 'Hack2Future Orbit',
    shortLabel: 'Hackathon',
    dayNumber: 'ORBIT',
    coords: 'ORBIT: LEO-408 KM',
    sectorTag: 'STATION: HACK2FUTURE',
    accentColor: '#00F5D4',
    icon: <Rocket className="w-4 h-4" />
  }
];

const TRACK_HEIGHT = 240; // Total vertical travel distance in pixels

export const NauticalHUD: React.FC<NauticalHUDProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<ActiveSection | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [scrollFraction, setScrollFraction] = useState(0);

  // Accurate real-time scroll calculation
  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 120);

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const fraction = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
        setScrollFraction(fraction);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth physics spring for boat motion
  const smoothProgress = useSpring(scrollFraction, {
    stiffness: 90,
    damping: 18,
    mass: 0.2
  });

  // Keep spring updated with scrollFraction
  useEffect(() => {
    smoothProgress.set(scrollFraction);
  }, [scrollFraction, smoothProgress]);

  const boatY = useTransform(smoothProgress, [0, 1], [0, TRACK_HEIGHT]);

  const activeWaypoint = WAYPOINTS.find((wp) => wp.id === activeSection) || WAYPOINTS[0];
  const activeIndex = WAYPOINTS.findIndex((wp) => wp.id === activeSection);

  return (
    <>
      {/* DESKTOP TOP COMMAND BAR (hidden md:flex) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 hidden md:block ${
          scrolledPastHero
            ? 'bg-[#040814]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo & Fest Identity */}
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-amber-500/20 border border-cyan-400/40 p-2 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:border-cyan-300 transition-colors">
              <Anchor className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-orbitron font-bold tracking-widest text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-amber-300">
                  AVINYA
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono-tech">
                  '27
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-slate-400 font-mono-tech uppercase">
                IIIT DHARWAD // TECHNO-CULTURAL FEST
              </p>
            </div>
          </button>

          {/* Dynamic Nautical Coordinates HUD */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 font-mono-tech text-xs backdrop-blur-md shadow-inner">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: activeWaypoint.accentColor }}
            />
            <span className="text-slate-400 tracking-wider">NAV //</span>
            <span className="text-slate-200 font-semibold">{activeWaypoint.coords}</span>
            <span className="text-slate-600">|</span>
            <span
              className="font-semibold tracking-wide"
              style={{ color: activeWaypoint.accentColor }}
            >
              {activeWaypoint.sectorTag}
            </span>
          </div>

          {/* Quick-Jump Island Links & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-xs font-mono-tech">
              {WAYPOINTS.map((wp) => {
                const isActive = activeSection === wp.id;
                return (
                  <button
                    key={wp.id}
                    onClick={() => onNavigate(wp.id)}
                    className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white/15 text-white font-semibold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                    style={isActive ? { borderBottom: `2px solid ${wp.accentColor}` } : {}}
                  >
                    <span style={{ color: isActive ? wp.accentColor : 'inherit' }}>
                      {wp.icon}
                    </span>
                    <span>{wp.shortLabel}</span>
                  </button>
                );
              })}
            </nav>

            {/* Search Trigger Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search all fest events"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono-tech"
                title="Search events across all 3 days (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                <span className="hidden xl:inline">Find Events</span>
              </button>
            )}

            {/* Hack2Future Fast-Track Portal */}
            <a
              href="https://hack2future.iiitdwd.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono-tech transition-all shadow-sm group"
            >
              <span>Hack2Future</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* DESKTOP FIXED RIGHT SEA ROUTE PROGRESS TRACKER (hidden md:flex) */}
      <aside
        aria-label="Archipelago Sea Route Progress"
        className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none"
      >
        <div className="relative py-4 px-2.5 rounded-2xl bg-[#040814]/90 border border-cyan-500/20 backdrop-blur-md shadow-2xl flex flex-col items-center">
          {/* Nautical Compass Rose at Top */}
          <div className="mb-2 text-cyan-400/90">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '30s' }} />
          </div>

          <div className="text-[9px] uppercase tracking-widest text-slate-400 font-mono-tech mb-2">
            ROUTE
          </div>

          {/* Vertical Nautical Route Container */}
          <div className="relative w-8 flex justify-center" style={{ height: `${TRACK_HEIGHT}px` }}>
            {/* Background dashed route line */}
            <div className="absolute top-0 bottom-0 w-0.5 border-l border-dashed border-slate-700/60" />

            {/* Glowing illuminated trail that follows the boat as user scrolls */}
            <div
              className="absolute top-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-[#00F5D4] to-amber-400 shadow-[0_0_12px_rgba(0,240,255,0.8)] transition-all duration-75"
              style={{
                height: `${Math.min(scrollFraction * TRACK_HEIGHT, TRACK_HEIGHT)}px`,
                left: 'calc(50% - 2px)'
              }}
            />

            {/* Animated SVG Boat physically sailing down the vertical route */}
            <motion.div
              style={{
                y: boatY,
                top: 0
              }}
              className="absolute -left-1.5 z-30 pointer-events-none"
            >
              <div className="relative p-1.5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.7)]">
                <svg
                  className="w-4 h-4 text-cyan-300 drop-shadow"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 16L12 21L20 16L17 19H7L4 16Z" opacity="0.7" />
                  <path d="M12 2L5 14H19L12 2Z" fill="currentColor" />
                  <path d="M2 17L4 20H20L22 17L12 18L2 17Z" fill="currentColor" />
                </svg>
                {/* Bioluminescent boat wake ripple */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-cyan-400 rounded-full blur-[1px] animate-pulse" />
              </div>
            </motion.div>

            {/* 5 Waypoint Markers */}
            <div className="relative z-10 flex flex-col justify-between h-full py-1">
              {WAYPOINTS.map((wp, index) => {
                const isActive = activeSection === wp.id;
                const isPassed = index <= activeIndex;
                const isHovered = hoveredPoint === wp.id;

                return (
                  <div
                    key={wp.id}
                    className="relative flex items-center justify-center group"
                    onMouseEnter={() => setHoveredPoint(wp.id)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <button
                      onClick={() => onNavigate(wp.id)}
                      aria-label={`Navigate to ${wp.label}`}
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'ring-4 ring-offset-2 ring-offset-slate-950 scale-125 z-20'
                          : isPassed
                          ? 'opacity-90 hover:scale-110'
                          : 'opacity-50 hover:opacity-100 hover:scale-110'
                      }`}
                      style={{
                        backgroundColor: wp.accentColor,
                        boxShadow: isActive
                          ? `0 0 16px ${wp.accentColor}`
                          : isPassed
                          ? `0 0 8px ${wp.accentColor}66`
                          : 'none'
                      }}
                    >
                      <span className="sr-only">{wp.label}</span>
                    </button>

                    {/* Tooltip ONLY visible on hover — eliminates the permanent overlap bug */}
                    {isHovered && (
                      <div className="absolute right-8 py-1.5 px-3 rounded-lg bg-slate-950/95 border border-white/20 text-xs font-mono-tech text-white whitespace-nowrap shadow-2xl pointer-events-none flex items-center gap-2 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: wp.accentColor }}
                        />
                        <span className="text-slate-400">[{index + 1}]</span>
                        <span className="font-bold text-white">{wp.shortLabel}</span>
                        <span className="text-slate-500">—</span>
                        <span className="text-slate-300">{wp.label}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Depth / Altitude Marker */}
          <div className="mt-2 text-[9px] uppercase tracking-wider text-cyan-400/80 font-mono-tech">
            ORBIT
          </div>
        </div>
      </aside>

      {/* MOBILE THUMB-FRIENDLY NAUTICAL DOCK (flex md:hidden - fixed bottom z-50) */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#040814]/95 backdrop-blur-xl border-t border-white/10 px-2 py-1.5 pb-safe shadow-[0_-4px_25px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {WAYPOINTS.map((wp) => {
            const isActive = activeSection === wp.id;
            return (
              <button
                key={wp.id}
                onClick={() => onNavigate(wp.id)}
                className={`flex flex-col items-center justify-center py-1 px-2 min-w-[58px] min-h-[48px] rounded-xl transition-all ${
                  isActive
                    ? 'bg-white/15 text-white scale-105'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                style={isActive ? { borderBottom: `2px solid ${wp.accentColor}` } : {}}
              >
                <div
                  className="p-1 rounded-md"
                  style={{ color: isActive ? wp.accentColor : 'inherit' }}
                >
                  {wp.icon}
                </div>
                <span className="text-[10px] font-mono-tech tracking-tight leading-none mt-0.5">
                  {wp.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
