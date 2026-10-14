'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { SectionHeading, ZqSection } from '../ui/section'

const TESTIMONIALS: { text: TKey; author: string; role: TKey }[] = [
  { text: 't1', author: 'Carlos M.', role: 't1r' },
  { text: 't2', author: 'Ana R.', role: 't2r' },
  { text: 't3', author: 'Marco T.', role: 't3r' },
  { text: 't4', author: 'Ji-Ho K.', role: 't4r' },
]

export function Testimonials() {
  const { t } = useLanguage()
  // Se duplican para que el desplazamiento infinito no tenga saltos.
  const loop = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <ZqSection dark className="overflow-hidden">
      <SectionHeading label={t('testi_label')} title={t('testi_title')} />
      <div className="zq-testi-row mt-16 flex w-max gap-6">
        {loop.map((item, i) => (
          <figure
            key={i}
            aria-hidden={i >= TESTIMONIALS.length}
            className="w-[300px] shrink-0 border border-zq-dark3 bg-black p-9 sm:w-[340px]"
          >
            <div className="mb-4 font-serif text-[2rem] leading-none text-zq-teal">&ldquo;</div>
            <blockquote className="mb-6 text-[0.9rem] leading-[1.7] text-zq-gray-light">
              {t(item.text)}
            </blockquote>
            <figcaption>
              <div className="text-[0.85rem] font-bold uppercase tracking-[0.1em] text-white">
                {item.author}
              </div>
              <div className="mt-0.5 text-xs text-zq-gray">{t(item.role)}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </ZqSection>
  )
}
