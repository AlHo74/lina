import { lazy, Suspense } from 'react'

const Lina          = lazy(() => import('./portraits/Lina'))
const Emmi          = lazy(() => import('./portraits/Emmi'))
const Sophie        = lazy(() => import('./portraits/Sophie'))
const Malaika       = lazy(() => import('./portraits/Malaika'))
const GrillDenHammer = lazy(() => import('./portraits/GrillDenHammer'))
const DieHandlanger = lazy(() => import('./portraits/DieHandlanger'))
const Annette       = lazy(() => import('./portraits/Annette'))
const Alex          = lazy(() => import('./portraits/Alex'))
const Karin         = lazy(() => import('./portraits/Karin'))
const NuraLiya      = lazy(() => import('./portraits/NuraLiya'))
const Marley        = lazy(() => import('./portraits/Marley'))
const Dugu          = lazy(() => import('./portraits/Dugu'))
const Dario         = lazy(() => import('./portraits/Dario'))
const Rumpel        = lazy(() => import('./portraits/Rumpel'))

const CHARACTER_MAP = {
  // Lina
  'lina': Lina,
  'Lina': Lina,

  // Emmi
  'emmi': Emmi,
  'Emmi': Emmi,

  // Sophie
  'sophie': Sophie,
  'Sophie': Sophie,

  // Malaika
  'malaika': Malaika,
  'Malaika': Malaika,

  // Grill den Hammer
  'grill': GrillDenHammer,
  'grill den hammer': GrillDenHammer,
  'Grill den Hammer': GrillDenHammer,
  'Grill Den Hammer': GrillDenHammer,
  'grilldenhammer': GrillDenHammer,
  'GrillDenHammer': GrillDenHammer,
  'der grill': GrillDenHammer,
  'Der Grill': GrillDenHammer,

  // Die Handlanger
  'handlanger': DieHandlanger,
  'die handlanger': DieHandlanger,
  'Die Handlanger': DieHandlanger,
  'DieHandlanger': DieHandlanger,
  'der handlanger': DieHandlanger,
  'Der Handlanger': DieHandlanger,
  'handlanger_1': DieHandlanger,
  'handlanger_2': DieHandlanger,

  // Annette
  'annette': Annette,
  'Annette': Annette,

  // Alex
  'alex': Alex,
  'Alex': Alex,

  // Karin
  'karin': Karin,
  'Karin': Karin,

  // Nura Liya
  'nura': NuraLiya,
  'Nura': NuraLiya,
  'liya': NuraLiya,
  'Liya': NuraLiya,
  'nura liya': NuraLiya,
  'Nura Liya': NuraLiya,
  'NuraLiya': NuraLiya,
  'nuraliya': NuraLiya,

  // Marley
  'marley': Marley,
  'Marley': Marley,

  // Dugu
  'dugu': Dugu,
  'Dugu': Dugu,

  // Dario
  'dario': Dario,
  'Dario': Dario,

  // Rumpel
  'rumpel': Rumpel,
  'Rumpel': Rumpel,
  'rumpelstilzchen': Rumpel,
}

function FallbackPortrait({ character }) {
  const emojis = {
    lina: '👧', emmi: '🧙', sophie: '👑', malaika: '⚔️',
    grill: '🍖', handlanger: '🦆', annette: '😎', alex: '🤪',
    karin: '🎵', nura: '✨', marley: '🐶', dugu: '👻',
    dario: '✏️', rumpel: '🧌',
  }
  const key = (character || '').toLowerCase()
  const emoji = emojis[key] || '👤'

  return (
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" fill="#FFFDF5" stroke="#2D1B4E" strokeWidth="3"/>
      <text x="40" y="52" textAnchor="middle" fontSize="30">{emoji}</text>
    </svg>
  )
}

export default function CharacterPortrait({ character, className, style }) {
  try {
    if (!character) return <FallbackPortrait character="" />

    const normalized = character.trim()
    const PortraitComponent =
      CHARACTER_MAP[normalized] ||
      CHARACTER_MAP[normalized.toLowerCase()] ||
      CHARACTER_MAP[normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase()]

    if (!PortraitComponent) {
      return <FallbackPortrait character={character} />
    }

    return (
      <span className={className} style={style}>
        <Suspense fallback={<FallbackPortrait character={character} />}>
          <PortraitComponent />
        </Suspense>
      </span>
    )
  } catch (err) {
    console.warn('CharacterPortrait render error:', err)
    return <FallbackPortrait character={character} />
  }
}
