import TornEdge from '../scrapbook/TornEdge'
import SceneIllustration from '../illustrations/SceneIllustration'
import CharacterPortrait from '../illustrations/CharacterPortrait'

const MOOD_CONFIG = {
  happy:    { emoji: '🌈', label: 'Fröhlich',   color: '#FFD700' },
  spooky:   { emoji: '👻', label: 'Gruselig',   color: '#9B59D0' },
  exciting: { emoji: '⚡', label: 'Aufregend',  color: '#4AABDB' },
  funny:    { emoji: '😄', label: 'Lustig',     color: '#2ECC71' },
  tense:    { emoji: '😰', label: 'Spannend',   color: '#E67E22' },
}

export default function SceneRenderer({ scene, isNew }) {
  if (!scene) return null

  const mood = MOOD_CONFIG[scene.mood] ?? MOOD_CONFIG.happy

  return (
    <div
      key={scene.scene_id}
      className={isNew ? 'animate-fade-in-up' : ''}
      style={{ animationDelay: '0.05s' }}
    >
      {/* Scene illustration panel — full width, ~200px tall */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '200px' }}>
        <SceneIllustration location={scene.scene_id} style={{ width: '100%', display: 'block' }} />

        {/* Mood badge overlaid on the illustration */}
        <div
          className="absolute bottom-2 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold"
          style={{
            background: 'rgba(45,27,78,0.75)',
            color: '#FFF4B3',
            fontFamily: 'var(--font-body)',
            border: `1.5px solid ${mood.color}`,
            backdropFilter: 'blur(4px)',
          }}
        >
          <span role="img" aria-label={mood.label}>{mood.emoji}</span>
          {mood.label}
        </div>
      </div>

      {/* Torn edge between illustration and diary text */}
      <TornEdge position="bottom" color="#FFFDF5" />

      {/* Diary narrative block */}
      <div
        className="diary-bg relative px-6 pt-6 pb-4 animate-scene-text-in"
        style={{ minHeight: '160px', animationDelay: '0.12s' }}
      >
        {/* Diary location stamp */}
        <div
          className="absolute top-3 right-4 text-xs rotate-3 opacity-35 border border-dashed border-ink-light px-2 py-1 rounded"
          style={{ fontFamily: 'var(--font-handwriting)', color: '#2D1B4E' }}
        >
          📍 {formatLocation(scene.scene_id)}
        </div>

        {/* Narrative text */}
        <p
          className="relative z-10"
          style={{
            fontFamily: 'var(--font-handwriting)',
            color: '#2D1B4E',
            fontSize: '1.15rem',
            lineHeight: 1.75,
            paddingLeft: '44px',
          }}
        >
          {scene.scene_text}
        </p>

        {/* Character speech bubble */}
        {scene.character && scene.character_line && (
          <CharacterBubble
            name={scene.character}
            line={scene.character_line}
          />
        )}
      </div>
    </div>
  )
}

// Turn scene_id like "lollipop_wald_erkunden" → "Lollipop-Wald"
function formatLocation(sceneId) {
  if (!sceneId) return 'Zuckerwatten-Land'
  const LOCATION_NAMES = {
    lollipop: 'Lollipop-Wald',
    strand: 'Zuckerwatte-Strand',
    hoehle: 'Kandiszucker-Höhle',
    festung: 'Grills Festung',
    portal: 'Das Portal',
  }
  const lower = sceneId.toLowerCase()
  for (const [key, name] of Object.entries(LOCATION_NAMES)) {
    if (lower.includes(key)) return name
  }
  return 'Zuckerwatten-Land'
}

function CharacterBubble({ name, line }) {
  return (
    <div
      className="relative mt-5 mx-2 animate-scene-text-in"
      style={{ animationDelay: '0.28s' }}
    >
      {/* Portrait + name tag row */}
      <div className="flex items-end gap-2 ml-2 mb-1">
        {/* SVG portrait */}
        <div
          style={{
            flexShrink: 0,
            filter: 'drop-shadow(0 2px 6px rgba(45,27,78,0.25))',
          }}
        >
          <CharacterPortrait character={name} />
        </div>

        {/* Name tag — like a sticky label */}
        <div
          className="inline-block px-3 py-1 rounded-t-lg rounded-br-lg text-sm font-bold shadow-sm"
          style={{
            background: '#D4B3FF',
            color: '#2D1B4E',
            fontFamily: 'var(--font-body)',
            transform: 'rotate(-1deg)',
            marginBottom: '4px',
          }}
        >
          {name}
        </div>
      </div>

      {/* Speech bubble */}
      <div
        className="relative ml-4 p-4 rounded-2xl rounded-tl-sm shadow-md"
        style={{
          background: '#F0EAD6',
          border: '2px solid #D4B3FF',
          fontFamily: 'var(--font-handwriting)',
          fontSize: '1.1rem',
          color: '#2D1B4E',
          lineHeight: 1.5,
        }}
      >
        {/* Bubble tail */}
        <div
          className="absolute -top-2 left-6 w-4 h-4"
          style={{
            background: '#F0EAD6',
            border: '2px solid #D4B3FF',
            borderRight: 'none',
            borderBottom: 'none',
            transform: 'rotate(-45deg)',
          }}
        />
        &ldquo;{line}&rdquo;
      </div>
    </div>
  )
}
