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
  ExternalLink,
  ShieldAlert,
  Phone,
  UserCheck,
  Share2,
  Calendar,
  Sparkles,
  Ticket,
  CheckCircle2,
  Copy,
  Download,
  ArrowLeft,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EventItem } from '@/data/avinyaData';

interface EventDetailModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

type ModalTab = 'dossier' | 'register' | 'ticket';

interface RegistrationData {
  teamName: string;
  leaderEmail: string;
  collegeName: string;
  phone: string;
  ticketId: string;
  timestamp: string;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  isOpen,
  onClose
}) => {
  const [currentTab, setCurrentTab] = useState<ModalTab>('dossier');
  const [prevEventId, setPrevEventId] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTicket, setCopiedTicket] = useState(false);

  // Form State for In-Modal Quick Registration
  const [teamName, setTeamName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState('');

  // Generated Boarding Pass Data
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);

  // Synchronize state when selected event changes without cascading effect
  if (event && event.id !== prevEventId) {
    setPrevEventId(event.id);
    setCurrentTab('dossier');
    setFormError('');
  }

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
        modalBorder: 'border-[#D9531E]/60 shadow-[0_0_30px_rgba(217,83,30,0.25)]',
        glowBg: 'from-[#D9531E]/15 via-[#160B07]/95 to-[#0A0503]',
        fontFamily: 'font-cinzel',
        btnGradient: 'bg-gradient-to-r from-[#D9531E] to-[#B03E12] text-white hover:brightness-110 shadow-lg shadow-[#D9531E]/30',
        sectorName: 'ARRAKIS RIM'
      };
    }
    if (isDay2) {
      return {
        accent: '#00F5D4',
        secondary: '#FF007F',
        badgeBg: 'bg-[#FF007F]/20 text-[#00F5D4] border-[#00F5D4]/40',
        modalBorder: 'border-[#00F5D4]/60 shadow-[0_0_30px_rgba(0,245,212,0.25)]',
        glowBg: 'from-[#7928CA]/20 via-[#090314]/95 to-[#020108]',
        fontFamily: 'font-orbitron',
        btnGradient: 'bg-gradient-to-r from-[#FF007F] to-[#7928CA] text-white hover:brightness-110 shadow-[0_0_20px_rgba(255,0,127,0.4)]',
        sectorName: 'NEON GRID'
      };
    }
    // Day 3
    return {
      accent: '#FFB703',
      secondary: '#E63946',
      badgeBg: 'bg-[#FFB703]/20 text-[#FFB703] border-[#FFB703]/50',
      modalBorder: 'border-[#FFB703]/60 shadow-[0_0_30px_rgba(255,183,3,0.25)]',
      glowBg: 'from-[#031926]/90 via-[#180914]/95 to-[#050912]',
      fontFamily: 'font-playfair',
      btnGradient: 'bg-gradient-to-r from-[#FFB703] to-[#E63946] text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/30',
      sectorName: 'CELESTIAL HARBOR'
    };
  };

  const theme = getThemeStyles();

  // Handle Form Submission -> Confetti + Generate Boarding Pass Ticket
  const handleConfirmRegistration = (e: React.FormEvent) => {
    e.preventDefault();

    if (!teamName.trim() || !leaderEmail.trim()) {
      setFormError('Please provide your Team/Sailor name and Leader email.');
      return;
    }

    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newTicketId = `AVINYA-27-DAY${event.day}-${randomSuffix}`;

    const newRegData: RegistrationData = {
      teamName: teamName.trim(),
      leaderEmail: leaderEmail.trim(),
      collegeName: collegeName.trim() || 'IIIT Dharwad Delegate',
      phone: phone.trim() || 'Not Provided',
      ticketId: newTicketId,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    setRegistrationData(newRegData);
    setFormError('');
    setCurrentTab('ticket');

    // Trigger celebratory confetti burst!
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: [theme.accent, theme.secondary, '#00F0FF', '#FFB703', '#FFFFFF']
    });
  };

  const handleCopyTicketId = () => {
    if (registrationData) {
      navigator.clipboard.writeText(registrationData.ticketId);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2000);
    }
  };

  const handleDownloadBoardingPass = () => {
    if (!registrationData) return;

    const passContent = `=====================================================
AVINYA 2027 // OFFICIAL EXPEDITION BOARDING PASS
INDIAN INSTITUTE OF INFORMATION TECHNOLOGY DHARWAD
=====================================================
TICKET ID      : ${registrationData.ticketId}
EVENT          : ${event.title}
DAY & SECTOR   : Day ${event.day} // ${event.islandSector} (${theme.sectorName})
DATE & TIME    : ${event.date} | ${event.time}
ARENA / VENUE  : ${event.venue}
PRIZE POOL     : ${event.prizePool}
TEAM / CREW    : ${registrationData.teamName}
LEADER EMAIL   : ${registrationData.leaderEmail}
COLLEGE        : ${registrationData.collegeName}
PHONE / WA     : ${registrationData.phone}
TIMESTAMP      : ${registrationData.timestamp}
=====================================================
STATUS: EXPEDITION SLOT CONFIRMED • PASS VALID
Present this ticket at the Arena Registration Desk.
Official Portal: https://hack2future.iiitdwd.ac.in/
=====================================================`;

    const blob = new Blob([passContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${registrationData.ticketId}-${event.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
        className={`fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-[calc(100%-1.5rem)] sm:max-w-2xl max-h-[92vh] overflow-y-auto p-0 rounded-2xl bg-gradient-to-b ${theme.glowBg} border ${theme.modalBorder} shadow-2xl backdrop-blur-xl text-slate-100 focus:outline-none`}
      >
        {/* Top Header Banner & Navigation Tabs */}
        <div className="relative p-5 sm:p-7 pb-3 border-b border-white/10">
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

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-white/10 text-xs font-mono-tech">
              <button
                onClick={() => setCurrentTab('dossier')}
                className={`px-3 py-1 rounded transition-all ${
                  currentTab === 'dossier'
                    ? 'bg-white/20 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Briefing
              </button>
              <button
                onClick={() => setCurrentTab('register')}
                className={`px-3 py-1 rounded transition-all ${
                  currentTab === 'register'
                    ? 'bg-white/20 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Quick Register
              </button>
              {registrationData && (
                <button
                  onClick={() => setCurrentTab('ticket')}
                  className={`px-3 py-1 rounded transition-all ${
                    currentTab === 'ticket'
                      ? 'bg-white/20 text-emerald-300 font-bold'
                      : 'text-emerald-400 hover:text-emerald-200'
                  }`}
                >
                  Boarding Pass
                </button>
              )}
            </div>
          </div>

          <DialogTitle
            className={`text-2xl sm:text-3xl font-black ${theme.fontFamily} tracking-wide text-white leading-tight mb-1`}
          >
            {event.title}
          </DialogTitle>

          <DialogDescription className="text-sm font-mono-tech text-slate-300 italic">
            "{event.tagline}"
          </DialogDescription>
        </div>

        {/* TAB 1: EVENT DOSSIER (Full Briefing, Rules, Coordinators) */}
        {currentTab === 'dossier' && (
          <div className="p-5 sm:p-7 space-y-6">
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
              <p className="text-sm text-slate-200 leading-relaxed bg-black/35 p-4 rounded-xl border border-white/5 font-sans">
                {event.description}
              </p>
            </div>

            {/* Rules & Guidelines */}
            <div>
              <h4 className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                ENGAGEMENT RULES & PROTOCOLS
              </h4>
              <ul className="space-y-2 bg-black/35 p-4 rounded-xl border border-white/5">
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
                      className="p-3 rounded-xl bg-black/45 border border-white/10 flex items-center justify-between text-xs font-mono-tech"
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
        )}

        {/* TAB 2: QUICK IN-MODAL REGISTRATION FORM */}
        {currentTab === 'register' && (
          <div className="p-5 sm:p-7 space-y-6">
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono-tech flex items-start gap-3">
              <Ticket className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">DIRECT EXPEDITION ENTRY</span>
                <span className="text-slate-400 text-[11px]">
                  Register your squad to secure an official Avinya 2027 Arena Boarding Pass with verified slot ID.
                </span>
              </div>
            </div>

            <form onSubmit={handleConfirmRegistration} className="space-y-4 font-mono-tech text-xs">
              {formError && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-xs">
                  {formError}
                </div>
              )}

              <div>
                <label className="block text-slate-300 mb-1 font-semibold uppercase tracking-wider">
                  Team / Sailor Name *
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. Dune Navigators or Solo Voyager"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-semibold uppercase tracking-wider">
                  Expedition Leader Email *
                </label>
                <input
                  type="email"
                  value={leaderEmail}
                  onChange={(e) => setLeaderEmail(e.target.value)}
                  placeholder="leader@college.edu"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-semibold uppercase tracking-wider">
                    College / Organization
                  </label>
                  <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. IIIT Dharwad"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-semibold uppercase tracking-wider">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${theme.btnGradient}`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>CONFIRM EXPEDITION SLOT & GENERATE PASS</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 3: AVINYA 2027 ISLAND BOARDING PASS TICKET */}
        {currentTab === 'ticket' && registrationData && (
          <div className="p-5 sm:p-7 space-y-6">
            <div className="relative rounded-2xl bg-[#030712] border-2 border-emerald-500/50 p-6 shadow-2xl overflow-hidden font-mono-tech">
              {/* Decorative Hologram Stamp */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>SLOT CONFIRMED // VERIFIED VOYAGER PASS</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold font-orbitron text-white mt-1">
                    {event.title}
                  </h4>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase">PASS CODE</span>
                  <span className="text-sm font-bold text-cyan-300 bg-black/80 px-2.5 py-1 rounded border border-cyan-400/30">
                    {registrationData.ticketId}
                  </span>
                </div>
              </div>

              {/* Pass Body Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4 p-3.5 rounded-xl bg-slate-950/80 border border-white/5">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Voyager / Team</span>
                  <span className="text-white font-semibold">{registrationData.teamName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Day & Sector</span>
                  <span className="text-amber-400 font-semibold">
                    Day {event.day} ({theme.sectorName})
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Arena Venue</span>
                  <span className="text-white font-semibold truncate block">{event.venue}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Prize Pool</span>
                  <span className="text-emerald-400 font-bold">{event.prizePool}</span>
                </div>
              </div>

              {/* Barcode & Security Hash Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-slate-400 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-cyan-400" />
                  <span className="tracking-wider">IIIT DHARWAD • AVINYA '27 EXPEDITION REGISTRY</span>
                </div>
                <div className="text-emerald-400 font-bold">
                  VALIDATED: {registrationData.timestamp}
                </div>
              </div>
            </div>

            {/* Boarding Pass Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-tech text-xs">
              <button
                onClick={handleCopyTicketId}
                className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center gap-2 transition-colors font-semibold"
              >
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>{copiedTicket ? 'Ticket ID Copied!' : 'Copy Ticket ID'}</span>
              </button>

              <button
                onClick={handleDownloadBoardingPass}
                className="py-3 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 flex items-center justify-center gap-2 transition-colors font-semibold shadow-md"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Boarding Pass (.txt)</span>
              </button>
            </div>

            {/* Portal Link Options */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono-tech flex-wrap gap-2">
              <span className="text-slate-400">External Portals:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://unstop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 flex items-center gap-1"
                >
                  <span>Unstop</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://hack2future.iiitdwd.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-amber-300 border border-white/10 flex items-center gap-1"
                >
                  <span>Hack2Future</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Modal Action Footer */}
        <div className="p-5 sm:p-7 pt-4 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {currentTab !== 'dossier' ? (
              <button
                onClick={() => setCurrentTab('dossier')}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-slate-300 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Briefing</span>
              </button>
            ) : (
              <button
                onClick={handleShareClick}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-slate-300 transition-colors flex items-center justify-center gap-2"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Event'}</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>

            {currentTab === 'dossier' && (
              <button
                onClick={() => setCurrentTab('register')}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-mono-tech font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${theme.btnGradient}`}
              >
                <span>REGISTER DOSSIER</span>
                <Ticket className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
