'use client'

import { useEffect, useRef, useState } from 'react'
import { LANGS, useLanguage } from '../i18n/language-provider'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative inline-flex items-center">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Idioma"
        className="flex cursor-pointer items-center gap-1.5 rounded-md border border-[#2a2a2a] bg-black/50 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-zq-gray transition-colors hover:border-[#444] hover:text-white"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{lang.toUpperCase()}</span>
        <span
          className={`text-[0.6rem] opacity-50 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      <ul
        role="listbox"
        aria-label="Idioma"
        className={`absolute right-0 top-[calc(100%+6px)] z-[400] min-w-[140px] rounded-lg border border-[#222] bg-zq-dark2 p-1 transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        {LANGS.map((l) => (
          <li key={l.code} role="option" aria-selected={l.code === lang}>
            <button
              type="button"
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className={`flex w-full cursor-pointer items-center gap-2 rounded-[5px] px-2.5 py-[7px] text-left text-xs font-medium tracking-[0.08em] transition-colors hover:bg-zq-dark3 hover:text-white ${
                l.code === lang ? 'text-zq-teal' : 'text-zq-gray'
              }`}
            >
              <span className="text-[13px] leading-none">{l.flag}</span>
              <span className="flex-1">{l.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
