import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';
import { SidebarGroupLabel } from './SideBarGroupLabel';
import { SidebarGroupAction } from './SidebarGroupAction';
import { SidebarGroupContent } from './SidebarGroupContent';

export const SidebarGroup = ({
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={mergeClass(
        'relative flex w-full min-w-0 flex-col p-2',
        className
      )}
      data-sidebar="group"
      data-slot="sidebar-group"
      {...props}
    />
  );
};

SidebarGroup.Label = SidebarGroupLabel;
SidebarGroup.Content = SidebarGroupContent;
SidebarGroup.Action = SidebarGroupAction;
