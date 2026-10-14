'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'

/** Cinta teal con texto en loop infinito. Los ítems se duplican para que el loop no tenga saltos. */
export function Ticker({ items }: { items: TKey[] }) {
  const { t } = useLanguage()
  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden bg-zq-teal py-3.5" aria-hidden="true">
      <div className="zq-ticker flex w-max whitespace-nowrap">
        {loop.map((key, i) => (
          <span
            key={i}
            className="zq-ticker-item px-10 text-[0.85rem] font-bold uppercase tracking-[0.2em] text-black"
          >
            {t(key)}
          </span>
        ))}
      </div>
    </div>
  )
}
