export type EventCategory = 'Technical' | 'Cultural' | 'Gaming' | 'Workshop' | 'Flagship';

export interface EventCoordinator {
  name: string;
  phone: string;
  role?: string;
  email?: string;
}

export interface EventItem {
  id: string;
  day: 1 | 2 | 3;
  title: string;
  tagline: string;
  category: EventCategory;
  islandSector: string;
  time: string;
  date: string;
  venue: string;
  prizePool: string;
  teamSize: string;
  description: string;
  rules: string[];
  coordinators: EventCoordinator[];
  registrationLink: string;
  iconName: string;
  featured?: boolean;
  themeAccent: string;
  registrationOpen?: boolean;
}

export interface IslandDay {
  dayNumber: 1 | 2 | 3;
  date: string;
  title: string;
  subtitle: string;
  themeName: string;
  sectorCode: string;
  coordinates: string;
  bgImage: string;
  accentColor: string;
  secondaryAccent: string;
  lore: string;
  badgeText: string;
  events: EventItem[];
}

export interface HackathonTrack {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  bounties: string;
  examples: string[];
}

export interface HackathonTimelineItem {
  phase: string;
  time: string;
  title: string;
  desc: string;
}

export interface Hack2FutureData {
  title: string;
  edition: string;
  tagline: string;
  dates: string;
  duration: string;
  mode: string;
  venue: string;
  prizePoolTotal: string;
  portalUrl: string;
  missionStats: { label: string; value: string; detail: string }[];
  tracks: HackathonTrack[];
  timeline: HackathonTimelineItem[];
  perks: string[];
}

