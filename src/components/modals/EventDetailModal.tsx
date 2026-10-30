import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import {
  MapPin,
  Users,
  Trophy,
  ExternalLink,
  ShieldAlert,
  Phone,
  UserCheck,
  Share2,
  Calendar,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EventItem } from '@/data/avinyaData';

interface EventDetailModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  isOpen,
  onClose
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!event) return null;

  // Dynamic Theme Aesthetics based on which day/island the event belongs to
  const isDay1 = event.day === 1;
  const isDay2 = event.day === 2;

  const getThemeStyles = () => {
    if (isDay1) {
      return {
        accent: '#D9531E',
        secondary: '#E6C280',
        badgeBg: 'bg-[#D9531E]/20 text-[#E6C280] border-[#D9531E]/50',
        modalBorder: 'border-[#D9531E]/50',
        glowBg: 'from-[#D9531E]/15 via-[#1F1108]/90 to-[#0A0503]',
        fontFamily: 'font-cinzel',
        btnGradient: 'bg-gradient-to-r from-[#D9531E] to-[#B03E12] text-white hover:brightness-110'
      };
    }
    if (isDay2) {
      return {
        accent: '#00F5D4',
        secondary: '#FF007F',
        badgeBg: 'bg-[#FF007F]/20 text-[#00F5D4] border-[#00F5D4]/40',
        modalBorder: 'border-[#00F5D4]/50',
        glowBg: 'from-[#7928CA]/20 via-[#0A0314]/95 to-[#020108]',
        fontFamily: 'font-orbitron',
        btnGradient: 'bg-gradient-to-r from-[#FF007F] to-[#7928CA] text-white hover:brightness-110 shadow-[0_0_15px_rgba(255,0,127,0.4)]'
      };
    }
    // Day 3
    return {
      accent: '#FFB703',
      secondary: '#E63946',
      badgeBg: 'bg-[#FFB703]/20 text-[#FFB703] border-[#FFB703]/50',
      modalBorder: 'border-[#FFB703]/50',
      glowBg: 'from-[#031926]/90 via-[#1A0B1A]/95 to-[#060B12]',
      fontFamily: 'font-playfair',
      btnGradient: 'bg-gradient-to-r from-[#FFB703] to-[#E63946] text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/30'
    };
  };

  const theme = getThemeStyles();

  const handleRegisterClick = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: [theme.accent, theme.secondary, '#FFFFFF']
    });

    if (event.registrationLink && event.registrationLink !== '#') {
      window.open(event.registrationLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: `${event.title} | Avinya 2027 IIIT Dharwad`,
        text: `${event.title} - ${event.tagline} at Avinya 2027 (IIIT Dharwad). Prize pool: ${event.prizePool}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={`fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-[calc(100%-1.5rem)] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl bg-gradient-to-b ${theme.glowBg} border ${theme.modalBorder} shadow-2xl backdrop-blur-xl text-slate-100 focus:outline-none`}
      >
        {/* Top Header Banner */}
        <div className="relative p-6 sm:p-8 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded text-xs font-mono-tech tracking-wider uppercase border ${theme.badgeBg}`}
              >
                DAY {event.day} // {event.category}
              </span>
              <span className="text-xs font-mono-tech text-slate-400">
                {event.islandSector}
              </span>
            </div>

            {/* Prize Pool Tag */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 border border-white/10 text-xs font-mono-tech font-bold text-amber-300">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>PRIZE: {event.prizePool}</span>
            </div>
          </div>

          <DialogTitle
            className={`text-2xl sm:text-3xl font-black ${theme.fontFamily} tracking-wide text-white leading-tight mb-2`}
          >
            {event.title}
          </DialogTitle>

          <DialogDescription className="text-sm font-mono-tech text-slate-300 italic">
            "{event.tagline}"
          </DialogDescription>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Logistics Telemetry Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-black/50 border border-white/10 font-mono-tech text-xs">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Date & Time</span>
                <span className="text-white font-medium">{event.date}</span>
                <span className="text-slate-400 block text-[11px]">{event.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Arena / Venue</span>
                <span className="text-white font-medium">{event.venue}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Formation</span>
                <span className="text-white font-medium">{event.teamSize}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative & Briefing */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" style={{ color: theme.accent }} />
              MISSION BRIEFING & EXPEDITION LORE
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/5 font-sans">
              {event.description}
            </p>
          </div>

          {/* Rules & Guidelines */}
          <div>
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              ENGAGEMENT RULES & PROTOCOLS
            </h4>
            <ul className="space-y-2 bg-black/30 p-4 rounded-xl border border-white/5">
              {event.rules.map((rule, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-300 font-mono-tech leading-relaxed"
                >
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                    style={{ backgroundColor: `${theme.accent}30`, color: theme.accent }}
                  >
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Coordinators Card */}
          {event.coordinators && event.coordinators.length > 0 && (
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                EXPEDITION COORDINATORS & CONTACTS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.coordinators.map((coord, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono-tech"
                  >
                    <div>
                      <div className="text-white font-bold">{coord.name}</div>
                      <div className="text-slate-400 text-[11px]">{coord.role || 'Coordinator'}</div>
                    </div>
                    <a
                      href={`tel:${coord.phone.replace(/[^0-9+]/g, '')}`}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-cyan-300 transition-colors flex items-center gap-1 text-[11px]"
                      title="Call Coordinator"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{coord.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 sm:p-8 pt-4 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleShareClick}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-slate-300 transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Event'}</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>

            <button
              onClick={handleRegisterClick}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-mono-tech font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${theme.btnGradient}`}
            >
              <span>REGISTER DOSSIER</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
