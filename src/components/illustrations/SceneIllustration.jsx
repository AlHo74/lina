import { LollipopWald, ZuckerwatteStrand, KandiszuckerHoehle, GrillsFestung } from './scenes/index'

const LOCATION_MAP = {
  // Lollipop Wald
  'lollipop_wald': LollipopWald,
  'lollipopwald': LollipopWald,
  'wald': LollipopWald,
  'lollipop wald': LollipopWald,
  'forest': LollipopWald,
  'candy forest': LollipopWald,

  // Strand
  'strand': ZuckerwatteStrand,
  'zuckerwatte_strand': ZuckerwatteStrand,
  'zuckerwattestrand': ZuckerwatteStrand,
  'zuckerwatte strand': ZuckerwatteStrand,
  'beach': ZuckerwatteStrand,
  'bubblegum beach': ZuckerwatteStrand,

  // Hoehle
  'hoehle': KandiszuckerHoehle,
  'höhle': KandiszuckerHoehle,
  'cave': KandiszuckerHoehle,
  'kandiszucker': KandiszuckerHoehle,
  'kandiszucker_hoehle': KandiszuckerHoehle,
  'kandiszuckerhoehle': KandiszuckerHoehle,
  'kandiszucker hoehle': KandiszuckerHoehle,
  'crystal cave': KandiszuckerHoehle,

  // Festung
  'festung': GrillsFestung,
  'grill': GrillsFestung,
  'fortress': GrillsFestung,
  'grills_festung': GrillsFestung,
  'grillsfestung': GrillsFestung,
  'grills festung': GrillsFestung,
  'castle': GrillsFestung,
}

export default function SceneIllustration({ location, className, style }) {
  const normalized = (location || '').toLowerCase().trim()

  // 1. Try exact match first
  let SceneComponent = LOCATION_MAP[normalized]

  // 2. Fall back to substring match (handles scene_ids like "lollipop_wald_erkunden")
  if (!SceneComponent) {
    if (normalized.includes('strand') || normalized.includes('beach')) {
      SceneComponent = ZuckerwatteStrand
    } else if (
      normalized.includes('hoehle') || normalized.includes('höhle') ||
      normalized.includes('cave') || normalized.includes('kandis')
    ) {
      SceneComponent = KandiszuckerHoehle
    } else if (
      normalized.includes('festung') || normalized.includes('grill') ||
      normalized.includes('fortress') || normalized.includes('castle')
    ) {
      SceneComponent = GrillsFestung
    } else {
      // Default: Lollipop Wald (most early scenes happen here)
      SceneComponent = LollipopWald
    }
  }

  return (
    <div className={className} style={style}>
      <SceneComponent />
    </div>
  )
}
