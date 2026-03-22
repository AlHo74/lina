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
  const SceneComponent = LOCATION_MAP[normalized] || LollipopWald

  return (
    <div className={className} style={style}>
      <SceneComponent />
    </div>
  )
}
