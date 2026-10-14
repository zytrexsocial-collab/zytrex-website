import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedHeroBg } from './animated-hero-bg'
import { Reveal } from './reveal'

const TILES = [
  { src: '/images/hero-app.png', tag: 'Z / APPS', alt: 'Desarrollo de apps móviles' },
  { src: '/images/studio-team.png', tag: 'Z / SOFTWARE', alt: 'Ingeniería de software' },
  { src: '/images/product-retail.png', tag: 'Z / GROWTH', alt: 'Producto y crecimiento' },
]

const STATS = [
  { k: 'Plataforma', v: 'Flutter · Firebase' },
  { k: 'Productos', v: 'En mercado · En dev' },
  { k: 'Mercados', v: '11 países' },
  { k: 'Enfoque', v: 'Mobile First' },
]

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedHeroBg />

      {/* animated aurora glows */}
      <div
        aria-hidden="true"
        className="zx-aurora pointer-events-none absolute -left-[12%] -top-[20%] z-0 h-[54vw] w-[54vw] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,90,31,0.28) 0%, rgba(255,90,31,0) 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="zx-aurora pointer-events-none absolute -right-[14%] -bottom-[28%] z-0 h-[58vw] w-[58vw] rounded-full blur-3xl"
        style={{
          animationDirection: 'reverse',
          background:
            'radial-gradient(circle, rgba(87,195,255,0.16) 0%, rgba(87,195,255,0) 72%)',
        }}
      />

      {/* giant ghost Z */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 select-none font-bold leading-[0.8] text-foreground/[0.04]"
        style={{ fontSize: 'min(58vw, 640px)' }}
      >
        Z
      </div>

      {/* vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(130% 100% at 50% 50%, rgba(8,8,10,0) 38%, rgba(8,8,10,0.55) 74%, var(--background) 100%)',
        }}
      />

      <div className="relative z-[2] mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="flex items-center gap-2.5">
            <span className="zx-blink h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--signal)]" />
            Fig.01 — Signal / Nominal
          </span>
          <span className="hidden sm:inline">Estudio de Producto Móvil</span>
          <span className="text-muted-foreground/60">9.9330°N · 84.0833°W</span>
        </Reveal>

        <h1 className="text-balance font-bold uppercase leading-[0.86] tracking-[-0.05em] text-[clamp(3rem,10.5vw,11rem)]">
          <Reveal as="span" className="block">
            De la idea
          </Reveal>
          <Reveal as="span" delay={90} className="block text-foreground/40">
            al <span className="text-primary">nivel Z.</span>
          </Reveal>
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <Reveal delay={140}>
            <p className="max-w-[52ch] text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
              Zytrex transforma visiones en productos digitales listos para
              mercado. Diseñamos, construimos y escalamos software y apps con una
              sola obsesión: llegar a una versión que la gente realmente quiera
              usar.
            </p>
          </Reveal>
          <Reveal delay={200} className="flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-primary px-6 py-4 font-mono text-[13px] font-bold uppercase tracking-[0.06em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,90,31,0.34)]"
            >
              Iniciar proyecto <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 border border-border px-6 py-4 font-mono text-[13px] uppercase tracking-[0.06em] transition-colors hover:border-foreground/45 hover:bg-foreground/[0.03]"
            >
              Nuestros productos
            </a>
          </Reveal>
        </div>

        {/* image tiles */}
        <Reveal delay={120} className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {TILES.map((t, i) => (
            <div
              key={t.tag}
              className="zx-float relative h-32 overflow-hidden border border-border sm:h-36"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <Image
                src={t.src || '/placeholder.svg'}
                alt={t.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover [filter:grayscale(0.15)_contrast(1.1)]"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-background/75 px-2 py-1.5 font-mono text-[10px] tracking-[0.14em]">
                {t.tag}
              </span>
            </div>
          ))}
        </Reveal>

        {/* stat strip */}
        <Reveal delay={160} className="mt-14 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.k} className="bg-background p-5">
              <div className="mb-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.k}
              </div>
              <div className="text-sm text-foreground/85">{s.v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  )
}
