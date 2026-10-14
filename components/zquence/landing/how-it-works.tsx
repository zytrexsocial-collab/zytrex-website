'use client'

import Image from 'next/image'
import type { ComponentType, SVGProps } from 'react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { IconHeadphones, IconMic, IconPhone, IconPlay } from '../icons'
import { SectionHeading, ZqSection } from '../ui/section'
import { Stagger } from '../ui/stagger'
import { zqButton } from '../ui/zq-button'
import { MOCKUP_SIZE, MOCKUPS } from './mockups'

const STEPS: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  title: TKey
  body: TKey
  img: (typeof MOCKUPS)[keyof typeof MOCKUPS]
}[] = [
  { Icon: IconPhone, title: 'how1_t', body: 'how1_b', img: MOCKUPS.library },
  { Icon: IconHeadphones, title: 'how2_t', body: 'how2_b', img: MOCKUPS.setlist },
  { Icon: IconMic, title: 'how3_t', body: 'how3_b', img: MOCKUPS.mixer },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <ZqSection dark>
      <SectionHeading label={t('how_label')} title={t('how_title')} />
      <Stagger className="mt-20 grid gap-12 min-[900px]:grid-cols-3">
        {STEPS.map((s, i) => (
          <div key={s.title} className="group">
            <div className="mb-8 flex items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zq-teal/30 bg-zq-teal/10 font-bold text-zq-teal">
                {String(i + 1).padStart(2, '0')}
              </div>
              {i < STEPS.length - 1 && (
                <div className="h-px flex-1 bg-gradient-to-r from-zq-teal/40 to-transparent" />
              )}
            </div>
            <div className="mb-5 text-[2rem] text-zq-teal">
              <s.Icon />
            </div>
            <div className="mb-3 text-[1.3rem] font-bold uppercase tracking-[0.05em]">
              {t(s.title)}
            </div>
            <p className="text-[0.9rem] leading-[1.7] text-zq-gray">{t(s.body)}</p>
            <div className="mt-5 overflow-hidden rounded shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <Image
                src={s.img.src}
                alt={s.img.alt}
                {...MOCKUP_SIZE}
                className="block w-full transition-transform duration-[400ms] group-hover:scale-[1.03]"
              />
            </div>
          </div>
        ))}
      </Stagger>
      <div className="mt-14 text-center">
        <a
          href="https://www.youtube.com/@ZQUENCEAPP"
          target="_blank"
          rel="noopener noreferrer"
          className={zqButton({ variant: 'ghost' })}
        >
          <IconPlay /> <span>{t('how_tutorials')}</span>
        </a>
      </div>
    </ZqSection>
  )
}
