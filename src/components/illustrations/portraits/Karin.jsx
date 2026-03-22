export default function Karin() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="rough-karin">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="29"/>
          <feDisplacementMap in="SourceGraphic" scale="1.5"/>
        </filter>
        <clipPath id="circle-clip-karin">
          <circle cx="40" cy="40" r="36"/>
        </clipPath>
        <style>{`
          @keyframes bounce-in-karin {
            0% { transform: scale(0) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.15) rotate(3deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes note-float-karin {
            0%, 100% { transform: translateY(0) rotate(-5deg); opacity: 0.8; }
            50% { transform: translateY(-4px) rotate(5deg); opacity: 1; }
          }
          .portrait-root-karin { animation: bounce-in-karin 0.4s cubic-bezier(.34,1.56,.64,1) both; }
          .note-karin { animation: note-float-karin 2.5s ease-in-out infinite; }
        `}</style>
      </defs>
      <g className="portrait-root-karin">
        <circle cx="40" cy="40" r="36" fill="#2C3E50"/>
        <g clipPath="url(#circle-clip-karin)" filter="url(#rough-karin)">
          {/* Deep blue background */}
          <rect width="80" height="80" fill="#2C3E50"/>
          {/* Long flowing black hair - takes up half portrait, flowing behind */}
          <path d="M14 22 Q12 50 16 76 Q20 80 26 78 Q22 60 22 45 Q22 30 26 22" fill="#1A1A2A" stroke="#2D1B4E" strokeWidth="1.5"/>
          <path d="M66 22 Q68 50 64 76 Q60 80 54 78 Q58 60 58 45 Q58 30 54 22" fill="#1A1A2A" stroke="#2D1B4E" strokeWidth="1.5"/>
          {/* Hair flowing down center back too */}
          <path d="M26 22 Q28 60 30 80 L50 80 Q52 60 54 22" fill="#1A1A2A"/>
          {/* Neck */}
          <rect x="34" y="50" width="12" height="10" rx="3" fill="#C8A882"/>
          {/* Head */}
          <ellipse cx="40" cy="38" rx="16" ry="17" fill="#C8A882" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Hair on top and framing face */}
          <path d="M24 36 Q24 20 40 18 Q56 20 56 36 Q52 22 40 22 Q28 22 24 36 Z" fill="#1A1A2A" stroke="#2D1B4E" strokeWidth="2"/>
          {/* Hair strands */}
          <path d="M24 36 Q22 40 23 50" fill="none" stroke="#1A1A2A" strokeWidth="4" strokeLinecap="round"/>
          <path d="M56 36 Q58 40 57 50" fill="none" stroke="#1A1A2A" strokeWidth="4" strokeLinecap="round"/>
          {/* Round glasses */}
          <circle cx="33" cy="37" r="6" fill="none" stroke="#7B8B60" strokeWidth="1.5"/>
          <circle cx="47" cy="37" r="6" fill="none" stroke="#7B8B60" strokeWidth="1.5"/>
          <circle cx="33" cy="37" r="6" fill="#E8F4F8" opacity="0.25"/>
          <circle cx="47" cy="37" r="6" fill="#E8F4F8" opacity="0.25"/>
          <line x1="39" y1="37" x2="41" y2="37" stroke="#7B8B60" strokeWidth="1.5"/>
          <line x1="27" y1="37" x2="24" y2="37" stroke="#7B8B60" strokeWidth="1.5"/>
          <line x1="53" y1="37" x2="56" y2="37" stroke="#7B8B60" strokeWidth="1.5"/>
          {/* Eyes - warm gentle */}
          <ellipse cx="33" cy="37" rx="4" ry="4.5" fill="white"/>
          <circle cx="33" cy="38" r="3" fill="#2C1A00"/>
          <circle cx="34" cy="36.5" r="1" fill="white"/>
          <ellipse cx="47" cy="37" rx="4" ry="4.5" fill="white"/>
          <circle cx="47" cy="38" r="3" fill="#2C1A00"/>
          <circle cx="48" cy="36.5" r="1" fill="white"/>
          {/* Eyebrows - soft */}
          <path d="M28 30 Q33 28 38 30" fill="none" stroke="#2C1A00" strokeWidth="2" strokeLinecap="round"/>
          <path d="M42 30 Q47 28 52 30" fill="none" stroke="#2C1A00" strokeWidth="2" strokeLinecap="round"/>
          {/* Warm gentle smile */}
          <path d="M34 46 Q40 52 46 46" fill="none" stroke="#2D1B4E" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Subtle dimples */}
          <circle cx="32" cy="46" r="1.5" fill="#B09070" opacity="0.5"/>
          <circle cx="48" cy="46" r="1.5" fill="#B09070" opacity="0.5"/>
          {/* Nose */}
          <path d="M38 42 Q40 44 42 42" fill="none" stroke="#A08060" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Musical notes floating */}
          <text x="62" y="22" fontSize="10" fill="#4AABDB" className="note-karin" style={{animationDelay:'0s'}}>♪</text>
          <text x="10" y="28" fontSize="8" fill="#FF6DB6" className="note-karin" style={{animationDelay:'0.8s'}}>♫</text>
          <text x="64" y="40" fontSize="8" fill="#FFF4B3" className="note-karin" style={{animationDelay:'1.6s'}}>♪</text>
        </g>
        <circle cx="40" cy="40" r="36" fill="none" stroke="#2D1B4E" strokeWidth="3" strokeDasharray="4 2" filter="url(#rough-karin)"/>
      </g>
    </svg>
  )
}
