'use client'

import type { ComponentType, SVGProps } from 'react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { IconBan, IconHeadphones, IconMegaphone, IconPhone, IconUsers } from '../icons'
import { RichText } from '../ui/rich-text'
import { SectionHeading, ZqSection } from '../ui/section'

type Item = { Icon: ComponentType<SVGProps<SVGSVGElement>>; text: TKey }

const COLUMNS: { title: TKey; positive: boolean; items: Item[] }[] = [
  {
    title: 'req_yes',
    positive: true,
    items: [
      { Icon: IconHeadphones, text: 'ry1' },
      { Icon: IconPhone, text: 'ry2' },
      { Icon: IconMegaphone, text: 'ry3' },
      { Icon: IconUsers, text: 'ry4' },
    ],
  },
  {
    title: 'req_no',
    positive: false,
    items: [
      { Icon: IconBan, text: 'rn1' },
      { Icon: IconBan, text: 'rn2' },
      { Icon: IconBan, text: 'rn3' },
      { Icon: IconBan, text: 'rn4' },
    ],
  },
]

export function Requirements() {
  const { t } = useLanguage()

  return (
    <ZqSection dark>
      <SectionHeading label={t('req_label')} title={t('req_title')} />
      <div className="mt-16 grid gap-10 min-[900px]:grid-cols-2">
        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-3.5">
            <div className="mb-1 text-[0.82rem] font-bold uppercase tracking-[0.2em] text-zq-teal">
              {t(col.title)}
            </div>
            {col.items.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3.5 border-l-[3px] border-transparent bg-zq-dark2 px-5 py-4 transition-colors hover:border-zq-teal"
              >
                <div
                  className={`mt-0.5 shrink-0 text-[1.1rem] ${col.positive ? 'text-zq-teal' : 'text-zq-gray'}`}
                >
                  <item.Icon />
                </div>
                <RichText
                  k={item.text}
                  className="text-[0.84rem] leading-[1.6] text-zq-gray-light [&_strong]:mb-[3px] [&_strong]:block [&_strong]:font-medium [&_strong]:text-white"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ZqSection>
  )
}
