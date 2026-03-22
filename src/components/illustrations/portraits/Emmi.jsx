export default function Emmi() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-emmi">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="5"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-emmi">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-emmi {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-emmi { animation: bounce-in-emmi 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-emmi">
        <circle cx="40" cy="40" r="36" fill="#2D1B4E"/>
        <g clipPath="url(#circle-clip-emmi)" filter="url(#rough-emmi)">
          {/* Dark background */}
          <rect width="80" height="80" fill="#2D1B4E"/>
          {/* Skateboard edge bottom-left */}
          <rect x="8" y="66" width="32" height="8" rx="4" fill="#8B4513" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="16" cy="74" r="3" fill="#555" stroke="#2D1B4E" strokeWidth="1"/>
          <circle cx="34" cy="74" r="3" fill="#555" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Neck */}
          <rect x="34" y="50" width="10" height="10" rx="2" fill="#F0E0D0"/>
          {/* Head */}
          <ellipse cx="40" cy="40" rx="16" ry="16" fill="#F0E0D0" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Witch hat - tilted right */}
          <g transform="rotate(15, 40, 26)">
            <path d="M30 28 L40 2 L50 28 Z" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="2"/>
            <rect x="26" y="26" width="28" height="6" rx="3" fill="#7D3FB0" stroke="#2D1B4E" strokeWidth="2"/>
            {/* Star on hat */}
            <path d="M40 8 L41.5 12.5 L46 12.5 L42.5 15 L44 19.5 L40 17 L36 19.5 L37.5 15 L34 12.5 L38.5 12.5 Z" fill="#FFF4B3" stroke="#2D1B4E" strokeWidth="1"/>
          </g>
          {/* Spiky black hair with pink streak */}
          <path d="M24 38 L22 22 L26 30 L27 18 L32 28 L33 14 L37 26 L38 12 L40 25 L42 12 L43 26 L47 14 L48 28 L53 18 L54 30 L58 22 L56 38" fill="#1A1A1A" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Pink streak */}
          <path d="M43 26 L47 14 L48 28" fill="#FF6DB6" stroke="#FF6DB6" strokeWidth="1"/>
          {/* Left eye - normal */}
          <ellipse cx="33" cy="39" rx="4.5" ry="5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="34" cy="40" r="3" fill="#1A1A1A"/>
          <circle cx="35" cy="38.5" r="1" fill="white"/>
          {/* Right eye - raised eyebrow side */}
          <ellipse cx="47" cy="39" rx="4.5" ry="5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="48" cy="40" r="3" fill="#1A1A1A"/>
          <circle cx="49" cy="38.5" r="1" fill="white"/>
          {/* Left eyebrow - normal */}
          <path d="M29 32 Q33 30 37 32" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Right eyebrow - raised higher */}
          <path d="M43 29 Q47 27 51 29" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Cool smirk */}
          <path d="M35 47 Q39 49 44 46" fill="none" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Lightning bolt earring */}
          <path d="M57 38 L59 34 L57.5 37 L60 37 L57.5 42 L59 38 Z" fill="#FFF4B3" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Nose */}
          <path d="M38 43 Q40 45 42 43" fill="none" stroke="#C0A090" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#9B59D0" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-emmi)"/>
      </g>
    </svg>
  )
}
