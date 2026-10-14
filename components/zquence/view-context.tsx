'use client'

import { createContext, useContext } from 'react'

export type ZqView = 'landing' | 'ambassadors'

export const AMBASSADORS_HASH = '#embajadores'

type ViewContextValue = {
  view: ZqView
  /** Cambia de vista y hace scroll arriba, o hasta `anchorId` si se indica. */
  showView: (view: ZqView, anchorId?: string) => void
  /** Hace scroll suave hasta un id dentro de la vista actual. */
  scrollToId: (id: string) => void
  openLegal: (doc: LegalDoc) => void
}

export type LegalDoc = 'privacy' | 'terms'

export const ViewContext = createContext<ViewContextValue | null>(null)

export function useView() {
  const ctx = useContext(ViewContext)
  if (!ctx) throw new Error('useView must be used within ZquenceApp')
  return ctx
}
