import { Ticker } from '../ui/ticker'
import { AmbassadorHero } from './ambassador-hero'
import { ApplicationForm } from './application-form'
import { Benefits } from './benefits'
import { Commitments } from './commitments'
import { Contact } from './contact'
import { Faq } from './faq'
import { Requirements } from './requirements'
import { Tiers } from './tiers'

export function AmbassadorsView() {
  return (
    <>
      <AmbassadorHero />
      <Ticker items={['atick1', 'atick2', 'atick3', 'atick4', 'atick5', 'atick6']} />
      <Benefits />
      <Tiers />
      <Commitments />
      <Requirements />
      <ApplicationForm />
      <Faq />
      <Contact />
    </>
  )
}
