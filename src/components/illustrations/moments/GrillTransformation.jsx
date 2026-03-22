export default function GrillTransformation() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-transform-moment">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="33"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <filter id="fluffy-transform">
          <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" seed="44"/>
          <feDisplacementMap in="SourceGraphic" scale="8"/>
        </filter>
        <style>{`
          @keyframes scene-transform {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes candy-spread {
            0% { clip-path: inset(100% 0 0 0); }
            100% { clip-path: inset(0% 0 0 0); }
          }
          @keyframes cotton-float {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-8px) scale(1.03); }
          }
          @keyframes eye-switch {
            0%, 45% { opacity: 1; }
            50%, 95% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes eye-switch-confused {
            0%, 45% { opacity: 0; }
            50%, 95% { opacity: 1; }
            100% { opacity: 0; }
          }
          @keyframes tong-droop {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(15deg); }
          }
          .transform-scene { animation: scene-transform 0.8s ease both; }
          .candy-overlay { animation: candy-spread 3s ease-out 0.5s both; clip-path: inset(100% 0 0 0); }
          .cotton-puff { animation: cotton-float 2.5s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .eyes-furious { animation: eye-switch 4s ease-in-out infinite; }
          .eyes-confused { animation: eye-switch-confused 4s ease-in-out infinite; }
          .tong-droop-anim { animation: tong-droop 3s ease-in-out infinite 1s; transform-box: fill-box; transform-origin: top center; }
        `}</style>
      </defs>

      <g className="transform-scene">
        {/* Background - orange-red grading to pink */}
        <rect width="400" height="600" fill="#C0392B"/>
        <rect width="400" height="400" y="200" fill="#E74C3C" opacity="0.4"/>
        <rect width="400" height="300" y="300" fill="#FF6DB6" opacity="0.3"/>
        <rect width="400" height="200" y="400" fill="#FFB3D9" opacity="0.4"/>

        {/* Ground */}
        <rect y="530" width="400" height="70" fill="#8B4513"/>

        {/* Grill's figure - centered */}
        {/* Legs */}
        <rect x="168" y="440" width="28" height="90" rx="10" fill="#B07040" stroke="#2D1B4E" strokeWidth="2"/>
        <rect x="204" y="440" width="28" height="90" rx="10" fill="#B07040" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Shoes */}
        <path d="M162 525 Q168 518 196 520 L196 530 Q182 535 162 530 Z" fill="#3A1800" stroke="#2D1B4E" strokeWidth="2"/>
        <path d="M204 525 Q210 518 238 520 L238 530 Q224 535 204 530 Z" fill="#3A1800" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Body */}
        <rect x="140" y="300" width="120" height="145" rx="20" fill="#B07040" stroke="#2D1B4E" strokeWidth="3"/>
        {/* Gold chain */}
        <path d="M155 330 Q165 325 180 328 Q200 330 220 328 Q235 325 245 330" fill="none" stroke="#F1C40F" strokeWidth="4" strokeLinecap="round"/>
        {/* Arms */}
        <path d="M140 340 Q110 330 95 315" fill="none" stroke="#B07040" strokeWidth="22" strokeLinecap="round"/>
        <circle cx="93" cy="313" r="11" fill="#B07040" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Tongs in right hand */}
        <g className="tong-droop-anim">
          <path d="M260 340 Q285 310 295 280" fill="none" stroke="#C0C0C0" strokeWidth="8" strokeLinecap="round"/>
          <path d="M265 335 Q292 308 305 275" fill="none" stroke="#C0C0C0" strokeWidth="8" strokeLinecap="round"/>
          <path d="M295 280 Q298 270 305 275" fill="none" stroke="#C0C0C0" strokeWidth="4" strokeLinecap="round"/>
        </g>
        {/* Neck */}
        <rect x="178" y="272" width="44" height="32" rx="10" fill="#B07040" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Head */}
        <ellipse cx="200" cy="240" rx="58" ry="56" fill="#B07040" stroke="#2D1B4E" strokeWidth="3"/>
        {/* Backwards red cap */}
        <path d="M145 228 Q148 168 200 166 Q252 168 255 228" fill="#CC1100" stroke="#2D1B4E" strokeWidth="3"/>
        <path d="M145 228 Q140 222 136 212 Q132 202 138 196 Q142 206 148 214" fill="#CC1100" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Sunglasses */}
        <circle cx="180" cy="240" r="22" fill="#1A1A00" stroke="#D4AF00" strokeWidth="3"/>
        <circle cx="220" cy="240" r="22" fill="#1A1A00" stroke="#D4AF00" strokeWidth="3"/>
        <rect x="200" y="237" width="2" height="6" rx="1" fill="#D4AF00"/>
        <line x1="158" y1="240" x2="152" y2="239" stroke="#D4AF00" strokeWidth="2"/>
        <line x1="242" y1="240" x2="248" y2="239" stroke="#D4AF00" strokeWidth="2"/>
        {/* Furious eyes underneath glasses (barely visible, behind dark lenses) */}
        <g className="eyes-furious">
          <path d="M170 230 Q180 224 190 230" fill="none" stroke="#CC0000" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
          <path d="M210 230 Q220 224 230 230" fill="none" stroke="#CC0000" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
        </g>
        {/* Confused eyes state */}
        <g className="eyes-confused">
          <path d="M172 232 Q180 228 188 232" fill="none" stroke="#CC8800" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
          <path d="M212 228 Q220 232 228 228" fill="none" stroke="#CC8800" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
          {/* Sweat drop - confused */}
          <path d="M240 228 Q242 220 238 215 Q234 220 240 228 Z" fill="#B3E5FF" opacity="0.5"/>
        </g>
        {/* Mouth changing too - open confused */}
        <path d="M180 264 Q200 272 220 264" fill="#8B3010" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
        <ellipse cx="200" cy="268" rx="12" ry="7" fill="#5A1800"/>

        {/* === Cotton candy spreading from feet upward === */}
        <g className="candy-overlay">
          {/* Cotton candy puffs - increasingly fluffy going up */}
          {/* Bottom/feet - most transformed */}
          <g className="cotton-puff">
            <ellipse cx="160" cy="522" rx="32" ry="20" fill="#FFB3D9" stroke="#FF6DB6" strokeWidth="2" filter="url(#fluffy-transform)" opacity="0.9"/>
            <ellipse cx="215" cy="525" rx="28" ry="18" fill="#FFB3D9" stroke="#FF6DB6" strokeWidth="2" filter="url(#fluffy-transform)" opacity="0.9"/>
            <ellipse cx="245" cy="518" rx="22" ry="15" fill="#D4B3FF" stroke="#9B59D0" strokeWidth="2" filter="url(#fluffy-transform)" opacity="0.9"/>
          </g>
          {/* Legs being engulfed */}
          <g className="cotton-puff" style={{animationDelay:'0.3s'}}>
            <ellipse cx="175" cy="490" rx="28" ry="18" fill="#FFB3D9" stroke="#FF6DB6" strokeWidth="2" filter="url(#fluffy-transform)" opacity="0.85"/>
            <ellipse cx="218" cy="487" rx="24" ry="16" fill="#D4B3FF" stroke="#9B59D0" strokeWidth="2" filter="url(#fluffy-transform)" opacity="0.85"/>
            <ellipse cx="135" cy="498" rx="20" ry="14" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.8"/>
            <ellipse cx="252" cy="495" rx="18" ry="12" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.8"/>
          </g>
          {/* Mid body - still spreading */}
          <g className="cotton-puff" style={{animationDelay:'0.6s'}}>
            <ellipse cx="148" cy="460" rx="22" ry="14" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.75"/>
            <ellipse cx="255" cy="458" rx="20" ry="13" fill="#D4B3FF" filter="url(#fluffy-transform)" opacity="0.75"/>
            <ellipse cx="175" cy="452" rx="18" ry="12" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.7"/>
            <ellipse cx="230" cy="455" rx="16" ry="11" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.7"/>
          </g>
          {/* Top edges getting fluffy at edges */}
          <g className="cotton-puff" style={{animationDelay:'0.9s'}}>
            <ellipse cx="142" cy="385" rx="14" ry="9" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.55"/>
            <ellipse cx="260" cy="380" rx="12" ry="8" fill="#D4B3FF" filter="url(#fluffy-transform)" opacity="0.55"/>
            <ellipse cx="160" cy="350" rx="10" ry="7" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.4"/>
            <ellipse cx="248" cy="348" rx="10" ry="7" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.4"/>
          </g>
          {/* Cap top getting fluffy */}
          <g className="cotton-puff" style={{animationDelay:'1.2s'}}>
            <ellipse cx="172" cy="190" rx="12" ry="8" fill="#FFB3D9" filter="url(#fluffy-transform)" opacity="0.5"/>
            <ellipse cx="228" cy="186" rx="12" ry="8" fill="#D4B3FF" filter="url(#fluffy-transform)" opacity="0.5"/>
          </g>
        </g>

        {/* Floating sugar particles */}
        <circle cx="100" cy="420" r="6" fill="#FFB3D9" opacity="0.6" filter="url(#fluffy-transform)"/>
        <circle cx="300" cy="400" r="5" fill="#D4B3FF" opacity="0.6" filter="url(#fluffy-transform)"/>
        <circle cx="80" cy="350" r="4" fill="#FFB3D9" opacity="0.5"/>
        <circle cx="325" cy="360" r="5" fill="#FFB3D9" opacity="0.5"/>
        <circle cx="60" cy="460" r="6" fill="#D4B3FF" opacity="0.4"/>
        <circle cx="340" cy="450" r="6" fill="#FFB3D9" opacity="0.4"/>
      </g>
    </svg>
  )
}
