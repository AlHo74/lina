export default function Malaika() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-malaika">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-malaika">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-malaika {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-malaika { animation: bounce-in-malaika 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-malaika">
        <circle cx="40" cy="40" r="36" fill="#27AE60"/>
        <g clipPath="url(#circle-clip-malaika)" filter="url(#rough-malaika)">
          {/* Emerald green background */}
          <rect width="80" height="80" fill="#27AE60"/>
          {/* Colorful armor at bottom - tilted (body mid-movement) */}
          <g transform="rotate(5, 40, 60)">
            <path d="M18 62 Q22 56 40 54 Q58 56 62 62 L65 80 L15 80 Z" fill="#F39C12" stroke="#2D1B4E" strokeWidth="2"/>
            <path d="M32 54 L30 80" stroke="#E67E22" strokeWidth="2"/>
            <path d="M48 54 L50 80" stroke="#E67E22" strokeWidth="2"/>
            {/* Colorful armor details */}
            <rect x="35" y="56" width="10" height="6" rx="2" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="1"/>
          </g>
          {/* Neck */}
          <rect x="34" y="48" width="10" height="10" rx="3" fill="#4A2C17"/>
          {/* Head - tilted slightly */}
          <g transform="rotate(-5, 40, 38)">
            <ellipse cx="40" cy="38" rx="17" ry="18" fill="#4A2C17" stroke="#2D1B4E" strokeWidth="2"/>
            {/* Braided hair */}
            <path d="M23 33 Q22 18 30 14 Q35 10 40 12 Q45 10 50 14 Q58 18 57 33" fill="#2C1A0E" stroke="#2D1B4E" strokeWidth="2"/>
            {/* Braids going down sides */}
            <path d="M23 33 Q20 42 22 52" fill="none" stroke="#2C1A0E" strokeWidth="5" strokeLinecap="round"/>
            <path d="M57 33 Q60 42 58 52" fill="none" stroke="#2C1A0E" strokeWidth="5" strokeLinecap="round"/>
            {/* Braid pattern lines */}
            <path d="M21 37 Q23 35 22 40" fill="none" stroke="#4A2C17" strokeWidth="2" strokeLinecap="round"/>
            <path d="M21 41 Q23 39 22 44" fill="none" stroke="#4A2C17" strokeWidth="2" strokeLinecap="round"/>
            <path d="M21 45 Q23 43 22 48" fill="none" stroke="#4A2C17" strokeWidth="2" strokeLinecap="round"/>
            <path d="M59 37 Q57 35 58 40" fill="none" stroke="#4A2C17" strokeWidth="2" strokeLinecap="round"/>
            <path d="M59 41 Q57 39 58 44" fill="none" stroke="#4A2C17" strokeWidth="2" strokeLinecap="round"/>
            {/* Colorful beads */}
            <circle cx="22" cy="41" r="2.5" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1"/>
            <circle cx="22" cy="47" r="2.5" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="1"/>
            <circle cx="58" cy="41" r="2.5" fill="#FFF4B3" stroke="#2D1B4E" strokeWidth="1"/>
            <circle cx="58" cy="47" r="2.5" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="1"/>
            {/* Crooked gold crown */}
            <g transform="rotate(-12, 40, 18)">
              <rect x="26" y="16" width="28" height="7" rx="2" fill="#F1C40F" stroke="#2D1B4E" strokeWidth="1.5"/>
              <path d="M28 16 L30 9 L34 16" fill="#F1C40F" stroke="#2D1B4E" strokeWidth="1.5"/>
              <path d="M38 16 L40 7 L42 16" fill="#F1C40F" stroke="#2D1B4E" strokeWidth="1.5"/>
              <path d="M48 16 L50 9 L52 16" fill="#F1C40F" stroke="#2D1B4E" strokeWidth="1.5"/>
              <circle cx="40" cy="11" r="2" fill="#E74C3C" stroke="#2D1B4E" strokeWidth="1"/>
            </g>
            {/* Laughing open-mouth expression */}
            <ellipse cx="33" cy="37" rx="5" ry="5.5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
            <circle cx="34" cy="38" r="3" fill="#1A0A00"/>
            <circle cx="35" cy="36" r="1" fill="white"/>
            <ellipse cx="47" cy="37" rx="5" ry="5.5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
            <circle cx="48" cy="38" r="3" fill="#1A0A00"/>
            <circle cx="49" cy="36" r="1" fill="white"/>
            {/* Eyebrows arched - laughing */}
            <path d="M28 30 Q33 27 38 30" fill="none" stroke="#1A0A00" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M42 30 Q47 27 52 30" fill="none" stroke="#1A0A00" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Wide laughing mouth */}
            <path d="M28 46 Q40 58 52 46" fill="#C0392B" stroke="#2D1B4E" strokeWidth="2"/>
            <path d="M28 46 Q40 50 52 46" fill="white"/>
            <path d="M34 46 L35 50" stroke="#2D1B4E" strokeWidth="1"/>
            <path d="M40 46 L40 51" stroke="#2D1B4E" strokeWidth="1"/>
            <path d="M46 46 L45 50" stroke="#2D1B4E" strokeWidth="1"/>
          </g>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-malaika)"/>
      </g>
    </svg>
  )
}
