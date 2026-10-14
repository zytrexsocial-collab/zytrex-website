import type { ReactNode, SVGProps } from 'react'

// Íconos del sprite original de ZQUENCE, como componentes React.

type IconProps = SVGProps<SVGSVGElement>

function StrokeIcon({ children, className = '', ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] align-middle ${className}`}
      {...props}
    >
      {children}
    </svg>
  )
}

function FillIcon({ children, className = '', ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] align-middle ${className}`}
      {...props}
    >
      {children}
    </svg>
  )
}

export const IconPhone = (p: IconProps) => (
  <StrokeIcon {...p}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <line x1="10" y1="19" x2="14" y2="19" />
  </StrokeIcon>
)

export const IconHeadphones = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M4 15 v-3 a8 8 0 0 1 16 0 v3" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
  </StrokeIcon>
)

export const IconMic = (p: IconProps) => (
  <StrokeIcon {...p}>
    <rect x="9" y="2" width="6" height="11" rx="3" />
    <path d="M5 10 v1 a7 7 0 0 0 14 0 v-1" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="8" y1="22" x2="16" y2="22" />
  </StrokeIcon>
)

export const IconGift = (p: IconProps) => (
  <StrokeIcon {...p}>
    <rect x="3" y="8" width="18" height="13" rx="1" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="12" y1="8" x2="12" y2="21" />
    <path d="M12 8 C12 8 9 8 8 6.5 C7.2 5.3 8.3 4 9.5 4.5 C11 5 12 8 12 8 Z" />
    <path d="M12 8 C12 8 15 8 16 6.5 C16.8 5.3 15.7 4 14.5 4.5 C13 5 12 8 12 8 Z" />
  </StrokeIcon>
)

export const IconCoin = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9 a2.5 1.6 0 0 0 -2.5 -1.2 c-1.5 0 -2.5 .8 -2.5 1.8 c0 2.4 5 1 5 3.4 c0 1 -1 1.8 -2.5 1.8 a2.5 1.6 0 0 1 -2.5 -1.2" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </StrokeIcon>
)

export const IconTicket = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M3 8 a2 2 0 0 1 2 -2 h14 a2 2 0 0 1 2 2 a2 2 0 0 0 0 4 a2 2 0 0 1 -2 2 h-14 a2 2 0 0 1 -2 -2 a2 2 0 0 0 0 -4 Z" />
    <line x1="9" y1="14" x2="15" y2="8" />
    <circle cx="9.5" cy="8.5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="13.5" r="0.8" fill="currentColor" stroke="none" />
  </StrokeIcon>
)

export const IconBarChart = (p: IconProps) => (
  <StrokeIcon {...p}>
    <line x1="3" y1="21" x2="21" y2="21" />
    <rect x="5" y="14" width="3.5" height="7" />
    <rect x="10.25" y="9" width="3.5" height="12" />
    <rect x="15.5" y="4" width="3.5" height="17" />
  </StrokeIcon>
)

export const IconPalette = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M12 3 a9 8 0 1 0 0 16 c1 0 1.5 -.6 1.5 -1.4 c0 -.7 -.5 -1.2 -.5 -1.9 c0 -1 .8 -1.7 1.8 -1.7 h1.7 a3.5 3.5 0 0 0 3.5 -3.5 c0 -4.1 -3.6 -7.5 -8 -7.5 Z" />
    <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="9.5" cy="7" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="7" r="1" fill="currentColor" stroke="none" />
  </StrokeIcon>
)

export const IconTrendingUp = (p: IconProps) => (
  <StrokeIcon {...p}>
    <polyline points="3 17 9 11 13 15 21 6" />
    <polyline points="15 6 21 6 21 12" />
  </StrokeIcon>
)

export const IconMedal = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M8.5 14 L7 21 L12 18.5 L17 21 L15.5 14" />
    <circle cx="12" cy="9" r="6" />
    <path
      d="M12 5.5 L13.2 8 L16 8.4 L14 10.3 L14.5 13 L12 11.6 L9.5 13 L10 10.3 L8 8.4 L10.8 8 Z"
      fill="currentColor"
      stroke="none"
    />
  </StrokeIcon>
)

