export type FestEvent = {
  name: string;
  clubs: string[];
  day: 1 | 2 | 3;
  time: string;
  venue: string;
  tagline?: string;
  description: string;
};

export const EVENTS: FestEvent[] = [
  {
    name: 'Monopoly',
    clubs: ['Inquizitive', 'ECell', 'QFis'],
    day: 1,
    time: '2 PM – 6 PM',
    venue: 'Incubation Hall',
    tagline: 'Read. Predict. Invest. Win.',
    description:
      'A stock-market simulation where 30 teams of 3–4 compete to grow ₹1,00,000 of virtual capital across 8 companies and 12 market rounds. Each round brings interconnected news, then price updates. Buy, sell or hold. 4 quiz rounds add capital. Highest final portfolio wins.',
  },
  {
    name: 'Code Royale',
    clubs: ['Return 0', 'OS Code', 'MSA'],
    day: 1,
    time: '10 AM – 2 PM',
    venue: '260 Seater',
    description:
      'A fast-paced 3v3 competitive programming showdown: a standard qualification round, then a relay-style knockout where every accepted submission forces a coder switch.',
  },
  {
    name: 'AI Arcade',
    clubs: ['AccelAIrate', 'IEEE'],
    day: 1,
    time: '11 AM – 5 PM',
    venue: '260 Seater',
    description:
      'Teams of two. Stage 1: Visual Reverse-Prompting and Logical Constraint Bypass. Top teams advance to a time-bound RAG Treasure Hunt, using effective queries over a document collection to solve challenges.',
  },
  {
    name: 'Yukti 2.0',
    clubs: ['GND_0', 'IRIS', 'QC'],
    day: 2,
    time: '9 AM – 5 PM',
    venue: '260 Seater / Incubation Hall',
    description:
      'A 6-hour hackathon: design a hardware module that generates QFT gate sequences, connect it to Qiskit, and run the circuits on real IBM Quantum hardware. FPGA design meets quantum computing.',
  },
  {
    name: 'Mega Rush 2.0',
    clubs: ['Techniosys'],
    day: 2,
    time: '10 AM – 6 PM',
    venue: 'Multiple venues: 260 Seater, labs L405–L407, C404', // TODO: confirm mapping with organisers
    description:
      'Campus-wide e-sports tournament in popular titles, built around teamwork, strategy and competitive spirit in a professional tournament setting.',
  },
  {
    name: 'Build with Gemma: Agentic Edition',
    clubs: ['GDG', 'Velocity', 'DSAI Soc'],
    day: 2,
    time: '10 AM – 5 PM',
    venue: 'Both 260 Seater halls', // TODO: confirm
    description:
      'A 6-hour agentic AI competition powered by Google Gemma. Build autonomous agents that reason, use tools and solve evolving real-world challenges. Judged on task completion, agent intelligence, reliability and UX, with a special award for the best agent interface built with Google Stitch.',
  },
  {
    name: 'Kernel Panic',
    clubs: ['OS Code', 'Velocity'],
    day: 3,
    time: '10 AM – 5 PM',
    venue: '120 Seater',
    tagline: 'Grand Linux Festival',
    description:
      'A Linux users meetup, rice showcase and a mini hackathon with many small problem statements on fixing issues and adding features across the Linux ecosystem.',
  },
];
