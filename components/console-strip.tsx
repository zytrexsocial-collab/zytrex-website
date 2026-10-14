'use client'

import { useEffect, useRef, useState } from 'react'

const MESSAGES = [
  'boot zytrex.systems — ok',
  'zquence → activo · 11 mercados · 7 idiomas',
  'stack: flutter · dart · firebase · revenuecat',
  'en desarrollo: bokzy · sonara · [proyecto_cliente]',
  'estado: abierto a nuevos proyectos —',
]

export function ConsoleStrip() {
  const [text, setText] = useState('')
  const idx = useRef(0)
  const ci = useRef(0)
  const dir = useRef(1)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setText(MESSAGES[MESSAGES.length - 1])
      return
    }
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const m = MESSAGES[idx.current]
      setText(m.slice(0, ci.current))
      ci.current += dir.current
      let delay = 38
      if (ci.current > m.length) {
        dir.current = -1
        ci.current = m.length
        delay = 1600
      } else if (ci.current < 0) {
        dir.current = 1
        ci.current = 0
        idx.current = (idx.current + 1) % MESSAGES.length
        delay = 240
      }
      timer = setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="border-y border-border bg-card/60">
      <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-hidden px-5 py-3.5 font-mono text-[12.5px] sm:px-8">
        <span className="text-primary">zytrex@systems</span>
        <span className="text-muted-foreground/50">:~$</span>
        <span className="truncate text-foreground/80">{text}</span>
        <span className="zx-blink inline-block h-3.5 w-2 shrink-0 bg-primary" />
      </div>
    </div>
  )
}
