import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export { SidebarGroupAction } from './SidebarGroupAction';
export { SidebarGroupContent } from './SidebarGroupContent';
export { SidebarGroupLabel } from './SidebarGroupLabel';

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
