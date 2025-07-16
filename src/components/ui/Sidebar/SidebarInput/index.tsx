import type { ComponentProps } from 'react';
import { Input } from '@/components/ui';
import { mergeClass } from '@/utils';

export const SidebarInput = ({
  className,
  ...props
}: ComponentProps<typeof Input>) => {
  return (
    <Input
      className={mergeClass('h-8 w-full bg-background shadow-none', className)}
      data-sidebar="input"
      data-slot="sidebar-input"
      {...props}
    />
  );
};
