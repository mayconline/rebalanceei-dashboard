import { Loader2Icon } from 'lucide-react';
import { mergeClass } from '@/utils';

interface SpinnerProps {
  className?: string;
}
export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <Loader2Icon className={mergeClass('size-4 animate-spin', className)} />
  );
};
