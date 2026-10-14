'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ZMark } from '@/components/z-mark'
import { useLanguage } from '../i18n/language-provider'
import { useView } from '../view-context'

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590555906307',
    path: 'M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.918 8.437-9.94z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/zquence.app/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ZQUENCEAPP',
    path: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@zquenceapp',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
]

const linkClass =
  'cursor-pointer text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-zq-gray transition-colors hover:text-zq-teal'

export function ZqFooter() {
  const { t } = useLanguage()
  const { showView, openLegal } = useView()

  return (
    <footer className="flex flex-col gap-8 border-t border-zq-dark3 bg-zq-dark px-5 pb-10 pt-[60px] min-[900px]:px-12">
      <div className="flex flex-col items-center justify-between gap-6 text-center min-[900px]:flex-row min-[900px]:text-left">
        <button type="button" onClick={() => showView('landing')} className="cursor-pointer" aria-label="ZQUENCE inicio">
          <Image src="/zquence/zquence-logo.jpg" alt="ZQUENCE" width={2000} height={416} className="h-7 w-auto" />
        </button>
        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center border border-[#2a2a2a] text-zq-gray transition-colors hover:border-zq-teal hover:bg-zq-teal/10 hover:text-zq-teal"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-zq-dark3 pt-7 text-center min-[900px]:flex-row min-[900px]:text-left">
        <ul className="flex flex-wrap justify-center gap-7">
          <li>
            <button type="button" className={linkClass} onClick={() => openLegal('privacy')}>
              {t('foot_privacy')}
            </button>
          </li>
          <li>
            <button type="button" className={linkClass} onClick={() => openLegal('terms')}>
              {t('foot_terms')}
            </button>
          </li>
          <li>
            <a href="https://zytrex.net/delete-account.html" className={linkClass}>
              Delete Account
            </a>
          </li>
          <li>
            <a href="mailto:embajadores@zytrex.net" className={linkClass}>
              {t('foot_contact')}
            </a>
          </li>
          <li>
            <button type="button" className={linkClass} onClick={() => showView('ambassadors')}>
              {t('foot_ambassador')}
            </button>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-2 min-[900px]:items-end">
          <div className="text-[0.76rem] text-zq-gray">&copy; 2026 ZQUENCE. All rights reserved.</div>
          <Link
            href="/"
            className="group flex items-center gap-2.5 opacity-60 transition-opacity hover:opacity-100"
            aria-label="Developed by ZYTREX"
          >
            <span className="text-[0.68rem] uppercase tracking-[0.12em] text-zq-gray">Developed by</span>
            <ZMark className="h-[18px] w-[18px]" />
            <span className="text-xs font-bold tracking-[0.3em] text-white">ZYTREX</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
