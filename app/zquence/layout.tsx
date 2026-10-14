import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '@/components/zquence/zquence.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ZQUENCE — La app de pistas hecha para el escenario',
  description:
    'ZQUENCE conecta tu celular directo a la consola con un cable 3.5mm a doble 1/4". Click a tus oídos, mezcla completa al público. Sin laptop, sin interfaz.',
  openGraph: {
    title: 'ZQUENCE — La app de pistas hecha para el escenario',
    description: 'Toca en vivo con tu banda completa desde tu celular. Prueba gratis 7 días.',
    type: 'website',
  },
}

export default function ZquenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`zq ${spaceGrotesk.variable} min-h-screen overflow-x-hidden bg-black font-zq font-light text-white`}
    >
      {children}
    </div>
  )
}
