import { cva, type VariantProps } from 'class-variance-authority'

export { default as AppButton } from './AppButton'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-main shadow hover:bg-primary-800 cursor-pointer',
        destructive: 'bg-destructive shadow-sm hover:bg-destructive/90 cursor-pointer',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent cursor-pointer',
        secondary: 'bg-secondary shadow-sm hover:bg-secondary/80 cursor-pointer',
        ghost: 'hover:bg-accent active:bg-accent/50 cursor-pointer',
        link: 'underline-offset-4 hover:underline cursor-pointer'
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 rounded px-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
