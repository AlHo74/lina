export default function NuraLiya() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-nuraliya">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="31"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <filter id="glow-nuraliya">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <clipPath id="circle-clip-nuraliya">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-nuraliya {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes aura-pulse-nuraliya {
            0%, 100% { opacity: 0.4; r: 18; }
            50% { opacity: 0.8; r: 22; }
          }
          .portrait-root-nuraliya { animation: bounce-in-nuraliya 0.4s cubic-bezier(.34,1.56,.64,1) both; }
          .aura-nuraliya { animation: aura-pulse-nuraliya 2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>
      <g className="portrait-root-nuraliya">
        <circle cx="40" cy="40" r="36" fill="#8E44AD"/>
        <g clipPath="url(#circle-clip-nuraliya)" filter="url(#rough-nuraliya)">
          {/* Soft violet background */}
          <rect width="80" height="80" fill="#8E44AD"/>
          {/* Glowing aura around hands */}
          <ellipse cx="22" cy="58" rx="10" ry="8" fill="#FFF4B3" opacity="0.3" className="aura-nuraliya"/>
          <ellipse cx="58" cy="58" rx="10" ry="8" fill="#FFF4B3" opacity="0.3" className="aura-nuraliya" style={{animationDelay:'0.5s'}}/>
          {/* Hands raised slightly with golden glow */}
          {/* Left hand */}
          <ellipse cx="22" cy="60" rx="7" ry="5" fill="#C8906A" stroke="#2D1B4E" strokeWidth="1.5"/>
          <ellipse cx="22" cy="58" rx="9" ry="7" fill="#FFF4B3" opacity="0.5" filter="url(#glow-nuraliya)"/>
          {/* Right hand */}
          <ellipse cx="58" cy="60" rx="7" ry="5" fill="#C8906A" stroke="#2D1B4E" strokeWidth="1.5"/>
          <ellipse cx="58" cy="58" rx="9" ry="7" fill="#FFF4B3" opacity="0.5" filter="url(#glow-nuraliya)"/>
          {/* Golden sparkle lines from hands */}
          <line x1="15" y1="54" x2="12" y2="50" stroke="#F1C40F" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="14" y1="58" x2="10" y2="57" stroke="#F1C40F" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="16" y1="62" x2="12" y2="64" stroke="#F1C40F" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="65" y1="54" x2="68" y2="50" stroke="#F1C40F" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="66" y1="58" x2="70" y2="57" stroke="#F1C40F" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="64" y1="62" x2="68" y2="64" stroke="#F1C40F" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Body - small stature, centered lower */}
          <rect x="30" y="54" width="20" height="20" rx="4" fill="#7D3C98" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Arms raised */}
          <path d="M30 56 Q20 52 22 60" fill="none" stroke="#C8906A" strokeWidth="6" strokeLinecap="round"/>
          <path d="M50 56 Q60 52 58 60" fill="none" stroke="#C8906A" strokeWidth="6" strokeLinecap="round"/>
          {/* Neck */}
          <rect x="35" y="48" width="10" height="10" rx="3" fill="#C8906A"/>
          {/* Head - small, centered lower in portrait */}
          <ellipse cx="40" cy="42" rx="14" ry="14" fill="#C8906A" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Hair - dark, neat */}
          <path d="M26 40 Q26 26 40 24 Q54 26 54 40 Q50 28 40 28 Q30 28 26 40 Z" fill="#2C1A00" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Hair detail */}
          <path d="M26 40 Q24 44 25 50" fill="none" stroke="#2C1A00" strokeWidth="3" strokeLinecap="round"/>
          <path d="M54 40 Q56 44 55 50" fill="none" stroke="#2C1A00" strokeWidth="3" strokeLinecap="round"/>
          {/* Gentle strong eyes */}
          <ellipse cx="34" cy="41" rx="4.5" ry="5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="35" cy="42" r="3" fill="#2C1A00"/>
          <circle cx="36" cy="40.5" r="1" fill="white"/>
          <ellipse cx="46" cy="41" rx="4.5" ry="5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="47" cy="42" r="3" fill="#2C1A00"/>
          <circle cx="48" cy="40.5" r="1" fill="white"/>
          {/* Eyebrows - serene */}
          <path d="M30 34 Q34 32 38 34" fill="none" stroke="#2C1A00" strokeWidth="2" strokeLinecap="round"/>
          <path d="M42 34 Q46 32 50 34" fill="none" stroke="#2C1A00" strokeWidth="2" strokeLinecap="round"/>
          {/* Serene gentle expression */}
          <path d="M35 48 Q40 52 45 48" fill="none" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Nose */}
          <path d="M38 45 Q40 47 42 45" fill="none" stroke="#A07050" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-nuraliya)"/>
      </g>
    </svg>
  )
}
