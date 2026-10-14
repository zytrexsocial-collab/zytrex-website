'use client'

import { Children, type ReactNode } from 'react'
import { useInView } from './use-in-view'

/**
 * Contenedor cuyos hijos aparecen escalonados al entrar en pantalla
 * (equivalente a `.stagger` del HTML original).
 */
export function Stagger({
  children,
  className = '',
  itemClassName = '',
  step = 100,
}: {
  children: ReactNode
  className?: string
  itemClassName?: string
  step?: number
}) {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={className} data-in={inView}>
      {Children.toArray(children).map((child, i) => (
        <div
          key={i}
          className={itemClassName}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(20px)',
            transition: `opacity .5s cubic-bezier(.22,1,.36,1) ${50 + i * step}ms, transform .5s cubic-bezier(.22,1,.36,1) ${50 + i * step}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
