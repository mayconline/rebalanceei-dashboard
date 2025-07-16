'use client';

import { Root, type SeparatorProps } from '@radix-ui/react-separator';
import { mergeClass } from '@/utils';

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <Root
      className={mergeClass(
        'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
        className
      )}
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
