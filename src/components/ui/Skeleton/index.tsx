import { mergeClass } from '@/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={mergeClass('animate-pulse rounded-md bg-accent', className)}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
