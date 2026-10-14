'use client'

import { useEffect, useRef, useState } from 'react'
import { Reveal } from './reveal'

const STEPS = [
  { id: 'P/01 · SEM 01–02', name: 'Descubrir', body: 'Ponemos a prueba el problema, las restricciones y la métrica que define el éxito.' },
  { id: 'P/02 · SEM 02–04', name: 'Diseñar', body: 'Arquitectura e interfaz, prototipadas juntas hasta que el camino sea obvio.' },
  { id: 'P/03 · SEM 04–12', name: 'Construir', body: 'Entregado en incrementos cortos, con calidad y pruebas escritas desde el inicio.' },
  { id: 'P/04 · SEM 12–14', name: 'Lanzar', body: 'Un release controlado con monitoreo, rollback y una primera semana deliberadamente tranquila.' },
  { id: 'P/05 · CONTINUO', name: 'Crecer', body: 'Nos quedamos. No como contrato de mantenimiento, sino como builders a quienes les importa el después.' },
]

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current
      if (!track) return
      const r = track.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.6 + r.height)))
      setFill(p * 100)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="process" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <Reveal className="mb-14 max-w-[60ch]">
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
          [ 03 ] Proceso
        </div>
        <h2 className="text-balance text-3xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl">
          Z-Flow: de cero a lanzamiento.
        </h2>
      </Reveal>

      <div ref={trackRef} className="relative border-t border-border">
        <div
          className="absolute -top-px left-0 h-px bg-primary shadow-[0_0_10px_var(--signal)] transition-[width] duration-100"
          style={{ width: `${fill}%` }}
        />
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 60}
              className="relative border-b border-border px-0 py-8 transition-colors hover:bg-foreground/[0.02] sm:border-r sm:px-4"
            >
              <span
                className="absolute -top-[4.5px] left-0 h-2 w-2 sm:left-4"
                style={{ background: i === 0 ? 'var(--signal)' : 'rgba(242,242,238,0.25)' }}
              />
              <div className="mb-10 font-mono text-[10.5px] tracking-[0.16em] text-muted-foreground">
                {s.id}
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em]">{s.name}</h3>
              <p className="text-[13.5px] leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
