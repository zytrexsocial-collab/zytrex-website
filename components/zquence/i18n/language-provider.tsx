'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { CYCLE_WORDS, TRANSLATIONS, type Lang, type TKey } from './translations'

export const LANGS: { code: Lang; flag: string; name: string }[] = [
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'pt', flag: '🇧🇷', name: 'Português' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'ko', flag: '🇰🇷', name: '한국어' },
]

const DEFAULT_LANG: Lang = 'es'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TKey) => string
  cycleWords: readonly string[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLang(value: string): value is Lang {
  return value in TRANSLATIONS
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // El SSR siempre arranca en español; el idioma del navegador se aplica tras montar
  // para no provocar diferencias de hidratación.
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG)

  useEffect(() => {
    const browser = navigator.language.slice(0, 2)
    if (isLang(browser)) setLang(browser)
  }, [])

  useEffect(() => {
    const prev = document.documentElement.lang
    document.documentElement.lang = lang
    return () => {
      document.documentElement.lang = prev
    }
  }, [lang])

  const t = useCallback(
    (key: TKey) => TRANSLATIONS[lang][key] ?? TRANSLATIONS.en[key] ?? key,
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, t, cycleWords: CYCLE_WORDS[lang] }),
    [lang, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
