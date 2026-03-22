export default function EnteringCave() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-cave-moment">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="25"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <radialGradient id="cave-glow-moment" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#4AABDB" stopOpacity="0.5"/>
          <stop offset="40%" stopColor="#9B59D0" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="lina-side-light" cx="60%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4AABDB" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#4AABDB" stopOpacity="0"/>
        </radialGradient>
        <style>{`
          @keyframes scene-fade-cave {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes crystal-flicker-cave {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          @keyframes glow-breathe {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          .cave-scene { animation: scene-fade-cave 2s ease both; }
          .cx-a { animation: crystal-flicker-cave 2s ease-in-out infinite; }
          .cx-b { animation: crystal-flicker-cave 2.5s ease-in-out infinite 0.4s; }
          .cx-c { animation: crystal-flicker-cave 1.8s ease-in-out infinite 0.8s; }
          .cx-d { animation: crystal-flicker-cave 3s ease-in-out infinite 1.1s; }
          .cave-glow-anim { animation: glow-breathe 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      <g className="cave-scene">
        {/* Dark exterior background */}
        <rect width="400" height="600" fill="#0F0F20"/>

        {/* Rocky exterior around cave mouth */}
        <rect width="400" height="600" fill="#1A1A2E" opacity="0.6"/>

        {/* Cave mouth - takes up 60% of image - dark arch */}
        {/* Outer rock frame */}
        <path d="M0 0 L0 600 L80 600 L80 420 Q80 80 200 60 Q320 80 320 420 L320 600 L400 600 L400 0 Z" fill="#0D0D18" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-cave-moment)"/>

        {/* Cave interior glow */}
        <path d="M80 600 Q80 280 200 260 Q320 280 320 600 Z" fill="#1A1A2E"/>
        <rect width="400" height="600" fill="url(#cave-glow-moment)" className="cave-glow-anim"/>

        {/* Crystal glow light pool on floor */}
        <ellipse cx="200" cy="560" rx="90" ry="20" fill="#4AABDB" opacity="0.15"/>
        <ellipse cx="200" cy="565" rx="60" ry="12" fill="#4AABDB" opacity="0.12"/>

        {/* Cave crystals - left edge of opening */}
        <g className="cx-a">
          <path d="M82 200 L92 250 L100 200 Z" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M82 200 L92 250 L100 200 Z" fill="#B3F0FF" opacity="0.5"/>
          <ellipse cx="92" cy="248" rx="8" ry="3" fill="#4AABDB" opacity="0.3"/>
        </g>
        <g className="cx-b">
          <path d="M86 260 L96 315 L106 260 Z" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M86 260 L96 315 L106 260 Z" fill="#FFB3D9" opacity="0.4"/>
          <ellipse cx="96" cy="312" rx="7" ry="3" fill="#FF6DB6" opacity="0.25"/>
        </g>
        <g className="cx-c">
          <path d="M80 330 L90 370 L98 330 Z" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M80 330 L90 370 L98 330 Z" fill="#D4B3FF" opacity="0.4"/>
        </g>

        {/* Cave crystals - right edge of opening */}
        <g className="cx-d">
          <path d="M318 190 L308 245 L300 190 Z" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M318 190 L308 245 L300 190 Z" fill="#B3F0FF" opacity="0.5"/>
          <ellipse cx="308" cy="243" rx="8" ry="3" fill="#4AABDB" opacity="0.3"/>
        </g>
        <g className="cx-a">
          <path d="M314 255 L304 305 L294 255 Z" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="2"/>
          <path d="M314 255 L304 305 L294 255 Z" fill="#FFB3D9" opacity="0.4"/>
        </g>
        <g className="cx-b">
          <path d="M320 320 L310 365 L302 320 Z" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="2"/>
        </g>

        {/* Stalactites from ceiling of cave mouth */}
        <path d="M130 62 L137 95 L144 62 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
        <path d="M150 60 L156 88 L162 60 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
        <path d="M170 58 L175 82 L180 58 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
        <path d="M220 58 L225 85 L230 58 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
        <path d="M238 60 L244 90 L250 60 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>
        <path d="M255 62 L262 95 L268 62 Z" fill="#252540" stroke="#2D1B4E" strokeWidth="1.5"/>

        {/* Lina from BEHIND - small, standing at entrance */}
        {/* Positioned center, standing at mouth of cave */}
        {/* Drop shadow */}
        <ellipse cx="200" cy="530" rx="25" ry="6" fill="#0D0D18" opacity="0.6"/>
        {/* Dress/body silhouette */}
        <path d="M173 530 Q177 480 188 455 Q194 440 200 438 Q206 440 212 455 Q223 480 227 530 Z" fill="#3A2010"/>
        {/* Dress flare */}
        <path d="M173 530 Q183 518 200 520 Q217 518 227 530 Z" fill="#CC6090"/>
        {/* Body upper */}
        <rect x="186" y="420" width="28" height="38" rx="8" fill="#3A2010"/>
        {/* Neck */}
        <rect x="192" y="406" width="16" height="16" rx="5" fill="#3A2010"/>
        {/* Head from behind */}
        <circle cx="200" cy="388" r="26" fill="#3A2010"/>
        {/* Pigtails from behind */}
        <ellipse cx="175" cy="385" rx="8" ry="13" fill="#2C1808"/>
        <ellipse cx="225" cy="385" rx="8" ry="13" fill="#2C1808"/>

        {/* Crystal glow light touching Lina's side - side lighting effect */}
        <ellipse cx="215" cy="470" rx="30" ry="60" fill="url(#lina-side-light)"/>

        {/* Mysterious dark shapes in background depths */}
        <ellipse cx="170" cy="430" rx="25" ry="18" fill="#0A0A15" opacity="0.5"/>
        <ellipse cx="235" cy="420" rx="20" ry="15" fill="#0A0A15" opacity="0.5"/>
        <path d="M140 500 Q160 480 175 500 Q165 520 140 500" fill="#080810" opacity="0.4"/>
        <path d="M240 490 Q255 472 268 490 Q260 508 240 490" fill="#080810" opacity="0.4"/>

        {/* Atmospheric glow particles floating */}
        <circle cx="150" cy="300" r="2" fill="#4AABDB" opacity="0.6"/>
        <circle cx="170" cy="240" r="1.5" fill="#9B59D0" opacity="0.5"/>
        <circle cx="240" cy="280" r="2" fill="#4AABDB" opacity="0.5"/>
        <circle cx="260" cy="330" r="1.5" fill="#FF6DB6" opacity="0.5"/>
        <circle cx="185" cy="200" r="1.5" fill="#4AABDB" opacity="0.4"/>
        <circle cx="225" cy="220" r="2" fill="#D4B3FF" opacity="0.5"/>

        {/* Spooky shadow on floor leading into cave */}
        <path d="M120 600 Q160 540 200 530 Q240 540 280 600 Z" fill="#0A0A15" opacity="0.4"/>
      </g>
    </svg>
  )
}
