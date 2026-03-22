export default function LinaKehrtHeim() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-heim-moment">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="38"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <radialGradient id="portal-heim" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B3E5FF" stopOpacity="0.9"/>
          <stop offset="40%" stopColor="#4AABDB" stopOpacity="0.6"/>
          <stop offset="70%" stopColor="#9B59D0" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#2D1B4E" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="candy-land-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB3D9" stopOpacity="0.9"/>
          <stop offset="70%" stopColor="#FFB3D9" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#FFB3D9" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="bedroom-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F4C89A" stopOpacity="0"/>
          <stop offset="30%" stopColor="#F4C89A" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#F4C89A" stopOpacity="0.9"/>
        </linearGradient>
        <mask id="left-fade">
          <linearGradient id="left-fade-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="1"/>
            <stop offset="80%" stopColor="white" stopOpacity="1"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <rect width="200" height="600" fill="url(#left-fade-grad)"/>
        </mask>
        <style>{`
          @keyframes scene-home {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes portal-spin-heim {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes portal-pulse-heim {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          @keyframes candy-dissolve {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.5; }
          }
          @keyframes bedroom-glow {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          @keyframes sticker-sparkle {
            0%, 100% { transform: rotate(-10deg) scale(1); }
            50% { transform: rotate(5deg) scale(1.1); }
          }
          .heim-scene { animation: scene-home 1s ease both; }
          .portal-ring-heim { animation: portal-spin-heim 8s linear infinite; transform-box: fill-box; transform-origin: 200px 300px; }
          .portal-glow-heim { animation: portal-pulse-heim 2.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .candy-fade { animation: candy-dissolve 3s ease-in-out infinite; }
          .bedroom-warm { animation: bedroom-glow 3s ease-in-out infinite; }
          .sticker-anim { animation: sticker-sparkle 2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      <g className="heim-scene">
        {/* === LEFT SIDE: Zuckerwatten-Land (fading) === */}
        <g mask="url(#left-fade)" className="candy-fade">
          {/* Pink/purple Zuckerwatten sky */}
          <rect width="210" height="600" fill="#D4B3FF"/>
          <rect width="210" height="300" y="300" fill="#FFB3D9" opacity="0.7"/>
          {/* Cotton candy clouds */}
          <ellipse cx="50" cy="60" rx="45" ry="20" fill="#FFB3D9" opacity="0.8" filter="url(#rough-heim-moment)"/>
          <ellipse cx="30" cy="70" rx="28" ry="15" fill="#FFB3D9" opacity="0.8"/>
          <ellipse cx="140" cy="40" rx="40" ry="18" fill="#D4B3FF" opacity="0.9" filter="url(#rough-heim-moment)"/>
          {/* Lollipop tree left side */}
          <rect x="15" y="350" width="8" height="150" rx="4" fill="#8B4513"/>
          <circle cx="19" cy="338" r="28" fill="#FF6DB6" opacity="0.85" filter="url(#rough-heim-moment)"/>
          {/* Pink ground */}
          <path d="M0 510 Q40 500 80 510 Q120 520 160 510 Q185 504 210 508 L210 600 L0 600 Z" fill="#FFB3D9" opacity="0.9"/>
          {/* Dissolving/fading particles */}
          <circle cx="60" cy="200" r="6" fill="#FF6DB6" opacity="0.5"/>
          <circle cx="100" cy="160" r="4" fill="#D4B3FF" opacity="0.4"/>
          <circle cx="170" cy="220" r="5" fill="#FFB3D9" opacity="0.5"/>
          <circle cx="30" cy="300" r="4" fill="#9B59D0" opacity="0.3"/>
          <circle cx="140" cy="280" r="6" fill="#FF6DB6" opacity="0.4"/>
          {/* Emmi waving goodbye tiny figure at left edge */}
          <g transform="translate(25, 470)">
            <ellipse cx="12" cy="0" rx="9" ry="9" fill="#F0E0D0" opacity="0.7"/>
            <path d="M6 9 Q12 15 18 9 L20 35 L4 35 Z" fill="#4A3060" opacity="0.7"/>
            {/* Waving arm */}
            <path d="M18 15 Q28 5 30 -2" fill="none" stroke="#F0E0D0" strokeWidth="5" strokeLinecap="round" opacity="0.7"/>
            {/* Tiny hat */}
            <path d="M5 -2 L12 -14 L19 -2 Z" fill="#9B59D0" opacity="0.7"/>
          </g>
        </g>

        {/* === RIGHT SIDE: Bedroom (warm, welcoming) === */}
        <g className="bedroom-warm">
          {/* Bedroom wall - warm amber/peach */}
          <rect x="190" width="210" height="600" fill="#F4C89A"/>
          {/* Floor */}
          <rect x="190" y="490" width="210" height="110" fill="#8B4513"/>
          {/* Floor grain */}
          <line x1="190" y1="506" x2="400" y2="506" stroke="#6B3010" strokeWidth="1" opacity="0.4"/>
          <line x1="190" y1="522" x2="400" y2="522" stroke="#6B3010" strokeWidth="1" opacity="0.4"/>
          {/* Bedroom lamp warm glow */}
          <ellipse cx="350" cy="150" rx="40" ry="30" fill="#FFF4B3" opacity="0.4"/>
          {/* Lamp */}
          <path d="M340 120 L360 120 L370 160 L330 160 Z" fill="#F39C12" stroke="#2D1B4E" strokeWidth="2"/>
          <rect x="347" y="60" width="6" height="62" rx="3" fill="#8B5C30" stroke="#2D1B4E" strokeWidth="1.5"/>
          <rect x="335" y="58" width="30" height="6" rx="3" fill="#8B5C30" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Warm wall light from lamp */}
          <ellipse cx="360" cy="160" rx="80" ry="60" fill="#FFF4B3" opacity="0.15"/>
          {/* Bed glimpse right side */}
          <rect x="280" y="420" width="120" height="80" rx="8" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="2"/>
          <rect x="280" y="420" width="120" height="30" rx="8" fill="#7D3FB0" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Pillow */}
          <rect x="290" y="430" width="50" height="28" rx="10" fill="#E8D0FF" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Plush toy on bed */}
          <circle cx="355" cy="438" r="14" fill="#E8A020" stroke="#2D1B4E" strokeWidth="2"/>
          <ellipse cx="347" cy="442" rx="5" ry="8" fill="#E8A020" stroke="#2D1B4E" strokeWidth="1.5"/>
          <ellipse cx="363" cy="442" rx="5" ry="8" fill="#E8A020" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Plush eyes */}
          <circle cx="351" cy="436" r="3" fill="#5C2D00"/>
          <circle cx="359" cy="436" r="3" fill="#5C2D00"/>
          {/* Desk/bookshelf suggestion */}
          <rect x="195" y="310" width="60" height="10" rx="3" fill="#7A4C20" stroke="#2D1B4E" strokeWidth="1.5"/>
          <rect x="200" y="265" width="8" height="45" rx="2" fill="#E74C3C"/>
          <rect x="210" y="270" width="7" height="40" rx="2" fill="#3498DB"/>
          <rect x="219" y="265" width="9" height="45" rx="2" fill="#27AE60"/>
          <rect x="230" y="268" width="7" height="42" rx="2" fill="#9B59D0"/>
          <rect x="239" y="265" width="8" height="45" rx="2" fill="#F39C12"/>
        </g>

        {/* Bedroom fade overlay blending */}
        <rect x="190" width="210" height="600" fill="url(#bedroom-fade)"/>

        {/* === PORTAL in center === */}
        {/* Portal outer glow */}
        <circle cx="200" cy="300" r="90" fill="url(#portal-heim)" className="portal-glow-heim"/>

        {/* Spinning ring */}
        <g className="portal-ring-heim">
          {[0,18,36,54,72,90,108,126,144,162,180,198,216,234,252,270,288,306,324,342].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x = 200 + 80 * Math.cos(rad)
            const y = 300 + 80 * Math.sin(rad)
            return <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 4 : 2.5} fill={i % 3 === 0 ? '#4AABDB' : i % 3 === 1 ? '#D4B3FF' : '#FFB3D9'} opacity="0.9"/>
          })}
        </g>

        {/* Portal interior */}
        <circle cx="200" cy="300" r="62" fill="#B3E5FF" opacity="0.5"/>
        <circle cx="200" cy="300" r="45" fill="white" opacity="0.6"/>
        <circle cx="200" cy="300" r="30" fill="#D4B3FF" opacity="0.4"/>

        {/* === LINA MID-STEP through portal === */}
        {/* Right side (bedroom) - solid/bright */}
        {/* Right leg stepping into bedroom */}
        <path d="M215 490 Q220 450 218 430" fill="none" stroke="#F4C89A" strokeWidth="18" strokeLinecap="round"/>
        <path d="M218 490 Q225 460 222 430" fill="none" stroke="#FFB3D9" strokeWidth="14" strokeLinecap="round" opacity="0.7"/>
        {/* Shoe right */}
        <path d="M212 490 Q220 484 234 486 L236 496 Q224 500 210 496 Z" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Right side of dress */}
        <path d="M200 340 Q215 330 230 340 L240 430 L200 440 Z" fill="#FFB3D9" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Right arm */}
        <path d="M228 360 Q248 345 260 330" fill="none" stroke="#F4C89A" strokeWidth="14" strokeLinecap="round"/>

        {/* Left side (candy land) - slightly faded, stepping out */}
        <path d="M182 490 Q180 450 182 430" fill="none" stroke="#D4956A" strokeWidth="18" strokeLinecap="round" opacity="0.7"/>
        {/* Shoe left - still in other world */}
        <path d="M176 490 Q182 484 196 486 L196 496 Q184 500 174 496 Z" fill="#5C2800" stroke="#2D1B4E" strokeWidth="2" opacity="0.8"/>
        {/* Left dress */}
        <path d="M200 340 Q186 330 170 340 L162 430 L200 440 Z" fill="#FF6DB6" opacity="0.8" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Left arm waving */}
        <path d="M172 360 Q150 340 138 320" fill="none" stroke="#D4956A" strokeWidth="14" strokeLinecap="round" opacity="0.8"/>

        {/* Neck & head */}
        <rect x="187" y="310" width="26" height="30" rx="8" fill="#F4C89A" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Head */}
        <ellipse cx="200" cy="285" rx="35" ry="35" fill="#F4C89A" stroke="#2D1B4E" strokeWidth="2.5"/>
        {/* Hair */}
        <path d="M166 282 Q164 262 172 252 Q184 240 200 240 Q216 240 228 252 Q236 262 234 282 Q228 252 200 252 Q172 252 166 282 Z" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Left pigtail */}
        <path d="M166 282 Q154 276 152 292 Q152 302 164 302" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Right pigtail */}
        <path d="M234 282 Q246 276 248 292 Q248 302 236 302" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Hair ties */}
        <circle cx="152" cy="294" r="4" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1.5"/>
        <circle cx="248" cy="294" r="4" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1.5"/>
        {/* Eyes - looking at home with joy */}
        <ellipse cx="190" cy="284" rx="6.5" ry="7" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
        <circle cx="191" cy="286" r="4.5" fill="#3D1A00"/>
        <circle cx="193" cy="283" r="1.8" fill="white"/>
        <ellipse cx="210" cy="284" rx="6.5" ry="7" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
        <circle cx="211" cy="286" r="4.5" fill="#3D1A00"/>
        <circle cx="213" cy="283" r="1.8" fill="white"/>
        {/* Smile - happy */}
        <path d="M190 298 Q200 308 210 298" fill="none" stroke="#2D1B4E" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Cheeks */}
        <ellipse cx="180" cy="295" rx="7" ry="4" fill="#FFB3B3" opacity="0.7"/>
        <ellipse cx="220" cy="295" rx="7" ry="4" fill="#FFB3B3" opacity="0.7"/>

        {/* Emmi's punk star sticker in right hand */}
        <g className="sticker-anim" transform="translate(252, 320)">
          <circle cx="10" cy="10" r="14" fill="#2D1B4E" stroke="#FF6DB6" strokeWidth="2"/>
          {/* Star */}
          <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="#FF6DB6" stroke="none"/>
          {/* Lightning bolt detail */}
          <path d="M10 5 L8 9 L11 9 L9 13" fill="none" stroke="#FFF4B3" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      </g>
    </svg>
  )
}
