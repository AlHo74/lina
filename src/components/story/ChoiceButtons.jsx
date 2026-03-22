import { useState } from 'react'

const CHOICE_COLORS = [
  { bg: '#FFB3D9', border: '#FF6DB6', text: '#2D1B4E' }, // pink
  { bg: '#B3E5FF', border: '#4AABDB', text: '#2D1B4E' }, // blue
  { bg: '#D4B3FF', border: '#9B59D0', text: '#2D1B4E' }, // purple
]

export default function ChoiceButtons({ choices = [], onChoice, disabled }) {
  const [tappedId, setTappedId] = useState(null)

  function handleTap(choice) {
    if (disabled) return
    setTappedId(choice.id)
    // Small delay so tap animation plays before parent triggers loading state
    setTimeout(() => {
      onChoice(choice)
      setTappedId(null)
    }, 180)
  }

  return (
    <div className="flex flex-col gap-3 px-4 pt-3 pb-6">
      {/* Section divider */}
      <div className="flex items-center gap-3 mb-1">
        <div className="flex-1 h-px" style={{ background: 'rgba(212,179,255,0.25)' }} />
        <p
          className="text-sm font-bold tracking-wide"
          style={{ fontFamily: 'var(--font-body)', color: '#D4B3FF', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          Was machst du?
        </p>
        <div className="flex-1 h-px" style={{ background: 'rgba(212,179,255,0.25)' }} />
      </div>

      {choices.map((choice, i) => {
        const colors = CHOICE_COLORS[i % CHOICE_COLORS.length]
        const isTapped = tappedId === choice.id

        return (
          <button
            key={choice.id}
            onClick={() => handleTap(choice)}
            disabled={disabled}
            className={`
              animate-choice-in
              relative w-full text-left rounded-2xl px-5 py-4
              font-bold text-base leading-snug
              transition-all duration-150
              focus:outline-none focus-visible:ring-4 focus-visible:ring-candy-purple
              select-none
              ${isTapped ? 'animate-btn-tap' : ''}
              ${disabled
                ? 'opacity-40 cursor-not-allowed'
                : 'active:scale-95 cursor-pointer hover:brightness-95'
              }
            `}
            style={{
              minHeight: '58px',
              background: colors.bg,
              border: `2.5px solid ${colors.border}`,
              color: colors.text,
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              boxShadow: disabled
                ? 'none'
                : `0 4px 0 ${colors.border}, 0 6px 12px rgba(0,0,0,0.12)`,
              transform: isTapped ? 'translateY(4px)' : 'translateY(0)',
              animationDelay: `${i * 90}ms`,
            }}
          >
            {/* Choice letter badge */}
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-full mr-3 text-sm font-bold shrink-0 align-middle"
              style={{
                background: colors.border,
                color: 'white',
                fontFamily: 'var(--font-display)',
              }}
            >
              {choice.id.toUpperCase()}
            </span>

            {choice.text}

            {/* Loading spinner when this choice is processing */}
            {disabled && tappedId === choice.id && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
                style={{ animation: 'portal-spin 0.8s linear infinite', display: 'inline-block' }}>
                🌀
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
