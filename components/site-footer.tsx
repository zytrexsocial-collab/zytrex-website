import { ZMark } from './z-mark'

const COLS = [
  {
    title: 'Estudio',
    links: [
      { href: '#capabilities', label: 'Capacidades' },
      { href: '#approach', label: 'Enfoque' },
      { href: '#work', label: 'Productos' },
      { href: '/zquence', label: 'ZQUENCE' },
    ],
  },
  {
    title: 'Conectar',
    links: [
      { href: 'mailto:info@zytrex.net', label: 'info@zytrex.net' },
      { href: '#contact', label: 'LinkedIn' },
      { href: '#contact', label: 'X / Twitter' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="mb-14 flex flex-wrap justify-between gap-12">
          <div className="max-w-[34ch]">
            <div className="mb-5 flex items-center gap-3">
              <ZMark className="h-6 w-6" />
              <span className="text-lg font-bold tracking-[0.38em] pl-[0.38em]">
                ZYTREX
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Un estudio de producto móvil. Lanzamos nuestras propias apps — y
              las tuyas.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 font-mono sm:gap-20">
            {COLS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <div className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  {col.title}
                </div>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[13px] text-foreground/65 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-border pt-7 font-mono text-[11px] tracking-[0.1em] text-muted-foreground/60">
          <span>© MMXXVI ZYTREX — CONSTRUIDO EN COSTA RICA</span>
          <span>ENVIADO AL MUNDO</span>
        </div>
      </div>
    </footer>
  )
}
