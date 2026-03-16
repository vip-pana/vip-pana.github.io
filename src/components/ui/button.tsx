import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-sm font-bold uppercase tracking-wider border-2 border-nord-text transition-all duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
  {
    variants: {
      variant: {
        default:
          'bg-nord-accent text-nord-bg border-nord-text shadow-[4px_4px_0px_0px_var(--color-nord-text)] hover:shadow-[2px_2px_0px_0px_var(--color-nord-text)] hover:translate-x-[2px] hover:translate-y-[2px]',
        destructive:
          'bg-nord-red text-nord-text border-nord-text shadow-[4px_4px_0px_0px_var(--color-nord-text)] hover:shadow-[2px_2px_0px_0px_var(--color-nord-text)] hover:translate-x-[2px] hover:translate-y-[2px]',
        outline:
          'bg-transparent text-nord-text border-nord-text shadow-[4px_4px_0px_0px_var(--color-nord-text)] hover:bg-nord-text hover:text-nord-bg hover:shadow-[2px_2px_0px_0px_var(--color-nord-accent)] hover:translate-x-[2px] hover:translate-y-[2px]',
        secondary:
          'bg-nord-surface text-nord-text border-nord-text shadow-[4px_4px_0px_0px_var(--color-nord-text)] hover:shadow-[2px_2px_0px_0px_var(--color-nord-text)] hover:translate-x-[2px] hover:translate-y-[2px]',
        ghost:
          'border-transparent shadow-none hover:bg-nord-surface hover:border-nord-text hover:shadow-[3px_3px_0px_0px_var(--color-nord-text)]',
        link: 'border-transparent shadow-none text-nord-accent underline-offset-4 hover:underline active:translate-x-0 active:translate-y-0',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
