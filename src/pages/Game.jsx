import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SceneRenderer from '../components/story/SceneRenderer'
import ChoiceButtons from '../components/story/ChoiceButtons'
import TornEdge from '../components/scrapbook/TornEdge'
import Toast from '../components/ui/Toast'
import FullScreenMoment from '../components/illustrations/FullScreenMoment'
import Ending from './Ending'
import { saveProgress } from '../lib/progress'
import { generateScene } from '../lib/claude'

const PHASE_LABELS = {
  exploration:        { label: 'Erkundung',   emoji: '🔍' },
  gathering:          { label: 'Gefährten',   emoji: '🫂' },
  march_to_festung:   { label: 'Marsch',      emoji: '⚔️' },
  battle_1:           { label: 'Kampf I',     emoji: '💥' },
  battle_2:           { label: 'Kampf II',    emoji: '💥' },
  battle_despair:     { label: 'Krise',       emoji: '😰' },
  dario_rumpel_arrive:{ label: 'Rettung!',    emoji: '🌟' },
  final_victory:      { label: 'Sieg!',       emoji: '🏆' },
  homecoming:         { label: 'Heimkehr',    emoji: '🏠' },
}

export default function Game() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const scrollRef = useRef(null)

  const playerName         = state?.playerName ?? 'Lina'
  const isNewGame          = state?.isNewGame ?? true
  const savedChoiceHistory = state?.savedChoiceHistory ?? []
  const savedPhase         = state?.savedPhase ?? 'exploration'
  const savedCompanions    = state?.savedCompanions ?? []

  const [scene, setScene]               = useState(null)
  const [choiceHistory, setChoiceHistory] = useState(savedChoiceHistory)
  const [loading, setLoading]           = useState(false)
  const [error, setError]               = useState(null)
  const [showToast, setShowToast]       = useState(false)
  const [isNewScene, setIsNewScene]     = useState(false)
  const [activeMoment, setActiveMoment] = useState(null)
  const [storyPhase, setStoryPhase]     = useState(savedPhase)
  const [companions, setCompanions]     = useState(savedCompanions)
  const [gameEnded, setGameEnded]       = useState(false)
  const [newCompanionToast, setNewCompanionToast] = useState(null)

  // Load initial scene on mount
  useEffect(() => {
    fetchScene(null, savedChoiceHistory, savedPhase, savedCompanions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchScene = useCallback(async (lastChoice, history, phase, currentCompanions) => {
    setLoading(true)
    setError(null)
    setIsNewScene(false)

    try {
      const data = await generateScene({
        playerName,
        choiceHistory: history,
        lastChoice,
        storyPhase: phase,
        companions: currentCompanions,
      })

      setScene(data)
      setIsNewScene(true)

      // Update story phase if changed
      if (data.story_phase && data.story_phase !== phase) {
        setStoryPhase(data.story_phase)
      }

      // Merge newly joined companions
      let updatedCompanions = currentCompanions
      if (data.new_companions?.length > 0) {
        updatedCompanions = [...new Set([...currentCompanions, ...data.new_companions])]
        setCompanions(updatedCompanions)
        setNewCompanionToast(data.new_companions[0]) // show first new companion
        setTimeout(() => setNewCompanionToast(null), 3000)
      }

      // Check for full-screen moment
      setActiveMoment(data.scene_id ?? null)

      // Check for story ending (empty choices array)
      if (Array.isArray(data.choices) && data.choices.length === 0) {
        // Small delay so player reads the final scene text first
        setTimeout(() => setGameEnded(true), 3000)
      }

      // Scroll to top
      setTimeout(() => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' }), 50)
    } catch (err) {
      console.error('fetchScene error:', err)
      setError(`Hoppla! ${err.message ?? 'Die Geschichte hat sich kurz verschluckt.'} – Versuch es nochmal!`)
    } finally {
      setLoading(false)
    }
  }, [playerName])

  async function handleChoice(choice) {
    const newHistory = [...choiceHistory, choice.text]
    setChoiceHistory(newHistory)

    const nextPhase = scene?.story_phase ?? storyPhase

    // Save to Supabase
    try {
      await saveProgress({
        playerName,
        sceneId:       scene?.scene_id ?? 'unknown',
        choiceHistory: newHistory,
        storyPhase:    nextPhase,
        companions,
      })
      setShowToast(true)
    } catch (err) {
      console.warn('Speichern fehlgeschlagen:', err)
    }

    await fetchScene(choice.text, newHistory, nextPhase, companions)
  }

  // Guard: redirect home if navigated to directly without state
  useEffect(() => {
    if (!state?.playerName) navigate('/', { replace: true })
  }, [state, navigate])

  // Show ending screen
  if (gameEnded) {
    return (
      <Ending
        playerName={playerName}
        companions={companions}
        choiceCount={choiceHistory.length}
      />
    )
  }

  const phaseInfo = PHASE_LABELS[storyPhase] ?? { label: storyPhase, emoji: '📖' }

  return (
    <div
      className="min-h-svh flex flex-col max-w-lg mx-auto"
      style={{ background: '#2D1B4E' }}
    >
      {/* Header bar */}
      <header className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ borderBottom: '2px dashed rgba(212,179,255,0.3)' }}>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-sm opacity-70 hover:opacity-100 transition-opacity"
          style={{ fontFamily: 'var(--font-body)', color: '#D4B3FF' }}
          aria-label="Zurück zum Start"
        >
          ← Start
        </button>

        <h2
          className="text-sm font-bold truncate px-2"
          style={{ fontFamily: 'var(--font-display)', color: '#FFF4B3', letterSpacing: '0.03em' }}
        >
          🍬 Zuckerwatten-Land
        </h2>

        {/* Phase indicator */}
        <div
          className="text-xs flex items-center gap-1 opacity-80"
          style={{ color: '#D4B3FF', fontFamily: 'var(--font-body)' }}
        >
          <span>{phaseInfo.emoji}</span>
          <span className="hidden sm:inline">{phaseInfo.label}</span>
          <span className="opacity-50 ml-1">#{choiceHistory.length}</span>
        </div>
      </header>

      {/* Party roster strip — shown once companions are collected */}
      {companions.length > 0 && (
        <div
          className="flex items-center gap-2 px-4 py-2 overflow-x-auto"
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(212,179,255,0.2)',
            scrollbarWidth: 'none',
          }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#D4B3FF', whiteSpace: 'nowrap', opacity: 0.7 }}>
            Party:
          </span>
          {companions.map(name => (
            <span
              key={name}
              title={name}
              className="text-lg flex-shrink-0"
              style={{ lineHeight: 1 }}
            >
              {COMPANION_EMOJIS[name] ?? '👤'}
            </span>
          ))}
        </div>
      )}

      {/* Scrollable story area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <TornEdge position="top" color="#FFFDF5" />

        {/* Loading state */}
        {loading && (
          <div className="diary-bg flex flex-col items-center justify-center gap-3 py-16">
            <span className="text-4xl" style={{ animation: 'portal-spin 1s linear infinite', display: 'inline-block' }}>
              🌀
            </span>
            <p style={{ fontFamily: 'var(--font-handwriting)', color: '#6B5A8A', fontSize: '1.1rem' }}>
              Die Geschichte lädt...
            </p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="diary-bg flex flex-col items-center gap-4 py-10 px-6">
            <span className="text-4xl">😵</span>
            <p className="text-center" style={{ fontFamily: 'var(--font-handwriting)', color: '#C0392B' }}>
              {error}
            </p>
            <button
              onClick={() => fetchScene(choiceHistory.at(-1) ?? null, choiceHistory, storyPhase, companions)}
              className="px-6 py-3 rounded-2xl font-bold text-white"
              style={{ background: '#FF6DB6', fontFamily: 'var(--font-body)', minHeight: '48px' }}
            >
              Nochmal versuchen
            </button>
          </div>
        )}

        {/* Scene + Choices */}
        {!loading && !error && scene && (
          <>
            <SceneRenderer scene={scene} isNew={isNewScene} />

            <TornEdge position="bottom" color="#FFFDF5" />

            {/* Only show choices if story isn't over */}
            {scene.choices?.length > 0 && (
              <ChoiceButtons
                choices={scene.choices}
                onChoice={handleChoice}
                disabled={loading}
              />
            )}

            {/* "Story ending…" indicator */}
            {scene.choices?.length === 0 && (
              <div className="flex flex-col items-center gap-2 py-8">
                <span className="text-4xl" style={{ animation: 'float-up 2s ease-in-out infinite, display: inline-block' }}>
                  🍭
                </span>
                <p style={{ fontFamily: 'var(--font-handwriting)', color: '#D4B3FF', fontSize: '1rem' }}>
                  Das Ende naht...
                </p>
              </div>
            )}

            <div className="h-8" />
          </>
        )}
      </div>

      {/* Save toast */}
      <Toast
        message="💾 Gespeichert!"
        visible={showToast}
        onDone={() => setShowToast(false)}
      />

      {/* New companion toast */}
      {newCompanionToast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-2xl shadow-lg animate-toast-in"
          style={{
            background: '#9B59D0',
            color: '#FFF4B3',
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            fontWeight: 'bold',
            zIndex: 40,
            whiteSpace: 'nowrap',
          }}
        >
          <span className="text-xl">{COMPANION_EMOJIS[newCompanionToast] ?? '👤'}</span>
          {newCompanionToast} hat sich angeschlossen!
        </div>
      )}

      {/* Full-screen key moment overlay */}
      {activeMoment && (
        <FullScreenMoment
          sceneId={activeMoment}
          onDismiss={() => setActiveMoment(null)}
        />
      )}
    </div>
  )
}

// Companion emoji map (also used in Ending.jsx)
const COMPANION_EMOJIS = {
  'Emmi':       '🧙‍♀️',
  'Sophie':     '👑',
  'Malaika':    '⚔️',
  'Marley':     '🐶',
  'Karin':      '🎵',
  'Nura Liya':  '✨',
  'Annette':    '😎',
  'Alex':       '🤪',
  'Dugu':       '👻',
  'Dario':      '🗡️',
  'Rumpel':     '🧌',
}
