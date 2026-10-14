import type { ReactNode } from 'react'

const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="mb-2 text-[2rem] font-bold text-white">{children}</h1>
)
const LegalDate = ({ children }: { children: ReactNode }) => (
  <p className="mb-8 text-[0.85rem] text-[#555]">{children}</p>
)
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-2.5 mt-7 text-[1.1rem] font-bold text-[#e0e0e0]">{children}</h2>
)
const P = ({ children }: { children: ReactNode }) => <p className="mb-3.5">{children}</p>
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mb-3.5 list-disc pl-5 [&>li]:mb-1.5">{children}</ul>
)
const Divider = () => <hr className="my-8 border-t border-[#222]" />
const Mail = ({ to }: { to: string }) => (
  <a href={`mailto:${to}`} className="text-zq-teal hover:underline">
    {to}
  </a>
)
const Contact = () => (
  <P>
    Zytrex S.R.L. · 3-102-958706 S.R.L. · Costa Rica
    <br />
    Email: <Mail to="info@zytrex.net" />
  </P>
)

export function PrivacyPolicy() {
  return (
    <>
      <H1>Privacy Policy</H1>
      <LegalDate>Last updated: June 2025</LegalDate>
      <P>
        Zytrex S.R.L. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates ZQUENCE, a
        backing track player application for live musicians. This Privacy Policy explains how we
        collect, use, and protect your information when you use our app or visit zytrex.net.
      </P>
      <Divider />

      <H2>1. Information We Collect</H2>
      <UL>
        <li>
          <strong>Account data:</strong> Email address and display name, collected when you sign
          in via Google Sign-In or Sign in with Apple.
        </li>
        <li>
          <strong>Audio files:</strong> Backing track files you upload to the app, stored in your
          personal library.
        </li>
        <li>
          <strong>Usage data:</strong> App interactions, session duration, and feature usage
          (collected anonymously to improve the product).
        </li>
        <li>
          <strong>Payment data:</strong> Subscription transactions are processed by Google Play,
          the Apple App Store or the Microsoft Store. We do not store payment card details.
        </li>
      </UL>

      <H2>2. How We Use Your Information</H2>
      <UL>
        <li>To provide and maintain the ZQUENCE app and your personal library.</li>
        <li>To manage your subscription and billing through our payments provider.</li>
        <li>To send you service-related emails (account confirmation, billing receipts).</li>
        <li>To improve the app based on aggregated usage analytics.</li>
      </UL>

      <H2>3. Third-Party Services</H2>
      <P>
        ZQUENCE integrates with the following services, each governed by their own privacy
        policies:
      </P>
      <UL>
        <li>
          <strong>Firebase (Google LLC)</strong> — authentication and cloud data storage.
        </li>
        <li>
          <strong>RevenueCat</strong> — subscription management and analytics.
        </li>
        <li>
          <strong>Google Play / Apple App Store / Microsoft Store</strong> — payment processing.
        </li>
      </UL>

      <H2>4. Data Retention</H2>
      <P>
        We retain your account data and uploaded files for as long as your account is active. You
        may delete your account and associated data at any time by contacting us at{' '}
        <Mail to="info@zytrex.net" />.
      </P>

      <H2>5. Data Security</H2>
      <P>
        We use industry-standard measures to protect your data, including encrypted connections
        (HTTPS/TLS) and access controls on cloud infrastructure. No method of transmission over the
        internet is 100% secure, but we work to protect your information to the best of our
        ability.
      </P>

      <H2>6. Children&apos;s Privacy</H2>
      <P>
        ZQUENCE is not directed at children under 13. We do not knowingly collect personal
        information from children under 13.
      </P>

      <H2>7. Your Rights</H2>
      <P>
        Depending on your location, you may have rights to access, correct, or delete your
        personal data. To exercise these rights, contact us at <Mail to="info@zytrex.net" />.
      </P>

      <H2>8. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy periodically. We will notify you of material changes via
        the app or email. Continued use of ZQUENCE after changes constitutes acceptance.
      </P>

      <H2>9. Contact</H2>
      <Contact />
    </>
  )
}

export function TermsOfService() {
  return (
    <>
      <H1>Terms of Service</H1>
      <LegalDate>Last updated: June 2025</LegalDate>
      <P>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of ZQUENCE,
        operated by Zytrex S.R.L. (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;). By
        downloading or using ZQUENCE you agree to these Terms.
      </P>
      <Divider />

      <H2>1. Description of Service</H2>
      <P>
        ZQUENCE is a mobile application for Android, iOS and Windows that enables musicians to play
        backing tracks live, routing audio via a 3.5mm to dual ¼″ cable to a PA system and in-ear
        monitors simultaneously.
      </P>

      <H2>2. Subscriptions and Billing</H2>
      <UL>
        <li>
          <strong>Free Trial:</strong> A 7-day free trial is available for new users. No credit
          card is required to start the trial on Android (Google Play).
        </li>
        <li>
          <strong>Basic Plan:</strong> $7.99 USD/month (regional pricing may apply).
        </li>
        <li>
          <strong>Pro Plan:</strong> $12.99 USD/month (regional pricing may apply).
        </li>
        <li>
          Subscriptions are billed monthly and auto-renew unless cancelled at least 24 hours before
          the renewal date.
        </li>
        <li>
          Billing is managed by Google Play, the Apple App Store or the Microsoft Store. Refund
          requests are subject to their respective refund policies.
        </li>
      </UL>

      <H2>3. Acceptable Use</H2>
      <P>You agree to use ZQUENCE only for lawful purposes. You may not:</P>
      <UL>
        <li>Redistribute, reverse-engineer, or resell the app or its content.</li>
        <li>Upload audio files that infringe on third-party copyrights without proper license.</li>
        <li>Attempt to access or interfere with other users&apos; data or the app&apos;s infrastructure.</li>
      </UL>

      <H2>4. Intellectual Property</H2>
      <P>
        ZQUENCE and all related trademarks, logos, and software are the property of Zytrex S.R.L.
        Audio files you upload remain your property (or your licensors&apos;). You grant us a
        limited license to store and serve those files solely for providing the service to you.
      </P>

      <H2>5. Disclaimer of Warranties</H2>
      <P>
        ZQUENCE is provided &quot;as is&quot; without warranties of any kind, express or implied.
        We do not guarantee the app will be error-free or available at all times.
      </P>

      <H2>6. Limitation of Liability</H2>
      <P>
        To the maximum extent permitted by law, Zytrex S.R.L. shall not be liable for indirect,
        incidental, or consequential damages arising from your use of ZQUENCE.
      </P>

      <H2>7. Termination</H2>
      <P>
        We reserve the right to suspend or terminate accounts that violate these Terms. You may
        cancel your subscription and delete your account at any time.
      </P>

      <H2>8. Governing Law</H2>
      <P>
        These Terms are governed by the laws of the Republic of Costa Rica. Disputes shall be
        resolved in the competent courts of San José, Costa Rica.
      </P>

      <H2>9. Changes to Terms</H2>
      <P>
        We may update these Terms at any time. Material changes will be communicated via the app or
        email. Continued use after changes constitutes acceptance.
      </P>

      <H2>10. Contact</H2>
      <Contact />
    </>
  )
}
