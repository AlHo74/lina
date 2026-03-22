export default function PortalOpening() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-portal-moment">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="20"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <radialGradient id="portal-glow-moment" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B3E5FF" stopOpacity="0.95"/>
          <stop offset="30%" stopColor="#4AABDB" stopOpacity="0.8"/>
          <stop offset="65%" stopColor="#9B59D0" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#2D1B4E" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="portal-inner-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#4AABDB" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#9B59D0" stopOpacity="0"/>
        </radialGradient>
        <style>{`
          @keyframes portal-pulse-moment {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.04); }
          }
          @keyframes portal-spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes portal-spin-slow-rev {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes scene-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes sparkle-portal {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.6); }
          }
          .portal-scene { animation: scene-fade-in 1.5s ease both; }
          .portal-glow-anim { animation: portal-pulse-moment 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .portal-ring-spin { animation: portal-spin-slow 8s linear infinite; transform-box: fill-box; transform-origin: 200px 290px; }
          .portal-ring-rev { animation: portal-spin-slow-rev 12s linear infinite; transform-box: fill-box; transform-origin: 200px 290px; }
          .sp-1 { animation: sparkle-portal 1.5s ease-in-out infinite; }
          .sp-2 { animation: sparkle-portal 1.5s ease-in-out infinite 0.3s; }
          .sp-3 { animation: sparkle-portal 1.5s ease-in-out infinite 0.6s; }
          .sp-4 { animation: sparkle-portal 1.5s ease-in-out infinite 0.9s; }
          .sp-5 { animation: sparkle-portal 1.5s ease-in-out infinite 1.2s; }
        `}</style>
      </defs>

      <g className="portal-scene">
        {/* Bedroom walls - warm colors */}
        <rect width="400" height="600" fill="#F4C89A"/>
        {/* Floor */}
        <rect y="480" width="400" height="120" fill="#8B4513"/>
        {/* Floor grain lines */}
        <line x1="0" y1="495" x2="400" y2="495" stroke="#6B3010" strokeWidth="1" opacity="0.4"/>
        <line x1="0" y1="515" x2="400" y2="515" stroke="#6B3010" strokeWidth="1" opacity="0.4"/>
        <line x1="0" y1="535" x2="400" y2="535" stroke="#6B3010" strokeWidth="1" opacity="0.4"/>
        <line x1="0" y1="555" x2="400" y2="555" stroke="#6B3010" strokeWidth="1" opacity="0.4"/>
        <line x1="80" y1="480" x2="60" y2="600" stroke="#6B3010" strokeWidth="1" opacity="0.3"/>
        <line x1="160" y1="480" x2="140" y2="600" stroke="#6B3010" strokeWidth="1" opacity="0.3"/>
        <line x1="240" y1="480" x2="220" y2="600" stroke="#6B3010" strokeWidth="1" opacity="0.3"/>
        <line x1="320" y1="480" x2="300" y2="600" stroke="#6B3010" strokeWidth="1" opacity="0.3"/>

        {/* Window top-left with night sky */}
        <rect x="20" y="40" width="110" height="140" rx="8" fill="#1A252F" stroke="#5C3010" strokeWidth="4"/>
        {/* Window frame cross */}
        <line x1="75" y1="40" x2="75" y2="180" stroke="#5C3010" strokeWidth="4"/>
        <line x1="20" y1="110" x2="130" y2="110" stroke="#5C3010" strokeWidth="4"/>
        {/* Night sky stars */}
        <circle cx="40" cy="65" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="60" cy="55" r="1" fill="white" opacity="0.9"/>
        <circle cx="55" cy="80" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="85" cy="60" r="1" fill="white" opacity="0.8"/>
        <circle cx="100" cy="75" r="2" fill="white" opacity="0.9"/>
        <circle cx="110" cy="55" r="1" fill="white" opacity="0.7"/>
        <circle cx="45" cy="95" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="90" cy="92" r="1" fill="white" opacity="0.9"/>
        <circle cx="115" cy="90" r="1.5" fill="white" opacity="0.7"/>
        {/* Moon */}
        <circle cx="108" cy="68" r="10" fill="#FFF4B3"/>
        <circle cx="112" cy="64" r="8" fill="#1A252F"/>
        {/* Lower window panes - stars */}
        <circle cx="42" cy="140" r="1.5" fill="white" opacity="0.8"/>
        <circle cx="65" cy="150" r="1" fill="white" opacity="0.7"/>
        <circle cx="90" cy="135" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="112" cy="155" r="1" fill="white" opacity="0.7"/>

        {/* Window sill */}
        <rect x="16" y="176" width="118" height="8" rx="3" fill="#7A4010" stroke="#5C3010" strokeWidth="2"/>

        {/* Bookshelf - right side */}
        <rect x="310" y="60" width="75" height="200" rx="4" fill="#8B5C30" stroke="#5C2800" strokeWidth="3"/>
        {/* Shelves */}
        <rect x="310" y="110" width="75" height="6" fill="#6B3C10"/>
        <rect x="310" y="170" width="75" height="6" fill="#6B3C10"/>
        <rect x="310" y="230" width="75" height="6" fill="#6B3C10"/>
        {/* Books */}
        <rect x="314" y="65" width="10" height="43" rx="2" fill="#E74C3C"/>
        <rect x="326" y="68" width="8" height="40" rx="2" fill="#3498DB"/>
        <rect x="336" y="65" width="12" height="43" rx="2" fill="#27AE60"/>
        <rect x="350" y="70" width="9" height="38" rx="2" fill="#9B59D0"/>
        <rect x="361" y="65" width="11" height="43" rx="2" fill="#F39C12"/>
        <rect x="314" y="116" width="11" height="52" rx="2" fill="#FF6DB6"/>
        <rect x="327" y="120" width="9" height="48" rx="2" fill="#4AABDB"/>
        <rect x="338" y="116" width="10" height="52" rx="2" fill="#8B4513"/>
        <rect x="350" y="118" width="12" height="50" rx="2" fill="#2C3E50"/>
        <rect x="364" y="116" width="8" height="52" rx="2" fill="#C0392B"/>

        {/* Desk */}
        <rect x="150" y="430" width="200" height="16" rx="4" fill="#8B5C30" stroke="#5C2800" strokeWidth="2"/>
        <rect x="155" y="446" width="12" height="40" rx="3" fill="#7A4C20"/>
        <rect x="333" y="446" width="12" height="40" rx="3" fill="#7A4C20"/>
        {/* Items on desk */}
        <rect x="230" y="410" width="40" height="20" rx="3" fill="#F5F0E8" stroke="#C8B890" strokeWidth="1.5"/>
        <rect x="270" y="398" width="30" height="32" rx="2" fill="#D4956A" stroke="#5C2800" strokeWidth="1.5"/>
        <rect x="160" y="415" width="20" height="15" rx="2" fill="#FF6DB6" opacity="0.8"/>

        {/* Portal glow background */}
        <circle cx="200" cy="290" r="110" fill="url(#portal-glow-moment)" className="portal-glow-anim"/>

        {/* Outer spinning ring of dots */}
        <g className="portal-ring-spin">
          {[0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x = 200 + 100 * Math.cos(rad)
            const y = 290 + 100 * Math.sin(rad)
            return <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4 : 2.5} fill={i % 2 === 0 ? '#4AABDB' : '#D4B3FF'} opacity="0.9"/>
          })}
        </g>

        {/* Inner spinning ring */}
        <g className="portal-ring-rev">
          {[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340].map((angle, i) => {
            const rad = (angle * Math.PI) / 180
            const x = 200 + 80 * Math.cos(rad)
            const y = 290 + 80 * Math.sin(rad)
            return <circle key={i} cx={x} cy={y} r={2} fill={i % 2 === 0 ? '#FF6DB6' : '#FFF4B3'} opacity="0.8"/>
          })}
        </g>

        {/* Portal center glow */}
        <circle cx="200" cy="290" r="68" fill="url(#portal-inner-glow)" className="portal-glow-anim"/>
        <circle cx="200" cy="290" r="50" fill="#B3E5FF" opacity="0.6"/>
        <circle cx="200" cy="290" r="35" fill="white" opacity="0.7"/>

        {/* Portal swirl */}
        <path d="M200 255 Q230 265 225 290 Q220 315 200 320 Q175 320 165 295 Q155 270 175 258 Q187 252 200 255" fill="none" stroke="#4AABDB" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>

        {/* Sparkles around portal */}
        <g className="sp-1">
          <path d="M130 230 L133 222 L136 230 L128 233 Z" fill="#FFF4B3" stroke="#F39C12" strokeWidth="1"/>
        </g>
        <g className="sp-2">
          <path d="M275 240 L278 232 L281 240 L273 243 Z" fill="#FF6DB6" stroke="#FF6DB6" strokeWidth="1"/>
        </g>
        <g className="sp-3">
          <path d="M140 350 L143 342 L146 350 L138 353 Z" fill="#4AABDB" stroke="#4AABDB" strokeWidth="1"/>
        </g>
        <g className="sp-4">
          <path d="M265 348 L268 340 L271 348 L263 351 Z" fill="#D4B3FF" stroke="#9B59D0" strokeWidth="1"/>
        </g>
        <g className="sp-5">
          <path d="M200 210 L204 200 L208 210 L198 214 Z" fill="white" stroke="#4AABDB" strokeWidth="1"/>
        </g>

        {/* Lina silhouette in foreground */}
        {/* Body */}
        <path d="M155 480 Q160 420 175 390 Q185 368 200 360 Q215 368 225 390 Q240 420 245 480 Z" fill="#4A2C17"/>
        {/* Dress flare */}
        <path d="M155 480 Q165 460 200 465 Q235 460 245 480 Z" fill="#FF6DB6" opacity="0.8"/>
        {/* Head silhouette */}
        <circle cx="200" cy="345" r="28" fill="#4A2C17"/>
        {/* Pigtails */}
        <ellipse cx="172" cy="340" rx="10" ry="16" fill="#4A2C17"/>
        <ellipse cx="228" cy="340" rx="10" ry="16" fill="#4A2C17"/>
        {/* Arms slightly raised in wonder */}
        <path d="M175 400 Q155 380 145 360" fill="none" stroke="#4A2C17" strokeWidth="16" strokeLinecap="round"/>
        <path d="M225 400 Q245 380 255 360" fill="none" stroke="#4A2C17" strokeWidth="16" strokeLinecap="round"/>

        {/* Text */}
        <text
          x="200"
          y="550"
          textAnchor="middle"
          fontFamily="cursive"
          fontSize="22"
          fill="#2D1B4E"
          fontStyle="italic"
          filter="url(#rough-portal-moment)"
        >
          Ein Abenteuer beginnt...
        </text>
      </g>
    </svg>
  )
}
