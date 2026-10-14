'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { ZqButton } from '../ui/zq-button'
import { useView } from '../view-context'
import { CyclingWords } from './cycling-words'
import { ScrambleText } from './scramble-text'

const STATS: { value: string; label: TKey }[] = [
  { value: '3.5mm', label: 'stat_dual' },
  { value: '$0', label: 'stat_gear' },
  { value: '7', label: 'stat_trial' },
  { value: '7', label: 'stat_langs' },
]

export function Hero() {
  const { t, cycleWords } = useLanguage()
  const { scrollToId } = useView()
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setStatsVisible(true), 1800)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <section className="zq-grid-bg zq-grid-mask zq-glow relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-20 pt-40 min-[900px]:px-12">
      <div className="zq-label zq-label-lg relative z-[1] mb-6 flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-zq-teal">
        {t('hero_label')}
      </div>

      <h1 className="relative z-[1] max-w-[900px] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.92] tracking-[-0.04em]">
        <ScrambleText text={t('hero_t1')} />
        <br />
        <span className="text-zq-teal">
          <ScrambleText text={t('hero_t2')} delay={280} />
        </span>
        <CyclingWords words={[t('hero_t3'), ...cycleWords]} />
      </h1>

      <p className="relative z-[1] mt-8 max-w-[520px] text-[1.1rem] leading-[1.7] text-zq-gray-light">
        {t('hero_sub')}
      </p>

      <div className="relative z-[1] mt-12 flex flex-wrap items-center gap-6">
        <ZqButton onClick={() => scrollToId('pricing')}>{t('hero_cta')}</ZqButton>
        <ZqButton variant="ghost" onClick={() => scrollToId('how')}>
          {t('hero_ghost')}
        </ZqButton>
      </div>

      <div
        className={`relative z-[1] mt-10 grid grid-cols-2 gap-y-6 border-t border-white/[0.08] pt-7 transition-all duration-500 sm:flex ${
          statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex-1 pr-8 sm:border-r sm:border-white/[0.08] sm:last:border-r-0 sm:last:pr-0"
          >
            <div className="text-[1.6rem] font-bold leading-none tracking-[-0.03em] text-white">
              {s.value}
            </div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-zq-gray">
              {t(s.label)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
