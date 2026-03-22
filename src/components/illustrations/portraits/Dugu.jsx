export default function Dugu() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-dugu">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="41"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <filter id="glow-dugu">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <clipPath id="circle-clip-dugu">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-dugu {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes ghost-glow {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          @keyframes ghost-float-dugu {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .portrait-root-dugu { animation: bounce-in-dugu 0.4s cubic-bezier(.34,1.56,.64,1) both; }
          .ghost-dugu { animation: ghost-glow 2s ease-in-out infinite, ghost-float-dugu 3s ease-in-out infinite; }
        `}</style>
      </defs>
      <g className="portrait-root-dugu">
        <circle cx="40" cy="40" r="36" fill="#1A252F"/>
        <g clipPath="url(#circle-clip-dugu)" filter="url(#rough-dugu)">
          {/* Dark navy background */}
          <rect width="80" height="80" fill="#1A252F"/>
          {/* Stars in background */}
          <circle cx="15" cy="15" r="1" fill="white" opacity="0.6"/>
          <circle cx="65" cy="12" r="1.5" fill="white" opacity="0.5"/>
          <circle cx="72" cy="30" r="1" fill="white" opacity="0.7"/>
          <circle cx="10" cy="55" r="1" fill="white" opacity="0.5"/>
          <circle cx="70" cy="65" r="1.5" fill="white" opacity="0.4"/>
          <circle cx="20" cy="70" r="1" fill="white" opacity="0.6"/>
          {/* Drop shadow below ghost - floating effect */}
          <ellipse cx="40" cy="72" rx="12" ry="3" fill="#4AABDB" opacity="0.2"/>
          {/* Ghost cat - slightly transparent */}
          <g className="ghost-dugu" opacity="0.85">
            {/* Ghost glow outline */}
            <path d="M20 50 Q16 38 20 28 Q24 16 40 14 Q56 16 60 28 Q64 38 60 50 Q58 60 60 68 L54 62 L48 70 L40 62 L32 70 L26 62 L20 68 Q22 60 20 50 Z" fill="#4AABDB" opacity="0.3" filter="url(#glow-dugu)"/>
            {/* Ghost body */}
            <path d="M20 50 Q16 38 20 28 Q24 16 40 14 Q56 16 60 28 Q64 38 60 50 Q58 60 60 68 L54 62 L48 70 L40 62 L32 70 L26 62 L20 68 Q22 60 20 50 Z" fill="#E8F8FF" stroke="#4AABDB" strokeWidth="2" opacity="0.9"/>
            {/* Pointy cat ears */}
            <path d="M26 20 L22 10 L32 18 Z" fill="#E8F8FF" stroke="#4AABDB" strokeWidth="2"/>
            <path d="M54 20 L58 10 L48 18 Z" fill="#E8F8FF" stroke="#4AABDB" strokeWidth="2"/>
            {/* Inner ear pink tint */}
            <path d="M27 20 L24 13 L31 19 Z" fill="#FFB3D9" opacity="0.5"/>
            <path d="M53 20 L56 13 L49 19 Z" fill="#FFB3D9" opacity="0.5"/>
            {/* Simple cute cat face - dot eyes */}
            <ellipse cx="33" cy="36" rx="4" ry="5" fill="#4AABDB" opacity="0.8"/>
            <circle cx="33" cy="37" r="2.5" fill="#1A252F"/>
            <circle cx="34" cy="35.5" r="1" fill="white" opacity="0.8"/>
            <ellipse cx="47" cy="36" rx="4" ry="5" fill="#4AABDB" opacity="0.8"/>
            <circle cx="47" cy="37" r="2.5" fill="#1A252F"/>
            <circle cx="48" cy="35.5" r="1" fill="white" opacity="0.8"/>
            {/* Small smile - serene */}
            <path d="M36 44 Q40 48 44 44" fill="none" stroke="#4AABDB" strokeWidth="2" strokeLinecap="round"/>
            {/* Cat nose - small triangle */}
            <path d="M39 41 L41 41 L40 43 Z" fill="#4AABDB" opacity="0.6"/>
            {/* Cat whiskers */}
            <line x1="24" y1="42" x2="34" y2="43" stroke="#4AABDB" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>
            <line x1="24" y1="44" x2="34" y2="44" stroke="#4AABDB" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>
            <line x1="46" y1="43" x2="56" y2="42" stroke="#4AABDB" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>
            <line x1="46" y1="44" x2="56" y2="44" stroke="#4AABDB" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>
          </g>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#4AABDB" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-dugu)"/>
      </g>
    </svg>
  )
}
