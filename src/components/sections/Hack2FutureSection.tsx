import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Bot,
  Coins,
  Globe,
  ExternalLink,
  Activity,
  Award,
  Clock,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { hack2FutureData } from '@/data/avinyaData';

export const Hack2FutureSection: React.FC = () => {
  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'Rocket':
      default:
        return <Rocket className="w-6 h-6 text-fuchsia-400" />;
    }
  };

  return (
    <section
      id="hack2future"
      className="relative min-h-screen py-24 md:py-32 bg-[#020308] text-slate-100 overflow-hidden"
    >
      {/* Deep Space Starfield & Orbital Nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cyan-600/10 via-indigo-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#00F5D4]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF5500]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Narrative Orbital Transition Banner */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 font-mono-tech text-xs tracking-widest uppercase mb-4 shadow-lg shadow-cyan-950/50"
          >
            <Rocket className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>LEAVING THE ARCHIPELAGO — ASCENDING TO LOW EARTH ORBIT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-orbitron tracking-tight text-white uppercase drop-shadow-2xl"
          >
            HACK2FUTURE{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-300">
              2027
            </span>
          </motion.h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg font-mono-tech text-slate-300 max-w-3xl mx-auto">
            {hack2FutureData.tagline}
          </p>

          <div className="flex items-center justify-center gap-4 text-xs font-mono-tech text-slate-400 mt-2">
            <span>IIIT DHARWAD NATIONAL HACKATHON</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">{hack2FutureData.dates}</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">{hack2FutureData.duration}</span>
          </div>
        </div>

        {/* Floating Astronaut Centerpiece & Orbital Telemetry Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-cyan-500/30 backdrop-blur-md shadow-2xl relative">
          {/* Orbit Telemetry Brackets Left */}
          <div className="lg:col-span-4 space-y-4 font-mono-tech">
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs">
              <div className="flex items-center justify-between text-cyan-400 mb-2 border-b border-white/10 pb-1">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  ORBITAL TELEMETRY
                </span>
                <span className="text-emerald-400">STABLE</span>
              </div>
              <div className="space-y-1.5 text-slate-300 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">ALTITUDE:</span>
                  <span className="text-white">408.2 KM (LEO)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">VELOCITY:</span>
                  <span className="text-white">7.66 KM/S</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">INCLINATION:</span>
                  <span className="text-white">51.64°</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">HACKERS EN ROUTE:</span>
                  <span className="text-cyan-300 font-bold">500+ NATIONWIDE</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs">
              <div className="text-amber-400 font-bold flex items-center gap-2 mb-1">
                <Award className="w-4 h-4" />
                <span>TOTAL BOUNTY RESERVES</span>
              </div>
              <div className="text-2xl font-bold font-orbitron text-white">
                {hack2FutureData.prizePoolTotal}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Cash rewards, accelerator fast-track, and AWS/GitHub credits.
              </p>
            </div>
          </div>

          {/* Central Floating Zero-Gravity Cinematic Astronaut Centerpiece */}
          <div className="lg:col-span-4 flex justify-center py-4 relative">
            {/* Animated telemetry circular rings */}
            <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full border border-dashed border-cyan-500/30 animate-spin" style={{ animationDuration: '35s' }} />
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-teal-500/20" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-mono-tech text-cyan-400/80 uppercase tracking-widest bg-black/70 px-2 py-0.5 rounded border border-cyan-500/30">
              EVA SUIT // SYS: PRESSURIZED
            </div>

            {/* Astronaut Zero-Gravity Bobbing & Gentle Pitch Motion */}
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-2, 2.5, -2],
                scale: [1, 1.015, 1]
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72"
            >
              <svg
                viewBox="0 0 240 240"
                className="w-full h-full drop-shadow-[0_0_35px_rgba(0,240,255,0.45)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Floating Umbilical Oxygen Tether Cable into Zero-G */}
                <path
                  d="M168 140 C210 160 225 105 240 120"
                  stroke="#38BDF8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="6 2"
                  opacity="0.8"
                />

                {/* Primary Life Support Subsystem (PLSS Backpack) */}
                <rect x="52" y="72" width="136" height="118" rx="22" fill="#0F172A" stroke="#1E293B" strokeWidth="3" />
                <rect x="58" y="78" width="124" height="106" rx="18" fill="#1E293B" stroke="#00F0FF" strokeWidth="1.5" />
                {/* Cold Gas Attitude Thrusters on Backpack */}
                <rect x="42" y="86" width="12" height="18" rx="3" fill="#334155" stroke="#38BDF8" strokeWidth="1" />
                <rect x="186" y="86" width="12" height="18" rx="3" fill="#334155" stroke="#38BDF8" strokeWidth="1" />
                {/* Subtle Thruster Plume */}
                <ellipse cx="38" cy="95" rx="5" ry="3" fill="#00F0FF" opacity="0.6" className="animate-pulse" />
                <ellipse cx="202" cy="95" rx="5" ry="3" fill="#00F0FF" opacity="0.6" className="animate-pulse" />

                {/* Heavy Space Suit Torso & Arms (Ballistic White / High Contrast Shadows) */}
                {/* Left Arm & Ribbed Elbow Joint */}
                <path
                  d="M72 110 C46 122 36 150 48 178 C54 182 64 175 60 165 C54 148 64 132 82 126 Z"
                  fill="#E2E8F0"
                  stroke="#64748B"
                  strokeWidth="2.5"
                />
                {/* Left Tactical Glove */}
                <ellipse cx="48" cy="184" rx="10" ry="12" fill="#0F172A" stroke="#00F0FF" strokeWidth="2" />
                <rect x="44" y="176" width="9" height="5" rx="2" fill="#F59E0B" />

                {/* Right Arm & Ribbed Elbow Joint */}
                <path
                  d="M168 110 C194 122 204 150 192 178 C186 182 176 175 180 165 C186 148 176 132 158 126 Z"
                  fill="#E2E8F0"
                  stroke="#64748B"
                  strokeWidth="2.5"
                />
                {/* Right Tactical Glove */}
                <ellipse cx="192" cy="184" rx="10" ry="12" fill="#0F172A" stroke="#00F0FF" strokeWidth="2" />
                <rect x="187" y="176" width="9" height="5" rx="2" fill="#F59E0B" />

                {/* Torso Suit Base */}
                <path
                  d="M72 104 C72 96 86 92 120 92 C154 92 168 96 168 104 L164 190 C164 196 150 200 120 200 C90 200 76 196 76 190 Z"
                  fill="#F1F5F9"
                  stroke="#475569"
                  strokeWidth="3"
                />

                {/* Detailed Chest Display & Control Module (DCM Pack) */}
                <rect x="85" y="128" width="70" height="52" rx="8" fill="#0A0F1D" stroke="#00F0FF" strokeWidth="2" />
                {/* Hazard Stripe Header */}
                <rect x="85" y="128" width="70" height="6" rx="2" fill="url(#hazardStripes)" />
                {/* Digital LCD Telemetry Screen */}
                <rect x="91" y="139" width="40" height="18" rx="3" fill="#020617" stroke="#38BDF8" strokeWidth="1" />
                <text x="94" y="148" fill="#00F0FF" fontSize="5.5" fontFamily="monospace" fontWeight="bold">
                  H2F-2027
                </text>
                <text x="94" y="154" fill="#10B981" fontSize="4.5" fontFamily="monospace">
                  O2: 99.4%
                </text>
                {/* Status Indicator LEDs */}
                <circle cx="140" cy="143" r="2.5" fill="#10B981" className="animate-pulse" />
                <circle cx="147" cy="143" r="2.5" fill="#F59E0B" />
                {/* Rotary Switches & Valves */}
                <circle cx="98" cy="168" r="4" fill="#334155" stroke="#94A3B8" strokeWidth="1" />
                <line x1="98" y1="166" x2="98" y2="170" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="112" cy="168" r="4" fill="#334155" stroke="#94A3B8" strokeWidth="1" />
                <circle cx="126" cy="168" r="4" fill="#334155" stroke="#94A3B8" strokeWidth="1" />
                <rect x="136" y="164" width="12" height="7" rx="1.5" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />

                {/* Mission Patch / Flag on Chest */}
                <rect x="88" y="108" width="22" height="13" rx="2" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
                <text x="91" y="117" fill="#FFFFFF" fontSize="5" fontFamily="monospace" fontWeight="bold">
                  IIIT
                </text>
                {/* Tactical Harness Straps */}
                <path d="M78 102 L86 128" stroke="#1E293B" strokeWidth="3" />
                <path d="M162 102 L154 128" stroke="#1E293B" strokeWidth="3" />
                <line x1="86" y1="180" x2="78" y2="194" stroke="#1E293B" strokeWidth="3" />
                <line x1="154" y1="180" x2="162" y2="194" stroke="#1E293B" strokeWidth="3" />

                {/* Neck Ring Assembly (Alloy Anodized) */}
                <ellipse cx="120" cy="94" rx="38" ry="12" fill="#334155" stroke="#94A3B8" strokeWidth="2.5" />
                <ellipse cx="120" cy="92" rx="34" ry="9" fill="#0F172A" stroke="#00F0FF" strokeWidth="1.5" />

                {/* HELMET (Cinematic Extravehicular Helmet Shell) */}
                <ellipse cx="120" cy="62" rx="46" ry="43" fill="#F8FAFC" stroke="#475569" strokeWidth="3" />
                {/* Helmet Cap Crown Contour */}
                <path d="M84 45 C94 34 146 34 156 45" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

                {/* Helmet Mounted Tactical Spotlights (Left & Right) */}
                <rect x="69" y="52" width="7" height="16" rx="2" fill="#0F172A" stroke="#00F0FF" strokeWidth="1" />
                <circle cx="72" cy="60" r="2" fill="#FFFFFF" className="animate-pulse" />
                <rect x="164" y="52" width="7" height="16" rx="2" fill="#0F172A" stroke="#00F0FF" strokeWidth="1" />
                <circle cx="167" cy="60" r="2" fill="#FFFFFF" className="animate-pulse" />

                {/* PANORAMIC GOLD & OBSIDIAN REFLECTIVE VISOR */}
                <ellipse cx="120" cy="62" rx="36" ry="29" fill="#060913" stroke="#F59E0B" strokeWidth="2.5" />
                <path
                  d="M87 56 C94 40 146 40 153 56 C155 76 148 88 120 88 C92 88 85 76 87 56 Z"
                  fill="url(#cinematicVisor)"
                />

                {/* Cosmic Starfield & Earth Horizon Reflection Inside Visor */}
                <ellipse cx="120" cy="74" rx="26" ry="10" fill="#0284C7" opacity="0.35" />
                <path d="M94 72 Q120 66 146 72" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" />
                {/* HUD Crosshairs in Visor */}
                <circle cx="120" cy="60" r="6" stroke="#00F0FF" strokeWidth="0.8" strokeDasharray="2 1" opacity="0.75" />
                <line x1="120" y1="51" x2="120" y2="69" stroke="#00F0FF" strokeWidth="0.6" opacity="0.6" />
                <line x1="111" y1="60" x2="129" y2="60" stroke="#00F0FF" strokeWidth="0.6" opacity="0.6" />

                {/* Specular Glare Reflection on Visor Glass */}
                <path
                  d="M96 46 Q120 40 140 44 Q135 50 102 52 Z"
                  fill="#FFFFFF"
                  opacity="0.45"
                />

                <defs>
                  <linearGradient id="cinematicVisor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0B132B" />
                    <stop offset="35%" stopColor="#1C2541" />
                    <stop offset="70%" stopColor="#D97706" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="hazardStripes" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="25%" stopColor="#0F172A" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="75%" stopColor="#0F172A" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Direct CTA & Official Link Portal Right */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono-tech">
              <span className="text-slate-400 block mb-1">STATION DIRECTIVE:</span>
              <p className="text-slate-200 text-sm leading-relaxed">
                Build sovereign software architectures under 36 hours of continuous telemetry.
                Free lodging, round-the-clock redbull, meals, and jury evaluation by tech pioneers.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={hack2FutureData.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 text-slate-950 font-bold font-mono-tech text-sm tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
              >
                <span>LAUNCH MISSION — OFFICIAL PORTAL</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://hack2future.iiitdwd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs font-mono-tech text-center tracking-wider transition-all"
              >
                HACK2FUTURE.IIITDWD.AC.IN
              </a>
            </div>
          </div>
        </div>

        {/* Mission Stats Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {hack2FutureData.missionStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 backdrop-blur-md shadow-md text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold font-orbitron text-cyan-300 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white uppercase font-mono-tech tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono-tech">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 INNOVATION TRACKS BENTO CARDS */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest block mb-1">
                MISSION DOMAINS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white">
                4 INNOVATION TRACKS
              </h3>
            </div>
            <span className="text-xs font-mono-tech text-slate-400 hidden sm:inline">
              CROSS-DISCIPLINARY HARDWARE & SOFTWARE SPRINT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hack2FutureData.tracks.map((track, idx) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                      {getTrackIcon(track.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono-tech font-bold">
                      {track.bounties}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {track.title}
                  </h4>
                  <p className="text-xs font-mono-tech text-slate-400 mb-3">
                    // {track.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {track.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-mono-tech text-slate-400 uppercase block mb-1.5">
                    SAMPLE CHALLENGES:
                  </span>
                  <ul className="space-y-1">
                    {track.examples.map((ex, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-300 flex items-start gap-1.5 font-mono-tech"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 36-HOUR TIMELINE STEPPER */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest block mb-1">
              MISSION SEQUENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white">
              36-HOUR TELEMETRY TIMELINE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hack2FutureData.timeline.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-cyan-500/40 transition-colors font-mono-tech relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                    {item.phase}
                  </span>
                  <span className="text-xs text-amber-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-white mb-1">{item.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hacker Amenities & Perks */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/60 border border-white/10 backdrop-blur-md">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold font-orbitron text-white mb-1">
              HACKER AMENITIES & LOGISTICS
            </h4>
            <p className="text-xs font-mono-tech text-slate-400">
              ALL REGISTERED HACKERS RECEIVE FULL EXPEDITION SUPPORT ON IIIT DHARWAD CAMPUS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hack2FutureData.perks.map((perk, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-200 font-mono-tech"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
