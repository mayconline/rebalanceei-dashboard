import { Slot } from '@radix-ui/react-slot';
import { Loader2Icon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export enum ButtonVariants {
  Default = 'default',
  Destructive = 'destructive',
  Outline = 'outline',
  Secondary = 'secondary',
  Ghost = 'ghost',
  Link = 'link',
}

export enum ButtonSizes {
  Default = 'default',
  Sm = 'sm',
  Lg = 'lg',
  Icon = 'icon',
}

const buttonClassesVariants = {
  [ButtonVariants.Default]:
    'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
  [ButtonVariants.Destructive]:
    'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
  [ButtonVariants.Outline]:
    'border bg-background shadow-xs hover:bg -accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  [ButtonVariants.Secondary]:
    'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
  [ButtonVariants.Ghost]:
    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
  [ButtonVariants.Link]: 'text-primary underline-offset-4 hover:underline',
};

const buttonSizesVariants = {
  [ButtonSizes.Default]: 'h-9 px-4 py-2 has-[>svg]:px-3',
  [ButtonSizes.Sm]: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
  [ButtonSizes.Lg]: 'h-10 rounded-md px-6 has-[>svg]:px-4',
  [ButtonSizes.Icon]: 'size-9',
};

interface ButtonProps extends ComponentProps<'button'> {
  asChild?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
}

export const Button = ({
  className,
  variant = ButtonVariants.Default,
  size = ButtonSizes.Default,
  asChild = false,
  children,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={mergeClass(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        buttonClassesVariants[variant],
        buttonSizesVariants[size],
        className
      )}
      {...props}
    >
      {isLoading && <Loader2Icon className="size-4 animate-spin" />}
      {children}
    </Comp>
  );
};
