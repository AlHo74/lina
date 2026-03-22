import { useEffect, useState } from 'react'

export default function Toast({ message = '💾 Gespeichert!', visible, onDone }) {
  const [phase, setPhase] = useState('in') // 'in' | 'out'

  useEffect(() => {
    if (!visible) return
    setPhase('in')
    const hideTimer = setTimeout(() => setPhase('out'), 2000)
    const doneTimer = setTimeout(() => onDone?.(), 2400)
    return () => {
      clearTimeout(hideTimer)
      clearTimeout(doneTimer)
    }
  }, [visible, onDone])

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50
        px-5 py-3 rounded-2xl shadow-lg
        bg-candy-purple-deep text-white font-body font-bold text-sm
        flex items-center gap-2 whitespace-nowrap
        ${phase === 'in' ? 'animate-toast-in' : 'animate-toast-out'}`}
      style={{ fontFamily: 'var(--font-body)' }}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}
