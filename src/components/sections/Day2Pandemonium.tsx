import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowRight,
  Filter,
  Terminal,
  Radio
} from 'lucide-react';
import { EventItem, EventCategory, islandDaysData } from '@/data/avinyaData';

interface Day2PandemoniumProps {
  onSelectEvent: (event: EventItem) => void;
}

const CATEGORIES: ('All' | EventCategory)[] = [
  'All',
  'Technical',
  'Cultural',
  'Gaming',
  'Workshop'
];

export const Day2Pandemonium: React.FC<Day2PandemoniumProps> = ({ onSelectEvent }) => {
  const day2Data = islandDaysData[1];
  const [activeCategory, setActiveCategory] = useState<'All' | EventCategory>('All');

  const filteredEvents = activeCategory === 'All'
    ? day2Data.events
    : day2Data.events.filter((e) => e.category === activeCategory);

  return (
    <section
      id="day2"
      className="relative min-h-screen py-20 md:py-28 text-white overflow-hidden bg-[#070314]"
    >
      {/* Background Banner with Reduced Dark Overlay so artwork is clearly visible */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: `url('/images/day2-pandemonium.png')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Cyber Neon Gradient Overlays with Top/Bottom Feathering */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#12071F] via-transparent to-[#021820] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,127,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#7928CA]/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00F5D4]/15 blur-3xl pointer-events-none rounded-full" />

      {/* Subtle Scanline Texture */}
      <div className="absolute inset-0 z-0 scanlines-overlay opacity-25 pointer-events-none" />

      {/* Receding Perspective Synthwave Grid at Bottom */}
      <div className="absolute bottom-0 inset-x-0 h-48 z-0 perspective-grid opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* PANORAMIC ISLAND ARRIVAL SHOWCASE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full rounded-2xl overflow-hidden border-2 border-[#FF007F]/60 hover:border-[#00F5D4] mb-12 shadow-[0_0_30px_rgba(255,0,127,0.25)] group bg-[#0A0418] transition-colors duration-500"
        >
          <div className="relative aspect-[21/9] sm:aspect-[24/9] md:h-72 w-full overflow-hidden">
            <img
              src="/images/day2-pandemonium.png"
              alt="Day 2 The Pandemonium — Neo-Dharwad Cyber Island Panoramic Artwork"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Cinematic Cyberpunk overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070314] via-black/20 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070314]/80 via-transparent to-transparent" />

            {/* Top Telemetry Header */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between flex-wrap gap-2 text-[10px] sm:text-xs font-mono-tech">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/85 border border-[#FF007F]/60 text-[#FF007F] backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
                <span>⚓ EXPEDITION BOAT DOCKED // SECTOR 02: NEON PANDEMONIUM</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-white/10 text-cyan-200 backdrop-blur-md">
                <Radio className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span>ATMOSPHERE: 19°C SYNTH RAIN</span>
                <span className="text-slate-600">|</span>
                <span>GRID LOAD: 1.21 GW</span>
                <span className="text-slate-600">|</span>
                <span className="text-[#00F5D4]">OPTICAL FIBER: 0.8ms</span>
              </span>
            </div>

            {/* Bottom Showcase Caption */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between flex-wrap gap-3">
              <div>
                <span className="text-[10px] uppercase font-mono-tech tracking-widest text-[#00F5D4] block mb-0.5">
                  CYBER TELEMETRY FEED
                </span>
                <h3 className="text-xl sm:text-3xl font-black font-orbitron text-white drop-shadow-md">
                  THE PANDEMONIUM // NEO-DHARWAD CYBER SPRAWL
                </h3>
                <p className="text-xs text-slate-300 font-mono-tech max-w-xl hidden md:block">
                  High-frequency neon pulses ignite the night. Code meets rhythm in an overclocked techno-frenzy.
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-black/80 border border-[#00F5D4]/50 text-xs font-mono-tech text-[#00F5D4] shadow-md backdrop-blur-sm">
                NAV: 15.4695° N, 75.0234° E
              </div>
            </div>
          </div>
        </motion.div>

        {/* Island Header & Cyber Telemetry */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FF007F]/20 border border-[#FF007F]/60 text-[#FF007F] font-mono-tech text-xs tracking-widest uppercase shadow-[0_0_10px_rgba(255,0,127,0.3)]">
              <Zap className="w-3.5 h-3.5 text-[#FF007F] animate-pulse" />
              {day2Data.sectorCode}
            </span>
            <span className="text-[#00F5D4] text-xs font-mono-tech">
              FREQ // 142.800 MHz
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400 text-xs font-mono-tech">
              NAV // {day2Data.coordinates}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-fuchsia-300 font-mono-tech">
              <Clock className="w-3.5 h-3.5 text-[#00F5D4]" />
              {day2Data.date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-orbitron text-white tracking-wider uppercase leading-tight">
                DAY 02:{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007F] via-[#B800FF] to-[#00F5D4] drop-shadow-[0_0_20px_rgba(255,0,127,0.4)]">
                  {day2Data.title}
                </span>
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
                {day2Data.lore}
              </p>
            </div>

            {/* Cyber Terminal Status Monitor */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-4 rounded-xl bg-black/75 border border-[#00F5D4]/40 backdrop-blur-md shadow-lg shadow-[#00F5D4]/10 max-w-sm w-full font-mono-tech text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                  <div className="flex items-center gap-2 text-[#00F5D4]">
                    <Terminal className="w-4 h-4 text-[#FF007F]" />
                    <span>SYS.TELEMETRY</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#00F5D4]/20 text-[#00F5D4]">
                    OVERCLOCKED
                  </span>
                </div>
                <div className="space-y-1 text-slate-300 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500">GRID VOLTAGE:</span>
                    <span className="text-cyan-300">1.21 GW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">PACKET BUFFER:</span>
                    <span className="text-[#FF007F]">0% LOSS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">LATENCY:</span>
                    <span className="text-emerald-400">1.4ms FIBER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cyberpunk Category Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
            <span className="text-xs text-slate-400 font-mono-tech flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#00F5D4]" />
              NETWORKS:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF007F] to-[#7928CA] text-white font-bold shadow-lg shadow-[#FF007F]/40 border border-[#00F5D4]'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-400 font-mono-tech">
            STREAMING: <span className="text-[#00F5D4] font-bold">{filteredEvents.length}</span> CYBER ARENAS
          </div>
        </div>

        {/* Day 2 Event Cards Grid with Neon Borders & Glitch Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-6 bg-slate-950/85 hover:bg-slate-900/90 border border-[#FF007F]/30 hover:border-[#00F5D4] rounded-xl transition-all duration-300 shadow-xl shadow-black/80 hover:shadow-[0_0_25px_rgba(0,245,212,0.25)] hover:-translate-y-1"
            >
              {/* Corner Glitch Marker */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-tr-xl pointer-events-none">
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#00F5D4] transform rotate-45 translate-x-1.5 -translate-y-1.5" />
              </div>

              <div>
                {/* Header: Category & Prize Pool */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#FF007F]/20 text-[#FF007F] border border-[#FF007F]/50">
                    {event.category}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-mono-tech font-bold text-[#00F5D4] bg-black/60 px-2.5 py-0.5 rounded border border-[#00F5D4]/30 shadow-inner">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>{event.prizePool}</span>
                  </div>
                </div>

                {/* Event Title with Orbitron Font */}
                <h3 className="text-lg sm:text-xl font-bold font-orbitron text-white group-hover:text-[#00F5D4] transition-colors leading-snug mb-2">
                  {event.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-300/80 mb-4 font-mono-tech line-clamp-2">
                  // {event.tagline}
                </p>

                {/* Telemetry Info */}
                <div className="space-y-2 text-xs font-mono-tech text-slate-300 bg-black/50 p-3 rounded-lg border border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#FF007F] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Squad: {event.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Action: Access Terminal Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono-tech text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE ENTRY
                </span>
                <button
                  onClick={() => onSelectEvent(event)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gradient-to-r from-[#FF007F]/20 to-[#7928CA]/20 hover:from-[#FF007F] hover:to-[#7928CA] text-cyan-200 hover:text-white border border-[#FF007F]/40 hover:border-[#00F5D4] text-xs font-mono-tech font-bold transition-all shadow-sm"
                >
                  <span>ACCESS TERMINAL</span>
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
