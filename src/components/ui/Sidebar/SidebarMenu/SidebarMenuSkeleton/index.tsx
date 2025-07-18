import type { ComponentProps } from 'react';
import { Skeleton } from '@/components/ui';
import { mergeClass } from '@/utils';

export enum SidebarMenuSkeletonVariants {
  Large = 'large',
}

const sidebarMenuSkeletonClassesVariants = {
  [SidebarMenuSkeletonVariants.Large]: 'h-8 w-full',
};

interface SidebarMenuSkeletonProps extends ComponentProps<'div'> {
  showIcon?: boolean;
  variant?: SidebarMenuSkeletonVariants;
  iconSize?: string;
}

export const SidebarMenuSkeleton = ({
  className,
  showIcon = false,
  variant = SidebarMenuSkeletonVariants.Large,
  iconSize = 'size-8',
  ...props
}: SidebarMenuSkeletonProps) => {
  return (
    <div
      className={mergeClass(
        'flex h-8 items-center gap-2 rounded-md',
        className
      )}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton
          className={mergeClass('shrink-0 rounded-md', iconSize)}
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className={mergeClass(
          'flex-1',
          sidebarMenuSkeletonClassesVariants[variant]
        )}
        data-sidebar="menu-skeleton-text"
      />
    </div>
  );
};
