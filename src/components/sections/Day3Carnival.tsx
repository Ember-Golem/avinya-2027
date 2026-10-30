import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Clock,
  MapPin,
  Sparkles,
  Layers,
  ChevronDown,
  Ticket,
  Terminal,
} from 'lucide-react';
import { EVENTS, FestEvent } from '@/data/events';
import { EventItem } from '@/data/avinyaData';

interface Day3CarnivalProps {
  onSelectEvent?: (event: EventItem) => void;
}

export const Day3Carnival: React.FC<Day3CarnivalProps> = ({ onSelectEvent }) => {
  const shouldReduceMotion = useReducedMotion();
  const day3Events = EVENTS.filter((e) => e.day === 3);
  // TODO: add non-tech events from the Events Data sheet
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  const handleCardClick = (event: FestEvent) => {
    if (onSelectEvent) {
      onSelectEvent({
        id: event.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        day: 3,
        title: event.name,
        tagline: event.tagline || 'Grand Festival Finale',
        category: 'Technical',
        islandSector: 'SECTOR 03 // CELESTIAL HARBOR',
        time: event.time,
        date: 'March 14, 2027',
        venue: event.venue,
        prizePool: 'Merit Swag, Cash & Honors',
        teamSize: 'Open / Teams',
        description: event.description,
        rules: [
          'Bring your own Linux installations or live USBs.',
          'Respect open-source licenses and community guidelines.',
          'Judges’ verdicts are final and celebrated.',
        ],
        coordinators: [{ name: 'Carnival Lead', phone: '+91 98765 43212', role: 'Day 3 Coordinator' }],
        registrationLink: '#',
        iconName: 'Sparkles',
        themeAccent: '#FFB703',
        clubs: event.clubs,
      });
    }
  };

  return (
    <section id="day3" className="relative isolate min-h-screen py-20 sm:py-28 overflow-hidden bg-[#03070e] text-amber-100">
      {/* Background Artwork Layer (Exact Task 2 Structure - Vividly Visible at opacity-60) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/day3-carnival.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070e] via-transparent to-[#03070e]" />
      </div>

      {/* Cormorant Garamond Watermark 03 */}
      <div className="absolute top-4 right-4 sm:right-16 font-cormorant italic font-bold text-[8rem] sm:text-[14rem] md:text-[20rem] text-[#FFB703] opacity-10 select-none pointer-events-none leading-none z-0 tracking-tighter">
        03
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Island Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB703]/20 border border-[#FFB703]/50 text-amber-300 font-mono-jb text-[10px] sm:text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
              SECTOR 03 // CELESTIAL HARBOR CARNIVAL
            </span>
            <span className="text-slate-400 text-[10px] sm:text-xs font-mono-jb">
              COORDINATES // 15.4740° N, 75.0312° E
            </span>
            <span className="text-amber-300 text-[10px] sm:text-xs font-mono-jb flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FFB703]" />
              MARCH 14, 2027
            </span>
          </div>

          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase tracking-tight text-white leading-tight">
            DAY 03:{' '}
            <span className="font-cormorant italic font-bold text-[#FFB703] block sm:inline">
              The Carnival Island
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
            The grand festival day — lantern-lit harbors, open-source Linux revelry, rice showcases, and cultural celebrations.
          </p>
        </div>

        {/* Spacious Featured Treatment for Day 3 Events (Carnival Ticket Stub Design) */}
        <div className="space-y-6">
          {day3Events.map((evt, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={evt.name}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => toggleExpand(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(idx);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                className="group relative rounded-3xl bg-[#0d0a04]/90 border-2 border-[#FFB703]/50 hover:border-[#FFB703] transition-all duration-300 p-6 sm:p-10 backdrop-blur-md cursor-pointer select-none overflow-hidden shadow-2xl shadow-black/80"
              >
                {/* Carnival Perforated Ticket Notch (Left and Right) */}
                <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#03070e] border-r-2 border-[#FFB703]/50" />
                <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#03070e] border-l-2 border-[#FFB703]/50" />

                {/* Golden Festival Radiance */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB703]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3">
                    {/* Badge & Chips */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-mono-jb uppercase px-3 py-1 rounded-full bg-[#FFB703]/25 text-[#FFB703] border border-[#FFB703]/50 font-bold flex items-center gap-1.5">
                        <Ticket className="w-3.5 h-3.5 text-amber-400" />
                        <span>CARNIVAL FEATURED ARENA</span>
                      </span>
                      {evt.clubs.map((club) => (
                        <span
                          key={club}
                          className="text-[10px] sm:text-[11px] font-mono-jb text-amber-200/90 px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10 flex items-center gap-1"
                        >
                          <Layers className="w-3 h-3 text-[#FFB703]" />
                          <span>{club}</span>
                        </span>
                      ))}
                    </div>

                    {/* Headline Title */}
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white group-hover:text-[#FFB703] transition-colors leading-tight">
                      {evt.name}
                    </h3>

                    {evt.tagline && (
                      <p className="text-base sm:text-xl font-cormorant italic font-bold text-amber-200">
                        "{evt.tagline}"
                      </p>
                    )}
                  </div>

                  {/* Telemetry metadata */}
                  <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5 text-xs font-mono-jb text-slate-200 shrink-0">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 border border-white/10">
                      <Clock className="w-4 h-4 text-[#FFB703]" />
                      <span className="font-semibold">{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 border border-white/10">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="font-semibold">{evt.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Expandable Description */}
                <div
                  className={`mt-6 pt-5 border-t border-dashed border-[#FFB703]/30 transition-all duration-300 ${
                    isExpanded ? 'block opacity-100' : 'hidden md:group-hover:block opacity-90'
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans max-w-4xl">
                    {evt.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono-jb text-amber-300">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>LINUX MEETUP · RICE SHOWCASE · HACKATHON</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(evt);
                      }}
                      className="px-4 py-1.5 rounded-xl bg-[#FFB703]/25 hover:bg-[#FFB703]/40 text-[#FFB703] border border-[#FFB703]/60 font-mono-jb text-xs font-bold transition-all cursor-pointer"
                    >
                      Open Event Dossier →
                    </button>
                  </div>
                </div>

                {/* Mobile Expand Indicator */}
                <div className="mt-4 flex items-center justify-between md:hidden text-[10px] font-mono-jb text-amber-400">
                  <span>{isExpanded ? 'Tap to collapse' : 'Tap to read details'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Day3Carnival;
