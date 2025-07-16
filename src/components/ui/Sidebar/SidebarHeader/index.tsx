import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarHeader = ({
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={mergeClass('flex flex-col gap-2 p-2', className)}
      data-sidebar="header"
      data-slot="sidebar-header"
      {...props}
    />
  );
};
