import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarContent = ({
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={mergeClass(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className
      )}
      data-sidebar="content"
      data-slot="sidebar-content"
      {...props}
    />
  );
};
