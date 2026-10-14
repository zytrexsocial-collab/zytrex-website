'use client'

import { useLanguage } from '../i18n/language-provider'
import { IconGear, IconGlobe, IconMail } from '../icons'
import { SectionHeading, ZqSection } from '../ui/section'
import { Stagger } from '../ui/stagger'

const CONTACTS = [
  { Icon: IconMail, label: 'Ambassador Program', value: 'embajadores@zytrex.net', href: 'mailto:embajadores@zytrex.net' },
  { Icon: IconGear, label: 'Technical Support', value: 'soporte@zytrex.net', href: 'mailto:soporte@zytrex.net' },
  { Icon: IconGlobe, label: 'Website', value: 'zquence.app · zytrex.net', href: undefined },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <ZqSection>
      <SectionHeading label={t('contact_label')} title={t('contact_title')} />
      <Stagger className="mt-12 grid gap-0.5 bg-zq-dark3 min-[900px]:grid-cols-3">
        {CONTACTS.map((c) => (
          <div key={c.label} className="h-full bg-zq-dark p-10 text-center transition-colors duration-300 hover:bg-zq-dark2">
            <div className="mb-4 text-[2rem] text-zq-teal">
              <c.Icon />
            </div>
            <div className="mb-2 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-zq-gray">{c.label}</div>
            {c.href ? (
              <a href={c.href} className="text-[0.9rem] text-zq-teal hover:underline">
                {c.value}
              </a>
            ) : (
              <div className="text-[0.9rem] text-zq-teal">{c.value}</div>
            )}
          </div>
        ))}
      </Stagger>
    </ZqSection>
  )
}