export const islandDaysData: IslandDay[] = [
  {
    dayNumber: 1,
    date: 'March 12, 2027',
    title: 'THE LAST OUTPOST',
    subtitle: 'Arrakis Desert Frontier',
    themeName: 'Dune Desert Aesthetic',
    sectorCode: 'SECTOR-01 // ARRAKIS RIM',
    coordinates: '15.4610° N, 75.0120° E',
    bgImage: '/images/day1-outpost.png',
    accentColor: '#D9531E',
    secondaryAccent: '#E6C280',
    lore: 'Beyond the charted archipelago lies the unforgiving sands of Arrakis Outpost. Here, amid scorching winds and algorithmic sandstorms, only the most resilient code survives.',
    badgeText: 'DAY 01 — EXPEDITION EMBARKATION',
    events: [
      {
        id: 'spice-route-algothon',
        day: 1,
        title: 'Spice Route Algothon',
        tagline: 'Competitive programming with extreme resource throttling',
        category: 'Technical',
        islandSector: 'The Last Outpost',
        time: '10:00 AM - 01:30 PM',
        date: 'March 12, 2027',
        venue: 'Turing Computing Complex (Lab 3 & 4)',
        prizePool: '₹40,000',
        teamSize: '1 - 2 Sailors',
        description: 'Navigate algorithmic spice dunes under simulated hardware constraints. Competitors must solve complex dynamic programming, graph theory, and mathematical puzzles where every byte of memory and CPU cycle is audited.',
        rules: [
          'Teams must consist of 1 or 2 participants.',
          'Supported languages: C++, Python 3, Java, and Rust.',
          'Plagiarism check will run post-contest using automated AST comparison.',
          'Internet access is limited strictly to official platform documentation.'
        ],
        coordinators: [
          { name: 'Aditya Verma', phone: '+91 98451 22341', role: 'Technical Lead' },
          { name: 'Kavya Shenoy', phone: '+91 97412 88921', role: 'Event Convener' }
        ],
        registrationLink: '#register',
        iconName: 'Code',
        featured: true,
        themeAccent: '#D9531E',
        registrationOpen: true
      },
      {
        id: 'sandcrawler-rover-derby',
        day: 1,
        title: 'Sandcrawler Rover Derby',
        tagline: 'Autonomous and teleoperated desert obstacle challenge',
        category: 'Technical',
        islandSector: 'The Last Outpost',
        time: '02:00 PM - 05:30 PM',
        date: 'March 12, 2027',
        venue: 'Robotics Arena, Outdoor Innovation Ground',
        prizePool: '₹50,000',
        teamSize: '2 - 4 Explorers',
        description: 'Deploy custom robotic rovers across a 40-meter simulated dune terrain. Vehicles must climb steep sandstone inclines, navigate rocky crevasses, and autonomously detect radio beacons using computer vision or ultrasound.',
        rules: [
          'Max bot dimensions: 40cm x 40cm x 35cm; max weight 4.5kg.',
          'Power supply must be onboard DC batteries (max 24V).',
          'Round 1: Autonomous beacon localization. Round 2: Obstacle time trial.',
          'Any RF interference sabotage results in immediate disqualification.'
        ],
        coordinators: [
          { name: 'Rohan Kulkarni', phone: '+91 94812 33419', role: 'Robotics Lead' },
          { name: 'Ananya Hegde', phone: '+91 96110 44520', role: 'Arena Marshall' }
        ],
        registrationLink: '#register',
        iconName: 'Bot',
        featured: true,
        themeAccent: '#E6C280',
        registrationOpen: true
      },
      {
        id: 'arrakis-ctf-breach',
        day: 1,
        title: 'Arrakis CTF: Sandcrawler Breach',
        tagline: 'Capture The Flag cybersecurity war games',
        category: 'Technical',
        islandSector: 'The Last Outpost',
        time: '11:00 AM - 04:00 PM',
        date: 'March 12, 2027',
        venue: 'Cyber Security Lab, Block B',
        prizePool: '₹35,000',
        teamSize: '1 - 3 Operatives',
        description: 'Infiltrate military-grade sandcrawler firmware. Challenges span reverse engineering, web exploit payloads, cryptographic sand-ciphers, forensic telemetry analysis, and memory corruption.',
        rules: [
          'Jeopardy-style scoring with dynamic flag decay based on solve count.',
          'Attacking scoring servers or infrastructure results in a permanent ban.',
          'Sharing flags between teams will disqualify both parties.',
          'BYOD (Bring Your Own Device) with Kali or preferred security distribution.'
        ],
        coordinators: [
          { name: 'Sameer Joshi', phone: '+91 98860 11982', role: 'CTF Master' },
          { name: 'Pooja Nair', phone: '+91 91080 77341', role: 'Platform Admin' }
        ],
        registrationLink: '#register',
        iconName: 'ShieldAlert',
        featured: false,
        themeAccent: '#D9531E',
        registrationOpen: true
      },
      {
        id: 'mirage-promptcraft',
        day: 1,
        title: 'Mirage: AI PromptCraft & Jailbreak',
        tagline: 'Adversarial generative AI security and creative jailbreaking',
        category: 'Workshop',
        islandSector: 'The Last Outpost',
        time: '02:30 PM - 05:00 PM',
        date: 'March 12, 2027',
        venue: 'Seminar Hall 1, Admin Block',
        prizePool: '₹20,000 + Swag',
        teamSize: 'Solo or Duo',
        description: 'Hands-on adversarial attack simulation against state-of-the-art LLMs. Participants learn jailbreak taxonomy, prompt injection defenses, multi-modal hallucination exploitation, and red-teaming methodologies.',
        rules: [
          'All participants receive high-throughput API tokens for the arena.',
          'Phase 1: Jailbreak puzzle levels with escalating guardrails.',
          'Phase 2: Defend an AI chatbot against live adversary attacks.'
        ],
        coordinators: [
          { name: 'Dr. Sharath R.', phone: '+91 98450 67123', role: 'Faculty Mentor' },
          { name: 'Tanvi Deshmukh', phone: '+91 99012 34567', role: 'Student Lead' }
        ],
        registrationLink: '#register',
        iconName: 'Cpu',
        featured: false,
        themeAccent: '#E6C280',
        registrationOpen: true
      },
      {
        id: 'desert-soliloquy',
        day: 1,
        title: 'Desert Soliloquy: Solo Music',
        tagline: 'Acoustic and instrumental acoustic showdown',
        category: 'Cultural',
        islandSector: 'The Last Outpost',
        time: '05:30 PM - 08:00 PM',
        date: 'March 12, 2027',
        venue: 'Sunset Open Stage (Near Lotus Pond)',
        prizePool: '₹20,000',
        teamSize: 'Solo Performer',
        description: 'As twilight falls over the dunes, lone bards take the sunset stage. An acoustic and vocal exhibition celebrating raw melodies, desert folk arrangements, and soulful original compositions.',
        rules: [
          'Performance duration: 5 minutes + 2 minutes setup/soundcheck.',
          'Maximum one acoustic instrument backing or backing track allowed.',
          'Judged on pitch, vocal dynamics, stage presence, and lyrical resonance.'
        ],
        coordinators: [
          { name: 'Nikhil Prabhu', phone: '+91 97312 90812', role: 'Music Secretary' },
          { name: 'Sneha Patil', phone: '+91 98801 23490', role: 'Stage Manager' }
        ],
        registrationLink: '#register',
        iconName: 'Music',
        featured: false,
        themeAccent: '#D9531E',
        registrationOpen: true
      },
      {
        id: 'wasteland-valorant-championship',
        day: 1,
        title: 'Wasteland Valorant: Stage 1',
        tagline: '5v5 tactical shooter LAN championship prelims',
        category: 'Gaming',
        islandSector: 'The Last Outpost',
        time: '12:00 PM - 07:00 PM',
        date: 'March 12, 2027',
        venue: 'Esports Arena, Student Activity Center',
        prizePool: '₹35,000',
        teamSize: '5 Players + 1 Sub',
        description: 'Single-elimination LAN qualifiers on tournament-grade 240Hz rigs. Teams fight through Ascent, Haven, and Lotus to secure the final four seeds for Day 2 stadium finals.',
        rules: [
          'Tournament mode: standard competitive rules, unrated agents disabled.',
          'Matches are Best-of-1 until quarter-finals; Best-of-3 thereafter.',
          'Standard Riot anti-cheat Vanguard required on all local systems.'
        ],
        coordinators: [
          { name: 'Karthik Rao', phone: '+91 96112 55431', role: 'Esports Head' },
          { name: 'Deepak M.', phone: '+91 97401 66723', role: 'Bracket Marshall' }
        ],
        registrationLink: '#register',
        iconName: 'Gamepad2',
        featured: false,
        themeAccent: '#E6C280',
        registrationOpen: true
      }
    ]
  },
  {
    dayNumber: 2,
    date: 'March 13, 2027',
    title: 'THE PANDEMONIUM',
    subtitle: 'Neo-Dharwad Cyber Island',
    themeName: 'Synthwave Cyberpunk Aesthetic',
    sectorCode: 'SECTOR-02 // NEON GRID',
    coordinates: '15.4695° N, 75.0234° E',
    bgImage: '/images/day2-pandemonium.png',
    accentColor: '#FF007F',
    secondaryAccent: '#00F5D4',
    lore: 'Welcome to the glowing neon sprawl of The Pandemonium. Here, electricity pulses through chrome spires, beat drops shake the asphalt, and cybernetic innovation breaks all speed limits.',
    badgeText: 'DAY 02 — THE CYBERPUNK FRENZY',
    events: [
      {
        id: 'neon-circuit-hack-sprint',
        day: 2,
        title: 'Neon Circuit: 12-Hour AI Sprint',
        tagline: 'High-velocity autonomous AI agent development sprint',
        category: 'Technical',
        islandSector: 'The Pandemonium',
        time: '09:00 AM - 09:00 PM',
        date: 'March 13, 2027',
        venue: 'Data Innovation Center, 2nd Floor',
        prizePool: '₹60,000',
        teamSize: '2 - 4 Hackers',
        description: 'A relentless 12-hour build sprint dedicated to multi-agent LLM systems, computer vision edge pipelines, and real-time reactive web dashboards. Mentored by engineers from leading tech labs.',
        rules: [
          'All code must be committed to GitHub repositories created after kickoff.',
          'Pre-existing libraries/APIs are permitted; boilerplate templates must be disclosed.',
          'Final pitch: 3-minute live working demonstration + 2-minute jury Q&A.'
        ],
        coordinators: [
          { name: 'Aryan Mehta', phone: '+91 99001 44321', role: 'Sprint Director' },
          { name: 'Divya Iyer', phone: '+91 98452 77120', role: 'Dev Mentor' }
        ],
        registrationLink: '#register',
        iconName: 'Zap',
        featured: true,
        themeAccent: '#FF007F',
        registrationOpen: true
      },
      {
        id: 'synth-glitch-webgl',
        day: 2,
        title: 'Synth Glitch: Creative Frontend & WebGL',
        tagline: 'Interactive 3D shaders and experimental UI duel',
        category: 'Technical',
        islandSector: 'The Pandemonium',
        time: '11:00 AM - 03:00 PM',
        date: 'March 13, 2027',
        venue: 'Graphics & HCI Studio',
        prizePool: '₹35,000',
        teamSize: 'Solo or Duo',
        description: 'Create an awe-inspiring, audio-reactive 3D web experience in under 4 hours using Three.js, WebGL GLSL shaders, or Canvas 2D. The prompt theme is unveiled 10 minutes prior to kick-off.',
        rules: [
          'Evaluation based on 60 FPS performance, artistic design, and interactivity.',
          'External assets (3D models/textures) must be open-license and cited.',
          'Live presentation to judges on dual 4K OLED displays.'
        ],
        coordinators: [
          { name: 'Varun Nair', phone: '+91 97410 88231', role: 'Creative Tech Lead' },
          { name: 'Ishita Sen', phone: '+91 98863 11209', role: 'UI/UX Lead' }
        ],
        registrationLink: '#register',
        iconName: 'Monitor',
        featured: false,
        themeAccent: '#00F5D4',
        registrationOpen: true
      },
      {
        id: 'pandemonium-battle-of-bands',
        day: 2,
        title: 'Pandemonium: Battle of the Bands',
        tagline: 'High-voltage rock, metal, and synth-wave fusion battle',
        category: 'Cultural',
        islandSector: 'The Pandemonium',
        time: '05:30 PM - 10:00 PM',
        date: 'March 13, 2027',
        venue: 'Grand Open Air Amphitheatre',
        prizePool: '₹75,000',
        teamSize: '3 - 8 Musicians',
        description: 'The sonic centerpiece of Day 2. Collegiate and semi-pro bands from across India clash with soaring guitar riffs, thumping basslines, analog synth leads, and electrifying percussion.',
        rules: [
          'Performance time: 20 minutes (including 5 min line check).',
          'At least one original composition is mandatory.',
          'Full drum kit, PA system, and stage monitors provided by fest production.'
        ],
        coordinators: [
          { name: 'Dhruv Goswami', phone: '+91 98451 99201', role: 'Band Liaison' },
          { name: 'Meera Menon', phone: '+91 99011 55670', role: 'Acoustics Engineer' }
        ],
        registrationLink: '#register',
        iconName: 'Flame',
        featured: true,
        themeAccent: '#FF007F',
        registrationOpen: true
      },
      {
        id: 'cyber-street-dance-cypher',
        day: 2,
        title: 'CyberStreet: 1v1 Cypher & Crew Clash',
        tagline: 'All-styles street dance battle to neon electronic beats',
        category: 'Cultural',
        islandSector: 'The Pandemonium',
        time: '02:30 PM - 06:00 PM',
        date: 'March 13, 2027',
        venue: 'Basketball Courts Arena (Illuminated)',
        prizePool: '₹45,000',
        teamSize: 'Solo or 4-8 Crew',
        description: 'Popping, locking, breaking, krump, and urban choreographies under ultraviolet neon floodlights. Dancers go head-to-head in random 45-second drops curated by live DJs.',
        rules: [
          'Round 1: 1v1 all-styles open cypher prelims.',
          'Round 2: Crew routine showcase followed by 7-to-smoke elimination.',
          'Judged by celebrity street dancers on musicality, technique, and crowd energy.'
        ],
        coordinators: [
          { name: 'Riddhima Joshi', phone: '+91 96118 77210', role: 'Dance Secretary' },
          { name: 'Tejas B.', phone: '+91 97415 33091', role: 'DJ & Stage Coord' }
        ],
        registrationLink: '#register',
        iconName: 'Sparkles',
        featured: false,
        themeAccent: '#00F5D4',
        registrationOpen: true
      },
      {
        id: 'overclocked-esports-arena',
        day: 2,
        title: 'Overclocked: Street Fighter 6 & BGMI',
        tagline: 'Championship finals with live caster stadium commentary',
        category: 'Gaming',
        islandSector: 'The Pandemonium',
        time: '01:00 PM - 07:00 PM',
        date: 'March 13, 2027',
        venue: 'Auditorium Hall B & Gaming Lounge',
        prizePool: '₹45,000',
        teamSize: 'Solo (SF6) / 4 Players (BGMI)',
        description: 'Double elimination fighting game bracket on low-latency arcade fight sticks, alongside mobile BGMI quad-squad battle royale finals broadcasted to live theater screens.',
        rules: [
          'SF6: Double elimination, default tournament settings, 2/3 rounds.',
          'BGMI: 4 custom lobby matches (Erangel, Miramar, Sanhok). Emulators banned.',
          'Official tournament referees enforce equipment checks and stream delays.'
        ],
        coordinators: [
          { name: 'Shashank Pai', phone: '+91 98865 33119', role: 'Esports Director' },
          { name: 'Akash Sundar', phone: '+91 94481 22901', role: 'Shoutcaster Head' }
        ],
        registrationLink: '#register',
        iconName: 'Trophy',
        featured: false,
        themeAccent: '#FF007F',
        registrationOpen: true
      },
      {
        id: 'zero-day-defense-lab',
        day: 2,
        title: 'Zero-Day Red vs. Blue Defense Lab',
        tagline: 'Enterprise attack simulation and live threat remediation workshop',
        category: 'Workshop',
        islandSector: 'The Pandemonium',
        time: '10:00 AM - 01:00 PM',
        date: 'March 13, 2027',
        venue: 'Network Operations Center, Block C',
        prizePool: '₹20,000 + Certifications',
        teamSize: 'Solo or Duo',
        description: 'Industry security veterans guide participants through live enterprise honeypots, Kubernetes container security breaches, and real-time SIEM alert triage on AWS sandbox clouds.',
        rules: [
          'Laptop with minimum 8GB RAM and SSH client required.',
          'Pre-configured cloud VMs will be provisioned for all registered attendees.'
        ],
        coordinators: [
          { name: 'Dr. Vivek S.', phone: '+91 98455 00921', role: 'Research Mentor' },
          { name: 'Pranav Kulkarni', phone: '+91 97419 66102', role: 'Infrastructure Head' }
        ],
        registrationLink: '#register',
        iconName: 'Terminal',
        featured: false,
        themeAccent: '#00F5D4',
        registrationOpen: true
      }
    ]
  },
  {
    dayNumber: 3,
    date: 'March 14, 2027',
    title: 'THE CARNIVAL ISLAND',
    subtitle: 'Celestial Harbor & Grand Gala',
    themeName: 'Harbor Night Festival & Carnival',
    sectorCode: 'SECTOR-03 // CELESTIAL HARBOR',
    coordinates: '15.4740° N, 75.0312° E',
    bgImage: '/images/day3-carnival.png',
    accentColor: '#FFB703',
    secondaryAccent: '#E63946',
    lore: 'The voyage reaches its grand celebration at the Celestial Harbor. Lanterns reflect over calm harbor waters, dramatic pro-shows echo across the night sky, and champions receive their legendary laurels.',
    badgeText: 'DAY 03 — CELESTIAL GRAND FINALE',
    events: [
      {
        id: 'avinya-pro-show-night',
        day: 3,
        title: 'Grand Harbor Pro-Show Night',
        tagline: 'Star-studded headline music festival featuring India’s top artists',
        category: 'Cultural',
        islandSector: 'The Carnival Island',
        time: '06:30 PM - 11:00 PM',
        date: 'March 14, 2027',
        venue: 'Main Stadium Festival Grounds',
        prizePool: 'Star Attraction',
        teamSize: 'All Voyagers Welcome',
        description: 'The monumental culmination of Avinya 2027. Featuring a dual headline performance with India’s top contemporary indie-rock powerhouse followed by a world-class electronic DJ set with laser pyrotechnics and confetti cannons.',
        rules: [
          'Festival wristband and verified student/delegate ID required at the gate.',
          'Gates open at 05:30 PM; strict security frisking at outer perimeter.',
          'Free entry for all registered Avinya and Hack2Future participants.'
        ],
        coordinators: [
          { name: 'Harshita Reddy', phone: '+91 98450 11234', role: 'Festival Convener' },
          { name: 'Abhishek Sharma', phone: '+91 99002 99810', role: 'Artist Hospitality' }
        ],
        registrationLink: '#register',
        iconName: 'Sparkles',
        featured: true,
        themeAccent: '#FFB703',
        registrationOpen: true
      },
      {
        id: 'cosplay-aegis-masquerade',
        day: 3,
        title: 'Cosplay Aegis: Guild Masquerade',
        tagline: 'Anime, gaming, and cinematic pop-culture costume contest',
        category: 'Cultural',
        islandSector: 'The Carnival Island',
        time: '02:00 PM - 05:00 PM',
        date: 'March 14, 2027',
        venue: 'Central Amphitheatre Runway',
        prizePool: '₹35,000',
        teamSize: 'Solo or Duo',
        description: 'Drape yourself in heroic armor, handcrafted wings, and intricate character makeup. Contestants perform a 90-second stage act depicting characters from anime, sci-fi, games, and folklore.',
        rules: [
          'Props must be safe (no metal blades, live explosives, or hazardous liquids).',
          'At least 60% of the costume must be handmade/custom-crafted for master class.',
          'Pre-judging session begins 60 minutes prior to stage performance.'
        ],
        coordinators: [
          { name: 'Ankita Sen', phone: '+91 97411 22890', role: 'Cosplay Coordinator' },
          { name: 'Suraj Desai', phone: '+91 96119 44321', role: 'Stage Tech' }
        ],
        registrationLink: '#register',
        iconName: 'Crown',
        featured: true,
        themeAccent: '#E63946',
        registrationOpen: true
      },
      {
        id: 'carnival-esoteric-code-jam',
        day: 3,
        title: 'Carnival of Code: Esoteric Jam',
        tagline: 'Code golf, regex poetry, and weird esoteric programming showdown',
        category: 'Technical',
        islandSector: 'The Carnival Island',
        time: '10:30 AM - 01:30 PM',
        date: 'March 14, 2027',
        venue: 'Open Source Lab, 1st Floor',
        prizePool: '₹30,000',
        teamSize: '1 - 2 Sailors',
        description: 'A whimsical coding battle where the strangest solution wins! Write functioning calculators in Brainfuck, craft palindromic Python scripts, or solve logic puzzles using single regex expressions.',
        rules: [
          'Round 1: Code Golf (fewest characters to pass unit tests).',
          'Round 2: Esoteric Language roulette (Piet, Befunge, Whitespace, Shakespeare).',
          'Bonus points awarded for creative commentary and algorithmic elegance.'
        ],
        coordinators: [
          { name: 'Gautam Bhat', phone: '+91 98453 88120', role: 'Code Jam Lead' },
          { name: 'Pooja Hegde', phone: '+91 97402 77319', role: 'Scorer' }
        ],
        registrationLink: '#register',
        iconName: 'Code',
        featured: false,
        themeAccent: '#FFB703',
        registrationOpen: true
      },
      {
        id: 'tarang-classical-fusion',
        day: 3,
        title: 'Tarang: Classical & Folk Symphony',
        tagline: 'Carnatic rhythms meets contemporary instrumental orchestra',
        category: 'Cultural',
        islandSector: 'The Carnival Island',
        time: '11:00 AM - 02:00 PM',
        date: 'March 14, 2027',
        venue: 'Main Auditorium',
        prizePool: '₹40,000',
        teamSize: '4 - 10 Ensembles',
        description: 'An ode to Karnataka’s rich artistic heritage blended with modern symphonies. Violins, flutes, mridangam, sitar, and western percussion unite in breathtaking raaga improvisations.',
        rules: [
          'Performance duration: 15 minutes including stage setup.',
          'Fusion of at least one Indian classical tradition with modern styles is required.',
          'Judged by renowned music academy faculty on shruti, laya, and harmony.'
        ],
        coordinators: [
          { name: 'Vidya S.', phone: '+91 99014 33210', role: 'Cultural Secretary' },
          { name: 'Karthik S.', phone: '+91 98860 99401', role: 'Logistics Lead' }
        ],
        registrationLink: '#register',
        iconName: 'Music',
        featured: false,
        themeAccent: '#FFB703',
        registrationOpen: true
      },
      {
        id: 'retro-arcade-smash-carnival',
        day: 3,
        title: 'Harbor Arcade: Smash Bros & Tekken 8',
        tagline: 'Casual party tournament and coin-op leaderboard showdown',
        category: 'Gaming',
        islandSector: 'The Carnival Island',
        time: '01:00 PM - 05:00 PM',
        date: 'March 14, 2027',
        venue: 'Student Lounge & Arcade Zone',
        prizePool: '₹25,000',
        teamSize: 'Solo',
        description: 'Grab a controller for Super Smash Bros. Ultimate and Tekken 8 on the festival harbor lawn. Free carnival tokens, crowd side-bets, and high-energy casting.',
        rules: [
          'Smash: 3-stock, 7-minute timer, hazards off, legal competitive stage list.',
          'Tekken 8: Standard 3/5 rounds, 60s timer, random stage selection.'
        ],
        coordinators: [
          { name: 'Akshay Shenoy', phone: '+91 97418 22345', role: 'Arcade Host' },
          { name: 'Neha V.', phone: '+91 96112 00987', role: 'Referee' }
        ],
        registrationLink: '#register',
        iconName: 'Gamepad2',
        featured: false,
        themeAccent: '#E63946',
        registrationOpen: true
      },
      {
        id: 'valedictory-gala-ceremony',
        day: 3,
        title: 'Archipelago Gala & Awards Ceremony',
        tagline: 'Honoring fest champions, trophy presentations, and farewell cruise',
        category: 'Flagship',
        islandSector: 'The Carnival Island',
        time: '05:00 PM - 06:30 PM',
        date: 'March 14, 2027',
        venue: 'Grand Amphitheatre Main Stage',
        prizePool: 'Grand Trophies & Felicitations',
        teamSize: 'All Attendees',
        description: 'The ceremonial closing of Avinya 2027 before the night pro-shows. Presentation of the Avinya Overall College Championship Trophy, Hack2Future national awards, and student leadership honors.',
        rules: [
          'Winning teams must have designated representatives present for trophy handovers.',
          'Certificates and cash prize cheques disbursed following the ceremony.'
        ],
        coordinators: [
          { name: 'Director, IIIT Dharwad', phone: '0836-2250877', role: 'Patron' },
          { name: 'Avinya Executive Board', phone: '+91 98451 00000', role: 'Organizing Comm.' }
        ],
        registrationLink: '#',
        iconName: 'Award',
        featured: true,
        themeAccent: '#FFB703',
        registrationOpen: false
      }
    ]
  }
];

