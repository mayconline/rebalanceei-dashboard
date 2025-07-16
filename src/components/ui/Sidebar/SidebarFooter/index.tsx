import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarFooter = ({
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={mergeClass('flex flex-col gap-2 p-2', className)}
      data-sidebar="footer"
      data-slot="sidebar-footer"
      {...props}
    />
  );
};
