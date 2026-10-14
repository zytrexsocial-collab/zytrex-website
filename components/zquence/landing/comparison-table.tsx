'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { SectionHeading, ZqSection } from '../ui/section'
import { useInView } from '../ui/use-in-view'

const COMPETITORS = ['Backtrackit', 'ShowOne', 'Jamzone'] as const

/** `true` = ✓, `false` = ✗, string = valor parcial */
type Cell = boolean | string

const ROWS: { feature: TKey; zquence: Cell; others: [Cell, Cell, Cell] }[] = [
  { feature: 'dr1', zquence: true, others: [false, true, 'Partial'] },
  { feature: 'dr2', zquence: true, others: [true, false, true] },
  { feature: 'dr3', zquence: true, others: [false, false, false] },
  { feature: 'dr4', zquence: true, others: [false, true, 'Basic'] },
  { feature: 'dr5', zquence: true, others: [false, false, false] },
  { feature: 'dr6', zquence: true, others: ['One-time', 'Higher', 'Varies'] },
  { feature: 'dr7', zquence: true, others: [true, 'Limited', 'Demo'] },
]

const GRID = 'grid grid-cols-[2fr_1fr_1fr_1fr_1fr]'

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <span className="text-zq-teal" aria-label="Sí">&#10003;</span>
  if (value === false) return <span className="text-[#333]" aria-label="No">&#10007;</span>
  return <span className="text-[0.72rem] text-zq-gray">{value}</span>
}

const cellBase = 'flex items-center justify-center px-5 py-4 text-center text-[0.85rem] text-zq-gray-light'
const headBase = 'px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-zq-gray'

export function ComparisonTable() {
  const { t } = useLanguage()
  const [ref, inView] = useInView<HTMLDivElement>(0.2)

  return (
    <ZqSection dark>
      <SectionHeading label={t('diff_label')} title={t('diff_title')} />
      <div ref={ref} className="mt-16 overflow-x-auto border border-zq-dark3">
        <div role="table" className="min-w-[640px]">
          <div role="row" className={`${GRID} border-b border-zq-dark3 bg-zq-dark2`}>
            <div role="columnheader" className={`${headBase} text-left`}>
              {t('diff_feat')}
            </div>
            <div role="columnheader" className={`${headBase} zq-diff-hl relative bg-zq-teal/[0.06] text-zq-teal`}>
              ZQUENCE
            </div>
            {COMPETITORS.map((c) => (
              <div key={c} role="columnheader" className={headBase}>
                {c}
              </div>
            ))}
          </div>

          {ROWS.map((r, i) => (
            <div
              key={r.feature}
              role="row"
              className={`${GRID} border-b border-zq-dark2 transition-[opacity,transform,background-color] duration-[400ms] last:border-b-0 hover:bg-white/[0.02] ${
                inView ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
              }`}
              style={{ transitionDelay: inView ? `${i * 75}ms` : '0ms' }}
            >
              <div role="cell" className={`${cellBase} justify-start text-left text-[0.8rem] text-zq-gray`}>
                {t(r.feature)}
              </div>
              <div role="cell" className={`${cellBase} bg-zq-teal/[0.04]`}>
                <CellValue value={r.zquence} />
              </div>
              {r.others.map((v, j) => (
                <div key={j} role="cell" className={cellBase}>
                  <CellValue value={v} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </ZqSection>
  )
}
