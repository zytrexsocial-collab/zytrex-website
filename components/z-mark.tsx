export function ZMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="30" height="30" stroke="var(--signal)" strokeWidth="1.5" />
      <path
        d="M9 9H23L9 23H23"
        stroke="var(--signal)"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
