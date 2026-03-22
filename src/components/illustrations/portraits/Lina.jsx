export default function Lina() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-lina">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="2"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-lina">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-lina {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-lina { animation: bounce-in-lina 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-lina">
        {/* Background circle */}
        <circle cx="40" cy="40" r="36" fill="#FFFDF5"/>
        {/* Character art clipped */}
        <g clipPath="url(#circle-clip-lina)" filter="url(#rough-lina)">
          {/* Background warm cream */}
          <rect width="80" height="80" fill="#FFF5E6"/>
          {/* Pink dress bottom */}
          <path d="M22 62 Q40 58 58 62 L60 80 L20 80 Z" fill="#FFB3D9" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Neck */}
          <rect x="35" y="48" width="10" height="10" rx="3" fill="#F4C89A"/>
          {/* Head */}
          <ellipse cx="40" cy="38" rx="18" ry="18" fill="#F4C89A" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Left pigtail */}
          <path d="M22 30 Q10 25 12 38 Q14 44 22 42" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M22 42 Q16 50 20 54 Q24 48 22 42" fill="#8B4513"/>
          {/* Right pigtail */}
          <path d="M58 30 Q70 25 68 38 Q66 44 58 42" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M58 42 Q64 50 60 54 Q56 48 58 42" fill="#8B4513"/>
          {/* Hair top */}
          <path d="M22 32 Q25 18 40 18 Q55 18 58 32 Q50 24 40 24 Q30 24 22 32 Z" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Hair ties - pink circles */}
          <circle cx="16" cy="39" r="3" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="64" cy="39" r="3" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Left eye */}
          <ellipse cx="33" cy="37" rx="5" ry="6" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="34" cy="38" r="3.5" fill="#3D1A00"/>
          <circle cx="35" cy="36" r="1.2" fill="white"/>
          {/* Right eye */}
          <ellipse cx="47" cy="37" rx="5" ry="6" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="48" cy="38" r="3.5" fill="#3D1A00"/>
          <circle cx="49" cy="36" r="1.2" fill="white"/>
          {/* Rosy cheeks */}
          <ellipse cx="27" cy="44" rx="5" ry="3" fill="#FFB3B3" opacity="0.7"/>
          <ellipse cx="53" cy="44" rx="5" ry="3" fill="#FFB3B3" opacity="0.7"/>
          {/* Nose - small dot */}
          <circle cx="40" cy="42" r="1.5" fill="#D4956A" opacity="0.7"/>
          {/* Smile */}
          <path d="M34 47 Q40 53 46 47" fill="none" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Eyebrows */}
          <path d="M29 30 Q33 28 37 30" fill="none" stroke="#5C2D00" strokeWidth="2" strokeLinecap="round"/>
          <path d="M43 30 Q47 28 51 30" fill="none" stroke="#5C2D00" strokeWidth="2" strokeLinecap="round"/>
        </g>
        {/* Rough border ring */}
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-lina)"/>
      </g>
    </svg>
  )
}
