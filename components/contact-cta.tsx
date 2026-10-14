import { ArrowUpRight } from 'lucide-react'
import { AnimatedHeroBg } from './animated-hero-bg'
import { Reveal } from './reveal'

export function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 opacity-50">
        <AnimatedHeroBg />
      </div>
      <div
        aria-hidden="true"
        className="zx-aurora pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,90,31,0.18) 0%, rgba(255,90,31,0) 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 50%, rgba(8,8,10,0) 30%, var(--background) 82%)',
        }}
      />

      <div className="relative z-[2] mx-auto max-w-5xl px-5 py-32 text-center sm:px-8 md:py-48">
        <Reveal className="mb-8 font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
          [ 06 ] — Empezar a construir
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-balance text-4xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Construye algo
            <br />
            que la gente use.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-[46ch] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cuéntanos qué estás construyendo. Te daremos una opinión honesta de
            cómo lo abordaríamos — y si somos el equipo correcto para hacerlo.
          </p>
        </Reveal>
        <Reveal
          delay={200}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:info@zytrex.net"
            className="inline-flex items-center gap-2.5 bg-primary px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.06em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(255,90,31,0.4)]"
          >
            Iniciar una conversación <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:info@zytrex.net"
            className="px-3 py-4 font-mono text-sm tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground"
          >
            info@zytrex.net
          </a>
        </Reveal>
      </div>
    </section>
  )
}
