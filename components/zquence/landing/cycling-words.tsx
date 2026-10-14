'use client'

import { useEffect, useState } from 'react'

/** Rota entre `words` cada `interval` ms con una transición vertical. Se reinicia al cambiar las palabras. */
export function CyclingWords({ words, interval = 2000 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)
  const key = words.join('|')

  useEffect(() => {
    setIndex(0)
    setExiting(null)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let current = 0
    let exitTimer: number | undefined
    const iv = window.setInterval(() => {
      const prev = current
      current = (current + 1) % words.length
      setExiting(prev)
      setIndex(current)
      window.clearTimeout(exitTimer)
      exitTimer = window.setTimeout(() => setExiting(null), 550)
    }, interval)

    return () => {
      window.clearInterval(iv)
      window.clearTimeout(exitTimer)
    }
    // `key` representa el contenido de `words`: así el ciclo solo se reinicia si cambian las palabras
  }, [key, interval, words.length])

  return (
    <span className="relative block h-[1.05em] overflow-hidden" aria-live="off">
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden={i !== index}
          className={`zq-cycle-item zq-outline ${i === index ? 'is-active' : ''} ${i === exiting ? 'is-exit' : ''}`}
        >
          {w}
        </span>
      ))}
    </span>
  )
}
