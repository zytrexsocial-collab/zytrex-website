import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { ConsoleStrip } from '@/components/console-strip'
import { Capabilities } from '@/components/capabilities'
import { Approach } from '@/components/approach'
import { Process } from '@/components/process'
import { Technology } from '@/components/technology'
import { Products } from '@/components/products'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen scroll-smooth bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <ConsoleStrip />
        <Capabilities />
        <Approach />
        <Process />
        <Technology />
        <Products />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
