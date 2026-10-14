'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { ZMark } from './z-mark'

const LINKS = [
  { href: '#capabilities', label: 'Capacidades' },
  { href: '#approach', label: 'Enfoque' },
  { href: '#process', label: 'Proceso' },
  { href: '#work', label: 'Productos' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/75 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Zytrex inicio">
          <ZMark className="h-7 w-7" />
          <span className="text-sm font-bold tracking-[0.42em] pl-[0.42em]">
            ZYTREX
          </span>
        </a>

        <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/zquence"
            className="inline-flex items-center gap-1 text-primary transition-colors hover:text-foreground"
          >
            ZQUENCE <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 border border-border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
        >
          Iniciar proyecto <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/zquence"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 py-2 font-mono text-sm uppercase tracking-[0.14em] text-primary"
            >
              ZQUENCE <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground"
            >
              Iniciar proyecto <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
