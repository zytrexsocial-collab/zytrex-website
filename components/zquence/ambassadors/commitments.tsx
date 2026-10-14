'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { RichText } from '../ui/rich-text'
import { SectionHeading, ZqSection } from '../ui/section'

const COLUMNS: { title: TKey; ours: boolean; items: TKey[] }[] = [
  { title: 'commit_you', ours: false, items: ['cy1', 'cy2', 'cy3', 'cy4', 'cy5', 'cy6'] },
  { title: 'commit_us', ours: true, items: ['cu1', 'cu2', 'cu3', 'cu4', 'cu5', 'cu6'] },
]

export function Commitments() {
  const { t } = useLanguage()

  return (
    <ZqSection>
      <SectionHeading label={t('commit_label')} title={t('commit_title')} />
      <div className="mt-16 grid gap-10 min-[900px]:grid-cols-2">
        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col">
            <div
              className={`border-b border-zq-dark3 px-[22px] py-3.5 text-[0.8rem] font-bold uppercase tracking-[0.2em] ${
                col.ours ? 'bg-zq-teal/[0.06] text-zq-teal' : 'bg-zq-dark2 text-white'
              }`}
            >
              {t(col.title)}
            </div>
            {col.items.map((key) => (
              <div
                key={key}
                className="flex items-start gap-3.5 border-b border-zq-dark2 bg-zq-dark2 px-[22px] py-4 last:border-b-0"
              >
                <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zq-teal" />
                <RichText
                  k={key}
                  className="text-[0.84rem] leading-[1.6] text-zq-gray-light [&_strong]:font-bold"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ZqSection>
  )
}
