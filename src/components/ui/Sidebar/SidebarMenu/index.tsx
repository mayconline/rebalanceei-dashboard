import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';
import { SidebarMenuAction } from './SidebarMenuAction';
import { SidebarMenuBadge } from './SidebarMenuBadge';
import { SidebarMenuButton } from './SidebarMenuButton';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarMenuSkeleton } from './SidebarMenuSkeleton';

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

SidebarMenu.Item = SidebarMenuItem;
SidebarMenu.Button = SidebarMenuButton;
SidebarMenu.Action = SidebarMenuAction;
SidebarMenu.Badge = SidebarMenuBadge;
SidebarMenu.Skeleton = SidebarMenuSkeleton;
