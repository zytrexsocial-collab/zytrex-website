'use client'

import { useEffect, useRef } from 'react'

/**
 * Animated particle network background for the hero.
 * Particles drift, connect with thin lines, and gently react to the pointer.
 * Tuned to the brand: cool dim dots with occasional warm "signal" nodes.
 */
export function AnimatedHeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let w = 0
    let h = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }

    type P = { x: number; y: number; vx: number; vy: number; r: number; hot: boolean }
    let particles: P[] = []

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(96, Math.floor((w * h) / 14000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.6 + 0.6,
        hot: Math.random() < 0.12,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const linkDist = Math.min(150, w / 8)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // subtle pointer attraction
        const dxm = mouse.x - p.x
        const dym = mouse.y - p.y
        const dm = Math.hypot(dxm, dym)
        if (dm < 160) {
          p.x += (dxm / dm) * 0.25
          p.y += (dym / dm) * 0.25
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d = Math.hypot(dx, dy)
          if (d < linkDist) {
            const a = (1 - d / linkDist) * 0.18
            ctx.strokeStyle = `rgba(242,242,238,${a})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        if (p.hot) {
          ctx.fillStyle = 'rgba(255,90,31,0.9)'
          ctx.shadowColor = 'rgba(255,90,31,0.8)'
          ctx.shadowBlur = 8
        } else {
          ctx.fillStyle = 'rgba(242,242,238,0.5)'
          ctx.shadowBlur = 0
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    build()
    if (reduce) {
      draw()
      cancelAnimationFrame(raf)
      // single static frame
    } else {
      draw()
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseleave', onLeave)
    }
    window.addEventListener('resize', build)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', build)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full"
    />
  )
}
