'use client'

import { useEffect } from 'react'
import type { LegalDoc } from '../view-context'
import { PrivacyPolicy, TermsOfService } from './legal-content'

export function LegalModal({ doc, onClose }: { doc: LegalDoc | null; onClose: () => void }) {
  useEffect(() => {
    if (!doc) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [doc, onClose])

  if (!doc) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/85 px-5 py-10 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={doc === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        className="zq-legal relative w-full max-w-[760px] rounded-lg border border-[#222] bg-zq-dark2 p-7 leading-[1.7] text-[#b0b0b0] sm:p-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-6 top-5 cursor-pointer text-[28px] leading-none text-[#666] transition-colors hover:text-zq-teal"
        >
          &times;
        </button>
        {doc === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />}
      </div>
    </div>
  )
}
