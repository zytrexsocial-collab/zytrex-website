import Image from 'next/image'
import { Reveal } from './reveal'

const STANDARDS = [
  {
    id: 'STD.01',
    title: 'Lanzar para aprender',
    body: 'Lo más peligroso en software es el producto que solo existe en planificación. Construimos en ciclos cortos, ponemos cosas reales frente a usuarios reales temprano y ajustamos desde ahí.',
  },
  {
    id: 'STD.02',
    title: 'Multiplataforma con alma nativa',
    body: 'Flutter significa un equipo, un codebase, iOS y Android — sin sacrificar cómo se siente la app en la mano. Hemos construido y mantenido apps Flutter en producción. Funciona.',
  },
  {
    id: 'STD.03',
    title: 'El rendimiento es el producto',
    body: 'ZQUENCE corre en vivo sobre el escenario. Un tirón frente a una audiencia no es opción. Ese mismo estándar aplica a todo lo que construimos — tus usuarios sienten cada 100 milisegundos.',
  },
  {
    id: 'STD.04',
    title: 'Diseño e ingeniería como uno',
    body: 'No entregamos un archivo de Figma y damos el diseño por terminado. Las decisiones de interfaz son decisiones de ingeniería. Las tomamos juntos, desde el primer wireframe hasta el último píxel.',
  },
  {
    id: 'STD.05',
    title: 'Código que leeremos en dos años',
    body: 'Mantenemos nuestros propios productos mucho después del lanzamiento. Eso significa escribir código del que no nos arrepentiremos — arquitectura limpia, flujos documentados, sin atajos.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal className="max-w-[64ch]">
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
              [ 02 ] El Enfoque
            </div>
            <h2 className="text-balance text-3xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Construimos nuestros propios productos. Eso cambia cómo
              construimos el tuyo.
            </h2>
          </Reveal>
          <Reveal delay={120} className="relative min-h-56 overflow-hidden border border-border">
            <Image
              src="/images/hero-app.png"
              alt="App móvil construida por Zytrex"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover [filter:contrast(1.08)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.16em] text-foreground/80">
              ADN ZYTREX
            </span>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-border">
          {STANDARDS.map((s) => (
            <Reveal key={s.id}>
              <div className="grid items-baseline gap-4 border-b border-border py-7 transition-colors hover:bg-foreground/[0.02] sm:grid-cols-[80px_minmax(180px,1fr)_2fr] sm:gap-10 sm:py-10">
                <div className="font-mono text-xs text-primary">{s.id}</div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl lg:text-3xl">
                  {s.title}
                </h3>
                <p className="max-w-[54ch] text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
