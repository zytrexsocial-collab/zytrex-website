'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AmbassadorsView } from './ambassadors/ambassadors-view'
import { LanguageProvider } from './i18n/language-provider'
import { LandingView } from './landing/landing-view'
import { LegalModal } from './layout/legal-modal'
import { ZqFooter } from './layout/zq-footer'
import { ZqNav } from './layout/zq-nav'
import { AMBASSADORS_HASH, ViewContext, type LegalDoc, type ZqView } from './view-context'

const viewFromHash = (hash: string): ZqView =>
  hash === AMBASSADORS_HASH ? 'ambassadors' : 'landing'

/**
 * Raíz client-side de /zquence: alterna entre Landing y Embajadores (como `showPage`
 * en el HTML original) y mantiene el hash `#embajadores` para poder compartir la URL.
 */
export function ZquenceApp() {
  const [view, setView] = useState<ZqView>('landing')
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null)
  const [legal, setLegal] = useState<LegalDoc | null>(null)

  // Vista inicial según el hash, y soporte para atrás/adelante del navegador.
  useEffect(() => {
    const sync = () => setView(viewFromHash(window.location.hash))
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const scrollToId = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const showView = useCallback((next: ZqView, anchorId?: string) => {
    setView(next)
    setPendingAnchor(anchorId ?? null)

    const hash = next === 'ambassadors' ? AMBASSADORS_HASH : ''
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash || window.location.pathname)
    }
    if (!anchorId) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // El ancla se resuelve después de que la vista nueva se haya renderizado.
  useEffect(() => {
    if (!pendingAnchor) return
    const id = window.setTimeout(() => {
      scrollToId(pendingAnchor)
      setPendingAnchor(null)
    }, 150)
    return () => window.clearTimeout(id)
  }, [pendingAnchor, view, scrollToId])

  const closeLegal = useCallback(() => setLegal(null), [])

  const ctx = useMemo(
    () => ({ view, showView, scrollToId, openLegal: setLegal }),
    [view, showView, scrollToId],
  )

  return (
    <LanguageProvider>
      <ViewContext.Provider value={ctx}>
        <ZqNav />
        <main>{view === 'landing' ? <LandingView /> : <AmbassadorsView />}</main>
        <ZqFooter />
        <LegalModal doc={legal} onClose={closeLegal} />
      </ViewContext.Provider>
    </LanguageProvider>
  )
}
