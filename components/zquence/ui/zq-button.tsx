import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export const zqButton = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 font-bold uppercase tracking-[0.15em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zq-teal',
  {
    variants: {
      variant: {
        primary:
          'bg-zq-teal px-10 py-[18px] text-base text-black hover:-translate-y-0.5 hover:bg-zq-teal-dark hover:shadow-[0_8px_24px_rgba(0,168,157,0.35)]',
        ghost: 'bg-transparent text-[0.9rem] font-semibold text-zq-gray-light hover:text-white',
        planTeal:
          'flex-1 bg-zq-teal px-4 py-3.5 text-[0.9rem] text-black hover:bg-zq-teal-dark hover:shadow-[0_8px_24px_rgba(0,168,157,0.35)]',
        planOutline:
          'flex-1 border border-zq-dark3 px-4 py-3.5 text-[0.9rem] text-zq-gray-light hover:border-zq-gray hover:text-white',
        nav: 'bg-zq-teal px-5 py-[9px] text-[0.82rem] text-black hover:bg-zq-teal-dark',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
)

type Variant = VariantProps<typeof zqButton>

export function ZqButton({
  variant,
  className,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Variant) {
  return <button type={type} className={cn(zqButton({ variant }), className)} {...props} />
}

export function ZqLinkButton({
  variant,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & Variant) {
  return <a className={cn(zqButton({ variant }), className)} {...props} />
}
