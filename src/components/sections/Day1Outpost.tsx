import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Clock,
  MapPin,
  Compass,
  Layers,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { EVENTS, FestEvent } from '@/data/events';
import { EventItem } from '@/data/avinyaData';

interface Day1OutpostProps {
  onSelectEvent?: (event: EventItem) => void;
}

export const Day1Outpost: React.FC<Day1OutpostProps> = ({ onSelectEvent }) => {
  const shouldReduceMotion = useReducedMotion();
  const day1Events = EVENTS.filter((e) => e.day === 1);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  const handleCardClick = (event: FestEvent) => {
    if (onSelectEvent) {
      onSelectEvent({
        id: event.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        day: 1,
        title: event.name,
        tagline: event.tagline || 'Official Avinya Arena Event',
        category: 'Technical',
        islandSector: 'SECTOR 01 // ARRAKIS RIM',
        time: event.time,
        date: 'March 12, 2027',
        venue: event.venue,
        prizePool: 'Cash Prizes & Certificates',
        teamSize: 'Teams / Individual',
        description: event.description,
        rules: [
          'Teams must report to venue 15 minutes before scheduled time.',
          'College ID card is mandatory for all participants.',
          'Judges’ and organizers’ decisions are final and binding.',
        ],
        coordinators: [{ name: 'Arena Lead', phone: '+91 98765 43210', role: 'Event Coordinator' }],
        registrationLink: '#',
        iconName: 'Flame',
        themeAccent: '#D9531E',
        clubs: event.clubs,
      });
    }
  };

  return (
    <section id="day1" className="relative isolate min-h-screen py-20 sm:py-28 overflow-hidden bg-[#03070e] text-amber-100">
      {/* Background Artwork Layer (Exact Task 2 Structure) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/day1-outpost.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070e] via-transparent to-[#03070e]" />
      </div>

      {/* Cormorant Garamond Watermark 01 */}
      <div className="absolute top-4 right-4 sm:right-16 font-cormorant italic font-bold text-[8rem] sm:text-[14rem] md:text-[20rem] text-[#D9531E] opacity-10 select-none pointer-events-none leading-none z-0 tracking-tighter">
        01
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Island Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9531E]/20 border border-[#D9531E]/50 text-[#E6C280] font-mono-jb text-[10px] sm:text-xs tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-[#D9531E]" />
              SECTOR 01 // DUNE DESERT REALM
            </span>
            <span className="text-slate-400 text-[10px] sm:text-xs font-mono-jb">
              COORDINATES // 15.4610° N, 75.0120° E
            </span>
            <span className="text-[#E6C280] text-[10px] sm:text-xs font-mono-jb flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D9531E]" />
              MARCH 12, 2027
            </span>
          </div>

          <h2 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase tracking-tight text-white leading-tight">
            DAY 01:{' '}
            <span className="font-cormorant italic font-bold text-[#E6C280] block sm:inline">
              The Last Outpost
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Arrakis desert citadel — scorching sands, razor-sharp algorithm duels, and relentless market volatility.
          </p>
        </div>

        {/* Dune Desert Artifact Cards (Task 5: sand/ochre, sharp geometry) */}
        <div className="space-y-6">
          {day1Events.map((evt, idx) => {
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
                className={`group relative rounded-2xl bg-[#0e0704]/90 border transition-all duration-300 p-5 sm:p-7 backdrop-blur-md cursor-pointer select-none overflow-hidden ${
                  isExpanded
                    ? 'border-[#E6C280] shadow-[0_10px_35px_rgba(217,83,30,0.3)] bg-[#170c06]/95'
                    : 'border-[#D9531E]/40 hover:border-[#E6C280]/80 hover:bg-[#140a05]'
                }`}
              >
                {/* Dune geometric corner wedge */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#D9531E]/20 rotate-45 border-b border-l border-[#D9531E]/40" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    {/* Club Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs font-mono-jb uppercase px-2.5 py-0.5 rounded bg-[#D9531E]/20 text-[#E6C280] border border-[#D9531E]/40 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>DAY 01 ARENA</span>
                      </span>
                      {evt.clubs.map((club) => (
                        <span
                          key={club}
                          className="text-[10px] sm:text-[11px] font-mono-jb text-amber-200/80 px-2.5 py-0.5 rounded bg-black/40 border border-white/10 flex items-center gap-1"
                        >
                          <Layers className="w-3 h-3 text-[#D9531E]" />
                          <span>{club}</span>
                        </span>
                      ))}
                    </div>

                    {/* Event Name */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#E6C280] transition-colors">
                      {evt.name}
                    </h3>

                    {/* Tagline if exists */}
                    {evt.tagline && (
                      <p className="text-xs sm:text-sm text-amber-200/90 font-cormorant italic font-semibold text-base sm:text-lg">
                        "{evt.tagline}"
                      </p>
                    )}
                  </div>

                  {/* Telemetry metadata */}
                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono-jb text-slate-300 shrink-0">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-black/50 border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[#D9531E]" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-black/50 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#E6C280]" />
                      <span>{evt.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Expandable Description on tap or hover */}
                <div
                  className={`mt-4 pt-4 border-t border-[#D9531E]/20 transition-all duration-300 ${
                    isExpanded ? 'block opacity-100' : 'hidden md:group-hover:block opacity-90'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans max-w-3xl">
                    {evt.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono-jb text-[#E6C280] uppercase tracking-wider">
                      Click card to open full event dossier
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(evt);
                      }}
                      className="px-3 py-1 rounded bg-[#D9531E]/25 hover:bg-[#D9531E]/40 text-[#E6C280] border border-[#D9531E]/50 font-mono-jb text-[11px] font-semibold transition-all cursor-pointer"
                    >
                      View Dossier →
                    </button>
                  </div>
                </div>

                {/* Mobile Expand Indicator */}
                <div className="mt-3 flex items-center justify-between md:hidden text-[10px] font-mono-jb text-amber-400/80">
                  <span>{isExpanded ? 'Tap to collapse' : 'Tap to read description'}</span>
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

export default Day1Outpost;
