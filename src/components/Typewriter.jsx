import { useEffect, useState } from 'react'

export default function Typewriter({ text = '', speed = 40, start = true, className = '' }) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (!start) return
    setDisplay('')
    let i = 0
    const id = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i))
      i += 1
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, start])

  return (
    <span className={`whitespace-pre ${className}`}>
      {display}
      <span className="inline-block w-2 h-5 align-baseline bg-[#111111] ml-1 animate-cursor" />
    </span>
  )
}
