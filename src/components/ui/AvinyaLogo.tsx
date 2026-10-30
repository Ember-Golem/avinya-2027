import React from 'react';

export interface AvinyaLogoProps {
  className?: string;
  onClick?: () => void;
}

/**
 * AVINYA 2027 Custom Mathematical Vector Logo
 * Built from pure SVG path geometry constants (UNIT, STROKE, CAP_HEIGHT, BASELINE).
 * Completely font-independent, scalable via Tailwind height classes, using currentColor.
 */
export const AvinyaLogo: React.FC<AvinyaLogoProps> = ({
  className = '',
  onClick,
}) => {
  // Grid constants
  const TOP = 20;
  const BASELINE = 100;
  const STROKE = 7;

  // Computed letter coordinates
  // A1: [20..76]
  const a1Apex = { x: 48, y: TOP };
  const a1Left = { x: 20, y: BASELINE };
  const a1Right = { x: 76, y: BASELINE };
  const a1CrossY = 72;

  // V: [96..152] with nautical compass notch
  const vLeft = { x: 96, y: TOP };
  const vRight = { x: 152, y: TOP };
  const vApex = { x: 124, y: BASELINE };

  // I: [176..196] with nautical diamond node
  const iX = 186;
  const iNodeY = 25;
  const iStemTop = 40;

  // N: [216..272]
  const nLTop = { x: 216, y: TOP };
  const nLBot = { x: 216, y: BASELINE };
  const nRTop = { x: 272, y: TOP };
  const nRBot = { x: 272, y: BASELINE };

  // Y: [292..348]
  const yL = { x: 292, y: TOP };
  const yR = { x: 348, y: TOP };
  const yFork = { x: 320, y: 62 };
  const yBot = { x: 320, y: BASELINE };

  // A2: [368..424]
  const a2Apex = { x: 396, y: TOP };
  const a2Left = { x: 368, y: BASELINE };
  const a2Right = { x: 424, y: BASELINE };
  const a2CrossY = 72;

  // '27 badge: [444..504]
  const badgeX = 444;

  return (
    <svg
      viewBox="0 0 514 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
      aria-label="AVINYA 2027"
      role={onClick ? 'button' : 'img'}
      onClick={onClick}
      className={`h-6 sm:h-7 md:h-9 w-auto shrink-0 select-none ${
        onClick ? 'cursor-pointer hover:opacity-80 active:scale-95' : ''
      } transition-opacity duration-200 ${className}`}
    >
      <title>AVINYA 2027</title>

      <g
        stroke="currentColor"
        strokeWidth={STROKE}
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {/* Letter A1 */}
        <path d={`M ${a1Left.x} ${a1Left.y} L ${a1Apex.x} ${a1Apex.y} L ${a1Right.x} ${a1Right.y}`} />
        <path d={`M 30 ${a1CrossY} L 66 ${a1CrossY}`} strokeWidth={STROKE * 0.8} />
        {/* Nautical compass diamond at A1 crossbar */}
        <polygon
          points={`${a1Apex.x},${a1CrossY - 5} ${a1Apex.x + 4},${a1CrossY} ${a1Apex.x},${a1CrossY + 5} ${a1Apex.x - 4},${a1CrossY}`}
          fill="currentColor"
          stroke="none"
        />

        {/* Letter V */}
        <path d={`M ${vLeft.x} ${vLeft.y} L ${vApex.x} ${vApex.y} L ${vRight.x} ${vRight.y}`} />
        {/* Inner nautical keel chevron */}
        <path
          d={`M ${vApex.x - 10} ${vApex.y - 20} L ${vApex.x} ${vApex.y - 6} L ${vApex.x + 10} ${vApex.y - 20}`}
          strokeWidth={STROKE * 0.5}
        />

        {/* Letter I */}
        <path d={`M ${iX} ${iStemTop} L ${iX} ${BASELINE}`} />
        {/* Nautical compass rose node */}
        <polygon
          points={`${iX},${iNodeY - 8} ${iX + 5},${iNodeY} ${iX},${iNodeY + 8} ${iX - 5},${iNodeY}`}
          fill="currentColor"
          stroke="none"
        />

        {/* Letter N */}
        <path d={`M ${nLBot.x} ${nLBot.y} L ${nLTop.x} ${nLTop.y} L ${nRBot.x} ${nRBot.y} L ${nRTop.x} ${nRTop.y}`} />

        {/* Letter Y */}
        <path d={`M ${yL.x} ${yL.y} L ${yFork.x} ${yFork.y} L ${yR.x} ${yR.y}`} />
        <path d={`M ${yFork.x} ${yFork.y} L ${yBot.x} ${yBot.y}`} />

        {/* Letter A2 */}
        <path d={`M ${a2Left.x} ${a2Left.y} L ${a2Apex.x} ${a2Apex.y} L ${a2Right.x} ${a2Right.y}`} />
        <path d={`M 378 ${a2CrossY} L 414 ${a2CrossY}`} strokeWidth={STROKE * 0.8} />
        {/* Nautical compass diamond at A2 crossbar */}
        <polygon
          points={`${a2Apex.x},${a2CrossY - 5} ${a2Apex.x + 4},${a2CrossY} ${a2Apex.x},${a2CrossY + 5} ${a2Apex.x - 4},${a2CrossY}`}
          fill="currentColor"
          stroke="none"
        />
      </g>

      {/* '27 Cartouche Badge */}
      <g transform={`translate(${badgeX}, 34)`}>
        {/* Cartouche Frame */}
        <rect
          x="0"
          y="0"
          width="54"
          height="54"
          rx="6"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="currentColor"
          fillOpacity="0.08"
        />
        {/* Corner Accents */}
        <line x1="0" y1="8" x2="8" y2="0" stroke="currentColor" strokeWidth="2" />
        <line x1="46" y1="54" x2="54" y2="46" stroke="currentColor" strokeWidth="2" />

        {/* '27 Numerals in vector geometry */}
        <path
          d="M 12 18 L 14 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* '2' */}
        <path
          d="M 18 20 C 18 16, 26 16, 26 21 C 26 26, 18 31, 18 36 L 27 36"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* '7' */}
        <path
          d="M 32 18 L 44 18 L 36 36"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export default AvinyaLogo;
