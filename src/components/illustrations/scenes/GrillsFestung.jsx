export default function GrillsFestung() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-festung-scene">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="16"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <style>{`
          @keyframes rise-smoke {
            0% { transform: translateY(0); opacity: 0.8; }
            100% { transform: translateY(-30px); opacity: 0; }
          }
          @keyframes flicker-fire {
            0%, 100% { opacity: 0.8; transform: scaleX(1); }
            50% { opacity: 1; transform: scaleX(1.1); }
          }
          .smoke-1 { animation: rise-smoke 2.5s ease-out infinite; transform-box: fill-box; transform-origin: center bottom; }
          .smoke-2 { animation: rise-smoke 2.5s ease-out infinite 0.8s; transform-box: fill-box; transform-origin: center bottom; }
          .smoke-3 { animation: rise-smoke 2.5s ease-out infinite 1.6s; transform-box: fill-box; transform-origin: center bottom; }
          .fire-glow { animation: flicker-fire 1s ease-in-out infinite; transform-box: fill-box; transform-origin: bottom center; }
        `}</style>
      </defs>

      {/* Dark orange-red sky */}
      <rect width="400" height="200" fill="#C0392B"/>
      {/* Sky gradient layers */}
      <rect width="400" height="100" fill="#E74C3C" opacity="0.5"/>
      <rect width="400" height="60" fill="#E67E22" opacity="0.3"/>
      {/* Ominous clouds */}
      <ellipse cx="60" cy="30" rx="50" ry="18" fill="#8B2222" opacity="0.6" filter="url(#rough-festung-scene)"/>
      <ellipse cx="330" cy="25" rx="55" ry="16" fill="#8B2222" opacity="0.6" filter="url(#rough-festung-scene)"/>
      <ellipse cx="200" cy="15" rx="60" ry="14" fill="#6B1010" opacity="0.5" filter="url(#rough-festung-scene)"/>

      {/* Ground - dark brown/orange */}
      <rect x="0" y="170" width="400" height="30" fill="#5C2D00"/>
      <path d="M0 170 Q50 164 100 170 Q150 176 200 170 Q250 164 300 170 Q350 176 400 170" fill="#3A1800" opacity="0.6"/>

      {/* Main fortress structure - toffee brown with irregular blocks */}
      {/* Base wall */}
      <rect x="60" y="90" width="280" height="85" fill="#8B4513" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-festung-scene)"/>
      {/* Block pattern variations */}
      <rect x="65" y="95" width="38" height="22" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="107" y="95" width="42" height="22" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.6"/>
      <rect x="153" y="95" width="36" height="22" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="193" y="95" width="40" height="22" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.6"/>
      <rect x="237" y="95" width="38" height="22" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="279" y="95" width="56" height="22" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.6"/>
      {/* Second row of blocks */}
      <rect x="65" y="121" width="44" height="24" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.7"/>
      <rect x="113" y="121" width="38" height="24" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="155" y="121" width="40" height="24" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.7"/>
      <rect x="199" y="121" width="36" height="24" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="239" y="121" width="42" height="24" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.7"/>
      <rect x="285" y="121" width="50" height="24" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      {/* Third row */}
      <rect x="65" y="149" width="50" height="26" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="119" y="149" width="40" height="26" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.6"/>
      <rect x="163" y="149" width="44" height="26" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="211" y="149" width="38" height="26" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.6"/>
      <rect x="253" y="149" width="44" height="26" fill="#7A3C10" stroke="#5C2800" strokeWidth="1.5" opacity="0.8"/>
      <rect x="301" y="149" width="34" height="26" fill="#9B5520" stroke="#5C2800" strokeWidth="1.5" opacity="0.6"/>

      {/* Left tower */}
      <rect x="40" y="55" width="70" height="125" fill="#8B4513" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-festung-scene)"/>
      {/* Tower battlements left */}
      <rect x="40" y="42" width="14" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="60" y="42" width="14" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="80" y="42" width="14" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="100" y="42" width="10" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>

      {/* Right tower */}
      <rect x="290" y="55" width="70" height="125" fill="#8B4513" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-festung-scene)"/>
      {/* Tower battlements right */}
      <rect x="290" y="42" width="14" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="310" y="42" width="14" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="330" y="42" width="14" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="350" y="42" width="10" height="18" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>

      {/* Center gate arch - darker */}
      <path d="M155 175 L155 110 Q155 90 200 90 Q245 90 245 110 L245 175 Z" fill="#3A1800" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-festung-scene)"/>
      {/* Gate inner darkness */}
      <path d="M163 175 L163 115 Q163 98 200 98 Q237 98 237 115 L237 175 Z" fill="#1A0800" opacity="0.9"/>

      {/* BBQ tong symbol on gate */}
      <path d="M190 108 L190 128 Q190 134 196 134" fill="none" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round"/>
      <path d="M210 108 L210 128 Q210 134 204 134" fill="none" stroke="#C0C0C0" strokeWidth="3" strokeLinecap="round"/>
      <path d="M190 110 Q200 106 210 110" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round"/>

      {/* G logo above gate in gold */}
      <circle cx="200" cy="80" r="10" fill="none" stroke="#F1C40F" strokeWidth="2.5"/>
      <text x="196" y="85" fontSize="12" fill="#F1C40F" fontFamily="serif" fontWeight="bold">G</text>

      {/* 3 Chimneys */}
      {/* Chimney 1 */}
      <rect x="75" y="30" width="16" height="28" rx="3" fill="#5C2D00" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="72" y="26" width="22" height="8" rx="2" fill="#3A1800" stroke="#2D1B4E" strokeWidth="1.5"/>
      {/* Smoke 1 */}
      <g className="smoke-1">
        <path d="M83 26 Q88 18 83 10 Q78 2 83 -6" fill="none" stroke="#8B8B8B" strokeWidth="6" strokeLinecap="round" opacity="0.7"/>
      </g>
      <g className="smoke-1" style={{animationDelay:'0.5s'}}>
        <path d="M83 26 Q79 16 84 8 Q89 0 84 -8" fill="none" stroke="#666" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
      </g>

      {/* Chimney 2 */}
      <rect x="192" y="18" width="16" height="28" rx="3" fill="#5C2D00" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="189" y="14" width="22" height="8" rx="2" fill="#3A1800" stroke="#2D1B4E" strokeWidth="1.5"/>
      {/* Smoke 2 */}
      <g className="smoke-2">
        <path d="M200 14 Q205 6 200 -2 Q195 -10 200 -18" fill="none" stroke="#8B8B8B" strokeWidth="6" strokeLinecap="round" opacity="0.7"/>
      </g>
      <g className="smoke-2" style={{animationDelay:'0.9s'}}>
        <path d="M200 14 Q196 4 201 -4 Q206 -12 201 -20" fill="none" stroke="#666" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
      </g>

      {/* Chimney 3 */}
      <rect x="310" y="30" width="16" height="28" rx="3" fill="#5C2D00" stroke="#2D1B4E" strokeWidth="2"/>
      <rect x="307" y="26" width="22" height="8" rx="2" fill="#3A1800" stroke="#2D1B4E" strokeWidth="1.5"/>
      {/* Smoke 3 */}
      <g className="smoke-3">
        <path d="M318 26 Q323 18 318 10 Q313 2 318 -6" fill="none" stroke="#8B8B8B" strokeWidth="6" strokeLinecap="round" opacity="0.7"/>
      </g>
      <g className="smoke-3" style={{animationDelay:'1.3s'}}>
        <path d="M318 26 Q314 16 319 8 Q324 0 319 -8" fill="none" stroke="#666" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
      </g>

      {/* Fire glow at base of fortress - ominous */}
      <g className="fire-glow">
        <ellipse cx="200" cy="172" rx="80" ry="10" fill="#E74C3C" opacity="0.3"/>
        <ellipse cx="200" cy="172" rx="50" ry="6" fill="#F39C12" opacity="0.25"/>
      </g>

      {/* Tower windows */}
      <rect x="62" y="75" width="14" height="18" rx="3" fill="#E74C3C" opacity="0.6"/>
      <rect x="82" y="75" width="14" height="18" rx="3" fill="#E74C3C" opacity="0.6"/>
      <rect x="305" y="75" width="14" height="18" rx="3" fill="#E74C3C" opacity="0.6"/>
      <rect x="325" y="75" width="14" height="18" rx="3" fill="#E74C3C" opacity="0.6"/>
    </svg>
  )
}
