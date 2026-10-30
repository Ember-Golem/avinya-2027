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

          {/* Central Floating Zero-Gravity Astronaut Centerpiece */}
          <div className="lg:col-span-4 flex justify-center py-4 relative">
            {/* Animated telemetry circular ring */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-cyan-500/30 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-teal-500/20" />

            {/* Astronaut Zero-Gravity Bobbing Motion */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative z-10 w-44 h-44 sm:w-56 sm:h-56"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Backpack / Life Support */}
                <rect x="55" y="65" width="90" height="95" rx="20" fill="#1E293B" stroke="#00F0FF" strokeWidth="2.5" />
                <rect x="65" y="75" width="25" height="15" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
                <circle cx="115" cy="82" r="4" fill="#10B981" />
                <circle cx="127" cy="82" r="4" fill="#F59E0B" />

                {/* Astronaut Helmet */}
                <ellipse cx="100" cy="58" rx="42" ry="40" fill="#E2E8F0" stroke="#00F0FF" strokeWidth="3" />
                {/* Visor with Gold/Cyan Reflection */}
                <ellipse cx="100" cy="58" rx="30" ry="24" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
                <path
                  d="M80 50 Q100 42 120 50 Q115 62 85 62 Z"
                  fill="url(#visorGradient)"
                  opacity="0.85"
                />

                {/* Space Suit Torso */}
                <rect x="65" y="95" width="70" height="75" rx="16" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2.5" />
                {/* Mission Patch */}
                <polygon points="100,105 108,118 92,118" fill="#0284C7" />
                <circle cx="100" cy="113" r="2" fill="#F8FAFC" />
                <text x="75" y="132" fill="#0284C7" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
                  H2F-2027
                </text>
                {/* Chest Telemetry Display */}
                <rect x="75" y="138" width="50" height="18" rx="3" fill="#020617" stroke="#00F0FF" strokeWidth="1" />
                <line x1="80" y1="147" x2="120" y2="147" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 1" />

                {/* Arms */}
                <path d="M65 105 Q40 120 48 145" stroke="#E2E8F0" strokeWidth="14" strokeLinecap="round" />
                <path d="M135 105 Q160 120 152 145" stroke="#E2E8F0" strokeWidth="14" strokeLinecap="round" />

                {/* Gloves */}
                <circle cx="48" cy="148" r="8" fill="#0284C7" />
                <circle cx="152" cy="148" r="8" fill="#0284C7" />

                {/* Defs */}
                <defs>
                  <linearGradient id="visorGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00F0FF" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#0F172A" />
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

        {/* 36-HOUR TIMELINE STEPPER (DaisyUI Timeline / Stepper Styling) */}
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
