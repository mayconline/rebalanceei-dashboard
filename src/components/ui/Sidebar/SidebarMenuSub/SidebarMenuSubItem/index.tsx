import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarMenuSubItem = ({
  className,
  ...props
}: ComponentProps<'li'>) => {
  return (
    <li
      className={mergeClass('group/menu-sub-item relative', className)}
      data-sidebar="menu-sub-item"
      data-slot="sidebar-menu-sub-item"
      {...props}
    />
  );
};
