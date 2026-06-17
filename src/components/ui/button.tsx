import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { Slot as SlotPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'cursor-pointer group whitespace-nowrap focus-visible:outline-hidden inline-flex items-center justify-center has-data-[arrow=true]:justify-between whitespace-nowrap text-sm font-medium ring-offset-ds-surface-container-lowest transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-ds-primary text-ds-on-primary hover:bg-ds-primary/90 data-[state=open]:bg-ds-primary/90 focus-visible:ring-ds-primary',
        mono: 'bg-zinc-950 text-white dark:bg-zinc-300 dark:text-black hover:bg-zinc-950/90 dark:hover:bg-zinc-300/90 data-[state=open]:bg-zinc-950/90 dark:data-[state=open]:bg-zinc-300/90',
        destructive:
          'bg-ds-error text-ds-on-error hover:bg-ds-error/90 data-[state=open]:bg-ds-error/90 focus-visible:ring-ds-error',
        secondary: 'bg-ds-surface-container-highest text-ds-on-surface hover:bg-ds-surface-high data-[state=open]:bg-ds-surface-high focus-visible:ring-ds-primary',
        outline: 'bg-ds-surface-container-lowest text-ds-on-surface border border-ds-outline-variant hover:bg-ds-surface-low data-[state=open]:bg-ds-surface-low focus-visible:ring-ds-primary',
        dashed:
          'text-ds-on-surface border border-ds-outline-variant border-dashed bg-ds-surface-container-lowest hover:bg-ds-surface-low hover:text-ds-on-surface data-[state=open]:text-ds-on-surface',
        ghost:
          'text-ds-on-surface hover:bg-ds-surface-mid hover:text-ds-on-surface data-[state=open]:bg-ds-surface-mid data-[state=open]:text-ds-on-surface',
        dim: 'text-ds-on-surface-variant hover:text-ds-on-surface data-[state=open]:text-ds-on-surface',
        foreground: '',
        inverse: '',
      },
      appearance: {
        default: '',
        ghost: '',
      },
      underline: {
        solid: '',
        dashed: '',
      },
      underlined: {
        solid: '',
        dashed: '',
      },
      size: {
        lg: 'h-10 rounded-md px-4 text-sm gap-1.5 [&_svg:not([class*=size-])]:size-4',
        md: 'h-8.5 rounded-md px-3 gap-1.5 text-[0.8125rem] leading-(--text-sm--line-height) [&_svg:not([class*=size-])]:size-4',
        sm: 'h-7 rounded-md px-2.5 gap-1.25 text-xs [&_svg:not([class*=size-])]:size-3.5',
        icon: 'size-8.5 rounded-md [&_svg:not([class*=size-])]:size-4 shrink-0',
      },
      autoHeight: {
        true: '',
        false: '',
      },
      shape: {
        default: '',
        circle: 'rounded-full',
      },
      mode: {
        default: 'focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2',
        icon: 'focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2 shrink-0',
        link: 'text-ds-primary h-auto p-0 bg-transparent rounded-none hover:bg-transparent data-[state=open]:bg-transparent',
        input: `
            justify-start font-normal hover:bg-ds-surface-low [&_svg]:transition-colors [&_svg]:hover:text-ds-on-surface data-[state=open]:bg-ds-surface-low
            focus-visible:border-ds-primary focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-ds-primary/30
            [[data-state=open]>&]:border-ds-primary [[data-state=open]>&]:outline-hidden [[data-state=open]>&]:ring-[3px]
            [[data-state=open]>&]:ring-ds-primary/30
            aria-invalid:border-ds-error/60 aria-invalid:ring-ds-error/10 dark:aria-invalid:border-ds-error dark:aria-invalid:ring-ds-error/20
            in-data-[invalid=true]:border-ds-error/60 in-data-[invalid=true]:ring-ds-error/10  dark:in-data-[invalid=true]:border-ds-error dark:in-data-[invalid=true]:ring-ds-error/20
          `,
      },
      placeholder: {
        true: 'text-ds-on-surface-variant',
        false: '',
      },
    },
    compoundVariants: [
      // Icons opacity for default mode
      {
        variant: 'ghost',
        mode: 'default',
        className: '[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60',
      },
      {
        variant: 'outline',
        mode: 'default',
        className: '[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60',
      },
      {
        variant: 'dashed',
        mode: 'default',
        className: '[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60',
      },
      {
        variant: 'secondary',
        mode: 'default',
        className: '[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60',
      },

      // Icons opacity for default mode
      {
        variant: 'outline',
        mode: 'input',
        className: '[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60',
      },
      {
        variant: 'outline',
        mode: 'icon',
        className: '[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60',
      },

      // Auto height
      {
        size: 'md',
        autoHeight: true,
        className: 'h-auto min-h-8.5',
      },
      {
        size: 'sm',
        autoHeight: true,
        className: 'h-auto min-h-7',
      },
      {
        size: 'lg',
        autoHeight: true,
        className: 'h-auto min-h-10',
      },

      // Shadow support
      {
        variant: 'primary',
        mode: 'default',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'mono',
        mode: 'default',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'secondary',
        mode: 'default',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'outline',
        mode: 'default',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'dashed',
        mode: 'default',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'destructive',
        mode: 'default',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },

      // Shadow support
      {
        variant: 'primary',
        mode: 'icon',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'mono',
        mode: 'icon',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'secondary',
        mode: 'icon',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'outline',
        mode: 'icon',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'dashed',
        mode: 'icon',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },
      {
        variant: 'destructive',
        mode: 'icon',
        appearance: 'default',
        className: 'shadow-xs shadow-black/5',
      },

      // Link
      {
        variant: 'primary',
        mode: 'link',
        underline: 'solid',
        className:
          'font-medium text-primary hover:text-primary/90 [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid',
      },
      {
        variant: 'primary',
        mode: 'link',
        underline: 'dashed',
        className:
          'font-medium text-primary hover:text-primary/90 [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-dashed decoration-1',
      },
      {
        variant: 'primary',
        mode: 'link',
        underlined: 'solid',
        className:
          'font-medium text-primary hover:text-primary/90 [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid',
      },
      {
        variant: 'primary',
        mode: 'link',
        underlined: 'dashed',
        className:
          'font-medium text-primary hover:text-primary/90 [&_svg]:opacity-60 underline underline-offset-4 decoration-dashed decoration-1',
      },

      {
        variant: 'inverse',
        mode: 'link',
        underline: 'solid',
        className:
          'font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid',
      },
      {
        variant: 'inverse',
        mode: 'link',
        underline: 'dashed',
        className:
          'font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-dashed decoration-1',
      },
      {
        variant: 'inverse',
        mode: 'link',
        underlined: 'solid',
        className:
          'font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid',
      },
      {
        variant: 'inverse',
        mode: 'link',
        underlined: 'dashed',
        className:
          'font-medium text-inherit [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-dashed decoration-1',
      },

      {
        variant: 'foreground',
        mode: 'link',
        underline: 'solid',
        className:
          'font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-solid',
      },
      {
        variant: 'foreground',
        mode: 'link',
        underline: 'dashed',
        className:
          'font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 hover:underline hover:underline-offset-4 hover:decoration-dashed decoration-1',
      },
      {
        variant: 'foreground',
        mode: 'link',
        underlined: 'solid',
        className:
          'font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-solid',
      },
      {
        variant: 'foreground',
        mode: 'link',
        underlined: 'dashed',
        className:
          'font-medium text-foreground [&_svg:not([role=img]):not([class*=text-])]:opacity-60 underline underline-offset-4 decoration-dashed decoration-1',
      },

      // Ghost
      {
        variant: 'primary',
        appearance: 'ghost',
        className: 'bg-transparent text-ds-primary/90 hover:bg-ds-primary/5 data-[state=open]:bg-ds-primary/5',
      },
      {
        variant: 'destructive',
        appearance: 'ghost',
        className: 'bg-transparent text-ds-error/90 hover:bg-ds-error/5 data-[state=open]:bg-ds-error/5',
      },
      {
        variant: 'ghost',
        mode: 'icon',
        className: 'text-ds-on-surface-variant',
      },

      // Size
      {
        size: 'sm',
        mode: 'icon',
        className: 'w-7 h-7 p-0 [[&_svg:not([class*=size-])]:size-3.5',
      },
      {
        size: 'md',
        mode: 'icon',
        className: 'w-8.5 h-8.5 p-0 [&_svg:not([class*=size-])]:size-4',
      },
      {
        size: 'icon',
        className: 'w-8.5 h-8.5 p-0 [&_svg:not([class*=size-])]:size-4',
      },
      {
        size: 'lg',
        mode: 'icon',
        className: 'w-10 h-10 p-0 [&_svg:not([class*=size-])]:size-4',
      },

      // Input mode
      {
        mode: 'input',
        placeholder: true,
        variant: 'outline',
        className: 'font-normal text-ds-on-surface-variant',
      },
      {
        mode: 'input',
        variant: 'outline',
        size: 'sm',
        className: 'gap-1.25',
      },
      {
        mode: 'input',
        variant: 'outline',
        size: 'md',
        className: 'gap-1.5',
      },
      {
        mode: 'input',
        variant: 'outline',
        size: 'lg',
        className: 'gap-1.5',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      mode: 'default',
      size: 'md',
      shape: 'default',
      appearance: 'default',
    },
  },
);

function Button({
  className,
  selected,
  variant,
  shape,
  appearance,
  mode,
  size,
  autoHeight,
  underlined,
  underline,
  asChild = false,
  placeholder = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    selected?: boolean;
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : 'button';
  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          shape,
          appearance,
          mode,
          autoHeight,
          placeholder,
          underlined,
          underline,
          className,
        }),
        asChild && props.disabled && 'pointer-events-none opacity-50',
      )}
      {...(selected && { 'data-state': 'open' })}
      {...props}
    />
  );
}

interface ButtonArrowProps extends React.SVGProps<SVGSVGElement> {
  icon?: LucideIcon; // Allows passing any Lucide icon
}

function ButtonArrow({ icon: Icon = ChevronDown, className, ...props }: ButtonArrowProps) {
  return <Icon data-slot="button-arrow" className={cn('ms-auto -me-1', className)} {...props} />;
}

export { Button, ButtonArrow, buttonVariants };
