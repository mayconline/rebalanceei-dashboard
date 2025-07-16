import type { ComponentProps } from 'react';
import { mergeClass } from '@/utils';

export const SidebarInset = ({
  className,
  ...props
}: ComponentProps<'main'>) => {
  return (
    <main
      className={mergeClass(
        'relative flex w-full flex-1 flex-col bg-background',
        'md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm',
        className
      )}
      data-slot="sidebar-inset"
      {...props}
    />
  );
};
