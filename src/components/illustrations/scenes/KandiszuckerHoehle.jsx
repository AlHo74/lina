export default function KandiszuckerHoehle() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-hoehle-scene">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="12"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <radialGradient id="cave-glow" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#4AABDB" stopOpacity="0.3"/>
          <stop offset="60%" stopColor="#9B59D0" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="floor-light" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4AABDB" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0"/>
        </radialGradient>
        <style>{`
          @keyframes crystal-flicker {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          @keyframes crystal-flicker-2 {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.95; }
          }
          @keyframes crystal-flicker-3 {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.9; }
          }
          .crystal-a { animation: crystal-flicker 2s ease-in-out infinite; }
          .crystal-b { animation: crystal-flicker-2 2.5s ease-in-out infinite 0.4s; }
          .crystal-c { animation: crystal-flicker-3 1.8s ease-in-out infinite 0.9s; }
          .crystal-d { animation: crystal-flicker 3s ease-in-out infinite 1.2s; }
          .crystal-e { animation: crystal-flicker-2 2.2s ease-in-out infinite 0.6s; }
          .crystal-f { animation: crystal-flicker-3 2.7s ease-in-out infinite 1.5s; }
          .crystal-g { animation: crystal-flicker 1.9s ease-in-out infinite 0.2s; }
          .crystal-h { animation: crystal-flicker-2 3.1s ease-in-out infinite 0.8s; }
        `}</style>
      </defs>

      {/* Dark cave background */}
      <rect width="400" height="200" fill="#1A1A2E"/>

      {/* Deep background depth shapes */}
      <ellipse cx="200" cy="120" rx="100" ry="80" fill="#0D0D1A" opacity="0.7"/>
      <ellipse cx="200" cy="130" rx="70" ry="60" fill="#080810" opacity="0.5"/>

      {/* Cave glow from crystals */}
      <rect width="400" height="200" fill="url(#cave-glow)"/>

      {/* Cave opening arch - massive irregular dark shape */}
      <path d="M0 0 L0 200 L80 200 L80 140 Q80 50 200 40 Q320 50 320 140 L320 200 L400 200 L400 0 Z" fill="#0F0F20" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-hoehle-scene)"/>

      {/* Cave interior walls - slightly lighter */}
      <path d="M80 200 Q80 120 200 110 Q320 120 320 200 Z" fill="#161628" opacity="0.8"/>

      {/* Mysterious dark shapes in background depths */}
      <path d="M140 150 Q160 130 180 150 Q170 170 140 150" fill="#0D0D1A" opacity="0.6"/>
      <path d="M220 155 Q240 135 260 155 Q250 175 220 155" fill="#0D0D1A" opacity="0.6"/>

      {/* Floor light pool */}
      <ellipse cx="200" cy="190" rx="80" ry="15" fill="url(#floor-light)"/>
      <ellipse cx="200" cy="195" rx="60" ry="8" fill="#4AABDB" opacity="0.08"/>

      {/* Crystal formations - left side ceiling */}
      <g className="crystal-a">
        <path d="M88 45 L95 80 L100 45 Z" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M88 45 L95 80 L100 45 Z" fill="#B3F0FF" opacity="0.4"/>
      </g>
      <g className="crystal-b">
        <path d="M105 38 L113 75 L120 38 Z" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M105 38 L113 75 L120 38 Z" fill="#FFB3D9" opacity="0.4"/>
      </g>
      <g className="crystal-c">
        <path d="M122 42 L128 72 L134 42 Z" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M122 42 L128 72 L134 42 Z" fill="#B3F0FF" opacity="0.4"/>
      </g>

      {/* Crystal formations - left side floor */}
      <g className="crystal-d">
        <path d="M82 200 L90 165 L98 200 Z" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M82 200 L90 165 L98 200 Z" fill="#D4B3FF" opacity="0.4"/>
      </g>
      <g className="crystal-e">
        <path d="M96 200 L103 175 L110 200 Z" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M96 200 L103 175 L110 200 Z" fill="#B3F0FF" opacity="0.4"/>
      </g>

      {/* Crystal formations - right side ceiling */}
      <g className="crystal-f">
        <path d="M280 38 L288 75 L296 38 Z" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M280 38 L288 75 L296 38 Z" fill="#FFB3D9" opacity="0.4"/>
      </g>
      <g className="crystal-g">
        <path d="M298 45 L305 80 L312 45 Z" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M298 45 L305 80 L312 45 Z" fill="#B3F0FF" opacity="0.4"/>
      </g>

      {/* Crystal formations - right side floor */}
      <g className="crystal-h">
        <path d="M302 200 L310 168 L318 200 Z" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M302 200 L310 168 L318 200 Z" fill="#D4B3FF" opacity="0.4"/>
      </g>
      <g className="crystal-a">
        <path d="M316 200 L322 178 L328 200 Z" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M316 200 L322 178 L328 200 Z" fill="#FFB3D9" opacity="0.4"/>
      </g>

      {/* Crystal glow halos */}
      <ellipse cx="95" cy="75" rx="10" ry="5" fill="#4AABDB" opacity="0.15" filter="url(#rough-hoehle-scene)"/>
      <ellipse cx="113" cy="72" rx="8" ry="4" fill="#FF6DB6" opacity="0.15" filter="url(#rough-hoehle-scene)"/>
      <ellipse cx="288" cy="72" rx="8" ry="4" fill="#FF6DB6" opacity="0.15" filter="url(#rough-hoehle-scene)"/>
      <ellipse cx="305" cy="78" rx="8" ry="4" fill="#4AABDB" opacity="0.15" filter="url(#rough-hoehle-scene)"/>

      {/* Stalagmites on cave floor */}
      <path d="M130 200 L136 180 L142 200 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
      <path d="M255 200 L260 185 L265 200 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
      <path d="M145 200 L148 190 L151 200 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
    </svg>
  )
}
