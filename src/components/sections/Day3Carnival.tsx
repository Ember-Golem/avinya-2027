import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Clock,
  MapPin,
  Users,
  Trophy,
  ArrowRight,
  Filter,
  Crown,
  Music,
  PartyPopper
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EventItem, EventCategory, islandDaysData } from '@/data/avinyaData';

interface Day3CarnivalProps {
  onSelectEvent: (event: EventItem) => void;
}

const CATEGORIES: ('All' | EventCategory)[] = [
  'All',
  'Cultural',
  'Technical',
  'Gaming',
  'Flagship'
];

export const Day3Carnival: React.FC<Day3CarnivalProps> = ({ onSelectEvent }) => {
  const day3Data = islandDaysData[2];
  const [activeCategory, setActiveCategory] = useState<'All' | EventCategory>('All');

  const filteredEvents = activeCategory === 'All'
    ? day3Data.events
    : day3Data.events.filter((e) => e.category === activeCategory);

  const proShowEvent = day3Data.events.find((e) => e.id === 'avinya-pro-show-night');

  const triggerFestivalConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FFB703', '#E63946', '#023047', '#FFD166', '#00F0FF']
    });
  };

  return (
    <section
      id="day3"
      className="relative min-h-screen py-20 md:py-28 text-amber-50 overflow-hidden bg-[#021826]"
    >
      {/* Background Banner with Carnival & Harbor Blend */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-35 transition-opacity duration-700"
        style={{
          backgroundImage: `url('/images/day3-carnival.png')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Midnight Harbor Teal & Lantern Gold Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#021820] via-[#031E2E]/90 to-[#020308] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-black/70 pointer-events-none" />

      {/* Warm Bokeh / Floating Lantern Glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#FFB703]/15 blur-3xl rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-[#E63946]/15 blur-3xl rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Island Header & Celestial Harbor Telemetry */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB703]/20 border border-[#FFB703]/60 text-[#FFB703] font-mono-tech text-xs tracking-widest uppercase shadow-[0_0_12px_rgba(255,183,3,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
              {day3Data.sectorCode}
            </span>
            <span className="text-slate-300 text-xs font-mono-tech">
              NAV // {day3Data.coordinates}
            </span>
            <span className="hidden sm:inline text-amber-400/40">•</span>
            <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-mono-tech">
              <Clock className="w-3.5 h-3.5 text-[#E63946]" />
              {day3Data.date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-playfair text-white tracking-wide leading-tight">
                DAY 03:{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB703] via-amber-200 to-[#E63946]">
                  {day3Data.title}
                </span>
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
                {day3Data.lore}
              </p>
            </div>

            {/* Carnival Festival Lore Tag */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-4 rounded-xl bg-[#031926]/90 border border-[#FFB703]/40 backdrop-blur-md shadow-xl shadow-amber-950/20 max-w-sm">
                <div className="flex items-center gap-2 text-[#FFB703] text-xs font-mono-tech uppercase mb-1">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span>HARBOR JUBILEE</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic font-serif">
                  "Let the harbor waters mirror the pyrotechnics. On the final night, we crown the
                  champions of the archipelago and dance under the lantern constellation."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SPOTLIGHT HERO CARD: AVINYA PRO-SHOW & CULTURAL NIGHT */}
        {proShowEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 rounded-2xl bg-gradient-to-r from-[#031926] via-[#1A0B1A] to-[#250810] border-2 border-[#FFB703]/60 p-6 md:p-8 shadow-2xl relative overflow-hidden group"
          >
            {/* Golden Marquee Dot Perimeter */}
            <div className="absolute top-2 left-4 right-4 flex justify-between pointer-events-none opacity-40">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#FFB703]" />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB703]/20 border border-[#FFB703]/50 text-[#FFB703] font-mono-tech text-xs uppercase mb-3">
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  <span>FESTIVAL HEADLINE ATTRACTION</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold font-playfair text-white mb-2 leading-tight">
                  {proShowEvent.title}
                </h3>
                <p className="text-sm md:text-base text-amber-100/80 mb-4 max-w-2xl font-serif">
                  {proShowEvent.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-slate-300 mb-4">
                  <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#FFB703]" />
                    <span>{proShowEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
                    <span>{proShowEvent.venue}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    <Users className="w-3.5 h-3.5 text-amber-300" />
                    <span>Entry: Free with Fest Delegate Badge</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={triggerFestivalConfetti}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#FFB703] to-[#E63946] text-slate-950 font-bold font-mono-tech text-sm tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <PartyPopper className="w-4 h-4 text-slate-950" />
                  <span>CELEBRATE PRO-SHOW</span>
                </button>

                <button
                  onClick={() => onSelectEvent(proShowEvent)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-[#FFB703]/40 font-mono-tech text-sm tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Music className="w-4 h-4 text-[#FFB703]" />
                  <span>VIEW FULL DETAILS</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter Pills (Playfair Festive Styling) */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto">
            <span className="text-xs text-slate-400 font-mono-tech flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#FFB703]" />
              FESTIVAL ARENAS:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FFB703] to-[#E63946] text-slate-950 font-bold shadow-lg shadow-amber-500/30'
                      : 'bg-[#031926]/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-400 font-mono-tech">
            SCHEDULE: <span className="text-[#FFB703] font-bold">{filteredEvents.length}</span> CELESTIAL ARENAS
          </div>
        </div>

        {/* Day 3 Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-6 bg-[#031A28]/85 hover:bg-[#052336] border border-[#FFB703]/30 hover:border-[#FFB703] rounded-2xl transition-all duration-300 shadow-xl shadow-black/60 hover:-translate-y-1"
            >
              <div>
                {/* Header: Category & Prize Pool */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFB703]/20 text-[#FFB703] border border-[#FFB703]/40">
                    {event.category}
                  </span>

                  <div className="flex items-center gap-1 text-xs font-mono-tech font-bold text-amber-300 bg-black/50 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    <span>{event.prizePool}</span>
                  </div>
                </div>

                {/* Event Title with Playfair Display */}
                <h3 className="text-xl sm:text-2xl font-bold font-playfair text-white group-hover:text-[#FFB703] transition-colors leading-snug mb-2">
                  {event.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-300 font-serif italic mb-4 line-clamp-2">
                  "{event.tagline}"
                </p>

                {/* Telemetry Info */}
                <div className="space-y-2 text-xs font-mono-tech text-slate-300 bg-black/40 p-3 rounded-xl border border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#FFB703] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E63946] shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Delegates: {event.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Action: View Dossier */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-slate-400 uppercase">
                  STATUS: <span className="text-[#FFB703]">ACTIVE GALA</span>
                </span>
                <button
                  onClick={() => onSelectEvent(event)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FFB703]/20 hover:bg-[#FFB703] text-[#FFB703] hover:text-slate-950 border border-[#FFB703]/40 text-xs font-mono-tech font-bold transition-all shadow-sm"
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
