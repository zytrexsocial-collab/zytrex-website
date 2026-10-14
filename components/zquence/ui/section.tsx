import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function ZqSection({
  id,
  dark = false,
  className = '',
  children,
}: {
  id?: string
  dark?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-[100px] min-[900px]:px-12 ${dark ? 'bg-zq-dark' : ''} ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionLabel({
  children,
  center = false,
}: {
  children: ReactNode
  center?: boolean
}) {
  return (
    <Reveal>
      <div
        className={`zq-label mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-zq-teal ${center ? 'justify-center' : ''}`}
      >
        {children}
      </div>
    </Reveal>
  )
}

export function SectionTitle({
  children,
  center = false,
}: {
  children: ReactNode
  center?: boolean
}) {
  return (
    <Reveal>
      <h2
        className={`text-[clamp(2.2rem,4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] ${center ? 'text-center' : 'max-w-[700px]'}`}
      >
        {children}
      </h2>
    </Reveal>
  )
}

export function SectionHeading({
  label,
  title,
  center = false,
}: {
  label: ReactNode
  title: ReactNode
  center?: boolean
}) {
  return (
    <>
      <SectionLabel center={center}>{label}</SectionLabel>
      <SectionTitle center={center}>{title}</SectionTitle>
    </>
  )
}
