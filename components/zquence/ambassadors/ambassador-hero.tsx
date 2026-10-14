'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { ZqButton } from '../ui/zq-button'
import { useView } from '../view-context'

const STATS: { value: string; label: TKey }[] = [
  { value: '10%', label: 'stat1_l' },
  { value: '20%', label: 'stat2_l' },
  { value: '$330', label: 'stat3_l' },
  { value: '6mo', label: 'stat4_l' },
]

export function AmbassadorHero() {
  const { t } = useLanguage()
  const { scrollToId } = useView()

  return (
    <section
      className="zq-grid-bg zq-grid-mask zq-glow relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-20 pt-40 min-[900px]:px-12"
      style={{ ['--zq-grid-alpha' as string]: '0.05', ['--zq-glow-size' as string]: '700px' }}
    >
      <div className="zq-label zq-label-lg relative z-[1] mb-6 flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-zq-teal">
        {t('amb_hero_label')}
      </div>
      <h1 className="relative z-[1] max-w-[900px] text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.92] tracking-[-0.04em]">
        <span className="text-zq-teal">{t('amb_t1')}</span>
        <br />
        <span className="zq-outline">{t('amb_t2')}</span>
      </h1>
      <p className="relative z-[1] mt-8 max-w-[520px] text-[1.1rem] leading-[1.7] text-zq-gray-light">
        {t('amb_sub')}
      </p>
      <div className="relative z-[1] mt-12 flex flex-wrap items-center gap-6">
        <ZqButton onClick={() => scrollToId('apply')}>{t('amb_cta')}</ZqButton>
      </div>
      <div className="relative z-[1] mt-14 flex flex-wrap gap-12">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-[2.2rem] font-bold leading-none text-white">{s.value}</div>
            <div className="mt-1 text-[0.72rem] uppercase tracking-[0.15em] text-zq-gray">
              {t(s.label)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
