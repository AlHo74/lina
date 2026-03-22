export default function Marley() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-marley">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="37"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-marley">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-marley {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes wag-marley {
            0%, 100% { transform: rotate(-10deg); }
            50% { transform: rotate(10deg); }
          }
          .portrait-root-marley { animation: bounce-in-marley 0.4s cubic-bezier(.34,1.56,.64,1) both; }
          .tongue-marley { animation: wag-marley 0.8s ease-in-out infinite; transform-box: fill-box; transform-origin: top center; }
        `}</style>
      </defs>
      <g className="portrait-root-marley">
        <circle cx="40" cy="40" r="36" fill="#F9E84A"/>
        <g clipPath="url(#circle-clip-marley)" filter="url(#rough-marley)">
          {/* Sunny yellow background */}
          <rect width="80" height="80" fill="#F9E84A"/>
          {/* Floppy ears */}
          <ellipse cx="16" cy="44" rx="10" ry="16" fill="#C87010" stroke="#2D1B4E" strokeWidth="2"/>
          <ellipse cx="64" cy="44" rx="10" ry="16" fill="#C87010" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Inner ear */}
          <ellipse cx="16" cy="44" rx="6" ry="11" fill="#E8901A" opacity="0.7"/>
          <ellipse cx="64" cy="44" rx="6" ry="11" fill="#E8901A" opacity="0.7"/>
          {/* Main head - fluffy golden fur */}
          <circle cx="40" cy="38" r="24" fill="#E8A020" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Fluffy fur texture on face */}
          <path d="M18 34 Q20 28 26 24" fill="none" stroke="#D49010" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path d="M62 34 Q60 28 54 24" fill="none" stroke="#D49010" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path d="M24 50 Q22 56 20 58" fill="none" stroke="#D49010" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          <path d="M56 50 Q58 56 60 58" fill="none" stroke="#D49010" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
          {/* Lighter muzzle area */}
          <ellipse cx="40" cy="46" rx="14" ry="10" fill="#F0C060" opacity="0.8"/>
          {/* ENORMOUS dark brown eyes - most of the face */}
          <ellipse cx="30" cy="35" rx="10" ry="11" fill="white" stroke="#2D1B4E" strokeWidth="2"/>
          <circle cx="31" cy="36" r="8" fill="#5C2D00"/>
          <circle cx="28" cy="32" r="3" fill="#1A0A00"/>
          <circle cx="29" cy="31" r="1.5" fill="white"/>
          <circle cx="34" cy="34" r="1" fill="white" opacity="0.6"/>
          <ellipse cx="50" cy="35" rx="10" ry="11" fill="white" stroke="#2D1B4E" strokeWidth="2"/>
          <circle cx="51" cy="36" r="8" fill="#5C2D00"/>
          <circle cx="48" cy="32" r="3" fill="#1A0A00"/>
          <circle cx="49" cy="31" r="1.5" fill="white"/>
          <circle cx="54" cy="34" r="1" fill="white" opacity="0.6"/>
          {/* Eyebrow fluffs */}
          <path d="M22 24 Q30 20 38 24" fill="none" stroke="#8B5010" strokeWidth="3" strokeLinecap="round"/>
          <path d="M42 24 Q50 20 58 24" fill="none" stroke="#8B5010" strokeWidth="3" strokeLinecap="round"/>
          {/* Nose - big black doggy nose */}
          <ellipse cx="40" cy="46" rx="5" ry="3.5" fill="#1A1A1A" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Nostril dots */}
          <circle cx="37.5" cy="46" r="1.2" fill="#333"/>
          <circle cx="42.5" cy="46" r="1.2" fill="#333"/>
          {/* Tongue hanging out - animated */}
          <g className="tongue-marley">
            <path d="M34 50 Q40 52 46 50 Q48 58 40 62 Q32 58 34 50 Z" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1.5"/>
            {/* Tongue center line */}
            <line x1="40" y1="51" x2="40" y2="61" stroke="#E0509A" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          {/* Puppy spots/freckles */}
          <circle cx="25" cy="48" r="1.5" fill="#C87010" opacity="0.6"/>
          <circle cx="55" cy="48" r="1.5" fill="#C87010" opacity="0.6"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-marley)"/>
      </g>
    </svg>
  )
}
