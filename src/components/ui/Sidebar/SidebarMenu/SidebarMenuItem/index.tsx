import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarMenuItem = ({
  className,
  ...props
}: ComponentProps<'li'>) => {
  return (
    <li
      className={mergeClass('group/menu-item relative', className)}
      data-sidebar="menu-item"
      data-slot="sidebar-menu-item"
      {...props}
    />
  );
};
