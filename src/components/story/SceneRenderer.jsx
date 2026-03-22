import TornEdge from '../scrapbook/TornEdge'

const MOOD_CONFIG = {
  happy:    { emoji: '🌈', label: 'Fröhlich',   bg: '#FFF4B3', border: '#FFD700' },
  spooky:   { emoji: '👻', label: 'Gruselig',   bg: '#E8D5FF', border: '#9B59D0' },
  exciting: { emoji: '⚡', label: 'Aufregend',  bg: '#B3E5FF', border: '#4AABDB' },
  funny:    { emoji: '😄', label: 'Lustig',     bg: '#B3FFD9', border: '#2ECC71' },
  tense:    { emoji: '😰', label: 'Spannend',   bg: '#FFD4B3', border: '#E67E22' },
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
      {/* Mood illustration strip */}
      <div
        className="relative flex items-center justify-center gap-3 py-4 px-6 mb-0"
        style={{ background: mood.bg, borderBottom: `2px dashed ${mood.border}` }}
      >
        {/* Decorative doodle dots */}
        <span className="absolute left-3 top-2 text-xs opacity-30">✦</span>
        <span className="absolute right-4 bottom-1 text-xs opacity-30">✦</span>

        <span
          className="text-5xl animate-float"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
          role="img"
          aria-label={mood.label}
        >
          {mood.emoji}
        </span>

        <span
          className="text-xs font-bold uppercase tracking-widest opacity-60"
          style={{ fontFamily: 'var(--font-body)', color: '#2D1B4E' }}
        >
          {mood.label}
        </span>
      </div>

      {/* Torn edge between mood bar and diary text */}
      <TornEdge position="bottom" color="#FFFDF5" />

      {/* Diary narrative block */}
      <div
        className="diary-bg relative px-6 pt-6 pb-4"
        style={{ minHeight: '160px' }}
      >
        {/* Diary date-stamp doodle */}
        <div
          className="absolute top-3 right-4 text-xs rotate-3 opacity-40 border border-dashed border-ink-light px-2 py-1 rounded"
          style={{ fontFamily: 'var(--font-handwriting)', color: '#2D1B4E' }}
        >
          Zuckerwatten-Land
        </div>

        {/* Narrative text */}
        <p
          className="relative z-10 text-lg leading-relaxed"
          style={{
            fontFamily: 'var(--font-handwriting)',
            color: '#2D1B4E',
            paddingLeft: '44px', // align with diary margin line
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

function CharacterBubble({ name, line }) {
  return (
    <div
      className="relative mt-5 mx-2 animate-fade-in-up"
      style={{ animationDelay: '0.2s' }}
    >
      {/* Name tag — like a sticky label */}
      <div
        className="inline-block px-3 py-1 rounded-t-lg rounded-br-lg mb-0 ml-10 text-sm font-bold shadow-sm"
        style={{
          background: '#D4B3FF',
          color: '#2D1B4E',
          fontFamily: 'var(--font-body)',
          transform: 'rotate(-1deg)',
        }}
      >
        {name}
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
