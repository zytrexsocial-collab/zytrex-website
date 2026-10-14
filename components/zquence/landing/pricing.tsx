'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { SectionHeading, ZqSection } from '../ui/section'
import { Stagger } from '../ui/stagger'
import { zqButton } from '../ui/zq-button'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from './store-links'

const PLANS: { name: string; price: number; badge: TKey; features: TKey[]; featured?: boolean }[] = [
  { name: 'Basic', price: 8, badge: 'plan1_badge', features: ['p1f1', 'p1f2', 'p1f3', 'p1f4', 'p1f5'] },
  {
    name: 'Pro',
    price: 12,
    badge: 'plan2_badge',
    features: ['p2f1', 'p2f2', 'p2f3', 'p2f4', 'p2f5'],
    featured: true,
  },
]

const STORES = [
  { label: 'App Store', href: APP_STORE_URL },
  { label: 'Google Play', href: GOOGLE_PLAY_URL },
]

export function Pricing() {
  const { t } = useLanguage()

  return (
    <ZqSection id="pricing">
      <SectionHeading label={t('price_label')} title={t('price_title')} />
      <Stagger className="mt-16 grid max-w-[720px] gap-0.5 bg-zq-dark3 min-[900px]:grid-cols-2">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`h-full p-8 sm:p-12 ${p.featured ? 'border-t-[3px] border-zq-teal bg-zq-dark2' : 'bg-zq-dark'}`}
          >
            <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-zq-teal">
              {t(p.badge)}
            </div>
            <div className="mb-6 text-[2rem] font-bold uppercase">{p.name}</div>
            <div className="mb-1 text-[3.5rem] font-bold leading-none">
              <sup className="mr-0.5 align-top text-[1.5rem]">$</sup>
              {p.price}
            </div>
            <div className="mb-4 text-[0.8rem] uppercase text-zq-gray">{t('plan_period')}</div>
            <div className="mb-8 text-[0.8rem] font-semibold uppercase text-zq-teal">
              {t('plan_trial')}
            </div>
            <ul className="zq-plan-features mb-10 flex flex-col gap-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[0.88rem] text-zq-gray-light">
                  {t(f)}
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5">
              {STORES.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={zqButton({ variant: p.featured ? 'planTeal' : 'planOutline' })}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </Stagger>
    </ZqSection>
  )
}
