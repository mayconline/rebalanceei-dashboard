import { LoaderCircleIcon, SearchIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { Input } from '@/components/ui';

interface SearchInputProps extends ComponentProps<'input'> {
  isLoading?: boolean;
}

export const SearchInput = ({
  isLoading = false,
  ...props
}: SearchInputProps) => {
  return (
    <div className="relative">
      <Input className="peer ps-9 pe-9" type="search" {...props} />
      <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        {isLoading ? (
          <LoaderCircleIcon
            aria-label="Loading..."
            className="animate-spin"
            role="status"
            size={16}
          />
        ) : (
          <SearchIcon aria-hidden="true" size={16} />
        )}
      </span>
    </div>
  );
};
