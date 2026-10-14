'use client'

import type { ComponentType, SVGProps } from 'react'
import { useLanguage } from '../i18n/language-provider'
import { IconCrown, IconDiamond, IconMedal } from '../icons'
import { SectionHeading, ZqSection } from '../ui/section'
import { Stagger } from '../ui/stagger'

type Tier = {
  name: string
  color: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  subsRange: string
  commission: string
  bonus: string
  total: string
  projection: { subs: number; firstHalf: string; secondHalf: string; total: string }
}

const TIERS: Tier[] = [
  {
    name: 'Base',
    color: 'text-zq-gray-light',
    Icon: IconMedal,
    subsRange: '10-19',
    commission: '~$8',
    bonus: '+$10',
    total: '~$18',
    projection: { subs: 10, firstHalf: '$54', secondHalf: '$54', total: '$108' },
  },
  {
    name: 'Silver',
    color: 'text-zq-silver',
    Icon: IconMedal,
    subsRange: '20-29',
    commission: '~$16',
    bonus: '+$30',
    total: '~$46',
    projection: { subs: 20, firstHalf: '$138', secondHalf: '$138', total: '$276' },
  },
  {
    name: 'Gold',
    color: 'text-zq-gold',
    Icon: IconMedal,
    subsRange: '30-49',
    commission: '~$24',
    bonus: '+$50',
    total: '~$74',
    projection: { subs: 30, firstHalf: '$222', secondHalf: '$222', total: '$444' },
  },
  {
    name: 'Diamond',
    color: 'text-zq-diamond',
    Icon: IconDiamond,
    subsRange: '50-99',
    commission: '~$40',
    bonus: '+$100',
    total: '~$140',
    projection: { subs: 50, firstHalf: '$390', secondHalf: '$390', total: '$780' },
  },
  {
    name: 'Legend',
    color: 'text-zq-teal',
    Icon: IconCrown,
    subsRange: '100+',
    commission: '~$80',
    bonus: '+$250',
    total: '~$330',
    projection: { subs: 100, firstHalf: '$780', secondHalf: '$780', total: '$1,560' },
  },
]

const PROJ_GRID = 'grid grid-cols-[1.2fr_.8fr_1fr_1fr_1fr]'
const projHead = 'px-[18px] py-3.5 text-center text-xs font-bold uppercase tracking-[0.15em] text-zq-gray'
const projCell = 'flex items-center justify-center px-[18px] py-3.5 text-center text-[0.85rem] text-zq-gray-light'

export function Tiers() {
  const { t } = useLanguage()

  return (
    <ZqSection dark>
      <SectionHeading label={t('tier_label')} title={t('tier_title')} />
      <Stagger className="mt-16 grid grid-cols-2 gap-0.5 bg-zq-dark3 min-[900px]:grid-cols-5">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="h-full bg-zq-dark px-5 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-zq-dark2"
          >
            <div className={`mb-4 text-[1.8rem] ${tier.color}`}>
              <tier.Icon />
            </div>
            <span className={`mb-4 block text-[1.1rem] font-bold uppercase tracking-[0.15em] ${tier.color}`}>
              {tier.name}
            </span>
            <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-zq-gray">
              {tier.subsRange} Subs/mo
            </div>
            <div className="mb-2 text-[0.8rem] text-zq-gray-light">{tier.commission} commission</div>
            <div className={`mb-1 text-[2rem] font-bold leading-none ${tier.color}`}>{tier.bonus}</div>
            <div className="mt-2 border-t border-zq-dark3 pt-2.5 text-[0.72rem] text-zq-gray">
              Total/mo
              <strong className="block text-[0.85rem] text-white">{tier.total}</strong>
            </div>
          </div>
        ))}
      </Stagger>

      <div className="mt-16">
        <SectionHeading label={t('proj_label')} title={t('proj_title')} />
        <div className="mt-10 overflow-x-auto border border-zq-dark3">
          <div role="table" className="min-w-[520px]">
            <div role="row" className={`${PROJ_GRID} border-b border-zq-dark3 bg-zq-dark2`}>
              <div role="columnheader" className={`${projHead} text-left`}>
                Level
              </div>
              {['Subs/mo', 'Mo 1-3', 'Mo 4-6', 'Total'].map((h) => (
                <div key={h} role="columnheader" className={projHead}>
                  {h}
                </div>
              ))}
            </div>
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                role="row"
                className={`${PROJ_GRID} border-b border-zq-dark2 transition-colors last:border-b-0 hover:bg-white/[0.02]`}
              >
                <div role="cell" className={`${projCell} justify-start text-left font-bold`}>
                  <span className={`mr-2 inline-block h-2 w-2 rounded-full bg-current ${tier.color}`} />
                  {tier.name}
                </div>
                <div role="cell" className={projCell}>
                  {tier.projection.subs}
                </div>
                <div role="cell" className={projCell}>
                  {tier.projection.firstHalf}
                </div>
                <div role="cell" className={projCell}>
                  {tier.projection.secondHalf}
                </div>
                <div role="cell" className={`${projCell} font-bold text-zq-teal`}>
                  {tier.projection.total}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ZqSection>
  )
}
