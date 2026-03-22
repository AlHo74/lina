export default function Alex() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-alex">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="23"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-alex">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-alex {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-alex { animation: bounce-in-alex 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-alex">
        <circle cx="40" cy="40" r="36" fill="#F39C12"/>
        <g clipPath="url(#circle-clip-alex)" filter="url(#rough-alex)">
          {/* Bright yellow background */}
          <rect width="80" height="80" fill="#F39C12"/>
          {/* Red polka-dot bow tie */}
          <path d="M28 58 L36 54 L28 50 Z" fill="#E74C3C" stroke="#2D1B4E" strokeWidth="1.5"/>
          <path d="M52 58 L44 54 L52 50 Z" fill="#E74C3C" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="40" cy="54" r="4" fill="#CC1100" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Polka dots on bow tie */}
          <circle cx="31" cy="54" r="1" fill="white" opacity="0.8"/>
          <circle cx="49" cy="54" r="1" fill="white" opacity="0.8"/>
          <circle cx="33" cy="57" r="1" fill="white" opacity="0.8"/>
          <circle cx="47" cy="57" r="1" fill="white" opacity="0.8"/>
          {/* Shirt collar */}
          <path d="M32 60 L36 54 L40 58 L44 54 L48 60" fill="none" stroke="#2D1B4E" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Neck */}
          <rect x="34" y="50" width="12" height="10" rx="3" fill="#F8F0E0"/>
          {/* Head - very pale */}
          <ellipse cx="40" cy="38" rx="18" ry="19" fill="#F8F0E0" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Wild flyaway hair - chaos */}
          <path d="M22 34 L18 20 L24 30 L22 16 L28 26 L26 12 L32 24 L30 10 L36 22 L36 10 L39 22 L40 8 L41 22 L44 10 L44 22 L50 10 L48 24 L54 12 L52 26 L58 16 L56 30 L62 20 L58 34" fill="#8B6030" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Hair chaos wisps */}
          <path d="M20 28 L14 24" fill="none" stroke="#8B6030" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M60 28 L66 24" fill="none" stroke="#8B6030" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M40 8 L38 2" fill="none" stroke="#8B6030" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Round glasses */}
          <circle cx="32" cy="38" r="7" fill="none" stroke="#4A3010" strokeWidth="2"/>
          <circle cx="48" cy="38" r="7" fill="none" stroke="#4A3010" strokeWidth="2"/>
          {/* Lens slight tint */}
          <circle cx="32" cy="38" r="7" fill="#FFF4D0" opacity="0.3"/>
          <circle cx="48" cy="38" r="7" fill="#FFF4D0" opacity="0.3"/>
          <line x1="39" y1="38" x2="41" y2="38" stroke="#4A3010" strokeWidth="1.5"/>
          <line x1="25" y1="38" x2="21" y2="38" stroke="#4A3010" strokeWidth="1.5"/>
          <line x1="55" y1="38" x2="59" y2="38" stroke="#4A3010" strokeWidth="1.5"/>
          {/* Eyes - enthusiastic wide open */}
          <ellipse cx="32" cy="38" rx="5" ry="5.5" fill="white"/>
          <circle cx="32" cy="39" r="3.5" fill="#2C1A00"/>
          <circle cx="33" cy="37" r="1.4" fill="white"/>
          <ellipse cx="48" cy="38" rx="5" ry="5.5" fill="white"/>
          <circle cx="48" cy="39" r="3.5" fill="#2C1A00"/>
          <circle cx="49" cy="37" r="1.4" fill="white"/>
          {/* HUGE stretched Jim Carrey grin - almost too wide */}
          <path d="M20 48 Q30 58 40 60 Q50 58 60 48" fill="white" stroke="#2D1B4E" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 48 Q30 52 40 53 Q50 52 60 48" fill="#FFB3B3"/>
          {/* Teeth lines */}
          <path d="M26 49 L27 54" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M30 49 L31 55" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M34 49 L35 56" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M40 49 L40 56" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M46 49 L45 56" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M50 49 L49 55" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M54 49 L53 54" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Eyebrows - raised high in excitement */}
          <path d="M25 28 Q32 24 39 28" fill="none" stroke="#5C3010" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M41 28 Q48 24 55 28" fill="none" stroke="#5C3010" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-alex)"/>
      </g>
    </svg>
  )
}
