import { useState, useEffect } from 'react'
import { PortalOpening, LinaMeetsEmmi, EnteringCave, DerFinaleKampf, GrillTransformation, LinaKehrtHeim } from './moments/index'

const MOMENT_MAP = {
  // Portal Opening
  'portal_opening': PortalOpening,
  'portal opening': PortalOpening,
  'portalopening': PortalOpening,
  'intro': PortalOpening,
  'start': PortalOpening,
  'anfang': PortalOpening,
  'beginning': PortalOpening,

  // Lina Meets Emmi
  'lina_meets_emmi': LinaMeetsEmmi,
  'lina meets emmi': LinaMeetsEmmi,
  'linameetemmi': LinaMeetsEmmi,
  'emmi_begegnung': LinaMeetsEmmi,
  'emmi begegnung': LinaMeetsEmmi,
  'emmibegegnung': LinaMeetsEmmi,
  'meet_emmi': LinaMeetsEmmi,

  // Entering Cave
  'cave_entrance': EnteringCave,
  'cave entrance': EnteringCave,
  'caveentrance': EnteringCave,
  'hoehle_eingang': EnteringCave,
  'hoehle eingang': EnteringCave,
  'höhle_eingang': EnteringCave,
  'entering_cave': EnteringCave,

  // Der Finale Kampf
  'finale': DerFinaleKampf,
  'finaler_kampf': DerFinaleKampf,
  'finaler kampf': DerFinaleKampf,
  'final_battle': DerFinaleKampf,
  'final battle': DerFinaleKampf,
  'finalerkampf': DerFinaleKampf,
  'endkampf': DerFinaleKampf,
  'boss_fight': DerFinaleKampf,
  'boss fight': DerFinaleKampf,

  // Grill Transformation
  'grill_transformation': GrillTransformation,
  'grill transformation': GrillTransformation,
  'grilltransformation': GrillTransformation,
  'verwandlung': GrillTransformation,
  'transformation': GrillTransformation,
  'candy_transformation': GrillTransformation,

  // Lina Kehrt Heim
  'heimkehr': LinaKehrtHeim,
  'home': LinaKehrtHeim,
  'ende': LinaKehrtHeim,
  'end': LinaKehrtHeim,
  'lina_kehrt_heim': LinaKehrtHeim,
  'lina kehrt heim': LinaKehrtHeim,
  'linakehrtheim': LinaKehrtHeim,
  'zurueck': LinaKehrtHeim,
  'zurück': LinaKehrtHeim,
  'return': LinaKehrtHeim,
}

export default function FullScreenMoment({ sceneId, onDismiss }) {
  const [canDismiss, setCanDismiss] = useState(false)
  const [visible, setVisible] = useState(true)

  const normalized = (sceneId || '').toLowerCase().trim()
  const MomentComponent = MOMENT_MAP[normalized] || null

  useEffect(() => {
    if (!MomentComponent) return
    setCanDismiss(false)
    setVisible(true)
    const timer = setTimeout(() => setCanDismiss(true), 2000)
    return () => clearTimeout(timer)
  }, [sceneId, MomentComponent])

  if (!MomentComponent || !visible) return null

  function handleDismiss() {
    if (!canDismiss) return
    setVisible(false)
    onDismiss?.()
  }

  return (
    <div
      onClick={handleDismiss}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(45, 27, 78, 0.75)',
        animation: 'fullscreen-moment-in 0.5s ease both',
        cursor: canDismiss ? 'pointer' : 'default',
      }}
    >
      <style>{`
        @keyframes fullscreen-moment-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes dismiss-hint-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Moment illustration container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '400px',
          width: '100%',
          maxHeight: '100vh',
          overflow: 'hidden',
          borderRadius: '16px',
          boxShadow: '0 0 60px rgba(75, 0, 130, 0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <MomentComponent />

        {/* Dismiss hint - appears after 2s */}
        {canDismiss && (
          <button
            onClick={handleDismiss}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(45, 27, 78, 0.8)',
              border: '2px solid rgba(255, 255, 255, 0.6)',
              color: 'white',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'dismiss-hint-in 0.4s ease both',
              lineHeight: 1,
              fontFamily: 'system-ui',
            }}
            aria-label="Schließen"
          >
            ✕
          </button>
        )}

        {/* Tap anywhere hint */}
        {canDismiss && (
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '13px',
              fontFamily: 'cursive',
              textAlign: 'center',
              animation: 'dismiss-hint-in 0.4s ease both',
              pointerEvents: 'none',
              textShadow: '0 1px 3px rgba(0,0,0,0.6)',
              whiteSpace: 'nowrap',
            }}
          >
            Tippen zum Weiterlesen
          </div>
        )}
      </div>

      {/* Click outside overlay to dismiss */}
      {canDismiss && (
        <div
          onClick={handleDismiss}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
          }}
        />
      )}
    </div>
  )
}
