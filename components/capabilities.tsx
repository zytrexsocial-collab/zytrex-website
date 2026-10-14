'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

type Cap = {
  id: string
  name: string
  tag: string
  desc: string
  specs: string[]
}

const CAPS: Cap[] = [
  {
    id: 'C-01',
    name: 'Apps Móviles',
    tag: 'Core',
    desc: 'iOS y Android de grado nativo construidos en Flutter. Un codebase, dos plataformas, sin compromisos en rendimiento o experiencia.',
    specs: ['Flutter / Dart multiplataforma', 'iOS y Android simultáneamente', 'App Store y Play Store'],
  },
  {
    id: 'C-02',
    name: 'SaaS y Suscripciones',
    tag: 'Producto',
    desc: 'Productos de suscripción con paywalls, pruebas y facturación desde el inicio — no agregados después.',
    specs: ['Integración RevenueCat', 'Flujos de prueba y paywalls', 'Analítica de suscripción'],
  },
  {
    id: 'C-03',
    name: 'Apps de Negocio',
    tag: 'Plataforma',
    desc: 'Herramientas que reemplazan la hoja de cálculo: agenda, gestión de clientes, finanzas — todo en un lugar.',
    specs: ['Citas y agenda', 'Flujos de facturación', 'Dashboards para clientes'],
  },
  {
    id: 'C-04',
    name: 'Desarrollo Web',
    tag: 'Web',
    desc: 'Sitios y apps web al mismo estándar que nuestros productos móviles — rápidos, claros y construidos para convertir.',
    specs: ['Landing pages y sitios', 'Apps web y portales', 'CMS e integración backend'],
  },
  {
    id: 'C-05',
    name: 'Diseño de Producto',
    tag: 'Diseño',
    desc: 'Interfaz e ingeniería diseñadas juntas — no una entregada a la otra. Las decisiones de interfaz son decisiones de ingeniería.',
    specs: ['Flujos UX y wireframes', 'Sistemas de diseño UI', 'Del prototipo a producción'],
  },
  {
    id: 'C-06',
    name: 'Integraciones y APIs',
    tag: 'Conectar',
    desc: 'Conectando tu producto a los servicios que necesita — pagos, auth, datos en tiempo real, notificaciones.',
    specs: ['Firebase y Firestore', 'APIs de pago y suscripción', 'Sincronización y push'],
  },
]

function Diagram({ i }: { i: number }) {
  const c = 'var(--signal)'
  const w = 'rgba(242,242,238,0.55)'
  const common = { fill: 'none', strokeWidth: 1 }
  let kids: React.ReactNode = null
  if (i === 0)
    kids = (
      <>
        <rect x={50} y={30} width={100} height={80} stroke={w} {...common} />
        <rect x={35} y={18} width={130} height={104} stroke={c} {...common} />
        <rect x={65} y={42} width={70} height={56} stroke={w} {...common} />
        <line x1={50} y1={70} x2={150} y2={70} stroke={w} strokeWidth={1} />
      </>
    )
  else if (i === 1)
    kids = (
      <>
        <rect x={30} y={28} width={140} height={24} stroke={w} {...common} />
        <rect x={30} y={62} width={140} height={24} stroke={c} {...common} />
        <rect x={30} y={96} width={140} height={24} stroke={w} {...common} />
        <circle cx={48} cy={40} r={4} stroke={c} {...common} />
        <circle cx={48} cy={74} r={4} stroke={w} {...common} />
        <circle cx={48} cy={108} r={4} stroke={c} {...common} />
      </>
    )
  else if (i === 2)
    kids = (
      <>
        <rect x={74} y={18} width={52} height={104} rx={8} stroke={c} {...common} />
        <line x1={74} y1={34} x2={126} y2={34} stroke={w} strokeWidth={1} />
        <line x1={74} y1={106} x2={126} y2={106} stroke={w} strokeWidth={1} />
        <circle cx={100} cy={96} r={5} stroke={w} {...common} />
      </>
    )
  else if (i === 3)
    kids = (
      <>
        <circle cx={100} cy={70} r={12} stroke={c} {...common} />
        <circle cx={46} cy={38} r={7} stroke={w} {...common} />
        <circle cx={154} cy={38} r={7} stroke={w} {...common} />
        <circle cx={46} cy={102} r={7} stroke={w} {...common} />
        <circle cx={154} cy={102} r={7} stroke={w} {...common} />
        <line x1={100} y1={70} x2={46} y2={38} stroke={w} strokeWidth={1} />
        <line x1={100} y1={70} x2={154} y2={38} stroke={w} strokeWidth={1} />
        <line x1={100} y1={70} x2={46} y2={102} stroke={w} strokeWidth={1} />
        <line x1={100} y1={70} x2={154} y2={102} stroke={w} strokeWidth={1} />
      </>
    )
  else if (i === 4)
    kids = (
      <>
        <rect x={28} y={52} width={40} height={36} stroke={w} {...common} />
        <rect x={80} y={52} width={40} height={36} stroke={c} {...common} />
        <rect x={132} y={52} width={40} height={36} stroke={w} {...common} />
        <path d="M64 66 l6 4 l-6 4" stroke={c} fill="none" strokeWidth={1} />
        <path d="M116 66 l6 4 l-6 4" stroke={c} fill="none" strokeWidth={1} />
      </>
    )
  else
    kids = (
      <>
        <circle cx={78} cy={64} r={22} stroke={w} {...common} />
        <circle cx={112} cy={58} r={28} stroke={c} {...common} />
        <circle cx={132} cy={74} r={18} stroke={w} {...common} />
        <line x1={40} y1={100} x2={160} y2={100} stroke={w} strokeWidth={1} />
        <line x1={56} y1={100} x2={56} y2={112} stroke={w} strokeWidth={1} />
        <line x1={100} y1={100} x2={100} y2={112} stroke={w} strokeWidth={1} />
        <line x1={144} y1={100} x2={144} y2={112} stroke={w} strokeWidth={1} />
      </>
    )
  return (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 200 140"
      style={{ maxWidth: 240, overflow: 'visible' }}
      aria-hidden="true"
    >
      {kids}
    </svg>
  )
}

