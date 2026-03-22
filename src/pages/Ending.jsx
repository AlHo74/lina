import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const COMPANION_EMOJIS = {
  'Emmi':       { emoji: '🧙‍♀️', color: '#9B59D0' },
  'Sophie':     { emoji: '👑', color: '#F39C12' },
  'Malaika':    { emoji: '⚔️', color: '#27AE60' },
  'Marley':     { emoji: '🐶', color: '#E8A020' },
  'Karin':      { emoji: '🎵', color: '#2C3E50' },
  'Nura Liya':  { emoji: '✨', color: '#8E44AD' },
  'Annette':    { emoji: '😎', color: '#16A085' },
  'Alex':       { emoji: '🤪', color: '#F39C12' },
  'Dugu':       { emoji: '👻', color: '#4AABDB' },
  'Dario':      { emoji: '⚔️', color: '#E67E22' },
  'Rumpel':     { emoji: '🧌', color: '#27AE60' },
}

const ENDING_STARS = [
  { top: '5%', left: '10%', size: '1.2rem', delay: 0 },
  { top: '8%', left: '80%', size: '0.9rem', delay: 0.3 },
  { top: '15%', left: '45%', size: '1rem', delay: 0.6 },
  { top: '20%', left: '25%', size: '0.8rem', delay: 0.9 },
  { top: '12%', left: '65%', size: '1.1rem', delay: 0.2 },
  { top: '25%', left: '88%', size: '0.9rem', delay: 0.7 },
]

export default function Ending({ playerName, companions = [], choiceCount = 0 }) {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  function handleReplay() {
    // Clear session token so next game starts fresh
    localStorage.removeItem('lina_session_token')
    navigate('/')
  }

  return (
    <div
      className="min-h-svh flex flex-col items-center justify-start overflow-x-hidden pb-12"
      style={{
        background: 'linear-gradient(180deg, #2D1B4E 0%, #4A2B7A 40%, #FF6DB6 100%)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      <style>{`
        @keyframes star-spin {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.3); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes companion-pop {
          0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
          60%  { transform: scale(1.2) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes confetti-fall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(120px) rotate(360deg); opacity: 0; }
        }
      `}</style>

      {/* Floating stars */}
      {ENDING_STARS.map((s, i) => (
        <span
          key={i}
          className="absolute select-none pointer-events-none"
          style={{
            top: s.top, left: s.left, fontSize: s.size,
            animation: `star-spin 3s ease-in-out ${s.delay}s infinite`,
          }}
        >⭐</span>
      ))}

      {/* Main cotton candy celebration emoji */}
      <div
        className="mt-12 text-8xl"
        style={{ animation: 'float-up 3s ease-in-out infinite' }}
        role="img" aria-label="Zuckerwatte"
      >
        🍭
      </div>

      {/* Title */}
      <h1
        className="mt-6 text-center px-6 leading-tight"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
          color: '#FFF4B3',
          textShadow: '2px 3px 0px #9B59D0',
        }}
      >
        Das Abenteuer<br />ist zu Ende!
      </h1>

      <p
        className="mt-3 text-center px-8 text-lg"
        style={{ fontFamily: 'var(--font-handwriting)', color: '#FFB3D9' }}
      >
        Bravo, {playerName}! Du hast Zuckerwatten-Land gerettet! 🎉
      </p>

      {/* Stats scrapbook card */}
      <div
        className="diary-bg relative w-full max-w-sm mx-4 mt-8 px-6 py-5 rounded-lg"
        style={{ border: '3px dashed #D4B3FF' }}
      >
        {/* Tape strip decoration */}
        <div className="tape absolute -top-3 left-8" />

        <p
          className="text-center text-sm mb-1"
          style={{ fontFamily: 'var(--font-handwriting)', color: '#6B5A8A' }}
        >
          Dein Abenteuer in Zahlen
        </p>

        <div className="flex justify-around mt-3">
          <div className="text-center">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#FF6DB6' }}>
              {choiceCount}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#6B5A8A' }}>
              Entscheidungen
            </p>
          </div>
          <div className="text-center">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#9B59D0' }}>
              {companions.length}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#6B5A8A' }}>
              Gefährten
            </p>
          </div>
          <div className="text-center">
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#4AABDB' }}>
              3×
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#6B5A8A' }}>
              Grill besiegt
            </p>
          </div>
        </div>
      </div>

      {/* Companions gallery */}
      {companions.length > 0 && (
        <div className="w-full max-w-sm mx-4 mt-6">
          <p
            className="text-center text-sm mb-4"
            style={{ fontFamily: 'var(--font-handwriting)', color: '#FFB3D9' }}
          >
            Deine treuen Gefährten ✦
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {companions.map((name, i) => {
              const cfg = COMPANION_EMOJIS[name] ?? { emoji: '👤', color: '#D4B3FF' }
              return (
                <div
                  key={name}
                  className="flex flex-col items-center gap-1"
                  style={{
                    animation: `companion-pop 0.5s cubic-bezier(.34,1.56,.64,1) ${i * 0.08}s both`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md"
                    style={{ background: cfg.color + '33', border: `2px solid ${cfg.color}` }}
                  >
                    {cfg.emoji}
                  </div>
                  <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '0.7rem', color: '#FFF4B3' }}>
                    {name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Emmi's sticker badge */}
      <div
        className="mt-8 flex items-center gap-2 px-4 py-3 rounded-xl"
        style={{
          background: 'rgba(155, 89, 208, 0.3)',
          border: '2px dashed #D4B3FF',
          fontFamily: 'var(--font-handwriting)',
          color: '#FFF4B3',
          fontSize: '0.95rem',
        }}
      >
        <span className="text-2xl">⭐</span>
        <span>Du hast Emmis Punk-Star-Sticker!<br />
          <span style={{ fontSize: '0.8rem', color: '#D4B3FF' }}>Eine Erinnerung für immer.</span>
        </span>
      </div>

      {/* Replay button */}
      <button
        onClick={handleReplay}
        className="mt-10 px-8 py-4 rounded-2xl font-bold text-xl text-white"
        style={{
          minHeight: '56px',
          background: '#FF6DB6',
          fontFamily: 'var(--font-body)',
          boxShadow: '0 4px 0 #C0396C, 0 6px 20px rgba(255,109,182,0.4)',
        }}
      >
        🌀 Nochmal spielen
      </button>

      <p
        className="mt-4 text-center text-sm opacity-50"
        style={{ fontFamily: 'var(--font-handwriting)', color: '#D4B3FF' }}
      >
        Ein neues Abenteuer wartet auf dich!
      </p>
    </div>
  )
}
