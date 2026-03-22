import { useState, useEffect, useCallback, useRef } from 'react'
import { generateScene } from '../lib/claude'
import CompletionScreen from './CompletionScreen'

const SCENES = [
  { number: 1, title: 'Der entscheidende Moment', mood: 'exciting', emoji: '⚡' },
  { number: 2, title: 'Grill den Hammer wird zu Zuckerwatte', mood: 'funny',   emoji: '🍭' },
  { number: 3, title: 'Das große Fest',            mood: 'happy',   emoji: '🎉' },
  { number: 4, title: 'Emmi und Lina',             mood: 'happy',   emoji: '⭐' },
  { number: 5, title: 'Nach Hause',                mood: 'happy',   emoji: '🏠' },
]

const MOOD_BG = {
  exciting: { bg: '#2D1B4E', accent: '#4AABDB', text: '#B3E5FF' },
  funny:    { bg: '#1A2E1A', accent: '#FF6DB6', text: '#FFB3D9' },
  happy:    { bg: '#1E1228', accent: '#FFD700', text: '#FFF4B3' },
}

export default function EndingSequence({ playerName, companions, choiceCount }) {
  const [sceneIndex, setSceneIndex]   = useState(0)        // 0-4
  const [sceneText, setSceneText]     = useState('')
  const [loading, setLoading]         = useState(true)
  const [visible, setVisible]         = useState(false)    // opacity for fade
  const [done, setDone]               = useState(false)    // show CompletionScreen
  const prefetchRef                   = useRef({})         // cache prefetched scenes

  const currentScene = SCENES[sceneIndex]

  // Fetch a scene by number, with cache
  const fetchEndingScene = useCallback(async (number) => {
    if (prefetchRef.current[number]) return prefetchRef.current[number]
    const data = await generateScene({ playerName, endingSceneNumber: number })
    prefetchRef.current[number] = data.scene_text
    return data.scene_text
  }, [playerName])

  // Load scene, fade in, then prefetch next
  const loadScene = useCallback(async (index) => {
    setLoading(true)
    setVisible(false)
    const number = SCENES[index].number
    try {
      const text = await fetchEndingScene(number)
      setSceneText(text)
    } catch {
      setSceneText('(Die Geschichte hat kurz geschluckt – aber das Abenteuer geht weiter...)')
    }
    setLoading(false)
    // Small tick then fade in
    setTimeout(() => setVisible(true), 60)
    // Prefetch the next scene quietly
    if (index + 1 < SCENES.length) {
      fetchEndingScene(SCENES[index + 1].number).catch(() => {})
    }
  }, [fetchEndingScene])

  useEffect(() => { loadScene(0) }, [loadScene])

  async function handleWeiter() {
    setVisible(false)
    await new Promise(r => setTimeout(r, 800)) // fade out

    if (sceneIndex + 1 >= SCENES.length) {
      setDone(true)
      return
    }
    const next = sceneIndex + 1
    setSceneIndex(next)
    await loadScene(next)
  }

  if (done) {
    return (
      <CompletionScreen
        playerName={playerName}
        companions={companions}
        choiceCount={choiceCount}
      />
    )
  }

  const colors = MOOD_BG[currentScene.mood] ?? MOOD_BG.happy
  const isScene2 = currentScene.number === 2
  const isScene5 = currentScene.number === 5

  return (
    <div
      style={{
        minHeight: '100svh',
        background: isScene5
          ? 'radial-gradient(ellipse at center, #1E1228 0%, #0A0612 100%)'
          : colors.bg,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '512px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes fade-scene {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes candify {
          0%   { clip-path: inset(100% 0 0 0); opacity: 0.9; }
          100% { clip-path: inset(0% 0 0 0);  opacity: 0.85; }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 12px 2px currentColor; }
          50%       { box-shadow: 0 0 28px 8px currentColor; }
        }
        @keyframes scene5-star {
          0%   { opacity: 0; transform: scale(0); }
          50%  { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.6; transform: scale(1); }
        }
      `}</style>

      {/* Scene 5: Starfield background */}
      {isScene5 && <Starfield />}

      {/* Scene 2: Cotton candy rising overlay */}
      {isScene2 && visible && !loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #FFB3D9 0%, #FF6DB6 40%, #D4B3FF 100%)',
            animation: 'candify 4s ease-out 0.8s both',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0,
          }}
        />
      )}

      {/* Header: scene title + progress dots */}
      <div
        style={{
          padding: '20px 20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: '1.5rem' }}>{currentScene.emoji}</span>

        <div style={{ display: 'flex', gap: '6px' }}>
          {SCENES.map((s, i) => (
            <div
              key={s.number}
              style={{
                width:  i === sceneIndex ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i <= sceneIndex ? colors.accent : 'rgba(255,255,255,0.2)',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: colors.accent,
            opacity: 0.7,
          }}
        >
          {sceneIndex + 1} / {SCENES.length}
        </span>
      </div>

      {/* Scene title */}
      <div
        style={{
          padding: '12px 20px 0',
          position: 'relative',
          zIndex: 2,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '0.85rem',
            color: colors.accent,
            opacity: 0.8,
            margin: 0,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {currentScene.title}
        </p>
      </div>

      {/* Scene text — diary card */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '16px 20px 24px',
          position: 'relative',
          zIndex: 2,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <span
              style={{
                fontSize: '2.5rem',
                display: 'inline-block',
                animation: 'float-gentle 1.5s ease-in-out infinite',
              }}
            >
              {currentScene.emoji}
            </span>
            <p style={{ fontFamily: 'var(--font-handwriting)', color: colors.text, marginTop: '12px', opacity: 0.7 }}>
              Die Geschichte kommt...
            </p>
          </div>
        ) : (
          <div
            className="diary-bg"
            style={{
              borderRadius: '12px',
              padding: '24px 20px 24px 52px',
              border: `2px solid ${colors.accent}33`,
              position: 'relative',
              boxShadow: `0 4px 32px ${colors.accent}22`,
            }}
          >
            {/* Tape strip accent */}
            <div
              style={{
                position: 'absolute',
                top: '-8px',
                left: '24px',
                width: '48px',
                height: '16px',
                background: colors.accent + '66',
                border: `1px solid ${colors.accent}99`,
                borderRadius: '2px',
                transform: 'rotate(-2deg)',
              }}
            />

            <p
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: '#2D1B4E',
                margin: 0,
                whiteSpace: 'pre-wrap',
              }}
            >
              {sceneText}
            </p>

            {/* Scene 5: Keepsake items shown below text */}
            {isScene5 && (
              <div style={{ marginTop: '20px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <KeepsakeItem emoji="⭐" label="Emmis Sticker" color="#9B59D0" />
                <KeepsakeItem emoji="✨" label="Die Leuchtkugel" color="#4AABDB" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Weiter button */}
      {!loading && (
        <div
          style={{
            padding: '0 20px 32px',
            position: 'relative',
            zIndex: 2,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}
        >
          <button
            onClick={handleWeiter}
            style={{
              width: '100%',
              minHeight: '56px',
              borderRadius: '16px',
              background: colors.accent,
              color: sceneIndex === SCENES.length - 1 ? '#2D1B4E' : '#2D1B4E',
              fontFamily: 'var(--font-body)',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: `0 4px 0 ${colors.accent}88, 0 6px 20px ${colors.accent}44`,
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = 'none' }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 4px 0 ${colors.accent}88` }}
          >
            {sceneIndex === SCENES.length - 1 ? '🍭 Zum Ende' : 'Weiter →'}
          </button>
        </div>
      )}
    </div>
  )
}

