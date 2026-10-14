'use client'

import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@&'
const TICK = 50
const CHAR_STAGGER = 44

type Glyph = { c: string; scrambling: boolean }

const toGlyphs = (text: string): Glyph[] =>
  text.split('').map((c) => ({ c, scrambling: false }))

/**
 * Texto que "descifra" sus letras con caracteres aleatorios antes de mostrarse.
 * Se vuelve a ejecutar cada vez que cambia `text` (p. ej. al cambiar de idioma).
 */
export function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [glyphs, setGlyphs] = useState<Glyph[]>(() => toGlyphs(text))

  useEffect(() => {
    setGlyphs(toGlyphs(text))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const chars = text.split('')
    const maxSteps = chars.map(() => 5 + Math.floor(Math.random() * 4))
    const start = performance.now()

    const iv = window.setInterval(() => {
      const now = performance.now()
      let done = true
      setGlyphs(
        chars.map((c, i) => {
          if (c === ' ') return { c, scrambling: false }
          const elapsed = now - start - (delay + i * CHAR_STAGGER)
          if (elapsed < 0) {
            done = false
            return { c, scrambling: false }
          }
          if (Math.floor(elapsed / TICK) < maxSteps[i]) {
            done = false
            return { c: CHARS[Math.floor(Math.random() * CHARS.length)], scrambling: true }
          }
          return { c, scrambling: false }
        }),
      )
      if (done) window.clearInterval(iv)
    }, TICK)

    return () => window.clearInterval(iv)
  }, [text, delay])

  return (
    <span aria-label={text}>
      {glyphs.map((g, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`inline-block ${g.scrambling ? 'text-zq-teal' : ''}`}
        >
          {g.c === ' ' ? ' ' : g.c}
        </span>
      ))}
    </span>
  )
}
