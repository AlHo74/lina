export default function Dario() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-dario">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="43"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-dario">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-dario {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-dario { animation: bounce-in-dario 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-dario">
        <circle cx="40" cy="40" r="36" fill="#E67E22"/>
        <g clipPath="url(#circle-clip-dario)" filter="url(#rough-dario)">
          {/* Warm orange background */}
          <rect width="80" height="80" fill="#E67E22"/>
          {/* Sketchbook visible at bottom edge */}
          <rect x="5" y="62" width="30" height="22" rx="2" fill="#F5F0E8" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Sketchbook spine */}
          <rect x="5" y="62" width="5" height="22" fill="#8B4513" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Sketchbook lines/doodles */}
          <line x1="14" y1="67" x2="32" y2="67" stroke="#C8B890" strokeWidth="1"/>
          <line x1="14" y1="71" x2="28" y2="71" stroke="#C8B890" strokeWidth="1"/>
          <path d="M14 75 Q18 72 22 75 Q26 78 30 75" fill="none" stroke="#C8B890" strokeWidth="1" strokeLinecap="round"/>
          {/* A pencil on the sketchbook */}
          <rect x="32" y="65" width="4" height="16" rx="1" fill="#F1C40F" stroke="#2D1B4E" strokeWidth="1" transform="rotate(-15, 34, 73)"/>
          <path d="M30 74 L33 78 L35 76 Z" fill="#F4A460" transform="rotate(-15, 34, 73)"/>
          {/* Neck */}
          <rect x="34" y="50" width="12" height="10" rx="3" fill="#C8906A"/>
          {/* Head - medium skin */}
          <ellipse cx="40" cy="38" rx="17" ry="18" fill="#C8906A" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Messy-cool hair */}
          <path d="M23 34 Q22 18 40 16 Q58 18 57 34 Q52 20 40 20 Q28 20 23 34 Z" fill="#4A3010" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Hair wisps for messy-cool look */}
          <path d="M24 30 Q20 26 22 20" fill="none" stroke="#4A3010" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M38 18 Q36 12 40 10 Q44 12 42 18" fill="#4A3010" stroke="#4A3010" strokeWidth="1"/>
          <path d="M46 20 Q50 14 54 16" fill="none" stroke="#4A3010" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M56 30 Q60 26 58 20" fill="none" stroke="#4A3010" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Round-ish glasses - slightly nerdy but cool */}
          <circle cx="33" cy="38" r="6.5" fill="none" stroke="#5C3010" strokeWidth="1.5"/>
          <circle cx="47" cy="38" r="6.5" fill="none" stroke="#5C3010" strokeWidth="1.5"/>
          <circle cx="33" cy="38" r="6.5" fill="#FFF4D0" opacity="0.2"/>
          <circle cx="47" cy="38" r="6.5" fill="#FFF4D0" opacity="0.2"/>
          <line x1="39.5" y1="38" x2="40.5" y2="38" stroke="#5C3010" strokeWidth="1.5"/>
          <line x1="26.5" y1="38" x2="23" y2="38" stroke="#5C3010" strokeWidth="1.5"/>
          <line x1="53.5" y1="38" x2="57" y2="38" stroke="#5C3010" strokeWidth="1.5"/>
          {/* Eyes - knowing smirk */}
          <ellipse cx="33" cy="38" rx="4.5" ry="4.5" fill="white"/>
          <circle cx="33" cy="39" r="3" fill="#2C1A00"/>
          <circle cx="34" cy="37.5" r="1.1" fill="white"/>
          <ellipse cx="47" cy="38" rx="4.5" ry="4.5" fill="white"/>
          <circle cx="47" cy="39" r="3" fill="#2C1A00"/>
          <circle cx="48" cy="37.5" r="1.1" fill="white"/>
          {/* Eyebrows - one slightly raised - knowing look */}
          <path d="M28 30 Q33 28 38 30" fill="none" stroke="#3A2010" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M42 29 Q47 27.5 52 30" fill="none" stroke="#3A2010" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Corner smirk */}
          <path d="M34 47 Q38 50 44 46" fill="none" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Nose */}
          <path d="M38 43 Q40 45 42 43" fill="none" stroke="#9A6A4A" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Slight blush */}
          <ellipse cx="27" cy="43" rx="4" ry="2.5" fill="#FFB3B3" opacity="0.4"/>
          <ellipse cx="53" cy="43" rx="4" ry="2.5" fill="#FFB3B3" opacity="0.4"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-dario)"/>
      </g>
    </svg>
  )
}
