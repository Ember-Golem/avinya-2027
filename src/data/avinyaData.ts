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
  clubs?: string[];
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
        id: 'code-royale',
        day: 1,
        title: 'Code Royale',
        tagline: '3v3 Relay Knockout Competitive Programming Showdown',
        category: 'Technical',
        islandSector: 'The Last Outpost',
        time: '10:00 AM - 2:00 PM',
        date: 'March 12, 2027',
        venue: '260 Seater',
        prizePool: '₹35,000',
        teamSize: '3v3 Squads',
        clubs: ['Return 0', 'OS Code', 'MSA'],
        description:
          'A fast-paced 3v3 competitive programming showdown featuring a standard qualification round followed by a relay-style knockout where every accepted submission forces a coder switch. Solve fast, strategize smart, and outlast the competition.',
        rules: [
          'Teams must consist of exactly 3 members competing as a coordinated squad.',
          'Round 1: Speed qualification round solving algorithmic and data structure problems.',
          'Round 2: Relay knockout bracket — every accepted test-case verdict triggers an immediate mandatory coder swap.',
          'Permitted languages: C++, Python 3, Java, and Rust.',
          'Strict automated anti-plagiarism checks on all code submissions.'
        ],
        coordinators: [
          { name: 'Aditya Sharma', phone: '+91 98451 10293', role: 'Return 0 Club Lead' },
          { name: 'Rohan Kulkarni', phone: '+91 97412 88471', role: 'OS Code Convener' }
        ],
        registrationLink: '#register',
        iconName: 'Code',
        featured: true,
        themeAccent: '#D9531E',
        registrationOpen: true
      },
      {
        id: 'ai-arcade',
        day: 1,
        title: 'AI Arcade',
        tagline: 'Reverse-Prompting, Constraint Bypass & RAG Treasure Hunt',
        category: 'Technical',
        islandSector: 'The Last Outpost',
        time: '11:00 AM - 5:00 PM',
        date: 'March 12, 2027',
        venue: '260 Seater',
        prizePool: '₹30,000',
        teamSize: '2 Members',
        clubs: ['AccelAirate', 'IEEE'],
        description:
          'A two-stage competitive AI challenge. Stage 1 features Visual Reverse-Prompting and Logical Constraint Bypass, testing creativity, prompt engineering, and problem-solving. Top teams advance to a time-bound RAG Treasure Hunt exploring document collections with effective queries.',
        rules: [
          'Team capacity: Exactly 2 participants per squad.',
          'Stage 1: Reverse-engineer multi-modal diffusion prompts and craft injection payloads to bypass system guardrails.',
          'Stage 2: Time-bound RAG Treasure Hunt querying multi-gigabyte corpus under precision and recall limits.',
          'Submissions evaluated automatically via embedding cosine similarity and query latency.'
        ],
        coordinators: [
          { name: 'Sneha Patil', phone: '+91 98860 33412', role: 'AccelAirate Lead' },
          { name: 'Tanvi Deshmukh', phone: '+91 99012 44589', role: 'IEEE Student Branch' }
        ],
        registrationLink: '#register',
        iconName: 'Cpu',
        featured: true,
        themeAccent: '#E6C280',
        registrationOpen: true
      },
      {
        id: 'monopoly',
        day: 1,
        title: 'Monopoly',
        tagline: 'Real-Time Stock Market Simulation & Capital Warfare',
        category: 'Technical',
        islandSector: 'The Last Outpost',
        time: '2:00 PM - 6:00 PM',
        date: 'March 12, 2027',
        venue: 'Incubation Hall',
        prizePool: '₹35,000',
        teamSize: '3-4 Members (30 Teams)',
        clubs: ['Inquizitive', 'ECell', 'QFis'],
        description:
          'A stock-market simulation where 30 teams of 3-4 members compete to grow ₹1,00,000 virtual capital. Invest in 8 companies through 12 market rounds with interconnected news and 4 quiz rounds. Read. Predict. Invest. Win.',
        rules: [
          'Strict cap of 30 teams (3-4 participants each); allocated on verified registration.',
          'Starting virtual capital: ₹1,00,000 per team across 8 simulated sectoral tickers.',
          '12 fast-paced market rounds featuring real-time economic breaking news and sentiment shifts.',
          '4 blitz quiz rounds granting insider regulatory hints and trading fee exemptions.',
          'Highest final portfolio valuation wins the championship laurels.'
        ],
        coordinators: [
          { name: 'Karthik Rao', phone: '+91 96112 77410', role: 'QFis Head' },
          { name: 'Varun Nair', phone: '+91 97410 55231', role: 'ECell Lead' }
        ],
        registrationLink: '#register',
        iconName: 'Coins',
        featured: true,
        themeAccent: '#D9531E',
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
        id: 'yukti-2',
        day: 2,
        title: 'Yukti 2.0',
        tagline: 'FPGA QFT Gate Sequencer & IBM Quantum Hardware Hackathon',
        category: 'Technical',
        islandSector: 'The Pandemonium',
        time: '9:00 AM - 5:00 PM',
        date: 'March 13, 2027',
        venue: '260 Seater / Incubation Hall',
        prizePool: '₹50,000',
        teamSize: '2-4 Members',
        clubs: ['GND 0', 'IRIS.QC'],
        description:
          'Design a hardware module to generate QFT gate sequences, connect it with Qiskit, and execute the resulting circuits on real IBM Quantum hardware. Brings together FPGA design, quantum algorithms, and real-world quantum computing in a 6-hour hackathon.',
        rules: [
          'Teams of 2-4 members with hardware HDL (Verilog/VHDL) and Python proficiency.',
          'Phase 1: Synthesize gate sequencer module on target FPGA development boards.',
          'Phase 2: Bridge FPGA telemetry output with IBM Quantum Qiskit runtime.',
          'Live circuit execution on IBM Quantum superconducting QPUs; benchmarked on fidelity and circuit depth.'
        ],
        coordinators: [
          { name: 'Pooja Nair', phone: '+91 91080 88210', role: 'IRIS.QC Quantum Lead' },
          { name: 'Sameer Joshi', phone: '+91 98860 44912', role: 'GND 0 Hardware Head' }
        ],
        registrationLink: '#register',
        iconName: 'Cpu',
        featured: true,
        themeAccent: '#00F5D4',
        registrationOpen: true
      },
      {
        id: 'mega-rush-2',
        day: 2,
        title: 'Mega Rush 2.0',
        tagline: 'Inter-College Multi-Title Esports Stadium Championship',
        category: 'Gaming',
        islandSector: 'The Pandemonium',
        time: '10:00 AM - 6:00 PM',
        date: 'March 13, 2027',
        venue: '2×120 Seater & 240 Seater',
        prizePool: '₹50,000',
        teamSize: 'Squad / Solo',
        clubs: ['Techniosys'],
        description:
          'High-energy campus-wide and inter-college e-sports tournament fostering teamwork, strategic thinking, and competitive spirit across premier gaming titles in a professional tournament arena.',
        rules: [
          'Premier titles: Valorant 5v5, BGMI Quad Squads, and Rocket League.',
          'Single-elimination group stages advancing into Best-of-3 stadium finals.',
          'Live shoutcasting with caster desk, multi-cam replays, and auditorium OLED viewing screens.',
          'Rigorous anti-cheat validation and hardware peripherals check prior to kickoff.'
        ],
        coordinators: [
          { name: 'Karthik Rao', phone: '+91 96112 55431', role: 'Techniosys Lead' },
          { name: 'Shashank Pai', phone: '+91 98865 11982', role: 'Tournament Director' }
        ],
        registrationLink: '#register',
        iconName: 'Gamepad2',
        featured: true,
        themeAccent: '#FF007F',
        registrationOpen: true
      },
      {
        id: 'build-with-gemma',
        day: 2,
        title: 'Build with Gemma: Agentic Edition',
        tagline: 'Autonomous AI Agents Powered by Google Gemma & Stitch',
        category: 'Technical',
        islandSector: 'The Pandemonium',
        time: '10:00 AM - 5:00 PM',
        date: 'March 13, 2027',
        venue: '260 Seater, Labs L405, L406, L407, C404',
        prizePool: '₹60,000 + Google Swag',
        teamSize: '2-4 Members',
        clubs: ['GDG', 'Velocity', 'DSAI Soc'],
        description:
          '6-hour agentic AI competition powered by Google Gemma, where teams build autonomous AI agents capable of reasoning, using tools, and completing evolving real-world challenges. Special award for the best agent interface built using Google Stitch.',
        rules: [
          'Teams of 2 to 4 developers.',
          'Autonomous agents must leverage Google Gemma family models for reasoning and tool-calling execution.',
          'Dynamic multi-stage objectives introduced at 2-hour intervals simulating evolving production incidents.',
          'Special sponsored award for best UI/UX agent cockpit built with Google Stitch.',
          'Final evaluation consists of a 4-minute live working demonstration + 2-minute jury Q&A.'
        ],
        coordinators: [
          { name: 'Aryan Mehta', phone: '+91 99001 44321', role: 'GDG Lead Organizer' },
          { name: 'Divya Iyer', phone: '+91 98452 77120', role: 'DSAI Soc Convener' }
        ],
        registrationLink: '#register',
        iconName: 'Zap',
        featured: true,
        themeAccent: '#FF007F',
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
        id: 'kernel-panic',
        day: 3,
        title: 'Kernel Panic',
        tagline: 'The Grand Linux Festival, Custom Rice Showcase & Kernel Hack',
        category: 'Technical',
        islandSector: 'The Carnival Island',
        time: '10:00 AM - 5:00 PM',
        date: 'March 14, 2027',
        venue: 'A - 120 Seater & Both 260 Seaters',
        prizePool: '₹40,000',
        teamSize: 'Open / 1-3 Members',
        clubs: ['OS Code', 'Velocity'],
        description:
          'Grand Linux Festival featuring a Linux users meetup, custom desktop rice showcase, and a mini-hackathon solving real-world Linux workflow issues and building custom features.',
        rules: [
          'Desktop Rice Showcase: Judged on ergonomics, minimalism, custom window manager scripts, and dotfiles craftsmanship.',
          'Kernel Hack: Fix real-world Linux workflow bugs, patch kernel modules, or write lightweight eBPF system instrumentation tools.',
          'All software contributions must be publicly committed to GitHub under an OSI-approved open source license.'
        ],
        coordinators: [
          { name: 'Gautam Bhat', phone: '+91 98453 88120', role: 'OS Code Lead' },
          { name: 'Pooja Hegde', phone: '+91 97402 77319', role: 'Velocity Core' }
        ],
        registrationLink: '#register',
        iconName: 'Terminal',
        featured: true,
        themeAccent: '#FFB703',
        registrationOpen: true
      },
      {
        id: 'grand-carnival-pro-show',
        day: 3,
        title: 'Grand Carnival Pro-Show & Concert Night',
        tagline: 'Star-studded headline music festival featuring India’s top artists',
        category: 'Cultural',
        islandSector: 'The Carnival Island',
        time: '06:30 PM - 11:00 PM',
        date: 'March 14, 2027',
        venue: 'Main Stadium Festival Grounds',
        prizePool: 'Headline Attraction',
        teamSize: 'All Voyagers Welcome',
        clubs: ['Avinya Cultural Council'],
        description:
          'The monumental culmination of Avinya 2027. Featuring a dual headline performance with India’s top contemporary indie-rock powerhouse followed by a world-class electronic DJ set with laser pyrotechnics and confetti cannons.',
        rules: [
          'Festival wristband and verified student/delegate ID required at the gate.',
          'Gates open at 05:30 PM; strict security frisking at outer perimeter.',
          'Free entry for all registered Avinya voyagers and fest delegates.'
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
      }
    ]
  }
];

export const allEventsList: EventItem[] = islandDaysData.flatMap((day) => day.events);
