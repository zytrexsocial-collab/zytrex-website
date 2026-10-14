'use client'

import { useLanguage } from '../i18n/language-provider'
import { IconApple, IconPlay } from '../icons'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from './store-links'

const STORES = [
  { name: 'App Store', href: APP_STORE_URL, Icon: IconApple },
  { name: 'Google Play', href: GOOGLE_PLAY_URL, Icon: IconPlay },
]

export function FinalCta() {
  const { t } = useLanguage()

  return (
    <section
      className="zq-grid-bg relative overflow-hidden px-5 py-[140px] text-center min-[900px]:px-12"
      style={{ ['--zq-grid-alpha' as string]: '0.05', ['--zq-grid-size' as string]: '40px' }}
    >
      <h2 className="relative z-[1] text-[clamp(3rem,7vw,6.5rem)] font-bold uppercase leading-[0.95]">
        <span>{t('cta_t1')}</span>
        <br />
        <span className="zq-outline">{t('cta_t2')}</span>
      </h2>
      <p className="relative z-[1] mt-6 text-base text-zq-gray">{t('cta_sub')}</p>
      <div className="relative z-[1] mt-12 flex flex-wrap justify-center gap-4">
        {STORES.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-zq-dark3 bg-zq-dark2 px-7 py-3.5 text-left transition-colors hover:border-zq-teal"
          >
            <span className="text-[1.4rem] text-white">
              <s.Icon />
            </span>
            <span>
              <span className="block text-[0.65rem] uppercase tracking-[0.1em] text-zq-gray">
                {t('store_sub')}
              </span>
              <span className="block text-base font-bold text-white">{s.name}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
