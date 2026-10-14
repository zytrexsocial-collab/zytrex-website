'use client'

import { useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { useLanguage } from '../i18n/language-provider'
import type { TKey } from '../i18n/translations'
import { IconCheckCircle } from '../icons'
import { SectionLabel, SectionTitle } from '../ui/section'

const CONTACT_EMAIL = 'embajadores@zytrex.net'

const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'South Korea',
  'Brazil',
  'Mexico',
  'Colombia',
  'Argentina',
  'Spain',
  'Other',
]
const INSTRUMENTS = ['Guitar', 'Bass', 'Drums', 'Keys / Piano', 'Vocals', 'Other']
const PLATFORMS = ['Instagram', 'YouTube', 'TikTok', 'Facebook', 'Other']
const FOLLOWERS = ['Under 1,000', '1,000-5,000', '5,000-20,000', '20,000-100,000', '100,000+']
const LIVE = ['Yes, regularly', 'Yes, occasionally', 'Studio only', 'Teaching']
const CHECKS: TKey[] = ['form_check1', 'form_check2', 'form_check3']

const fieldClass =
  'w-full appearance-none border border-zq-dark3 bg-zq-dark2 px-4 py-[13px] text-[0.92rem] font-light text-white outline-none transition-colors placeholder:text-zq-gray focus:border-zq-teal'

function Field({ label, children }: { label: string; children: (id: string) => ReactNode }) {
  const id = useId()
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.2em] text-zq-gray">
        {label}
      </label>
      {children(id)}
    </div>
  )
}

function Select({
  id,
  name,
  options,
  required,
}: {
  id: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <select id={id} name={name} required={required} defaultValue="" className={`${fieldClass} zq-select`}>
      <option value="" disabled>
        -
      </option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  )
}

const Row = ({ children }: { children: ReactNode }) => (
  <div className="grid gap-4 min-[900px]:grid-cols-2">{children}</div>
)

export function ApplicationForm() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Igual que el original: no hay backend; al enviar se muestra el mensaje de confirmación.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="apply"
      className="zq-grid-bg relative scroll-mt-20 overflow-hidden px-5 py-[100px] min-[900px]:px-12"
      style={{ ['--zq-grid-alpha' as string]: '0.04', ['--zq-grid-size' as string]: '40px' }}
    >
      <div className="relative z-[1] mx-auto max-w-[700px]">
        <div className="mb-14 text-center">
          <SectionLabel center>{t('apply_label')}</SectionLabel>
          <SectionTitle center>{t('apply_title')}</SectionTitle>
          <p className="mt-4 text-center text-[0.92rem] leading-[1.7] text-zq-gray">{t('apply_sub')}</p>
        </div>

        {submitted ? (
          <div className="border border-zq-teal/20 bg-zq-dark2 px-10 py-[60px] text-center" role="status">
            <div className="mb-6 text-[3rem] text-zq-teal">
              <IconCheckCircle />
            </div>
            <div className="mb-3 text-[2rem] font-bold uppercase text-zq-teal">{t('success_title')}</div>
            <p className="text-[0.92rem] leading-[1.7] text-zq-gray-light">{t('success_text')}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <Row>
              <Field label={t('form_fn')}>
                {(id) => <input id={id} name="firstName" type="text" placeholder="Carlos" required className={fieldClass} />}
              </Field>
              <Field label={t('form_ln')}>
                {(id) => <input id={id} name="lastName" type="text" placeholder="Martinez" required className={fieldClass} />}
              </Field>
            </Row>
            <Field label={t('form_email')}>
              {(id) => <input id={id} name="email" type="email" placeholder="your@email.com" required className={fieldClass} />}
            </Field>
            <Row>
              <Field label={t('form_country')}>
                {(id) => <Select id={id} name="country" options={COUNTRIES} required />}
              </Field>
              <Field label={t('form_instrument')}>
                {(id) => <Select id={id} name="instrument" options={INSTRUMENTS} required />}
              </Field>
            </Row>
            <Field label={t('form_platform')}>
              {(id) => <Select id={id} name="platform" options={PLATFORMS} required />}
            </Field>
            <Field label={t('form_url')}>
              {(id) => (
                <input
                  id={id}
                  name="profileUrl"
                  type="url"
                  placeholder="https://instagram.com/yourprofile"
                  required
                  className={fieldClass}
                />
              )}
            </Field>
            <Row>
              <Field label={t('form_followers')}>
                {(id) => <Select id={id} name="followers" options={FOLLOWERS} />}
              </Field>
              <Field label={t('form_live')}>
                {(id) => <Select id={id} name="performsLive" options={LIVE} />}
              </Field>
            </Row>
            <Field label={t('form_about')}>
              {(id) => (
                <textarea
                  id={id}
                  name="about"
                  placeholder="Tell us about your music and audience..."
                  required
                  className={`${fieldClass} min-h-[100px] resize-y leading-[1.6]`}
                />
              )}
            </Field>
            <Field label={t('form_plan')}>
              {(id) => (
                <textarea
                  id={id}
                  name="promotionPlan"
                  placeholder="Posts, videos, live demos, stories..."
                  required
                  className={`${fieldClass} min-h-[100px] resize-y leading-[1.6]`}
                />
              )}
            </Field>

            {CHECKS.map((key) => (
              <label
                key={key}
                className="flex cursor-pointer items-start gap-3 border border-zq-dark3 bg-zq-dark2 px-5 py-4 transition-colors hover:border-zq-teal"
              >
                <input type="checkbox" name={key} required className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-zq-teal" />
                <span className="text-[0.82rem] leading-[1.6] text-zq-gray-light">{t(key)}</span>
              </label>
            ))}

            <button
              type="submit"
              className="mt-2 w-full cursor-pointer bg-zq-teal px-12 py-[18px] text-[1.1rem] font-bold uppercase tracking-[0.15em] text-black transition-all hover:-translate-y-0.5 hover:bg-zq-teal-dark"
            >
              {t('form_submit')}
            </button>
            <p className="mt-3.5 text-center text-[0.76rem] leading-[1.6] text-zq-gray">
              {t('form_note')}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-zq-teal">
                {CONTACT_EMAIL}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
