/**
 * Decorative torn paper edge rendered as an SVG.
 * position="top"  → ragged edge on the top of the element
 * position="bottom" → ragged edge on the bottom
 */
export default function TornEdge({ position = 'bottom', color = '#FFFDF5', className = '' }) {
  const isBottom = position === 'bottom'

  // Random-looking but deterministic torn path
  const points = isBottom
    ? 'M0,0 L0,8 C20,14 40,2 60,10 C80,18 100,4 120,12 C140,20 160,5 180,11 C200,17 220,3 240,9 C260,15 280,4 300,10 C320,16 340,2 360,8 C380,14 400,4 420,11 C440,18 460,3 480,9 L480,0 Z'
    : 'M0,14 L0,6 C20,0 40,12 60,4 C80,-4 100,10 120,2 C140,-6 160,9 180,3 C200,-3 220,11 240,5 C260,-1 280,10 300,4 C320,-2 340,12 360,6 C380,0 400,10 420,3 C440,-4 460,11 480,5 L480,14 Z'

  return (
    <div className={`w-full overflow-hidden ${isBottom ? 'mt-[-1px]' : 'mb-[-1px]'} ${className}`} style={{ height: 14 }}>
      <svg
        viewBox="0 0 480 14"
        preserveAspectRatio="none"
        width="100%"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <path d={points} fill={color} />
      </svg>
    </div>
  )
}
