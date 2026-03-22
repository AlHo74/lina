export default function Sophie() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-sophie">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="7"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-sophie">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-sophie {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-sophie { animation: bounce-in-sophie 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-sophie">
        <circle cx="40" cy="40" r="36" fill="#2980B9"/>
        <g clipPath="url(#circle-clip-sophie)" filter="url(#rough-sophie)">
          {/* Royal blue background */}
          <rect width="80" height="80" fill="#2980B9"/>
          {/* Silver armor at bottom */}
          <path d="M15 65 Q20 58 40 56 Q60 58 65 65 L68 80 L12 80 Z" fill="#C0C0C0" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M30 56 L30 80" stroke="#A0A0A0" strokeWidth="2"/>
          <path d="M50 56 L50 80" stroke="#A0A0A0" strokeWidth="2"/>
          {/* Raised fist edge */}
          <path d="M62 52 L70 44 Q74 40 72 36 Q70 32 66 36 L64 40" fill="#D4956A" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M64 40 Q62 42 60 44 L58 52 L62 52" fill="#D4956A" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Neck */}
          <rect x="34" y="49" width="12" height="10" rx="3" fill="#D4956A"/>
          {/* Head */}
          <ellipse cx="40" cy="38" rx="18" ry="19" fill="#D4956A" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Messy wavy hair */}
          <path d="M22 35 Q20 18 30 14 Q35 10 40 12 Q50 10 54 16 Q60 20 58 35 Q54 20 50 18 Q46 12 40 14 Q34 12 30 18 Q26 22 22 35 Z" fill="#8B6914" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Hair wisps */}
          <path d="M22 35 Q18 30 20 22" fill="none" stroke="#8B6914" strokeWidth="3" strokeLinecap="round"/>
          <path d="M58 35 Q62 28 60 20" fill="none" stroke="#8B6914" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 34 Q24 26 28 22" fill="none" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Crooked silver crown - askew */}
          <g transform="rotate(-8, 40, 20)">
            <rect x="24" y="17" width="32" height="8" rx="2" fill="#C0C0C0" stroke="#2D1B4E" strokeWidth="1.5"/>
            <path d="M26 17 L28 10 L32 17" fill="#C0C0C0" stroke="#2D1B4E" strokeWidth="1.5"/>
            <path d="M38 17 L40 8 L42 17" fill="#C0C0C0" stroke="#2D1B4E" strokeWidth="1.5"/>
            <path d="M50 17 L52 10 L54 17" fill="#C0C0C0" stroke="#2D1B4E" strokeWidth="1.5"/>
            {/* Gem */}
            <circle cx="40" cy="13" r="2" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="1"/>
          </g>
          {/* Left eye - huge goofy */}
          <ellipse cx="32" cy="38" rx="5.5" ry="6" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="33" cy="39" r="3.5" fill="#5C2D00"/>
          <circle cx="34" cy="37" r="1.3" fill="white"/>
          {/* Right eye */}
          <ellipse cx="48" cy="38" rx="5.5" ry="6" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="49" cy="39" r="3.5" fill="#5C2D00"/>
          <circle cx="50" cy="37" r="1.3" fill="white"/>
          {/* Eyebrows - expressive */}
          <path d="M27 30 Q32 28 37 30" fill="none" stroke="#5C2D00" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M43 30 Q48 28 53 31" fill="none" stroke="#5C2D00" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Huge goofy grin showing teeth */}
          <path d="M29 47 Q40 58 51 47" fill="white" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M33 47 L33 52" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M37 47 L37 53" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M40 47 L40 54" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M43 47 L43 53" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M47 47 L47 52" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Rosy cheeks */}
          <ellipse cx="25" cy="44" rx="5" ry="3" fill="#FFB3B3" opacity="0.6"/>
          <ellipse cx="55" cy="44" rx="5" ry="3" fill="#FFB3B3" opacity="0.6"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-sophie)"/>
      </g>
    </svg>
  )
}
