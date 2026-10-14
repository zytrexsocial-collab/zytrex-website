'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Menu, X } from 'lucide-react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { ZqButton } from '../ui/zq-button'
import { useView, type ZqView } from '../view-context'
import { LanguageSwitcher } from './language-switcher'

const LINKS: { key: TKey; view: ZqView; anchor?: string; highlight?: boolean }[] = [
  { key: 'nav_how', view: 'landing', anchor: 'how' },
  { key: 'nav_features', view: 'landing', anchor: 'features' },
  { key: 'nav_pricing', view: 'landing', anchor: 'pricing' },
  { key: 'nav_ambassador', view: 'ambassadors', highlight: true },
]

export function ZqNav() {
  const { t } = useLanguage()
  const { showView } = useView()
  const [open, setOpen] = useState(false)

  const go = (view: ZqView, anchor?: string) => {
    setOpen(false)
    showView(view, anchor)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[200] border-b border-zq-dark2 bg-black/90 backdrop-blur-md">
      <nav className="flex items-center justify-between gap-4 px-5 py-3 min-[900px]:px-12 min-[900px]:py-4">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="hidden items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-zq-gray transition-colors hover:text-zq-teal min-[900px]:inline-flex"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Zytrex
          </Link>
          <button
            type="button"
            onClick={() => go('landing')}
            className="flex cursor-pointer items-center"
            aria-label="ZQUENCE inicio"
          >
            <Image
              src="/zquence/zquence-logo.jpg"
              alt="ZQUENCE"
              width={2000}
              height={416}
              priority
              className="h-[26px] w-auto"
            />
          </button>
        </div>

        <ul className="hidden gap-7 min-[900px]:flex">
          {LINKS.map((l) => (
            <li key={l.key}>
              <button
                type="button"
                onClick={() => go(l.view, l.anchor)}
                className={`cursor-pointer text-[0.82rem] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-zq-teal ${
                  l.highlight
                    ? 'border border-zq-teal/40 px-2.5 py-[3px] text-zq-teal'
                    : 'text-zq-gray-light'
                }`}
              >
                {t(l.key)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ZqButton
            variant="nav"
            className="hidden sm:inline-flex"
            onClick={() => go('landing', 'pricing')}
          >
            {t('nav_cta')}
          </ZqButton>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex cursor-pointer items-center justify-center p-1 text-zq-gray-light min-[900px]:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zq-dark2 bg-black/95 min-[900px]:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <button
                key={l.key}
                type="button"
                onClick={() => go(l.view, l.anchor)}
                className={`cursor-pointer py-2 text-left text-sm font-semibold uppercase tracking-[0.15em] ${
                  l.highlight ? 'text-zq-teal' : 'text-zq-gray-light'
                }`}
              >
                {t(l.key)}
              </button>
            ))}
            <ZqButton
              variant="nav"
              className="mt-2 py-3"
              onClick={() => go('landing', 'pricing')}
            >
              {t('nav_cta')}
            </ZqButton>
            <Link
              href="/"
              className="mt-3 inline-flex items-center gap-1.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-zq-gray"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Volver a Zytrex
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
