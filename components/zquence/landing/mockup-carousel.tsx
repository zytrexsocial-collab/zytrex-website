'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { MOCKUP_SIZE, MOCKUPS } from './mockups'

const SLIDES = [MOCKUPS.library, MOCKUPS.setlist, MOCKUPS.waveforms, MOCKUPS.mixer]
const AUTOPLAY_MS = 3500

export function MockupCarousel() {
  const [current, setCurrent] = useState(0)
  // Cambia cada vez que el usuario elige un slide, para reiniciar el autoplay.
  const [manualTick, setManualTick] = useState(0)

  useEffect(() => {
    const iv = window.setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), AUTOPLAY_MS)
    return () => window.clearInterval(iv)
  }, [manualTick])

  const goTo = useCallback((i: number) => {
    setCurrent(i)
    setManualTick((n) => n + 1)
  }, [])

  return (
    <div className="relative flex flex-col items-center gap-6">
      <div className="pointer-events-none absolute -inset-[60px] z-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,168,157,0.12)_0%,transparent_70%)]" />
      <div className="relative z-[1] grid min-h-[190px] w-full sm:min-h-[300px] place-items-center">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== current}
            className={`col-start-1 row-start-1 flex items-center justify-center transition-all duration-500 ${
              i === current
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none translate-y-2.5 scale-[0.96] opacity-0'
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              {...MOCKUP_SIZE}
              priority={i === 0}
              className="max-h-[300px] w-auto max-w-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
          </div>
        ))}
      </div>
      <div className="relative z-[1] flex gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={s.alt}
            aria-current={i === current}
            className={`h-[3px] cursor-pointer p-0 transition-all duration-300 ${
              i === current ? 'w-12 bg-zq-teal' : 'w-7 bg-zq-dark3'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
