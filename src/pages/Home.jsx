import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Portal from '../components/scrapbook/Portal'
import TornEdge from '../components/scrapbook/TornEdge'
import { hasSave, loadProgress } from '../lib/progress'

export default function Home() {
  const navigate = useNavigate()
  const [playerName, setPlayerName] = useState('')
  const [saveExists, setSaveExists] = useState(false)
  const [checking, setChecking] = useState(false)
  const [error, setError] = useState('')

  // Check for existing save whenever name changes (debounced)
  useEffect(() => {
    if (!playerName.trim()) { setSaveExists(false); return }
    const t = setTimeout(async () => {
      setChecking(true)
      try {
        setSaveExists(await hasSave(playerName.trim()))
      } catch {
        setSaveExists(false)
      } finally {
        setChecking(false)
      }
    }, 500)
    return () => clearTimeout(t)
  }, [playerName])

  async function handleNewGame() {
    if (!playerName.trim()) { setError('Wie heißt du?'); return }
    setError('')
    navigate('/game', { state: { playerName: playerName.trim(), isNewGame: true } })
  }

  async function handleContinue() {
    if (!playerName.trim()) { setError('Wie heißt du?'); return }
    setError('')
    try {
      const save = await loadProgress(playerName.trim())
      if (!save) { setError('Kein Speicherstand gefunden!'); return }
      navigate('/game', {
        state: {
          playerName: playerName.trim(),
          isNewGame: false,
          savedSceneId: save.current_scene_id,
          savedChoiceHistory: save.choice_history,
        },
      })
    } catch {
      setError('Fehler beim Laden. Versuch es nochmal!')
    }
  }

  return (
    <main className="min-h-svh flex flex-col items-center justify-start overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #2D1B4E 0%, #4A2B7A 40%, #7B4FBF 100%)' }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {BG_STARS.map(s => (
          <span key={s.id} className="absolute text-white"
            style={{ top: s.top, left: s.left, fontSize: s.size, opacity: s.opacity,
              animation: `sparkle ${s.dur}s ease-in-out ${s.delay}s infinite` }}>
            {s.emoji}
          </span>
        ))}
      </div>

      {/* Top scrapbook strip */}
      <div className="relative w-full pt-8 pb-2 flex flex-col items-center" style={{ zIndex: 1 }}>
        {/* Doodle tape strips at top */}
        <div className="absolute top-2 left-4 w-14 h-5 rounded-sm opacity-60"
          style={{ background: '#FFF4B3', transform: 'rotate(-4deg)', border: '1px solid #D4B380' }} />
        <div className="absolute top-1 right-6 w-10 h-5 rounded-sm opacity-50"
          style={{ background: '#FFB3D9', transform: 'rotate(5deg)', border: '1px solid #FF6DB6' }} />

        {/* Title */}
        <h1
          className="text-center px-4 leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 8vw, 3rem)',
            color: '#FFF4B3',
            textShadow: '2px 3px 0px #9B59D0, 0 0 20px rgba(212,179,255,0.6)',
            letterSpacing: '0.02em',
          }}
        >
          Lina im
          <br />
          Zuckerwatten-Land
        </h1>

        <p className="mt-2 text-candy-purple opacity-80 text-sm tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-body)', color: '#D4B3FF' }}>
          Ein magisches Abenteuer
        </p>
      </div>

      {/* Portal hero */}
      <Portal />

      {/* Card panel — diary style */}
      <div className="relative w-full max-w-md mt-2 flex-1" style={{ zIndex: 1 }}>
        <TornEdge position="top" color="#FFFDF5" />

        <div className="diary-bg w-full px-6 pt-6 pb-10 flex flex-col gap-5 items-center min-h-64">
          {/* Doodle hearts in margin */}
          <div className="absolute left-4 top-8 text-candy-pink-deep opacity-30 text-xs flex flex-col gap-4 pointer-events-none select-none"
            aria-hidden>
            {['♡','♡','★','♡'].map((d,i) => <span key={i}>{d}</span>)}
          </div>

          <p className="text-center text-lg mt-1"
            style={{ fontFamily: 'var(--font-handwriting)', color: '#6B5A8A', paddingLeft: '44px' }}>
            Wie heißt du?
          </p>

          {/* Name input */}
          <div className="w-full" style={{ paddingLeft: '44px' }}>
            <input
              type="text"
              value={playerName}
              onChange={e => { setPlayerName(e.target.value); setError('') }}
              onKeyDown={e => e.key === 'Enter' && handleNewGame()}
              placeholder="Dein Name..."
              maxLength={24}
              autoFocus
              className="w-full bg-transparent border-b-2 border-dashed border-ink-light
                text-xl focus:outline-none placeholder:opacity-40
                focus:border-candy-pink-deep transition-colors"
              style={{
                fontFamily: 'var(--font-handwriting)',
                color: '#2D1B4E',
                paddingBottom: '4px',
                caretColor: '#FF6DB6',
              }}
            />
            {error && (
              <p className="mt-2 text-sm text-red-500 animate-fade-in"
                style={{ fontFamily: 'var(--font-handwriting)' }}>
                ⚠️ {error}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col gap-3 mt-1" style={{ paddingLeft: '20px' }}>
            <GameButton
              onClick={handleNewGame}
              color="#FF6DB6"
              shadow="#C0396C"
              textColor="white"
              emoji="🌀"
            >
              Neues Abenteuer
            </GameButton>

            <GameButton
              onClick={handleContinue}
              color="#9B59D0"
              shadow="#6B2D9A"
              textColor="white"
              emoji={checking ? '⏳' : '📖'}
              disabled={!saveExists && !checking}
              dimmed={!saveExists && !checking}
            >
              {checking ? 'Suche...' : 'Weiterspielen'}
            </GameButton>
          </div>

          {/* Save hint */}
          {saveExists && !checking && (
            <p className="text-center text-sm animate-fade-in opacity-60"
              style={{ fontFamily: 'var(--font-handwriting)', color: '#2D1B4E' }}>
              ✓ Spielstand gefunden für <strong>{playerName}</strong>!
            </p>
          )}

          {/* Bottom doodle */}
          <div className="w-full flex justify-center gap-4 mt-2 opacity-20 select-none pointer-events-none"
            style={{ paddingLeft: '44px' }} aria-hidden>
            {['🍬','🌸','🍭','⭐','🍬'].map((e,i) => (
              <span key={i} style={{ fontSize: '1.1rem',
                animation: `sparkle ${1.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function GameButton({ children, onClick, color, shadow, textColor, emoji, disabled, dimmed }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative w-full flex items-center justify-center gap-2
        rounded-2xl px-6 font-bold text-lg
        transition-all duration-150 select-none
        focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50
        ${dimmed ? 'opacity-30 cursor-not-allowed' : 'active:translate-y-[3px] active:shadow-none cursor-pointer hover:brightness-105'}
      `}
      style={{
        minHeight: '56px',
        background: color,
        color: textColor,
        fontFamily: 'var(--font-body)',
        boxShadow: dimmed ? 'none' : `0 4px 0 ${shadow}, 0 6px 12px rgba(0,0,0,0.2)`,
      }}
    >
      <span>{emoji}</span>
      {children}
    </button>
  )
}

const BG_STARS = [
  { id:1,  emoji:'✨', top:'5%',  left:'8%',  size:'1rem', opacity:0.6, dur:2.0, delay:0 },
  { id:2,  emoji:'⭐', top:'12%', left:'85%', size:'0.8rem',opacity:0.5, dur:2.5, delay:0.5 },
  { id:3,  emoji:'🌟', top:'22%', left:'15%', size:'0.7rem',opacity:0.4, dur:1.8, delay:0.8 },
  { id:4,  emoji:'✨', top:'8%',  left:'60%', size:'0.9rem',opacity:0.5, dur:2.2, delay:0.3 },
  { id:5,  emoji:'⭐', top:'18%', left:'40%', size:'0.6rem',opacity:0.4, dur:2.0, delay:1.1 },
  { id:6,  emoji:'💫', top:'3%',  left:'30%', size:'0.8rem',opacity:0.5, dur:1.9, delay:0.6 },
  { id:7,  emoji:'✨', top:'28%', left:'75%', size:'0.7rem',opacity:0.3, dur:2.3, delay:0.9 },
  { id:8,  emoji:'⭐', top:'30%', left:'5%',  size:'0.6rem',opacity:0.3, dur:2.1, delay:0.4 },
]
