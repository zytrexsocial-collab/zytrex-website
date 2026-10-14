import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Zytrex — De la idea al nivel Z',
  description:
    'Zytrex es un estudio de producto digital. Diseñamos, construimos y escalamos software y apps móviles listas para mercado. Flutter, Firebase, React y Next.js.',
  generator: 'v0.app',
  keywords: [
    'Zytrex',
    'desarrollo de apps',
    'desarrollo de software',
    'Flutter',
    'estudio de producto',
    'apps móviles',
  ],
  openGraph: {
    title: 'Zytrex — De la idea al nivel Z',
    description:
      'Estudio de producto digital. Software y apps móviles listas para mercado.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08080a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
