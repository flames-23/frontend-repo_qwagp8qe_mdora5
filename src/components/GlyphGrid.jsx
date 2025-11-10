import { useEffect, useRef } from 'react'

export default function GlyphGrid({ rows = 12, cols = 20, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const chars = ['·', '∷', '∙', '◦', '○', '•', '∎', '▢', '░', '▒']

    const interval = setInterval(() => {
      const cells = el.querySelectorAll('[data-cell]')
      cells.forEach((cell) => {
        if (Math.random() < 0.06) {
          cell.textContent = chars[Math.floor(Math.random() * chars.length)]
        }
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  const grid = []
  for (let r = 0; r < rows; r++) {
    const row = []
    for (let c = 0; c < cols; c++) {
      row.push(
        <span
          key={`${r}-${c}`}
          data-cell
          className="inline-block w-4 text-center text-xs text-black/40 select-none"
        >
          ·
        </span>
      )
    }
    grid.push(
      <div key={r} className="leading-4">
        {row}
      </div>
    )
  }

  return (
    <div ref={ref} className={`p-4 rounded-md bg-white border border-black/10 ${className}`}>
      {grid}
    </div>
  )
}
