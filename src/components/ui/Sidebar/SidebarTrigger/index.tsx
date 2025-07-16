import { PanelLeftIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';
import { Button, ButtonSizes, ButtonVariants } from '../../Button';
import { useSidebar } from '..';

export const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className={mergeClass('size-7', className)}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      size={ButtonSizes.Icon}
      variant={ButtonVariants.Ghost}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};
