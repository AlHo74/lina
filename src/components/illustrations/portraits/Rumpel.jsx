export default function Rumpel() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-rumpel">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="47"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-rumpel">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-rumpel {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes eye-sparkle-rumpel {
            0%, 80%, 100% { opacity: 1; }
            90% { opacity: 0.3; }
          }
          .portrait-root-rumpel { animation: bounce-in-rumpel 0.4s cubic-bezier(.34,1.56,.64,1) both; }
          .eye-shine-rumpel { animation: eye-sparkle-rumpel 3s ease-in-out infinite; }
        `}</style>
      </defs>
      <g className="portrait-root-rumpel">
        <circle cx="40" cy="40" r="36" fill="#27AE60"/>
        <g clipPath="url(#circle-clip-rumpel)" filter="url(#rough-rumpel)">
          {/* Mossy green background */}
          <rect width="80" height="80" fill="#27AE60"/>
          {/* Body - small kobold */}
          <path d="M24 70 Q26 58 40 56 Q54 58 56 70 L58 80 L22 80 Z" fill="#7F8C6E" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Raggedy clothes detail */}
          <path d="M28 60 L30 70 L32 58" fill="none" stroke="#6B7A5E" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M48 60 L50 70 L52 58" fill="none" stroke="#6B7A5E" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Pointy hat - small */}
          <path d="M32 28 L40 8 L48 28 Z" fill="#4A5E3A" stroke="#2D1B4E" strokeWidth="2"/>
          <rect x="28" y="26" width="24" height="5" rx="2.5" fill="#3A4E2A" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Hat buckle */}
          <rect x="37" y="27" width="6" height="4" rx="1" fill="#D4AF00" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Neck */}
          <rect x="35" y="50" width="10" height="10" rx="3" fill="#7F8C6E"/>
          {/* Head - small kobold with big pointy ears */}
          <ellipse cx="40" cy="42" rx="14" ry="14" fill="#7F8C6E" stroke="#2D1B4E" strokeWidth="2"/>
          {/* LARGE pointed ears sticking out wide */}
          <path d="M26 42 L12 35 Q8 30 14 28 Q18 26 22 32 L26 40" fill="#7F8C6E" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M26 40 L16 30 Q15 28 18 27 Q21 26 23 30" fill="#9BAC8A" opacity="0.6"/>
          <path d="M54 42 L68 35 Q72 30 66 28 Q62 26 58 32 L54 40" fill="#7F8C6E" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M54 40 L64 30 Q65 28 62 27 Q59 26 57 30" fill="#9BAC8A" opacity="0.6"/>
          {/* Small beady eyes full of tricks */}
          <ellipse cx="34" cy="41" rx="4" ry="4.5" fill="#FFFDE0" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="35" cy="42" r="3" fill="#2C4A10"/>
          <circle cx="35" cy="42" r="1.5" fill="#1A2A08"/>
          <circle cx="36" cy="41" r="0.8" fill="white" className="eye-shine-rumpel"/>
          <ellipse cx="46" cy="41" rx="4" ry="4.5" fill="#FFFDE0" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="47" cy="42" r="3" fill="#2C4A10"/>
          <circle cx="47" cy="42" r="1.5" fill="#1A2A08"/>
          <circle cx="48" cy="41" r="0.8" fill="white" className="eye-shine-rumpel" style={{animationDelay:'0.5s'}}/>
          {/* Mischievous eyebrows - arched dramatically */}
          <path d="M30 34 Q34 31 38 34" fill="none" stroke="#4A5E3A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M42 34 Q46 31 50 34" fill="none" stroke="#4A5E3A" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Big mischievous grin */}
          <path d="M28 48 Q40 58 52 48" fill="#3A5A2A" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Teeth - jagged kobold teeth */}
          <path d="M31 48 L32 54 L34 48" fill="#E8E0C0" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M35 48 L36 55 L38 48" fill="#E8E0C0" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M40 48 L40 55 L42 48" fill="#E8E0C0" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M44 48 L44 55 L46 48" fill="#E8E0C0" stroke="#2D1B4E" strokeWidth="1"/>
          <path d="M48 48 L48 54 L50 48" fill="#E8E0C0" stroke="#2D1B4E" strokeWidth="1"/>
          {/* Warty bumpy skin texture */}
          <circle cx="28" cy="45" r="2" fill="#6B7A5E" opacity="0.5"/>
          <circle cx="52" cy="44" r="2" fill="#6B7A5E" opacity="0.5"/>
          <circle cx="36" cy="34" r="1.5" fill="#6B7A5E" opacity="0.4"/>
          {/* Nose - bulbous kobold nose */}
          <ellipse cx="40" cy="46" rx="4" ry="3" fill="#6B7A5E" stroke="#5A6A4E" strokeWidth="1"/>
          <circle cx="38.5" cy="46" r="1" fill="#5A6A4E" opacity="0.6"/>
          <circle cx="41.5" cy="46" r="1" fill="#5A6A4E" opacity="0.6"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-rumpel)"/>
      </g>
    </svg>
  )
}
