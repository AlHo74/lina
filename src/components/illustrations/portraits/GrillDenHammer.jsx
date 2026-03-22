export default function GrillDenHammer() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-grill">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="13"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-grill">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-grill {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-grill { animation: bounce-in-grill 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-grill">
        <circle cx="40" cy="40" r="36" fill="#E74C3C"/>
        <g clipPath="url(#circle-clip-grill)" filter="url(#rough-grill)">
          {/* Orange-red background */}
          <rect width="80" height="80" fill="#E74C3C"/>
          {/* BBQ tongs peeking from bottom */}
          <path d="M52 70 L54 58 L56 58 L58 70" fill="#C0C0C0" stroke="#2D1B4E" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M54 60 Q58 56 62 60" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round"/>
          <path d="M60 70 L62 58" fill="none" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round"/>
          {/* Neck */}
          <rect x="32" y="50" width="14" height="12" rx="3" fill="#B07040"/>
          {/* Head - big and round */}
          <ellipse cx="40" cy="40" rx="20" ry="20" fill="#B07040" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Backwards red cap */}
          <path d="M20 36 Q20 24 40 22 Q60 24 60 36" fill="#CC1100" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Cap brim (backwards - at back) */}
          <path d="M20 36 Q18 34 16 30 Q14 26 18 24 Q20 30 24 34" fill="#CC1100" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Cap details */}
          <path d="M30 26 Q40 24 50 26" fill="none" stroke="#990000" strokeWidth="1.5"/>
          {/* Gold chain */}
          <path d="M26 52 Q28 48 32 50 Q36 52 40 50 Q44 48 48 50 Q52 52 54 48" fill="none" stroke="#F1C40F" strokeWidth="3" strokeLinecap="round"/>
          {/* Chain links */}
          <circle cx="32" cy="50" r="2" fill="none" stroke="#F1C40F" strokeWidth="2"/>
          <circle cx="40" cy="50" r="2" fill="none" stroke="#F1C40F" strokeWidth="2"/>
          <circle cx="48" cy="50" r="2" fill="none" stroke="#F1C40F" strokeWidth="2"/>
          {/* Large round sunglasses */}
          <circle cx="32" cy="40" r="8" fill="#1A1A00" stroke="#D4AF00" strokeWidth="2.5"/>
          <circle cx="48" cy="40" r="8" fill="#1A1A00" stroke="#D4AF00" strokeWidth="2.5"/>
          {/* Bridge of glasses */}
          <path d="M40 40 L40 40" fill="none" stroke="#D4AF00" strokeWidth="2"/>
          <line x1="40" y1="40" x2="40" y2="40" stroke="#D4AF00" strokeWidth="3"/>
          <path d="M40 39 Q40 41 40 41" fill="none" stroke="#D4AF00" strokeWidth="2" strokeLinecap="round"/>
          {/* actually draw the bridge */}
          <rect x="39" y="38.5" width="2" height="3" rx="1" fill="#D4AF00"/>
          {/* Temple arms */}
          <line x1="24" y1="40" x2="20" y2="39" stroke="#D4AF00" strokeWidth="2"/>
          <line x1="56" y1="40" x2="60" y2="39" stroke="#D4AF00" strokeWidth="2"/>
          {/* Reflection in sunglasses */}
          <path d="M28 37 Q30 35 32 37" fill="none" stroke="#444400" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <path d="M44 37 Q46 35 48 37" fill="none" stroke="#444400" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          {/* Menacing but dopey mouth */}
          <path d="M32 50 Q40 55 48 50" fill="none" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Dopey detail - slight overbite */}
          <rect x="36" y="49" width="8" height="5" rx="2" fill="white" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Eyebrows over glasses - menacing */}
          <path d="M24 31 Q32 28 36 32" fill="none" stroke="#5C2D00" strokeWidth="3" strokeLinecap="round"/>
          <path d="M44 32 Q48 28 56 31" fill="none" stroke="#5C2D00" strokeWidth="3" strokeLinecap="round"/>
          {/* Stubble */}
          <circle cx="35" cy="52" r="1" fill="#8B5030" opacity="0.5"/>
          <circle cx="38" cy="53" r="1" fill="#8B5030" opacity="0.5"/>
          <circle cx="42" cy="53" r="1" fill="#8B5030" opacity="0.5"/>
          <circle cx="45" cy="52" r="1" fill="#8B5030" opacity="0.5"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-grill)"/>
      </g>
    </svg>
  )
}
