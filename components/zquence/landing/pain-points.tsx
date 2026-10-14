'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { SectionHeading, ZqSection } from '../ui/section'
import { Stagger } from '../ui/stagger'

const PAINS: { title: TKey; body: TKey }[] = [
  { title: 'pain1_t', body: 'pain1_b' },
  { title: 'pain2_t', body: 'pain2_b' },
  { title: 'pain3_t', body: 'pain3_b' },
  { title: 'pain4_t', body: 'pain4_b' },
]

export function PainPoints() {
  const { t } = useLanguage()

  return (
    <ZqSection id="how">
      <SectionHeading label={t('prob_label')} title={t('prob_title')} />
      <Stagger className="mt-16 grid gap-0.5 bg-zq-dark3 min-[900px]:grid-cols-2">
        {PAINS.map((p, i) => (
          <div
            key={p.title}
            className="zq-pain-card relative h-full overflow-hidden bg-zq-dark p-8 transition-colors duration-300 hover:bg-zq-dark2 sm:p-12"
            style={{ ['--zq-line-delay' as string]: `${0.15 + i * 0.1}s` }}
          >
            <div className="mb-4 text-[4rem] font-bold leading-none text-zq-dark3">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="mb-3 text-[1.3rem] font-bold uppercase tracking-[0.05em] text-white">
              {t(p.title)}
            </div>
            <p className="text-[0.9rem] leading-[1.7] text-zq-gray">{t(p.body)}</p>
          </div>
        ))}
      </Stagger>
    </ZqSection>
  )
}
