'use client';

import { Check, LoaderCircleIcon, SearchIcon } from 'lucide-react';
import { type ComponentProps, useState } from 'react';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  Input,
} from '@/components/ui';
import type { SuggestionsListProps } from '@/types';
import { mergeClass } from '@/utils';

interface SearchInputProps extends ComponentProps<'input'> {
  isLoading?: boolean;
  suggestionsList?: SuggestionsListProps[] | null;
  onSelectSuggestion?: (suggestion: SuggestionsListProps) => void;
}

export const SearchInput = ({
  isLoading,
  suggestionsList,
  onSelectSuggestion,
  value,
  ...props
}: SearchInputProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleInputFocus() {
    setShowSuggestions(true);
  }

  function handleSelectSuggestion(suggestion: SuggestionsListProps) {
    onSelectSuggestion?.(suggestion);
    setShowSuggestions(false);
  }

  return (
    <div>
      <div className="relative">
        <Input
          className="peer ps-9 pe-9"
          onBlur={() => setShowSuggestions(false)}
          onFocus={handleInputFocus}
          type="search"
          value={value}
          {...props}
        />
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

      <aside
        className={mergeClass(
          showSuggestions ? 'mt-2 opacity-100' : 'h-0 opacity-0',
          'transition-opacity'
        )}
      >
        <Command>
          <CommandList>
            <CommandGroup heading="Selecione um ativo">
              <CommandEmpty>Nenhum ativo encontrado</CommandEmpty>
              {suggestionsList?.map((suggestion) => (
                <CommandItem
                  key={suggestion?.id}
                  onSelect={() => handleSelectSuggestion(suggestion)}
                >
                  <Check
                    className={mergeClass(
                      'mr-2 h-4 w-4',
                      suggestion?.name === value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {`${suggestion?.id} - ${suggestion?.name}`}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </aside>
    </div>
  );
};