export function Capabilities() {
  const [active, setActive] = useState(0)
  const cap = CAPS[active]

  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-5">
        <div>
          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
            [ 01 ] Capacidades
          </div>
          <h2 className="text-balance text-3xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl">
            Z-Stack digital. De extremo a extremo.
          </h2>
        </div>
        <p className="max-w-[34ch] font-mono text-sm leading-relaxed text-muted-foreground">
          Una sola célula de producto: estrategia, diseño, código y lanzamiento
          coordinados en una misma ruta.
        </p>
      </Reveal>

      <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* index list */}
        <div className="border-t border-border">
          {CAPS.map((c, i) => {
            const on = i === active
            return (
              <button
                key={c.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="relative flex w-full items-center gap-5 border-b border-border px-1 py-5 text-left sm:py-7"
              >
                {on && (
                  <span className="absolute -left-3 top-1/2 h-[60%] w-[5px] -translate-y-1/2 bg-primary" />
                )}
                <span
                  className="min-w-[42px] font-mono text-xs tracking-[0.1em] transition-colors"
                  style={{ color: on ? 'var(--signal)' : 'rgba(242,242,238,0.4)' }}
                >
                  {c.id}
                </span>
                <span
                  className="flex-1 text-2xl font-semibold tracking-[-0.03em] transition-colors sm:text-[2.1rem]"
                  style={{ color: on ? 'var(--foreground)' : 'rgba(242,242,238,0.45)' }}
                >
                  {c.name}
                </span>
                <span
                  className="font-mono text-sm text-primary transition-opacity"
                  style={{ opacity: on ? 1 : 0 }}
                >
                  →
                </span>
              </button>
            )
          })}
        </div>

        {/* sticky preview */}
        <div className="lg:sticky lg:top-24">
          <div className="relative flex min-h-[440px] flex-col justify-between border border-border bg-gradient-to-br from-card to-background p-6 sm:p-10">
            <div className="relative -mx-6 -mt-6 mb-5 overflow-hidden border-b border-border sm:-mx-10 sm:-mt-10">
              <div className="relative h-32 w-full">
                <Image
                  src="/images/studio-team.png"
                  alt="Equipo Zytrex construyendo producto"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover opacity-75"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <span className="absolute bottom-2.5 left-3.5 font-mono text-[10px] tracking-[0.14em]">
                Z CAPABILITY PREVIEW
              </span>
            </div>

            {/* corner ticks */}
            {['left-2.5 top-2.5 border-l border-t', 'right-2.5 top-2.5 border-r border-t', 'left-2.5 bottom-2.5 border-l border-b', 'right-2.5 bottom-2.5 border-r border-b'].map(
              (pos) => (
                <span key={pos} className={`absolute h-2.5 w-2.5 border-primary ${pos}`} />
              ),
            )}

            <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>{cap.id} / Schematic</span>
              <span className="text-primary">{cap.tag}</span>
            </div>

            <div className="flex min-h-[170px] flex-1 items-center justify-center py-5">
              <Diagram i={active} />
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                {cap.name}
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground">
                {cap.desc}
              </p>
              <div className="flex flex-col gap-2">
                {cap.specs.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.02em] text-foreground/65"
                  >
                    <Plus className="h-3 w-3 text-primary" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
