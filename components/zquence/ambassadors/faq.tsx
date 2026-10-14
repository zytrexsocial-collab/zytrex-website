'use client'

import { useId, useState } from 'react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { SectionHeading, ZqSection } from '../ui/section'

const FAQS = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  q: `faq_q${n}` as TKey,
  a: `faq_a${n}` as TKey,
}))

export function Faq() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)
  const baseId = useId()

  return (
    <ZqSection dark>
      <SectionHeading label={t('faq_label')} title={t('faq_title')} />
      <div className="mt-16 flex flex-col gap-0.5">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          const panelId = `${baseId}-panel-${i}`
          return (
            <div key={item.q} className="border-b border-zq-dark2 bg-zq-dark">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full cursor-pointer select-none items-center justify-between gap-4 px-7 py-5 text-left text-[1.05rem] font-bold uppercase transition-colors hover:text-zq-teal ${
                  isOpen ? 'text-zq-teal' : 'text-white'
                }`}
              >
                <span>{t(item.q)}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-[1.2rem] text-zq-teal transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                className={`grid transition-[grid-template-rows] duration-[400ms] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-[22px] text-[0.86rem] leading-[1.75] text-zq-gray">{t(item.a)}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ZqSection>
  )
}
