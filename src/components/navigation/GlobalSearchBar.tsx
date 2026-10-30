import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, ArrowRight, Filter } from 'lucide-react';
import { allEventsList, EventItem } from '@/data/avinyaData';

interface GlobalSearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEvent: (event: EventItem) => void;
}

export const GlobalSearchBar: React.FC<GlobalSearchBarProps> = ({
  isOpen,
  onClose,
  onSelectEvent
}) => {
  const [query, setQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    let list = allEventsList;
    if (selectedDay !== 'all') {
      list = list.filter((e) => e.day === selectedDay);
    }
    if (!query.trim()) {
      return list;
    }
    const q = query.toLowerCase();
    return list.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.tagline.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.islandSector.toLowerCase().includes(q)
    );
  }, [query, selectedDay]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md animate-in fade-in-0 duration-200">
      <div className="w-full max-w-2xl bg-[#090D1A] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Header */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across all 3 days (e.g. AI, Rover, CTF, Band, Valorant, Pro-Show)..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-slate-500 focus:outline-none font-mono-tech"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-mono-tech"
          >
            ESC
          </button>
        </div>

        {/* Day Filter Pills */}
        <div className="p-3 bg-black/40 border-b border-white/5 flex items-center justify-between flex-wrap gap-2 text-xs font-mono-tech">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              Day:
            </span>
            <button
              onClick={() => setSelectedDay('all')}
              className={`px-2.5 py-1 rounded ${
                selectedDay === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Days (3)
            </button>
            <button
              onClick={() => setSelectedDay(1)}
              className={`px-2.5 py-1 rounded ${
                selectedDay === 1
                  ? 'bg-[#D9531E]/20 text-[#E6C280] border border-[#D9531E]/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Day 1 (Outpost)
            </button>
            <button
              onClick={() => setSelectedDay(2)}
              className={`px-2.5 py-1 rounded ${
                selectedDay === 2
                  ? 'bg-[#FF007F]/20 text-[#00F5D4] border border-[#00F5D4]/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Day 2 (Pandemonium)
            </button>
            <button
              onClick={() => setSelectedDay(3)}
              className={`px-2.5 py-1 rounded ${
                selectedDay === 3
                  ? 'bg-[#FFB703]/20 text-[#FFB703] border border-[#FFB703]/40 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Day 3 (Carnival)
            </button>
          </div>

          <span className="text-slate-500">
            {results.length} events found
          </span>
        </div>

        {/* Scrollable Results List */}
        <div className="overflow-y-auto p-3 space-y-2 max-h-[60vh]">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-500 font-mono-tech text-sm">
              No expedition arenas found matching "{query}".
            </div>
          ) : (
            results.map((event) => (
              <div
                key={event.id}
                onClick={() => {
                  onSelectEvent(event);
                  onClose();
                }}
                className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 hover:border-cyan-400/50 transition-all cursor-pointer flex items-center justify-between gap-4 group"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono-tech uppercase font-semibold ${
                        event.day === 1
                          ? 'bg-[#D9531E]/20 text-[#E6C280]'
                          : event.day === 2
                          ? 'bg-[#FF007F]/20 text-[#00F5D4]'
                          : 'bg-[#FFB703]/20 text-[#FFB703]'
                      }`}
                    >
                      Day {event.day} // {event.category}
                    </span>
                    <span className="text-xs font-mono-tech text-amber-300 font-bold">
                      {event.prizePool}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {event.title}
                  </h4>
                  <p className="text-xs text-slate-400 truncate font-mono-tech mt-0.5">
                    {event.venue} • {event.time}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono-tech text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <span>View Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
