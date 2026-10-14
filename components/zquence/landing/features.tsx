'use client'

import type { ComponentType, SVGProps } from 'react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { IconGlobe, IconList, IconRepeat, IconSplit } from '../icons'
import { SectionHeading, ZqSection } from '../ui/section'
import { MockupCarousel } from './mockup-carousel'

const FEATURES: { Icon: ComponentType<SVGProps<SVGSVGElement>>; title: TKey; body: TKey }[] = [
  { Icon: IconSplit, title: 'f1_t', body: 'f1_b' },
  { Icon: IconList, title: 'f2_t', body: 'f2_b' },
  { Icon: IconRepeat, title: 'f3_t', body: 'f3_b' },
  { Icon: IconGlobe, title: 'f4_t', body: 'f4_b' },
]

export function Features() {
  const { t } = useLanguage()

  return (
    <ZqSection id="features">
      <SectionHeading label={t('feat_label')} title={t('feat_title')} />
      <div className="mt-20 grid items-center gap-20 min-[900px]:grid-cols-2">
        <MockupCarousel />
        <div className="flex flex-col gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-6 border-b border-zq-dark3 pb-8 last:border-b-0 last:pb-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-zq-teal/20 bg-zq-teal/10 text-[1.3rem] text-zq-teal">
                <f.Icon />
              </div>
              <div>
                <div className="mb-1.5 text-[1.1rem] font-bold uppercase tracking-[0.05em]">
                  {t(f.title)}
                </div>
                <p className="text-[0.88rem] leading-[1.65] text-zq-gray">{t(f.body)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ZqSection>
  )
}
