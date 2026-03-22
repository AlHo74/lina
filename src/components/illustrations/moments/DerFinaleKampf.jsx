export default function DerFinaleKampf() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-finale-moment">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="28"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <radialGradient id="hero-light" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="#FFF4B3" stopOpacity="0.6"/>
          <stop offset="50%" stopColor="#F39C12" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#C0392B" stopOpacity="0"/>
        </radialGradient>
        <style>{`
          @keyframes scene-epic {
            from { opacity: 0; transform: scale(1.05); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes light-ray {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          @keyframes grill-loom {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .finale-scene { animation: scene-epic 1s ease both; }
          .light-ray-anim { animation: light-ray 3s ease-in-out infinite; }
          .grill-loom-anim { animation: grill-loom 2s ease-in-out infinite; transform-box: fill-box; transform-origin: bottom center; }
        `}</style>
      </defs>

      <g className="finale-scene">
        {/* Dark orange-red sky */}
        <rect width="400" height="600" fill="#C0392B"/>
        <rect width="400" height="300" fill="#E74C3C" opacity="0.5"/>
        <rect width="400" height="150" y="0" fill="#E67E22" opacity="0.3"/>

        {/* Ominous sky clouds */}
        <path d="M0 80 Q60 60 120 80 Q80 100 0 80 Z" fill="#8B2222" opacity="0.5" filter="url(#rough-finale-moment)"/>
        <path d="M280 50 Q340 30 400 50 Q360 70 280 50 Z" fill="#8B2222" opacity="0.5" filter="url(#rough-finale-moment)"/>
        <path d="M140 40 Q200 20 260 40 Q220 60 140 40 Z" fill="#6B1010" opacity="0.6" filter="url(#rough-finale-moment)"/>

        {/* Grills Festung in background */}
        {/* Main fortress */}
        <rect x="80" y="220" width="240" height="200" fill="#6B3010" stroke="#2D1B4E" strokeWidth="2" filter="url(#rough-finale-moment)"/>
        {/* Block pattern simplified */}
        <rect x="85" y="228" width="35" height="18" fill="#5C2800" opacity="0.6"/>
        <rect x="123" y="228" width="38" height="18" fill="#7A4020" opacity="0.5"/>
        <rect x="164" y="228" width="33" height="18" fill="#5C2800" opacity="0.6"/>
        <rect x="200" y="228" width="36" height="18" fill="#7A4020" opacity="0.5"/>
        <rect x="239" y="228" width="35" height="18" fill="#5C2800" opacity="0.6"/>
        <rect x="277" y="228" width="38" height="18" fill="#7A4020" opacity="0.5"/>
        {/* Left tower */}
        <rect x="60" y="170" width="60" height="250" fill="#6B3010" stroke="#2D1B4E" strokeWidth="2" filter="url(#rough-finale-moment)"/>
        {/* Left battlements */}
        <rect x="60" y="158" width="12" height="16" fill="#6B3010" stroke="#2D1B4E" strokeWidth="1.5"/>
        <rect x="76" y="158" width="12" height="16" fill="#6B3010" stroke="#2D1B4E" strokeWidth="1.5"/>
        <rect x="92" y="158" width="12" height="16" fill="#6B3010" stroke="#2D1B4E" strokeWidth="1.5"/>
        {/* Right tower */}
        <rect x="280" y="170" width="60" height="250" fill="#6B3010" stroke="#2D1B4E" strokeWidth="2" filter="url(#rough-finale-moment)"/>
        {/* Right battlements */}
        <rect x="280" y="158" width="12" height="16" fill="#6B3010" stroke="#2D1B4E" strokeWidth="1.5"/>
        <rect x="296" y="158" width="12" height="16" fill="#6B3010" stroke="#2D1B4E" strokeWidth="1.5"/>
        <rect x="312" y="158" width="12" height="16" fill="#6B3010" stroke="#2D1B4E" strokeWidth="1.5"/>
        {/* Gate */}
        <path d="M160 420 L160 290 Q160 270 200 270 Q240 270 240 290 L240 420 Z" fill="#2A1400"/>

        {/* GRILL DEN HAMMER - large silhouette ABOVE the fortress, looming */}
        <g className="grill-loom-anim">
          {/* Body silhouette - massive */}
          <path d="M145 220 Q155 150 180 120 Q190 100 200 95 Q210 100 220 120 Q245 150 255 220 Z" fill="#1A0A00"/>
          {/* Backwards cap */}
          <path d="M175 105 Q178 80 200 78 Q222 80 225 105" fill="#1A0A00"/>
          {/* Cap brim backwards */}
          <path d="M175 105 Q172 100 168 92" fill="none" stroke="#1A0A00" strokeWidth="8" strokeLinecap="round"/>
          {/* Sunglasses outline */}
          <ellipse cx="188" cy="112" rx="14" ry="12" fill="none" stroke="#1A0A00" strokeWidth="4"/>
          <ellipse cx="212" cy="112" rx="14" ry="12" fill="none" stroke="#1A0A00" strokeWidth="4"/>
          {/* BBQ Tongs raised high */}
          <path d="M240 160 Q265 120 272 80" fill="none" stroke="#1A0A00" strokeWidth="8" strokeLinecap="round"/>
          <path d="M245 155 Q275 118 285 76" fill="none" stroke="#1A0A00" strokeWidth="8" strokeLinecap="round"/>
          {/* Tong tips */}
          <path d="M272 80 Q275 70 285 76" fill="none" stroke="#1A0A00" strokeWidth="5" strokeLinecap="round"/>
          {/* Chain silhouette */}
          <path d="M175 140 Q185 145 200 140 Q215 135 225 140" fill="none" stroke="#1A0A00" strokeWidth="4"/>
          {/* Arms wide */}
          <path d="M155 170 Q135 155 125 140" fill="none" stroke="#1A0A00" strokeWidth="16" strokeLinecap="round"/>
        </g>

        {/* Light rays from behind the heroes - hope/determination */}
        <g className="light-ray-anim">
          <path d="M200 600 L100 450" stroke="#FFF4B3" strokeWidth="30" opacity="0.15" strokeLinecap="round"/>
          <path d="M200 600 L160 440" stroke="#FFF4B3" strokeWidth="25" opacity="0.2" strokeLinecap="round"/>
          <path d="M200 600 L200 430" stroke="#FFF4B3" strokeWidth="35" opacity="0.25" strokeLinecap="round"/>
          <path d="M200 600 L240 440" stroke="#FFF4B3" strokeWidth="25" opacity="0.2" strokeLinecap="round"/>
          <path d="M200 600 L300 450" stroke="#FFF4B3" strokeWidth="30" opacity="0.15" strokeLinecap="round"/>
        </g>
        {/* Hero light gradient */}
        <rect width="400" height="600" fill="url(#hero-light)"/>

        {/* Ground */}
        <rect y="560" width="400" height="40" fill="#3A1800"/>
        <path d="M0 555 Q50 548 100 555 Q150 562 200 555 Q250 548 300 555 Q350 562 400 555" fill="#2A1200" opacity="0.6"/>

        {/* ROW OF CHARACTER SILHOUETTES in foreground */}
        {/* All dark solid, distinct silhouettes */}
        {/* Lina - pigtails */}
        <g transform="translate(20, 490)">
          <ellipse cx="18" cy="0" rx="12" ry="12" fill="#1A0A00"/>
          <ellipse cx="6" cy="-4" rx="4" ry="7" fill="#1A0A00"/>
          <ellipse cx="30" cy="-4" rx="4" ry="7" fill="#1A0A00"/>
          <path d="M6 12 Q10 18 18 20 Q26 18 30 12 L32 50 L4 50 Z" fill="#1A0A00"/>
        </g>
        {/* Emmi - witch hat */}
        <g transform="translate(57, 490)">
          <ellipse cx="18" cy="0" rx="11" ry="11" fill="#1A0A00"/>
          <path d="M10 -2 L18 -22 L26 -2 Z" fill="#1A0A00"/>
          <path d="M8 12 Q12 16 18 18 Q24 16 28 12 L30 50 L6 50 Z" fill="#1A0A00"/>
        </g>
        {/* Sophie - crown */}
        <g transform="translate(94, 490)">
          <ellipse cx="18" cy="0" rx="12" ry="12" fill="#1A0A00"/>
          <path d="M10 -8 L12 -16 L15 -10 L18 -18 L21 -10 L24 -16 L26 -8" fill="#1A0A00"/>
          <path d="M6 12 Q10 20 18 22 Q26 20 30 12 L32 50 L4 50 Z" fill="#1A0A00"/>
        </g>
        {/* Malaika - crown + body tilted */}
        <g transform="translate(132, 488)">
          <ellipse cx="18" cy="0" rx="12" ry="12" fill="#1A0A00"/>
          <path d="M10 -8 L12 -16 L15 -10 L18 -18 L21 -10 L24 -16 L26 -8" fill="#1A0A00"/>
          <path d="M6 12 Q10 20 18 22 Q26 20 30 12 L32 50 L4 50 Z" fill="#1A0A00" transform="rotate(-5, 18, 30)"/>
        </g>
        {/* Annette - simple neat */}
        <g transform="translate(170, 490)">
          <ellipse cx="18" cy="0" rx="11" ry="11" fill="#1A0A00"/>
          <path d="M8 10 Q12 14 18 16 Q24 14 28 10 L30 50 L6 50 Z" fill="#1A0A00"/>
          <path d="M8 -6 Q12 -10 18 -10 Q24 -10 28 -6" fill="none" stroke="#1A0A00" strokeWidth="6" strokeLinecap="round"/>
        </g>
        {/* Alex - big hair */}
        <g transform="translate(207, 488)">
          <ellipse cx="18" cy="0" rx="14" ry="12" fill="#1A0A00"/>
          <path d="M4 -4 L2 -14 L7 -6 L5 -16 L12 -8 L11 -18 L18 -10 L25 -18 L24 -8 L31 -16 L29 -6 L34 -14 L32 -4" fill="#1A0A00"/>
          <path d="M4 12 Q10 18 18 20 Q26 18 32 12 L34 50 L2 50 Z" fill="#1A0A00"/>
        </g>
        {/* Karin - long hair */}
        <g transform="translate(245, 487)">
          <ellipse cx="18" cy="0" rx="11" ry="11" fill="#1A0A00"/>
          <rect x="5" y="6" width="6" height="42" rx="3" fill="#1A0A00"/>
          <rect x="25" y="6" width="6" height="42" rx="3" fill="#1A0A00"/>
          <path d="M9 10 Q12 14 18 15 Q24 14 27 10 L28 45 L8 45 Z" fill="#1A0A00"/>
        </g>
        {/* Nura Liya - small stature, hands up with glow */}
        <g transform="translate(282, 494)">
          <ellipse cx="14" cy="0" rx="10" ry="10" fill="#1A0A00"/>
          <path d="M4 10 Q8 14 14 15 Q20 14 24 10 L26 44 L2 44 Z" fill="#1A0A00"/>
          {/* Hands with glow */}
          <ellipse cx="0" cy="20" rx="5" ry="4" fill="#1A0A00"/>
          <ellipse cx="28" cy="20" rx="5" ry="4" fill="#1A0A00"/>
          <ellipse cx="0" cy="20" rx="7" ry="6" fill="#FFF4B3" opacity="0.5"/>
          <ellipse cx="28" cy="20" rx="7" ry="6" fill="#FFF4B3" opacity="0.5"/>
        </g>
        {/* Marley - dog ears */}
        <g transform="translate(315, 488)">
          <ellipse cx="18" cy="0" rx="14" ry="13" fill="#1A0A00"/>
          <ellipse cx="5" cy="-2" rx="5" ry="10" fill="#1A0A00"/>
          <ellipse cx="31" cy="-2" rx="5" ry="10" fill="#1A0A00"/>
          <path d="M6 12 Q10 20 18 22 Q26 20 30 12 L30 40 L6 40 Z" fill="#1A0A00"/>
        </g>
        {/* Dugu - ghost cat with slight glow */}
        <g transform="translate(350, 490)">
          <path d="M4 44 Q4 10 18 6 Q32 10 32 44 L28 36 L22 44 L16 36 L10 44 Z" fill="#1A0A00" opacity="0.85"/>
          <path d="M10 6 L6 -4 L14 4 Z" fill="#1A0A00"/>
          <path d="M26 6 L30 -4 L22 4 Z" fill="#1A0A00"/>
          <ellipse cx="18" cy="22" rx="14" ry="14" fill="#1A0A00" opacity="0.85"/>
          <ellipse cx="18" cy="18" rx="16" ry="16" fill="#4AABDB" opacity="0.2"/>
        </g>
      </g>
    </svg>
  )
}
