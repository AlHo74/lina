import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SceneRenderer from '../components/story/SceneRenderer'
import ChoiceButtons from '../components/story/ChoiceButtons'
import TornEdge from '../components/scrapbook/TornEdge'
import Toast from '../components/ui/Toast'
import FullScreenMoment from '../components/illustrations/FullScreenMoment'
import { saveProgress } from '../lib/progress'
import { generateScene } from '../lib/claude'

export default function Game() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const scrollRef = useRef(null)

  const playerName        = state?.playerName ?? 'Lina'
  const isNewGame         = state?.isNewGame ?? true
  const savedChoiceHistory = state?.savedChoiceHistory ?? []

  const [scene, setScene]               = useState(null)
  const [choiceHistory, setChoiceHistory] = useState(savedChoiceHistory)
  const [loading, setLoading]           = useState(false)
  const [error, setError]               = useState(null)
  const [showToast, setShowToast]       = useState(false)
  const [isNewScene, setIsNewScene]     = useState(false)
  const [activeMoment, setActiveMoment] = useState(null)

  // Load initial scene on mount
  useEffect(() => {
    if (isNewGame) {
      fetchScene(null, [])
    } else {
      // Resumed: re-generate the last scene from saved history
      fetchScene(null, savedChoiceHistory)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchScene = useCallback(async (lastChoice, history) => {
    setLoading(true)
    setError(null)
    setIsNewScene(false)

    try {
      const data = await generateScene({
        playerName,
        choiceHistory: history,
        lastChoice,
      })

      setScene(data)
      setIsNewScene(true)
      // Trigger full-screen moment if this scene_id matches one
      setActiveMoment(data.scene_id ?? null)

      // Scroll to top of scene
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

    // Save to Supabase
    try {
      await saveProgress({
        playerName,
        sceneId: scene?.scene_id ?? 'unknown',
        choiceHistory: newHistory,
      })
      setShowToast(true)
    } catch (err) {
      console.warn('Speichern fehlgeschlagen:', err)
    }

    // Fetch next scene
    await fetchScene(choice.text, newHistory)
  }

  // Guard: redirect home if navigated to directly without state
  useEffect(() => {
    if (!state?.playerName) navigate('/', { replace: true })
  }, [state, navigate])

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

        {/* Choice counter */}
        <div className="text-xs opacity-60" style={{ color: '#D4B3FF', fontFamily: 'var(--font-body)' }}>
          #{choiceHistory.length}
        </div>
      </header>

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
              onClick={() => fetchScene(choiceHistory.at(-1) ?? null, choiceHistory)}
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

            {/* Choices sit on the purple background */}
            <ChoiceButtons
              choices={scene.choices}
              onChoice={handleChoice}
              disabled={loading}
            />

            {/* Bottom breathing room */}
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