export const hack2FutureData: Hack2FutureData = {
  title: 'HACK2FUTURE 2027',
  edition: '4th National Edition',
  tagline: 'Ascending From The Archipelago — 36-Hour Planetary Innovation Hackathon',
  dates: 'March 12 - 14, 2027',
  duration: '36 Hours Non-Stop',
  mode: 'In-Person Flagship Hackathon',
  venue: 'IIIT Dharwad Main Computing & Innovation Complex',
  prizePoolTotal: '₹3,50,000+',
  portalUrl: 'https://hack2future.iiitdwd.ac.in/',
  missionStats: [
    { label: 'Sprint Duration', value: '36 HRS', detail: 'Non-stop hacking & mentorship' },
    { label: 'Total Prize Pool', value: '₹3,50,000+', detail: 'Cash bounties + cloud credits' },
    { label: 'National Reach', value: '45+ Colls', detail: 'Elite builder teams across India' },
    { label: 'Hacker Quota', value: '500+ Devs', detail: 'Selected through rigorous screening' }
  ],
  tracks: [
    {
      id: 'ai-agents',
      title: 'Autonomous AI & Intelligent Systems',
      tagline: 'Multi-agent coordination, edge intelligence & sovereign reasoning',
      icon: 'Bot',
      description: 'Architect cooperative AI agent workflows, real-time multimodal perception systems, local SLM inference on micro-hardware, or autonomous self-healing software architectures.',
      bounties: '₹1,00,000 Track Pool',
      examples: ['Local-first edge agent for emergency disaster telemetry', 'Automated formal code verification agent', 'Multi-modal diagnostic triage for rural healthcare']
    },
    {
      id: 'web3-fintech',
      title: 'Web3, Zero-Knowledge & Next-Gen FinTech',
      tagline: 'Decentralized liquidity, privacy-preserving proofs & digital public goods',
      icon: 'Coins',
      description: 'Build high-throughput DeFi primitives, ZK-identity credentials for higher education, automated micro-settlement channels for cross-border student remittances, or verifiable on-chain audits.',
      bounties: '₹90,000 Track Pool',
      examples: ['ZK-Rollup micropayments for IoT data markets', 'Zero-knowledge credential verification for universities', 'Account abstraction smart wallet with social recovery']
    },
    {
      id: 'climate-iot',
      title: 'Climate-Tech & Planetary Systems',
      tagline: 'Precision agriculture, smart grid telemetry & carbon traceability',
      icon: 'Globe',
      description: 'Harness IoT sensor arrays, LoRaWAN mesh communication, and satellite earth observation imagery to optimize clean energy distribution, monitor micro-climates, and reduce agricultural water loss.',
      bounties: '₹80,000 Track Pool',
      examples: ['LoRa sensor mesh for soil salinity & water stress tracking', 'AI dispatch system for decentralized solar micro-grids', 'Decentralized lifecycle tracking for e-waste recyclers']
    },
    {
      id: 'open-innovation',
      title: 'Open Innovation & Planetary Frontier',
      tagline: 'Moonshot ideas tackling healthcare, accessibility, and cyber defense',
      icon: 'Rocket',
      description: 'A blue-sky track for radical ideas that defy traditional categorizations. From brain-computer interfaces and haptic assistive tools to resilient mesh networking and quantum computing simulators.',
      bounties: '₹80,000 Track Pool',
      examples: ['Low-cost assistive haptic navigation for visually impaired', 'P2P decentralized disaster comms without cellular towers', 'Automated security patch synthesis for open source repos']
    }
  ],
  timeline: [
    {
      phase: 'STAGE 01',
      time: 'Day 1 // 10:00 AM',
      title: 'Orbital Ignition & Problem Statement Reveal',
      desc: 'Hackers assemble in the central launch bay. Briefing on sponsor bounties, cloud credits, and hardware distribution.'
    },
    {
      phase: 'STAGE 02',
      time: 'Day 1 // 06:00 PM',
      title: 'Checkpoint Alpha — Architecture & Design Audit',
      desc: 'Jury round 1: Industry architects inspect code repositories, system design schemas, and user problem validation.'
    },
    {
      phase: 'STAGE 03',
      time: 'Day 2 // 02:00 AM',
      title: 'Midnight Commits & Red Bull Surge',
      desc: 'Late-night mini-challenges, bug-bounty speed trials, midnight pizza feast, and impromptu gaming jams.'
    },
    {
      phase: 'STAGE 04',
      time: 'Day 2 // 03:00 PM',
      title: 'Checkpoint Beta — Functional Prototype Review',
      desc: 'Midway code freeze. Mentors stress-test API payloads, edge latency, and UI workflows.'
    },
    {
      phase: 'STAGE 05',
      time: 'Day 3 // 08:00 AM',
      title: 'Final Code Freeze & Demo Submissions',
      desc: 'GitHub repositories locked. Video demonstrations uploaded and telemetry metrics audited.'
    },
    {
      phase: 'STAGE 06',
      time: 'Day 3 // 11:30 AM',
      title: 'Grand Pitch Telemetry & Winner Felicitations',
      desc: 'Top 10 finalist squads pitch live on the main auditorium stage before VC partners, founders, and IIIT faculty.'
    }
  ],
  perks: [
    '₹3.5L+ Direct Cash Pool',
    'Free Food, Energy Drinks & Accommodations for 3 Days',
    'Direct Fast-Track Interviews with Tech Unicorns & VC Funds',
    'Exclusive Hack2Future Orbital Hoodie & Collector Swag Kit',
    'AWS & GitHub Cloud Credits valued at over $10,000 per team',
    'Official Certificate of Honor from IIIT Dharwad'
  ]
};

export const allEventsList: EventItem[] = islandDaysData.flatMap(day => day.events);
