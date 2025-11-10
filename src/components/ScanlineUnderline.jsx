export default function ScanlineUnderline({ color = '#00E676', className = '' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute left-0 right-0 -bottom-1 h-[2px] overflow-hidden">
        <span className="block h-full w-full bg-black/10"></span>
        <span
          className="block h-full w-1/3 bg-[var(--accent-color,#00E676)] animate-scanline"
          style={{ backgroundColor: color }}
        ></span>
      </span>
    </span>
  )
}
