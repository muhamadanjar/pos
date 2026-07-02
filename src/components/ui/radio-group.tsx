'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Circle } from 'lucide-react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';

type RadioVariant = 'primary' | 'mono';
type RadioSize = 'sm' | 'md' | 'lg';

// Define a cva function for the RadioGroup root.
const radioGroupVariants = cva('grid gap-2.5', {
  variants: {
    variant: {
      primary: '',
      mono: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// Create a context to pass the variant and size down to items.
const RadioGroupContext = React.createContext<{
  variant: RadioVariant;
  size: RadioSize;
}>({ variant: 'primary', size: 'md' });

function RadioGroup({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> & VariantProps<typeof radioGroupVariants>) {
  return (
    <RadioGroupContext.Provider value={{ variant: variant ?? 'primary', size: size ?? 'md' }}>
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn(radioGroupVariants({ variant, size }), className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  );
}

// Define variants for the RadioGroupItem using cva.
const radioItemVariants = cva(
  `
    peer aspect-square rounded-full border outline-hidden ring-offset-ds-surface-lowest focus:outline-none focus-visible:ring-2
    focus-visible:ring-ds-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
    aria-invalid:border-ds-error/60 aria-invalid:ring-ds-error/10 dark:aria-invalid:border-ds-error dark:aria-invalid:ring-ds-error/20
    [[data-invalid=true]_&]:border-ds-error/60 [[data-invalid=true]_&]:ring-ds-error/10 dark:[[data-invalid=true]_&]:border-ds-error dark:[[data-invalid=true]_&]:ring-ds-error/20
    border-ds-outline-variant text-ds-primary data-[state=checked]:bg-ds-primary data-[state=checked]:border-ds-primary data-[state=checked]:text-ds-on-primary
  `,
  {
    variants: {
      size: {
        sm: 'size-4.5 [&_svg]:size-2',
        md: 'size-5 [&_svg]:size-2.5',
        lg: 'size-5.5 [&_svg]:size-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

function RadioGroupItem({
  className,
  size,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & VariantProps<typeof radioItemVariants>) {
  // Use the variant and size from context if not provided at the item level.
  const { size: contextSize } = React.useContext(RadioGroupContext);
  const effectiveSize = size ?? contextSize;

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioItemVariants({ size: effectiveSize }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator" className="flex items-center justify-center">
        <Circle className="fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
