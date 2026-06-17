'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Minus } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';

// Define the variants for the Checkbox using cva.
const checkboxVariants = cva(
  `
    group peer bg-ds-surface-container-lowest shrink-0 rounded-md border border-ds-outline-variant ring-offset-ds-surface-lowest focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
    aria-invalid:border-ds-error/60 aria-invalid:ring-ds-error/10 dark:aria-invalid:border-ds-error dark:aria-invalid:ring-ds-error/20
    [[data-invalid=true]_&]:border-ds-error/60 [[data-invalid=true]_&]:ring-ds-error/10 dark:[[data-invalid=true]_&]:border-ds-error dark:[[data-invalid=true]_&]:ring-ds-error/20,
    data-[state=checked]:bg-ds-primary data-[state=checked]:border-ds-primary data-[state=checked]:text-ds-on-primary data-[state=indeterminate]:bg-ds-primary data-[state=indeterminate]:border-ds-primary data-[state=indeterminate]:text-ds-on-primary
    `,
  {
    variants: {
      size: {
        sm: 'size-4.5 [&_svg]:size-3',
        md: 'size-5 [&_svg]:size-3.5',
        lg: 'size-5.5 [&_svg]:size-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

function Checkbox({
  className,
  size,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" className={cn(checkboxVariants({ size }), className)} {...props}>
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <Check className="group-data-[state=indeterminate]:hidden" />
        <Minus className="hidden group-data-[state=indeterminate]:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
