import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export { SidebarMenuAction } from './SidebarMenuAction';
export { SidebarMenuBadge } from './SidebarMenuBadge';
export { SidebarMenuButton } from './SidebarMenuButton';
export { SidebarMenuItem } from './SidebarMenuItem';
export {
  SidebarMenuSkeleton,
  SidebarMenuSkeletonVariants,
} from './SidebarMenuSkeleton';

export const SidebarMenu = ({ className, ...props }: ComponentProps<'ul'>) => {
  return (
    <ul
      className={mergeClass('flex w-full min-w-0 flex-col gap-1', className)}
      data-sidebar="menu"
      data-slot="sidebar-menu"
      {...props}
    />
  );
};
