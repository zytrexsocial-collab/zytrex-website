import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

type Product = {
  case: string
  category: string
  title: string
  body: string
  img: string
  alt: string
  /** Ruta interna del producto; si no existe, la tarjeta lleva a contacto. */
  href?: string
  stats?: { v: string; k: string }[]
}

const PRODUCTS: Product[] = [
  {
    case: 'CASE / 01',
    category: 'Música / En vivo',
    title: 'Un reproductor de pistas hecho para el escenario.',
    body: 'Los músicos conectan su teléfono a la consola con un solo cable — click track a sus oídos, mezcla limpia al público. Sin laptop, sin interfaz de audio.',
    img: '/images/product-stage.png',
    alt: 'App de pistas para escenario en vivo',
    href: '/zquence',
    stats: [
      { v: '11', k: 'Mercados' },
      { v: '7', k: 'Idiomas' },
    ],
  },
  {
    case: 'CASE / 02',
    category: 'Retail / Ops',
    title: 'Inventario, pedidos y pagos en un solo flujo.',
    body: 'App operativa para equipos comerciales con dashboard en tiempo real, control de stock y sincronización multi-sucursal.',
    img: '/images/product-retail.png',
    alt: 'Sistema de gestión retail',
  },
  {
    case: 'CASE / 03',
    category: 'Salud / Móvil',
    title: 'Rutinas, seguimiento y coaching en la palma de la mano.',
    body: 'Producto mobile-first para bienestar personal con métricas, recordatorios inteligentes y experiencias de alta retención.',
    img: '/images/product-health.png',
    alt: 'Aplicación de salud y bienestar',
  },
]

export function Products() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
      <Reveal className="mb-14 max-w-[60ch]">
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
          [ 05 ] Nuestros Productos
        </div>
        <h2 className="text-balance text-3xl font-bold uppercase leading-none tracking-[-0.04em] sm:text-5xl">
          Productos construidos con ADN Zytrex.
        </h2>
      </Reveal>

      <div className="flex flex-col gap-4">
        {PRODUCTS.map((p) => (
          <Reveal key={p.case}>
            <Link
              href={p.href ?? '#contact'}
              className="group relative grid overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.55)] lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="flex min-h-[300px] flex-col justify-between p-8 sm:p-12">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
                  <span className="text-muted-foreground/60">{p.case}</span>
                  <span className="text-primary">{p.category}</span>
                </div>
                <div>
                  <h3 className="mb-3.5 max-w-[18ch] text-balance text-2xl font-semibold tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mb-7 max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                  <div className="flex items-center gap-10 font-mono">
                    {p.stats?.map((s) => (
                      <div key={s.k}>
                        <div className="text-3xl font-bold tracking-[-0.02em] font-sans">
                          {s.v}
                        </div>
                        <div className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground/60">
                          {s.k}
                        </div>
                      </div>
                    ))}
                    <span className="ml-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary">
                      {p.href ? 'Ver producto' : 'Ver caso'} <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[260px] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 [filter:contrast(1.08)]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/50 to-transparent" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
