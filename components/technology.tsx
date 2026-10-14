import { Reveal } from './reveal'

const BOM = [
  { id: 'BOM.01', k: 'Lenguajes', v: 'Dart · TypeScript · Python · Swift · Kotlin' },
  { id: 'BOM.02', k: 'Frameworks', v: 'Flutter · React · Next.js · Node.js · Firebase' },
  { id: 'BOM.03', k: 'Móvil', v: 'RevenueCat · Firebase Auth · Firestore · Push · In-App Billing' },
  { id: 'BOM.04', k: 'Herramientas', v: 'GitHub · Figma · Xcode · Android Studio · App Store Connect' },
  { id: 'BOM.05', k: 'Deploy', v: 'Vercel · Netlify · Cloud Functions · Firebase Hosting' },
]

const MARQUEE = [
  'Flutter', 'Dart', 'Firebase', 'React', 'Next.js', 'TypeScript', 'RevenueCat',
  'Firestore', 'Node.js', 'Swift', 'Kotlin', 'Python', 'Figma',
]

export function Technology() {
  return (
    <section id="technology" className="relative border-t border-border bg-card/40">
      {/* tech marquee */}
      <div className="overflow-hidden border-b border-border py-4">
        <div className="zx-marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="flex items-center gap-10">
              {m}
              <span className="text-primary">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
              [ 04 ] Tecnología
            </div>
            <h2 className="max-w-[18ch] text-balance text-3xl font-bold leading-none tracking-[-0.04em] sm:text-5xl">
              Tecnología con criterio: todo suma a la Z.
            </h2>
          </div>
          <p className="max-w-[32ch] font-mono text-sm leading-relaxed text-muted-foreground">
            Herramientas que elegimos porque las usamos en nuestros propios
            productos — no porque sonaban bien en una propuesta.
          </p>
        </Reveal>

        <div className="border-t border-border font-mono">
          {BOM.map((row) => (
            <Reveal key={row.id}>
              <div className="grid items-center gap-3 border-b border-border px-1 py-5 transition-colors hover:bg-foreground/[0.02] sm:grid-cols-[64px_minmax(110px,1fr)_3fr] sm:gap-12">
                <span className="text-[11px] text-muted-foreground/60">{row.id}</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-primary">
                  {row.k}
                </span>
                <span className="font-sans text-base tracking-[-0.01em] text-foreground/85">
                  {row.v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
