import type { ComponentProps } from 'react';
import { Separator } from '@/components/ui';
import { mergeClass } from '@/utils';

export const SidebarSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Separator>) => {
  return (
    <Separator
      className={mergeClass('mx-2 w-auto bg-sidebar-border', className)}
      data-sidebar="separator"
      data-slot="sidebar-separator"
      {...props}
    />
  );
};
