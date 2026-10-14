'use client'

import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'

/**
 * Renderiza una traducción que contiene marcado (<strong>).
 * El HTML proviene únicamente del diccionario estático `translations.ts`, nunca de entrada del usuario.
 */
export function RichText({ k, className }: { k: TKey; className?: string }) {
  const { t } = useLanguage()
  return <div className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />
}
