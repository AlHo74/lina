export default function LollipopWald() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-lollipop-scene">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="3"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <style>{`
          @keyframes sway-tree {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
          }
          @keyframes float-leaf {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-10px) rotate(15deg); opacity: 0.7; }
          }
          @keyframes candy-path-shift {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(3px); }
          }
          .tree-1 { animation: sway-tree 3s ease-in-out infinite; transform-box: fill-box; transform-origin: bottom center; }
          .tree-2 { animation: sway-tree 3.5s ease-in-out infinite 0.5s; transform-box: fill-box; transform-origin: bottom center; }
          .tree-3 { animation: sway-tree 2.8s ease-in-out infinite 1s; transform-box: fill-box; transform-origin: bottom center; }
          .tree-4 { animation: sway-tree 4s ease-in-out infinite 0.3s; transform-box: fill-box; transform-origin: bottom center; }
          .tree-5 { animation: sway-tree 3.2s ease-in-out infinite 1.5s; transform-box: fill-box; transform-origin: bottom center; }
          .leaf-1 { animation: float-leaf 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .leaf-2 { animation: float-leaf 5s ease-in-out infinite 1s; transform-box: fill-box; transform-origin: center; }
          .leaf-3 { animation: float-leaf 3.5s ease-in-out infinite 2s; transform-box: fill-box; transform-origin: center; }
          .candy-path { animation: candy-path-shift 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        `}</style>
      </defs>

      {/* Sky */}
      <rect width="400" height="200" fill="#B3E5FF"/>

      {/* Clouds - irregular ellipses */}
      <g filter="url(#rough-lollipop-scene)">
        {/* Cloud 1 - white/pink */}
        <ellipse cx="60" cy="30" rx="35" ry="18" fill="white" opacity="0.9"/>
        <ellipse cx="45" cy="35" rx="22" ry="14" fill="white" opacity="0.9"/>
        <ellipse cx="80" cy="33" rx="20" ry="13" fill="#FFD4ED" opacity="0.7"/>
        {/* Cloud 2 */}
        <ellipse cx="200" cy="25" rx="40" ry="16" fill="white" opacity="0.9"/>
        <ellipse cx="180" cy="30" rx="25" ry="14" fill="white" opacity="0.9"/>
        <ellipse cx="225" cy="28" rx="22" ry="13" fill="#FFD4ED" opacity="0.7"/>
        {/* Cloud 3 - pinkish */}
        <ellipse cx="340" cy="35" rx="38" ry="15" fill="white" opacity="0.9"/>
        <ellipse cx="320" cy="40" rx="24" ry="13" fill="#FFB3D9" opacity="0.6"/>
        <ellipse cx="362" cy="37" rx="22" ry="13" fill="white" opacity="0.9"/>
      </g>

      {/* Candy path in background - swirly stripes leading into distance */}
      <g className="candy-path" filter="url(#rough-lollipop-scene)">
        <path d="M170 200 Q185 160 195 120 Q200 100 200 80" fill="none" stroke="white" strokeWidth="10" opacity="0.6"/>
        <path d="M175 200 Q190 160 200 120 Q205 100 205 80" fill="none" stroke="#FF6DB6" strokeWidth="5" opacity="0.5"/>
        <path d="M210 200 Q215 160 205 120 Q200 100 195 80" fill="none" stroke="white" strokeWidth="10" opacity="0.6"/>
        <path d="M205 200 Q210 160 202 120 Q198 100 193 80" fill="none" stroke="#FF6DB6" strokeWidth="5" opacity="0.5"/>
      </g>

      {/* Tree 1 - tall pink */}
      <g className="tree-1">
        <rect x="55" y="90" width="8" height="80" rx="4" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        <circle cx="59" cy="82" r="28" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-lollipop-scene)"/>
        <circle cx="59" cy="82" r="20" fill="#FF6DB6" opacity="0.3"/>
        {/* Swirl on candy */}
        <path d="M59 65 Q70 72 67 82 Q64 92 59 92" fill="none" stroke="#FF8ED4" strokeWidth="3" strokeLinecap="round"/>
      </g>

      {/* Tree 2 - short purple */}
      <g className="tree-2">
        <rect x="108" y="115" width="7" height="55" rx="3.5" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        <circle cx="111.5" cy="108" r="22" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-lollipop-scene)"/>
        <path d="M111 94 Q120 100 118 110 Q116 118 111 118" fill="none" stroke="#BB79F0" strokeWidth="2.5" strokeLinecap="round"/>
      </g>

      {/* Tree 3 - medium cyan */}
      <g className="tree-3">
        <rect x="188" y="100" width="9" height="70" rx="4" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        <circle cx="192.5" cy="91" r="26" fill="#4AABDB" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-lollipop-scene)"/>
        <path d="M192 75 Q204 83 200 91 Q197 100 192 100" fill="none" stroke="#6ACBFB" strokeWidth="2.5" strokeLinecap="round"/>
      </g>

      {/* Tree 4 - medium-tall yellow */}
      <g className="tree-4">
        <rect x="278" y="95" width="8" height="75" rx="4" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        <circle cx="282" cy="86" r="25" fill="#F39C12" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-lollipop-scene)"/>
        <path d="M282 72 Q294 79 291 87 Q288 97 282 97" fill="none" stroke="#FFB932" strokeWidth="2.5" strokeLinecap="round"/>
      </g>

      {/* Tree 5 - short green */}
      <g className="tree-5">
        <rect x="338" y="118" width="7" height="52" rx="3.5" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        <circle cx="341.5" cy="111" r="20" fill="#27AE60" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-lollipop-scene)"/>
        <path d="M341 98 Q351 104 349 111 Q347 119 341 119" fill="none" stroke="#47CE80" strokeWidth="2.5" strokeLinecap="round"/>
      </g>

      {/* Ground - wavy green */}
      <path d="M0 175 Q20 168 40 175 Q60 182 80 175 Q100 168 120 175 Q140 182 160 175 Q180 168 200 175 Q220 182 240 175 Q260 168 280 175 Q300 182 320 175 Q340 168 360 175 Q380 182 400 175 L400 200 L0 200 Z" fill="#5CBB4A" stroke="#2D1B4E" strokeWidth="2" filter="url(#rough-lollipop-scene)"/>
      {/* Ground darker layer */}
      <path d="M0 185 Q25 180 50 185 Q75 190 100 185 Q125 180 150 185 Q175 190 200 185 Q225 180 250 185 Q275 190 300 185 Q325 180 350 185 Q375 190 400 185 L400 200 L0 200 Z" fill="#4AA838" opacity="0.7"/>

      {/* Floating sugar leaves */}
      <g className="leaf-1">
        <path d="M130 80 L136 70 L142 80 L136 90 Z" fill="#FFB3D9" stroke="#2D1B4E" strokeWidth="1.5" opacity="0.8"/>
      </g>
      <g className="leaf-2">
        <path d="M260 60 L266 50 L272 60 L266 70 Z" fill="#D4B3FF" stroke="#2D1B4E" strokeWidth="1.5" opacity="0.8"/>
      </g>
      <g className="leaf-3">
        <path d="M370 90 L376 80 L382 90 L376 100 Z" fill="#FFF4B3" stroke="#2D1B4E" strokeWidth="1.5" opacity="0.8"/>
      </g>
      {/* Small floating candy sparkles */}
      <circle cx="90" cy="65" r="3" fill="#FF6DB6" opacity="0.7"/>
      <circle cx="160" cy="55" r="2" fill="#9B59D0" opacity="0.6"/>
      <circle cx="310" cy="70" r="3" fill="#4AABDB" opacity="0.7"/>
    </svg>
  )
}
