'use client';

import { type LabelProps, Root } from '@radix-ui/react-label';
import { mergeClass } from '@/utils';

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <Root
      className={mergeClass(
        'flex select-none items-center gap-2 font-semibold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        className
      )}
      data-slot="label"
      {...props}
    />
  );
};
