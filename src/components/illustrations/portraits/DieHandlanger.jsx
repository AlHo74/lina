export default function DieHandlanger() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-handleanger">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="17"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-handleanger">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-handleanger {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          .portrait-root-handleanger { animation: bounce-in-handleanger 0.4s cubic-bezier(.34,1.56,.64,1) both; }
        `}</style>
      </defs>
      <g className="portrait-root-handleanger">
        <circle cx="40" cy="40" r="36" fill="#95A5A6"/>
        <g clipPath="url(#circle-clip-handleanger)" filter="url(#rough-handleanger)">
          {/* Grey background */}
          <rect width="80" height="80" fill="#95A5A6"/>
          {/* Ill-fitting grey uniform - too-big collar */}
          <path d="M10 70 Q15 55 40 52 Q65 55 70 70 L72 80 L8 80 Z" fill="#7F8C8D" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Oversized collar wings sticking out */}
          <path d="M20 58 Q14 52 10 56 Q14 62 22 62 Z" fill="#BDC3C7" stroke="#2D1B4E" strokeWidth="1.5"/>
          <path d="M60 58 Q66 52 70 56 Q66 62 58 62 Z" fill="#BDC3C7" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Rubber duck on top of head */}
          <g transform="translate(34, 2)">
            {/* Duck body */}
            <ellipse cx="8" cy="10" rx="8" ry="6" fill="#F1C40F" stroke="#2D1B4E" strokeWidth="1.5"/>
            {/* Duck head */}
            <circle cx="14" cy="6" r="4.5" fill="#F1C40F" stroke="#2D1B4E" strokeWidth="1.5"/>
            {/* Duck bill */}
            <path d="M17 6 L21 5 L21 8 L17 7 Z" fill="#E67E22" stroke="#2D1B4E" strokeWidth="1"/>
            {/* Duck eye */}
            <circle cx="15" cy="5" r="1" fill="#2D1B4E"/>
            {/* Duck wing */}
            <path d="M6 9 Q8 6 12 8" fill="none" stroke="#D4AC00" strokeWidth="1.5" strokeLinecap="round"/>
          </g>
          {/* Neck */}
          <rect x="34" y="50" width="12" height="8" rx="3" fill="#E8D8B0"/>
          {/* Head - confused look */}
          <ellipse cx="40" cy="38" rx="17" ry="18" fill="#E8D8B0" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Plain flat hair - pale yellowish */}
          <path d="M23 35 Q22 20 40 18 Q58 20 57 35 Q52 22 40 22 Q28 22 23 35 Z" fill="#C8B870" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Wall-eyed: left eye looking left */}
          <ellipse cx="32" cy="38" rx="5.5" ry="6" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="29" cy="39" r="3.5" fill="#3D2A00"/>
          <circle cx="28.5" cy="38" r="1.2" fill="white"/>
          {/* Wall-eyed: right eye looking right */}
          <ellipse cx="48" cy="38" rx="5.5" ry="6" fill="white" stroke="#2D1B4E" strokeWidth="1.5"/>
          <circle cx="51" cy="39" r="3.5" fill="#3D2A00"/>
          <circle cx="51.5" cy="38" r="1.2" fill="white"/>
          {/* Eyebrows - confused, uneven */}
          <path d="M27 30 Q30 29 36 31" fill="none" stroke="#8B7040" strokeWidth="2" strokeLinecap="round"/>
          <path d="M44 31 Q50 29 53 31" fill="none" stroke="#8B7040" strokeWidth="2" strokeLinecap="round"/>
          {/* Confused open mouth */}
          <ellipse cx="40" cy="49" rx="6" ry="4" fill="#C04040" stroke="#2D1B4E" strokeWidth="1.5"/>
          <ellipse cx="40" cy="49" rx="5" ry="2.5" fill="#8B2020"/>
          {/* Nose */}
          <ellipse cx="40" cy="43" rx="3" ry="2" fill="#D4B890" stroke="#C0A070" strokeWidth="1"/>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-handleanger)"/>
      </g>
    </svg>
  )
}