export const IconDiamond = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M6 9 L12 3 L18 9 L12 21 Z" />
    <line x1="6" y1="9" x2="18" y2="9" />
    <line x1="9.5" y1="9" x2="12" y2="21" />
    <line x1="14.5" y1="9" x2="12" y2="21" />
  </StrokeIcon>
)

export const IconCrown = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M3 18 L3 9 L7.5 13 L12 5 L16.5 13 L21 9 L21 18 Z" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </StrokeIcon>
)

export const IconMegaphone = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M3 11 v2 a1 1 0 0 0 1 1 h2 l9 4 V6 l-9 4 H4 a1 1 0 0 0 -1 1 Z" />
    <path d="M18 9 a4 4 0 0 1 0 6" />
    <path d="M7 14 v4 a1 1 0 0 0 1 1 h1 a1 1 0 0 0 1 -1 v-3" />
  </StrokeIcon>
)

export const IconUsers = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20 v-1 a5 5 0 0 1 5 -5 h2 a5 5 0 0 1 5 5 v1" />
    <circle cx="17" cy="7" r="2.5" />
    <path d="M16 11 a4.5 4.5 0 0 1 5 4.5 v1" />
  </StrokeIcon>
)

export const IconBan = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="12" cy="12" r="9" />
    <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
  </StrokeIcon>
)

export const IconCheckCircle = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5 L11 15.5 L16 9" />
  </StrokeIcon>
)

export const IconMail = (p: IconProps) => (
  <StrokeIcon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7 L12 13 L21 7" />
  </StrokeIcon>
)

export const IconGear = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2 v3 M12 19 v3 M2 12 h3 M19 12 h3 M4.9 4.9 l2.1 2.1 M17 17 l2.1 2.1 M19.1 4.9 l-2.1 2.1 M7 17 l-2.1 2.1" />
  </StrokeIcon>
)

export const IconGlobe = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </StrokeIcon>
)

export const IconSplit = (p: IconProps) => (
  <StrokeIcon {...p}>
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6 v4 M12 10 L6 16 M12 10 L18 16" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </StrokeIcon>
)

export const IconList = (p: IconProps) => (
  <StrokeIcon {...p}>
    <line x1="9" y1="6" x2="21" y2="6" />
    <line x1="9" y1="12" x2="21" y2="12" />
    <line x1="9" y1="18" x2="21" y2="18" />
    <circle cx="4" cy="6" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="4" cy="12" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="4" cy="18" r="1.2" fill="currentColor" stroke="none" />
  </StrokeIcon>
)

export const IconRepeat = (p: IconProps) => (
  <StrokeIcon {...p}>
    <path d="M17 2 L21 6 L17 10" />
    <path d="M3 12 v-2 a4 4 0 0 1 4 -4 h14" />
    <path d="M7 22 L3 18 L7 14" />
    <path d="M21 12 v2 a4 4 0 0 1 -4 4 h-14" />
  </StrokeIcon>
)

export const IconPlay = (p: IconProps) => (
  <FillIcon {...p}>
    <path d="M6 3.5 L20 12 L6 20.5 Z" />
  </FillIcon>
)

export const IconApple = (p: IconProps) => (
  <FillIcon {...p}>
    <path d="M16.365 1.43c0 1.14-.42 2.06-1.26 2.85-.9.85-1.99 1.34-3.05 1.25-.11-1.09.42-2.19 1.24-2.93.86-.78 2.13-1.28 3.07-1.17zm3.3 16.9c-.42.96-.62 1.4-1.16 2.25-.75 1.17-1.81 2.63-3.13 2.64-1.17.02-1.47-.75-3.06-.74-1.59.01-1.92.76-3.09.74-1.32-.02-2.32-1.33-3.07-2.5-2.1-3.27-2.32-7.1-1.02-9.14.92-1.45 2.38-2.3 3.75-2.3 1.4 0 2.28.77 3.44.77 1.12 0 1.8-.77 3.42-.77 1.22 0 2.51.66 3.43 1.81-3.02 1.66-2.53 5.98.49 7.24z" />
  </FillIcon>
)
