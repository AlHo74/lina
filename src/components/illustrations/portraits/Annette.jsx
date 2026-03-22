export default function Annette() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-annette">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="19"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-annette">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-annette {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-annette { animation: bounce-in-annette 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-annette">
        <circle cx="40" cy="40" r="36" fill="#16A085"/>
        <g clipPath="url(#circle-clip-annette)" filter="url(#rough-annette)">
          {/* Soft teal background */}
          <rect width="80" height="80" fill="#16A085"/>
          {/* Light blue blazer */}
          <path d="M18 70 Q22 58 40 55 Q58 58 62 70 L65 80 L15 80 Z" fill="#5DADE2" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Blazer lapels */}
          <path d="M34 55 L30 68 L36 62 Z" fill="#AED6F1" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M46 55 L50 68 L44 62 Z" fill="#AED6F1" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Neck */}
          <rect x="34" y="49" width="12" height="10" rx="3" fill="#F4C89A"/>
          {/* Head */}
          <ellipse cx="40" cy="38" rx="17" ry="18" fill="#F4C89A" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Neat shoulder-length brown hair */}
          <path d="M23 36 Q22 20 40 18 Q58 20 57 36" fill="#6B3A2A" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Hair sides flowing down to shoulders */}
          <path d="M23 36 Q20 44 22 56 Q25 60 28 58 Q26 50 24 42" fill="#6B3A2A" stroke="#2D1B4E" strokeWidth="1.5"/>
          <path d="M57 36 Q60 44 58 56 Q55 60 52 58 Q54 50 56 42" fill="#6B3A2A" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Hair shine */}
          <path d="M30 20 Q35 18 38 22" fill="none" stroke="#9B6050" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
          {/* Round wire-frame glasses */}
          <circle cx="33" cy="38" r="6.5" fill="none" stroke="#8B7040" strokeWidth="1.5"/>
          <circle cx="47" cy="38" r="6.5" fill="none" stroke="#8B7040" strokeWidth="1.5"/>
          {/* Lens tint */}
          <circle cx="33" cy="38" r="6.5" fill="#E8F8F5" opacity="0.3"/>
          <circle cx="47" cy="38" r="6.5" fill="#E8F8F5" opacity="0.3"/>
          {/* Bridge */}
          <line x1="39.5" y1="38" x2="40.5" y2="38" stroke="#8B7040" strokeWidth="1.5"/>
          {/* Temple arms */}
          <line x1="26.5" y1="38" x2="23" y2="39" stroke="#8B7040" strokeWidth="1.5"/>
          <line x1="53.5" y1="38" x2="57" y2="39" stroke="#8B7040" strokeWidth="1.5"/>
          {/* Eyes behind glasses - warm, genuine */}
          <ellipse cx="33" cy="38" rx="4" ry="4.5" fill="white"/>
          <circle cx="33" cy="39" r="2.8" fill="#5C3010"/>
          <circle cx="34" cy="37.5" r="1" fill="white"/>
          <ellipse cx="47" cy="38" rx="4" ry="4.5" fill="white"/>
          <circle cx="47" cy="39" r="2.8" fill="#5C3010"/>
          <circle cx="48" cy="37.5" r="1" fill="white"/>
          {/* Eyebrows - natural, relaxed */}
          <path d="M28 30 Q33 28.5 37 30" fill="none" stroke="#5C3010" strokeWidth="2" strokeLinecap="round"/>
          <path d="M43 30 Q47 28.5 52 30" fill="none" stroke="#5C3010" strokeWidth="2" strokeLinecap="round"/>
          {/* Genuine warm smile */}
          <path d="M33 47 Q40 54 47 47" fill="none" stroke="#2D1B4E" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Smile dimples */}
          <circle cx="31" cy="47" r="1.5" fill="#E0A080" opacity="0.6"/>
          <circle cx="49" cy="47" r="1.5" fill="#E0A080" opacity="0.6"/>
          {/* Nose */}
          <path d="M38 43 Q40 45 42 43" fill="none" stroke="#C08060" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Subtle rosy cheeks */}
          <ellipse cx="27" cy="43" rx="4" ry="2.5" fill="#FFB3B3" opacity="0.5"/>
          <ellipse cx="53" cy="43" rx="4" ry="2.5" fill="#FFB3B3" opacity="0.5"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-annette)"/>
      </g>
    </svg>
  )
}
