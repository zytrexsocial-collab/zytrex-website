import { Ticker } from '../ui/ticker'
import { ComparisonTable } from './comparison-table'
import { Features } from './features'
import { FinalCta } from './final-cta'
import { Hero } from './hero'
import { HowItWorks } from './how-it-works'
import { PainPoints } from './pain-points'
import { Pricing } from './pricing'
import { Testimonials } from './testimonials'

export function LandingView() {
  return (
    <>
      <Hero />
      <Ticker items={['tick1', 'tick2', 'tick3', 'tick4', 'tick5', 'tick6', 'tick7']} />
      <PainPoints />
      <HowItWorks />
      <Features />
      <ComparisonTable />
      <Pricing />
      <Testimonials />
      <FinalCta />
    </>
  )
}
