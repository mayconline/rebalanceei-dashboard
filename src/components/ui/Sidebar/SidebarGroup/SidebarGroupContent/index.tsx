import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarGroupContent = ({
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={mergeClass('w-full text-sm', className)}
      data-sidebar="group-content"
      data-slot="sidebar-group-content"
      {...props}
    />
  );
};
