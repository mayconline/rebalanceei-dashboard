import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export { SidebarMenuSubButton } from './SidebarMenuSubButton';
export { SidebarMenuSubItem } from './SidebarMenuSubItem';

export const SidebarMenuSub = ({
  className,
  ...props
}: ComponentProps<'ul'>) => {
  return (
    <ul
      className={mergeClass(
        'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      data-sidebar="menu-sub"
      data-slot="sidebar-menu-sub"
      {...props}
    />
  );
};
