import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowRight,
  Filter,
  Shield,
  Compass,
  Wind
} from 'lucide-react';
import { EventItem, EventCategory, islandDaysData } from '@/data/avinyaData';

interface Day1OutpostProps {
  onSelectEvent: (event: EventItem) => void;
}

const CATEGORIES: ('All' | EventCategory)[] = [
  'All',
  'Technical',
  'Cultural',
  'Gaming',
  'Workshop'
];

export const Day1Outpost: React.FC<Day1OutpostProps> = ({ onSelectEvent }) => {
  const day1Data = islandDaysData[0];
  const [activeCategory, setActiveCategory] = useState<'All' | EventCategory>('All');

  const filteredEvents = activeCategory === 'All'
    ? day1Data.events
    : day1Data.events.filter((e) => e.category === activeCategory);

  return (
    <section
      id="day1"
      className="relative min-h-screen py-20 md:py-28 text-amber-100 overflow-hidden"
      style={{
        backgroundColor: '#0E0806'
      }}
    >
      {/* Parallax Background Banner with Reduced Dark Overlay so artwork is clearly visible */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: `url('/images/day1-outpost.png')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Top & Bottom Gradient Feathering into Neighboring Worlds */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#040814] via-transparent to-[#12071F] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-black/60 pointer-events-none" />

      {/* Floating Dune Dust Motes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-amber-400/40 blur-[1px] animate-pulse" />
        <div className="absolute top-1/2 right-20 w-1.5 h-1.5 rounded-full bg-orange-400/50 blur-[1px] animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-amber-300/30 blur-[1px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-orange-500/25 blur-[2px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* PANORAMIC ISLAND ARRIVAL SHOWCASE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full rounded-2xl overflow-hidden border border-[#D9531E]/50 mb-12 shadow-2xl group chamfer-lg bg-[#140B07]"
        >
          <div className="relative aspect-[21/9] sm:aspect-[24/9] md:h-72 w-full overflow-hidden">
            <img
              src="/images/day1-outpost.png"
              alt="Day 1 The Last Outpost — Arrakis Sector Panoramic Artwork"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Cinematic vignette overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0806] via-black/20 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E0806]/80 via-transparent to-transparent" />

            {/* Top Telemetry Header */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between flex-wrap gap-2 text-[10px] sm:text-xs font-mono-tech">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/85 border border-[#D9531E]/60 text-[#E6C280] backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#D9531E] animate-ping" />
                <span>⚓ EXPEDITION BOAT DOCKED // SECTOR 01: ARRAKIS RIM</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 border border-white/10 text-amber-200/90 backdrop-blur-md">
                <Wind className="w-3.5 h-3.5 text-[#D9531E]" />
                <span>ATMOSPHERE: 44°C SOLAR STORMS</span>
                <span className="text-slate-600">|</span>
                <span>WINDS: 38 KT ESE</span>
                <span className="text-slate-600">|</span>
                <span className="text-amber-400">SPICE DUST: HIGH</span>
              </span>
            </div>

            {/* Bottom Showcase Caption */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between flex-wrap gap-3">
              <div>
                <span className="text-[10px] uppercase font-mono-tech tracking-widest text-[#D9531E] block mb-0.5">
                  ISLAND ARRIVAL TELEMETRY
                </span>
                <h3 className="text-xl sm:text-3xl font-black font-cinzel text-white drop-shadow-md">
                  THE LAST OUTPOST // ARRAKIS DESERT CITADEL
                </h3>
                <p className="text-xs text-amber-100/90 font-serif max-w-xl hidden md:block">
                  Ancient computational bastions rising from the spice sands. Only the sharpest logic survives the sandstorm.
                </p>
              </div>
              <div className="px-3 py-1.5 rounded bg-[#1F1108]/90 border border-[#E6C280]/40 text-xs font-mono-tech text-[#E6C280] shadow-md backdrop-blur-sm">
                NAV: 15.4610° N, 75.0120° E
              </div>
            </div>
          </div>
        </motion.div>

        {/* Island Header & Sector Telemetry */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#D9531E]/20 border border-[#D9531E]/50 text-[#E6C280] font-mono-tech text-xs tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-[#D9531E]" />
              {day1Data.sectorCode}
            </span>
            <span className="text-slate-400 text-xs font-mono-tech">
              NAV // {day1Data.coordinates}
            </span>
            <span className="hidden sm:inline text-amber-500/40">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-[#E6C280] font-mono-tech">
              <Clock className="w-3.5 h-3.5 text-[#D9531E]" />
              {day1Data.date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-cinzel text-white tracking-wide uppercase leading-tight">
                DAY 01:{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E6C280] via-[#D9531E] to-amber-200">
                  {day1Data.title}
                </span>
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
                {day1Data.lore}
              </p>
            </div>

            {/* Arrakis Lore Monolith Badge */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-4 rounded-lg bg-[#1F1108]/90 border border-[#D9531E]/40 backdrop-blur-md shadow-lg max-w-sm">
                <div className="flex items-center gap-2 text-[#E6C280] text-xs font-mono-tech uppercase mb-1">
                  <Shield className="w-4 h-4 text-[#D9531E]" />
                  <span>SECTOR DIRECTIVE</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic font-serif">
                  "He who controls the spice-code controls the archipelago. Sharpen your logic
                  before the sandstorm breaches your defenses."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Chamfered Desert Aesthetic) */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-[#D9531E]/20">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
            <span className="text-xs text-slate-400 font-mono-tech flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#D9531E]" />
              SECTORS:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D9531E] to-[#B03E12] text-white font-bold shadow-md shadow-[#D9531E]/30 border border-[#E6C280]/40'
                      : 'bg-[#1F1108]/70 text-[#E6C280]/80 hover:text-white hover:bg-[#1F1108] border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-400 font-mono-tech">
            DISPLAYING: <span className="text-[#E6C280] font-bold">{filteredEvents.length}</span> EXPEDITION ARENAS
          </div>
        </div>

        {/* Day 1 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-6 bg-[#160D08]/90 hover:bg-[#1E110A] border border-[#D9531E]/30 hover:border-[#E6C280]/70 chamfer-md transition-all duration-300 shadow-xl shadow-black/60 hover:-translate-y-1"
            >
              {/* Subtle Spice Glow on Card Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9531E]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D9531E]/20 transition-colors" />

              <div>
                {/* Header: Category & Prize Pool */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#D9531E]/20 text-[#E6C280] border border-[#D9531E]/40">
                    {event.category}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-mono-tech font-bold text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-amber-500/20">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>{event.prizePool}</span>
                  </div>
                </div>

                {/* Event Title with Cinzel Font */}
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white group-hover:text-[#E6C280] transition-colors leading-snug mb-2">
                  {event.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-amber-200/70 italic mb-4 font-serif line-clamp-2">
                  "{event.tagline}"
                </p>

                {/* Telemetry Info: Time, Venue, Team Size */}
                <div className="space-y-2 text-xs font-mono-tech text-slate-300 bg-black/30 p-3 rounded border border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#D9531E] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E6C280] shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Crew: {event.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Action: View Dossier Button */}
              <div className="pt-2 border-t border-[#D9531E]/20 flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-slate-400 uppercase">
                  STATUS: <span className="text-emerald-400">OPEN</span>
                </span>
                <button
                  onClick={() => onSelectEvent(event)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#D9531E]/20 hover:bg-[#D9531E] text-[#E6C280] hover:text-white border border-[#D9531E]/40 text-xs font-mono-tech font-bold transition-all group-hover:border-[#E6C280]"
                >
                  <span>VIEW DOSSIER</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
