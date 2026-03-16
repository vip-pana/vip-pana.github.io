import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border-2 border-nord-text px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_var(--color-nord-text)] transition-all duration-150',
  {
    variants: {
      variant: {
        default: 'bg-nord-accent text-nord-bg',
        secondary: 'bg-nord-surface text-nord-text',
        destructive: 'bg-nord-red text-nord-text',
        outline: 'bg-transparent text-nord-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
