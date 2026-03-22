export default function ZuckerwatteStrand() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-strand-scene">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="8"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <style>{`
          @keyframes wave-strand {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-15px); }
          }
          @keyframes sun-ray-strand {
            0%, 100% { opacity: 0.6; transform: rotate(0deg) scaleY(1); }
            50% { opacity: 1; transform: rotate(5deg) scaleY(1.1); }
          }
          @keyframes bob-strand {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .wave-1 { animation: wave-strand 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .wave-2 { animation: wave-strand 4.5s ease-in-out infinite 0.8s; transform-box: fill-box; transform-origin: center; }
          .wave-3 { animation: wave-strand 5s ease-in-out infinite 1.6s; transform-box: fill-box; transform-origin: center; }
          .sun-glow { animation: bob-strand 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      {/* Sky layers - light blue to light pink at horizon */}
      <rect width="400" height="200" fill="#B3E5FF"/>
      <rect width="400" height="80" y="80" fill="#D4EEFF" opacity="0.6"/>
      <rect width="400" height="40" y="110" fill="#FFD4ED" opacity="0.5"/>
      <rect width="400" height="20" y="130" fill="#FFB3D9" opacity="0.4"/>

      {/* Sun - top right, lemon-drop yellow */}
      <g className="sun-glow">
        {/* Sun rays */}
        <line x1="355" y1="45" x2="355" y2="20" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="355" y1="45" x2="375" y2="28" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="355" y1="45" x2="382" y2="45" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="355" y1="45" x2="375" y2="62" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="355" y1="45" x2="355" y2="70" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="355" y1="45" x2="335" y2="62" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="355" y1="45" x2="328" y2="45" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        <line x1="355" y1="45" x2="335" y2="28" stroke="#FFF4B3" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
        {/* Sun disc */}
        <circle cx="355" cy="45" r="22" fill="#FFF4B3" stroke="#F39C12" strokeWidth="2" filter="url(#rough-strand-scene)"/>
        <circle cx="355" cy="45" r="18" fill="#FFFDE0"/>
      </g>

      {/* A few small clouds */}
      <ellipse cx="80" cy="40" rx="30" ry="12" fill="white" opacity="0.8"/>
      <ellipse cx="65" cy="44" rx="18" ry="10" fill="white" opacity="0.8"/>
      <ellipse cx="100" cy="43" rx="18" ry="10" fill="#FFE8F4" opacity="0.7"/>

      <ellipse cx="230" cy="30" rx="25" ry="10" fill="white" opacity="0.8"/>
      <ellipse cx="215" cy="34" rx="16" ry="9" fill="white" opacity="0.8"/>

      {/* Karin's rock silhouette in middle distance */}
      <path d="M160 145 Q170 125 190 120 Q210 118 220 125 Q232 130 230 145 Z" fill="#3D3050" opacity="0.7" filter="url(#rough-strand-scene)"/>
      <path d="M168 145 Q175 132 188 128 Q202 126 210 132 Q218 138 216 145 Z" fill="#2D2040" opacity="0.5"/>

      {/* Pink bubblegum sand */}
      <path d="M0 150 Q30 142 60 150 Q90 158 120 150 Q150 142 180 148 Q210 154 240 148 Q270 142 300 148 Q330 154 360 148 Q390 142 400 148 L400 200 L0 200 Z" fill="#FFB3D9" stroke="#2D1B4E" strokeWidth="2" filter="url(#rough-strand-scene)"/>
      <path d="M0 162 Q40 156 80 162 Q120 168 160 162 Q200 156 240 162 Q280 168 320 162 Q360 156 400 162 L400 200 L0 200 Z" fill="#FF8EC0" opacity="0.6"/>

      {/* Sand texture dots */}
      <circle cx="40" cy="165" r="2" fill="#FF6DB6" opacity="0.4"/>
      <circle cx="100" cy="170" r="1.5" fill="#FF6DB6" opacity="0.4"/>
      <circle cx="180" cy="168" r="2" fill="#FF6DB6" opacity="0.4"/>
      <circle cx="280" cy="172" r="1.5" fill="#FF6DB6" opacity="0.4"/>
      <circle cx="360" cy="166" r="2" fill="#FF6DB6" opacity="0.4"/>

      {/* Wave 1 - back, more transparent */}
      <g className="wave-1">
        <path d="M-20 138 Q10 130 40 138 Q70 146 100 138 Q130 130 160 138 Q190 146 220 138 Q250 130 280 138 Q310 146 340 138 Q370 130 400 138 Q420 146 440 138" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
      </g>
      {/* Wave 2 - middle */}
      <g className="wave-2">
        <path d="M-20 144 Q20 136 50 144 Q80 152 110 144 Q140 136 170 144 Q200 152 230 144 Q260 136 290 144 Q320 152 350 144 Q380 136 420 144" fill="none" stroke="#FFFDF5" strokeWidth="10" strokeLinecap="round" opacity="0.7"/>
      </g>
      {/* Wave 3 - front, most visible */}
      <g className="wave-3">
        <path d="M-10 148 Q30 140 60 148 Q90 156 120 148 Q150 140 180 148 Q210 156 240 148 Q270 140 300 148 Q330 156 360 148 Q390 140 420 148" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" opacity="0.8"/>
        {/* White foam at wave crest */}
        <path d="M0 148 Q30 144 60 148 Q90 152 120 148 Q150 144 180 148 Q210 152 240 148 Q270 144 300 148 Q330 152 360 148 Q390 144 400 148" fill="white" opacity="0.4"/>
      </g>

      {/* A seashell on the beach */}
      <path d="M320 162 Q325 155 330 158 Q332 163 328 165 Q323 166 320 162 Z" fill="#FFE4B3" stroke="#2D1B4E" strokeWidth="1.5" filter="url(#rough-strand-scene)"/>
      {/* A starfish */}
      <path d="M70 160 L72 153 L74 160 L80 158 L75 163 L77 170 L72 166 L67 170 L69 163 L64 158 Z" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1" filter="url(#rough-strand-scene)"/>
    </svg>
  )
}
