export default function LinaMeetsEmmi() {
  return (
    <svg
      width="100%"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="rough-meets-moment">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="22"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>
        <style>{`
          @keyframes sparkle-meets {
            0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.4; transform: scale(0.6) rotate(45deg); }
          }
          @keyframes connection-pulse {
            0%, 100% { opacity: 0.6; strokeDashoffset: 0; }
            50% { opacity: 1; strokeDashoffset: 10; }
          }
          @keyframes scene-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes emmi-board-rock {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(-15deg) translateY(-10px); }
          }
          .meets-scene { animation: scene-in 0.8s ease both; }
          .sparkle-a { animation: sparkle-meets 1.2s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
          .sparkle-b { animation: sparkle-meets 1.2s ease-in-out infinite 0.2s; transform-box: fill-box; transform-origin: center; }
          .sparkle-c { animation: sparkle-meets 1.2s ease-in-out infinite 0.4s; transform-box: fill-box; transform-origin: center; }
          .sparkle-d { animation: sparkle-meets 1.2s ease-in-out infinite 0.6s; transform-box: fill-box; transform-origin: center; }
          .sparkle-e { animation: sparkle-meets 1.2s ease-in-out infinite 0.8s; transform-box: fill-box; transform-origin: center; }
          .sparkle-f { animation: sparkle-meets 1.2s ease-in-out infinite 1.0s; transform-box: fill-box; transform-origin: center; }
          .emmi-trick { animation: emmi-board-rock 0.6s ease-in-out infinite; transform-box: fill-box; transform-origin: bottom center; }
        `}</style>
      </defs>

      <g className="meets-scene">
        {/* Lollipop-Wald background - simplified */}
        {/* Blue sky */}
        <rect width="400" height="600" fill="#B3E5FF"/>
        {/* Ground */}
        <path d="M0 480 Q50 472 100 480 Q150 488 200 480 Q250 472 300 480 Q350 488 400 480 L400 600 L0 600 Z" fill="#5CBB4A" stroke="#2D1B4E" strokeWidth="2" filter="url(#rough-meets-moment)"/>
        <rect y="490" width="400" height="110" fill="#4AA838"/>

        {/* Small clouds */}
        <ellipse cx="80" cy="50" rx="45" ry="18" fill="white" opacity="0.9"/>
        <ellipse cx="60" cy="58" rx="28" ry="14" fill="white" opacity="0.9"/>
        <ellipse cx="105" cy="55" rx="25" ry="13" fill="#FFD4ED" opacity="0.7"/>
        <ellipse cx="320" cy="40" rx="40" ry="16" fill="white" opacity="0.9"/>
        <ellipse cx="300" cy="48" rx="25" ry="13" fill="white" opacity="0.9"/>

        {/* Left lollipop tree */}
        <rect x="30" y="280" width="10" height="200" rx="5" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        <circle cx="35" cy="265" r="38" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-meets-moment)"/>
        <path d="M35 232 Q52 243 49 260 Q46 275 35 276" fill="none" stroke="#FF8ED4" strokeWidth="3" strokeLinecap="round"/>

        {/* Right lollipop tree */}
        <rect x="360" y="300" width="10" height="180" rx="5" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        <circle cx="365" cy="285" r="32" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="3" filter="url(#rough-meets-moment)"/>
        <path d="M365 256 Q380 266 377 281 Q374 294 365 294" fill="none" stroke="#BB79F0" strokeWidth="3" strokeLinecap="round"/>

        {/* ===== LINA (left side) ===== */}
        {/* Lina's dress */}
        <path d="M95 480 Q100 420 115 395 Q125 375 145 365 Q160 370 165 395 Q175 420 178 480 Z" fill="#FFB3D9" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Dress lower flare */}
        <path d="M95 480 Q110 465 145 468 Q175 465 178 480 Z" fill="#FF6DB6"/>
        {/* Lina's body */}
        <rect x="120" y="350" width="50" height="50" rx="10" fill="#F4C89A" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Lina's arms - one up in greeting */}
        <path d="M120 370 Q100 350 95 330" fill="none" stroke="#F4C89A" strokeWidth="14" strokeLinecap="round"/>
        <circle cx="94" cy="328" r="8" fill="#F4C89A"/>
        <path d="M170 370 Q185 380 190 390" fill="none" stroke="#F4C89A" strokeWidth="14" strokeLinecap="round"/>
        {/* Lina's neck */}
        <rect x="132" y="330" width="20" height="22" rx="6" fill="#F4C89A"/>
        {/* Lina's head */}
        <ellipse cx="145" cy="302" rx="32" ry="32" fill="#F4C89A" stroke="#2D1B4E" strokeWidth="2.5"/>
        {/* Lina's hair */}
        <path d="M114 298 Q112 278 122 268 Q133 258 145 258 Q157 258 168 268 Q178 278 176 298 Q170 268 145 268 Q120 268 114 298 Z" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Left pigtail */}
        <path d="M114 298 Q102 292 100 308 Q100 318 110 318" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Right pigtail */}
        <path d="M176 298 Q188 292 190 308 Q190 318 180 318" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
        {/* Hair ties */}
        <circle cx="100" cy="310" r="4" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1.5"/>
        <circle cx="190" cy="310" r="4" fill="#FF6DB6" stroke="#2D1B4E" strokeWidth="1.5"/>
        {/* Lina's eyes */}
        <ellipse cx="135" cy="300" rx="6" ry="7" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
        <circle cx="136" cy="302" r="4" fill="#3D1A00"/>
        <circle cx="138" cy="299" r="1.5" fill="white"/>
        <ellipse cx="155" cy="300" rx="6" ry="7" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
        <circle cx="156" cy="302" r="4" fill="#3D1A00"/>
        <circle cx="158" cy="299" r="1.5" fill="white"/>
        {/* Lina's smile */}
        <path d="M137 312 Q145 320 153 312" fill="none" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
        {/* Lina's cheeks */}
        <ellipse cx="125" cy="308" rx="7" ry="4" fill="#FFB3B3" opacity="0.7"/>
        <ellipse cx="165" cy="308" rx="7" ry="4" fill="#FFB3B3" opacity="0.7"/>

        {/* ===== EMMI (right side, mid-kickflip) ===== */}
        {/* Emmi figure tilted - body mid-flight */}
        <g transform="rotate(-12, 260, 420)">
          {/* Skateboard at angle - below Emmi */}
          <g className="emmi-trick">
            <rect x="235" y="475" width="70" height="12" rx="6" fill="#8B4513" stroke="#2D1B4E" strokeWidth="2"/>
            <circle cx="248" cy="487" r="5" fill="#555" stroke="#2D1B4E" strokeWidth="1.5"/>
            <circle cx="292" cy="487" r="5" fill="#555" stroke="#2D1B4E" strokeWidth="1.5"/>
            {/* Deck design - lightning bolt */}
            <path d="M267 476 L271 469 L269 476 L274 476 L270 484 L272 476 Z" fill="#FF6DB6" opacity="0.7"/>
          </g>
          {/* Emmi's legs */}
          <path d="M248 475 Q245 455 248 440" fill="none" stroke="#2D1B4E" strokeWidth="14" strokeLinecap="round"/>
          <path d="M272 475 Q278 455 274 440" fill="none" stroke="#2D1B4E" strokeWidth="14" strokeLinecap="round"/>
          {/* Emmi's body/jacket */}
          <path d="M230 440 Q235 410 255 400 Q270 395 285 400 Q300 410 300 440 Z" fill="#4A3060" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Emmi's arms - flying out for balance */}
          <path d="M235 420 Q210 410 200 395" fill="none" stroke="#F0E0D0" strokeWidth="12" strokeLinecap="round"/>
          <circle cx="198" cy="393" r="7" fill="#F0E0D0"/>
          <path d="M298 420 Q320 408 332 398" fill="none" stroke="#F0E0D0" strokeWidth="12" strokeLinecap="round"/>
          <circle cx="334" cy="396" r="7" fill="#F0E0D0"/>
          {/* Emmi neck */}
          <rect x="257" y="380" width="16" height="22" rx="5" fill="#F0E0D0"/>
          {/* Emmi head */}
          <ellipse cx="265" cy="355" rx="28" ry="27" fill="#F0E0D0" stroke="#2D1B4E" strokeWidth="2.5"/>
          {/* Witch hat */}
          <path d="M248 340 L265 308 L282 340 Z" fill="#9B59D0" stroke="#2D1B4E" strokeWidth="2"/>
          <rect x="242" y="338" width="46" height="8" rx="4" fill="#7D3FB0" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Spiky hair */}
          <path d="M238 345 L236 328 L242 336 L243 322 L248 332 L250 318 L256 330 L258 316 L262 328 L264 316 L266 328 L268 316 L272 330 L274 318 L280 332 L282 322 L287 336 L292 328 L290 345" fill="#1A1A1A" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Pink streak in hair */}
          <path d="M272 330 L276 318 L280 332" fill="#FF6DB6" stroke="#FF6DB6" strokeWidth="1"/>
          {/* Emmi eyes */}
          <ellipse cx="256" cy="354" rx="5" ry="5.5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="257" cy="355" r="3.5" fill="#1A1A1A"/>
          <circle cx="258.5" cy="353" r="1.3" fill="white"/>
          <ellipse cx="274" cy="354" rx="5" ry="5.5" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="275" cy="355" r="3.5" fill="#1A1A1A"/>
          <circle cx="276.5" cy="353" r="1.3" fill="white"/>
          {/* Emmi eyebrows - one raised */}
          <path d="M251 346 Q256 343 261 345" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M269 344 Q274 341 279 344" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Cool smirk */}
          <path d="M258 363 Q264 367 272 364" fill="none" stroke="#2D1B4E" strokeWidth="2" strokeLinecap="round"/>
          {/* Lightning earring */}
          <path d="M283 356 L286 350 L284 354 L287 354 L284 360 L286 355 Z" fill="#FFF4B3" stroke="#2D1B4E" strokeWidth="0.8"/>
        </g>

        {/* Magical sparkles between them */}
        <g className="sparkle-a">
          <path d="M195 390 L199 380 L203 390 L193 394 Z" fill="#FFF4B3" stroke="#F39C12" strokeWidth="1.5"/>
        </g>
        <g className="sparkle-b">
          <path d="M205 410 L209 400 L213 410 L203 414 Z" fill="#FF6DB6" stroke="#FF6DB6" strokeWidth="1.5"/>
        </g>
        <g className="sparkle-c">
          <path d="M195 430 L199 420 L203 430 L193 434 Z" fill="#D4B3FF" stroke="#9B59D0" strokeWidth="1.5"/>
        </g>
        <g className="sparkle-d">
          <path d="M215 375 L219 365 L223 375 L213 379 Z" fill="#4AABDB" stroke="#4AABDB" strokeWidth="1.5"/>
        </g>
        <g className="sparkle-e">
          <path d="M185 450 L189 440 L193 450 L183 454 Z" fill="#FFF4B3" stroke="#F39C12" strokeWidth="1.5"/>
        </g>
        <g className="sparkle-f">
          <path d="M220 445 L224 435 L228 445 L218 449 Z" fill="#FF6DB6" stroke="#FF6DB6" strokeWidth="1.5"/>
        </g>

        {/* Magical connection dotted arc between them */}
        <path
          d="M155 310 Q200 240 265 315"
          fill="none"
          stroke="#D4B3FF"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Dot decorations on arc */}
        <circle cx="180" cy="270" r="4" fill="#FF6DB6" opacity="0.8"/>
        <circle cx="200" cy="252" r="5" fill="#FFF4B3" opacity="0.9"/>
        <circle cx="220" cy="258" r="4" fill="#4AABDB" opacity="0.8"/>
        <circle cx="242" cy="273" r="4" fill="#D4B3FF" opacity="0.8"/>
      </g>
    </svg>
  )
}
