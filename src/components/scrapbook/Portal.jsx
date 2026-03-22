export default function Portal() {
  return (
    <div className="relative flex items-center justify-center w-52 h-52 mx-auto my-6 select-none">

      {/* Outer glow ring — spins */}
      <div
        className="portal-ring absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #FFB3D9, #D4B3FF, #B3E5FF, #B3FFD9, #FFF4B3, #FFB3D9)',
          padding: '4px',
        }}
      >
        {/* Mask to hollow out the ring */}
        <div className="w-full h-full rounded-full" style={{ background: '#2D1B4E' }} />
      </div>

      {/* Second counter-spinning ring for depth */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '8px',
          background: 'conic-gradient(from 180deg, #D4B3FF, #B3E5FF, #FFB3D9, #FFF4B3, #D4B3FF)',
          padding: '3px',
          animation: 'portal-spin 6s linear infinite reverse',
        }}
      >
        <div className="w-full h-full rounded-full" style={{ background: '#2D1B4E' }} />
      </div>

      {/* Inner portal void */}
      <div
        className="portal-inner absolute rounded-full flex items-center justify-center"
        style={{
          inset: '18px',
          background: 'radial-gradient(circle at 40% 40%, #7B4FBF, #2D1B4E 60%, #0D0820)',
          boxShadow: 'inset 0 0 20px rgba(180, 100, 255, 0.6)',
        }}
      >
        {/* Star field inside portal */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {STARS.map((s) => (
            <div
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{
                width: s.size,
                height: s.size,
                top: s.top,
                left: s.left,
                opacity: s.opacity,
                animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              }}
            />
          ))}
        </div>
        <span style={{ fontSize: '2rem' }}>✨</span>
      </div>

      {/* Floating sparkle emojis around the portal */}
      {SPARKLES.map((sp) => (
        <span
          key={sp.id}
          className="absolute text-xl pointer-events-none"
          style={{
            top: sp.top,
            left: sp.left,
            animation: `sparkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
          }}
        >
          {sp.emoji}
        </span>
      ))}
    </div>
  )
}

const STARS = [
  { id: 1, size: '3px', top: '20%', left: '25%', opacity: 0.9, duration: 1.5, delay: 0 },
  { id: 2, size: '2px', top: '60%', left: '65%', opacity: 0.7, duration: 2,   delay: 0.4 },
  { id: 3, size: '2px', top: '35%', left: '70%', opacity: 0.8, duration: 1.8, delay: 0.8 },
  { id: 4, size: '3px', top: '70%', left: '30%', opacity: 0.6, duration: 2.2, delay: 0.2 },
  { id: 5, size: '2px', top: '45%', left: '45%', opacity: 0.9, duration: 1.6, delay: 1.0 },
  { id: 6, size: '2px', top: '25%', left: '55%', opacity: 0.7, duration: 2.0, delay: 0.6 },
]

const SPARKLES = [
  { id: 1, emoji: '⭐', top: '-8%',  left: '10%', duration: 2.0, delay: 0 },
  { id: 2, emoji: '✨', top: '5%',   left: '80%', duration: 2.5, delay: 0.5 },
  { id: 3, emoji: '🌟', top: '80%',  left: '5%',  duration: 1.8, delay: 0.3 },
  { id: 4, emoji: '💫', top: '88%',  left: '75%', duration: 2.2, delay: 0.8 },
  { id: 5, emoji: '⭐', top: '45%',  left: '-8%', duration: 2.0, delay: 1.0 },
  { id: 6, emoji: '✨', top: '40%',  left: '95%', duration: 2.3, delay: 0.2 },
]
