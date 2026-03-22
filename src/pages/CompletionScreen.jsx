import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveProgress } from '../lib/progress'

const COMPANION_EMOJIS = {
  'Emmi':      '🧙‍♀️', 'Sophie':   '👑',  'Malaika':   '⚔️',
  'Marley':    '🐶',   'Karin':    '🎵',  'Nura Liya': '✨',
  'Annette':   '😎',   'Alex':     '🤪',  'Dugu':      '👻',
  'Dario':     '🗡️',  'Rumpel':   '🧌',
}

// 40 confetti pieces with randomised properties
const CONFETTI = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left:  `${(i * 7.3 + 3) % 100}%`,
  color: ['#FF6DB6','#9B59D0','#4AABDB','#FFD700','#2ECC71','#FFB3D9','#FFF4B3'][i % 7],
  size:  `${8 + (i % 5) * 3}px`,
  delay: `${(i * 0.13) % 2}s`,
  dur:   `${2.5 + (i % 4) * 0.4}s`,
  shape: i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'square' : 'rect',
}))

export default function CompletionScreen({ playerName, companions = [], choiceCount = 0 }) {
  const navigate   = useNavigate()
  const [visible, setVisible] = useState(false)
  const saved      = useRef(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Mark game as completed in Supabase
  useEffect(() => {
    if (saved.current) return
    saved.current = true
    saveProgress({
      playerName,
      sceneId:       'heimkehr',
      choiceHistory: [],
      storyPhase:    'homecoming',
      companions,
      completed:     true,
    }).catch(() => {})
  }, [playerName, companions])

  function handleReplay() {
    localStorage.removeItem('lina_session_token')
    navigate('/')
  }

  return (
    <div
      style={{
        minHeight: '100svh',
        background: 'linear-gradient(180deg, #2D1B4E 0%, #4A2B7A 50%, #FF6DB6 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px 48px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease',
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '512px',
        margin: '0 auto',
      }}
    >
      <style>{`
        @keyframes confetti-fall {
          0%   { transform: translateY(-40px) rotate(0deg);   opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes completion-float {
          0%, 100% { transform: translateY(0px)  scale(1); }
          50%       { transform: translateY(-14px) scale(1.05); }
        }
        @keyframes keepsake-glow {
          0%, 100% { box-shadow: 0 0 10px 2px var(--k-color), 0 0 20px 4px var(--k-color)44; }
          50%       { box-shadow: 0 0 20px 6px var(--k-color), 0 0 40px 12px var(--k-color)44; }
        }
        @keyframes companion-pop-in {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          65%  { transform: scale(1.2) rotate(5deg); opacity: 1; }
          100% { transform: scale(1)   rotate(0deg); opacity: 1; }
        }
        @keyframes title-stamp {
          0%   { transform: scale(2) rotate(-8deg); opacity: 0; }
          60%  { transform: scale(0.95) rotate(2deg); opacity: 1; }
          100% { transform: scale(1)    rotate(0deg); opacity: 1; }
        }
      `}</style>

      {/* ── CSS-only confetti ── */}
      {CONFETTI.map(c => (
        <div
          key={c.id}
          style={{
            position: 'fixed',
            top: 0,
            left: c.left,
            width:  c.shape === 'rect' ? `${parseInt(c.size) * 2}px` : c.size,
            height: c.size,
            background: c.color,
            borderRadius: c.shape === 'circle' ? '50%' : c.shape === 'square' ? '2px' : '1px',
            animation: `confetti-fall ${c.dur} ${c.delay} ease-in both`,
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      ))}

      {/* ── Main candy ── */}
      <div
        style={{
          fontSize: '5rem',
          marginTop: '48px',
          animation: 'completion-float 3s ease-in-out infinite',
          filter: 'drop-shadow(0 4px 16px rgba(255,109,182,0.6))',
        }}
        role="img" aria-label="Zuckerwatte"
      >
        🍭
      </div>

      {/* ── "Ende" stamp ── */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 12vw, 5rem)',
          color: '#FFF4B3',
          textShadow: '3px 4px 0 #9B59D0, 0 0 30px rgba(255,244,179,0.4)',
          margin: '8px 0 0',
          letterSpacing: '-0.02em',
          animation: 'title-stamp 0.6s cubic-bezier(.34,1.56,.64,1) 0.2s both',
        }}
      >
        Ende!
      </h1>

      {/* ── Congratulations ── */}
      <p
        style={{
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.25rem',
          color: '#FFB3D9',
          textAlign: 'center',
          marginTop: '12px',
          lineHeight: 1.4,
        }}
      >
        Gut gemacht, {playerName}!<br />
        <span style={{ fontSize: '1rem', color: '#D4B3FF' }}>
          Du hast Zuckerwatten-Land gerettet!
        </span>
      </p>

      {/* ── Keepsake items ── */}
      <div
        style={{
          marginTop: '28px',
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
        }}
      >
        <Keepsake emoji="⭐" label="Emmis Sticker" color="#9B59D0" delay="0.4s" />
        <Keepsake emoji="✨" label="Die Leuchtkugel" color="#4AABDB" delay="0.7s" />
      </div>

      {/* ── Stats card ── */}
      <div
        className="diary-bg"
        style={{
          width: '100%',
          maxWidth: '340px',
          marginTop: '24px',
          borderRadius: '12px',
          padding: '16px 20px',
          border: '2px dashed #D4B3FF',
          position: 'relative',
        }}
      >
        {/* Tape */}
        <div className="tape" style={{ top: '-8px', left: '20px' }} />
        <div className="flex justify-around">
          {[
            { val: choiceCount, label: 'Entscheidungen', color: '#FF6DB6' },
            { val: companions.length, label: 'Gefährten', color: '#9B59D0' },
            { val: '3×', label: 'Grill besiegt', color: '#4AABDB' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: s.color, margin: 0 }}>
                {s.val}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#6B5A8A', margin: 0 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Companion gallery ── */}
      {companions.length > 0 && (
        <div style={{ width: '100%', maxWidth: '340px', marginTop: '20px' }}>
          <p style={{ fontFamily: 'var(--font-handwriting)', color: '#FFB3D9', textAlign: 'center', fontSize: '0.9rem', marginBottom: '12px' }}>
            Deine treuen Gefährten ✦
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {companions.map((name, i) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  animation: `companion-pop-in 0.5s cubic-bezier(.34,1.56,.64,1) ${0.8 + i * 0.07}s both`,
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(212,179,255,0.15)',
                    border: '2px solid #D4B3FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}
                >
                  {COMPANION_EMOJIS[name] ?? '👤'}
                </div>
                <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '0.65rem', color: '#FFF4B3' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Replay button ── */}
      <button
        onClick={handleReplay}
        style={{
          marginTop: '32px',
          width: '100%',
          maxWidth: '300px',
          minHeight: '56px',
          borderRadius: '16px',
          background: '#FF6DB6',
          color: 'white',
          fontFamily: 'var(--font-body)',
          fontWeight: 'bold',
          fontSize: '1.15rem',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 0 #C0396C, 0 6px 24px rgba(255,109,182,0.4)',
          transition: 'transform 0.1s, box-shadow 0.1s',
        }}
        onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = 'none' }}
        onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 0 #C0396C' }}
      >
        🌀 Nochmal spielen
      </button>

      <p style={{ fontFamily: 'var(--font-handwriting)', color: '#D4B3FF', opacity: 0.5, fontSize: '0.85rem', marginTop: '10px' }}>
        Ein neues Abenteuer wartet auf dich!
      </p>
    </div>
  )
}

function Keepsake({ emoji, label, color, delay }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: color + '22',
          border: `2.5px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          '--k-color': color,
          animation: `keepsake-glow 2s ease-in-out ${delay} infinite`,
        }}
      >
        {emoji}
      </div>
      <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '0.8rem', color: '#D4B3FF', textAlign: 'center' }}>
        {label}
      </span>
    </div>
  )
}
