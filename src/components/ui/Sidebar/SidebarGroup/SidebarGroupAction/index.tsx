import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarGroupAction = ({
  className,
  asChild = false,
  ...props
}: ComponentProps<'button'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={mergeClass(
        'absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:-inset-2 after:absolute md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      data-sidebar="group-action"
      data-slot="sidebar-group-action"
      {...props}
    />
  );
};
