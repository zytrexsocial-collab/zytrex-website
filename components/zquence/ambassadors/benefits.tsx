'use client'

import type { ComponentType, SVGProps } from 'react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { IconBarChart, IconCoin, IconGift, IconPalette, IconTicket, IconTrendingUp } from '../icons'
import { SectionHeading, ZqSection } from '../ui/section'
import { Stagger } from '../ui/stagger'

const BENEFITS: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  title: TKey
  value: TKey
  body: TKey
}[] = [
  { Icon: IconGift, title: 'ben1_t', value: 'ben1_v', body: 'ben1_b' },
  { Icon: IconCoin, title: 'ben2_t', value: 'ben2_v', body: 'ben2_b' },
  { Icon: IconTicket, title: 'ben3_t', value: 'ben3_v', body: 'ben3_b' },
  { Icon: IconBarChart, title: 'ben4_t', value: 'ben4_v', body: 'ben4_b' },
  { Icon: IconPalette, title: 'ben5_t', value: 'ben5_v', body: 'ben5_b' },
  { Icon: IconTrendingUp, title: 'ben6_t', value: 'ben6_v', body: 'ben6_b' },
]

export function Benefits() {
  const { t } = useLanguage()

  return (
    <ZqSection>
      <SectionHeading label={t('ben_label')} title={t('ben_title')} />
      <Stagger className="mt-16 grid gap-0.5 bg-zq-dark3 min-[900px]:grid-cols-3">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="zq-benefit-card relative h-full overflow-hidden bg-zq-dark p-8 transition-colors duration-300 hover:bg-zq-dark2 sm:p-12"
          >
            <div className="mb-6 text-[2.2rem] text-zq-teal">
              <b.Icon />
            </div>
            <div className="mb-3 text-[1.3rem] font-bold uppercase tracking-[0.05em]">
              {t(b.title)}
            </div>
            <div className="mb-2 text-[2rem] font-bold leading-none text-zq-teal">{t(b.value)}</div>
            <p className="text-[0.88rem] leading-[1.7] text-zq-gray">{t(b.body)}</p>
          </div>
        ))}
      </Stagger>
    </ZqSection>
  )
}