function KeepsakeItem({ emoji, label, color }) {
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: color + '22',
          border: `2px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          animation: 'glow-pulse 2s ease-in-out infinite',
          color,
        }}
      >
        {emoji}
      </div>
      <span style={{ fontFamily: 'var(--font-handwriting)', fontSize: '0.75rem', color: '#6B5A8A' }}>
        {label}
      </span>
    </div>
  )
}

function Starfield() {
  const stars = [
    { top: '5%',  left: '15%', size: '1rem',  delay: 0,   dur: 2.1 },
    { top: '10%', left: '70%', size: '0.7rem', delay: 0.4, dur: 1.8 },
    { top: '18%', left: '40%', size: '0.9rem', delay: 0.8, dur: 2.4 },
    { top: '25%', left: '85%', size: '0.8rem', delay: 0.2, dur: 2.0 },
    { top: '8%',  left: '55%', size: '1.1rem', delay: 1.0, dur: 1.9 },
    { top: '30%', left: '10%', size: '0.6rem', delay: 0.6, dur: 2.2 },
    { top: '35%', left: '60%', size: '0.8rem', delay: 1.2, dur: 2.5 },
    { top: '42%', left: '30%', size: '0.7rem', delay: 0.3, dur: 1.7 },
  ]
  return (
    <>
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: s.top,
            left: s.left,
            fontSize: s.size,
            pointerEvents: 'none',
            userSelect: 'none',
            animation: `star-twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            zIndex: 1,
          }}
        >
          ✦
        </span>
      ))}
    </>
  )
}
