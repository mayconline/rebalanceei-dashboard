'use client';

import { Check } from 'lucide-react';
import { type ComponentProps, useEffect, useState } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandLoading,
  SearchInput,
} from '@/components/ui';
import { useDebounce, useGetSuggestions } from '@/hooks';
import type { SuggestionsListProps } from '@/types';
import { mergeClass } from '@/utils';

interface AutoCompleteTicketInputProps extends ComponentProps<'input'> {
  onSelectSuggestion?: (suggestion: SuggestionsListProps) => void;
  value?: string;
}

export const AutoCompleteTicketInput = ({
  onSelectSuggestion,
  value,
  ...props
}: AutoCompleteTicketInputProps) => {
  const debouncedSearch = useDebounce(value, 500);

  const { suggestionsList, isLoading, isFetched } = useGetSuggestions({
    ticketSearched: debouncedSearch,
  });

  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setShowSuggestions(isFetched);
  }, [isFetched]);

  function handleSelectSuggestion(suggestion: SuggestionsListProps) {
    onSelectSuggestion?.(suggestion);
    setShowSuggestions(false);
  }

  return (
    <div>
      <SearchInput
        isLoading={isLoading}
        onBlur={() => setShowSuggestions(false)}
        value={value}
        {...props}
      />

      <aside
        className={mergeClass(
          showSuggestions ? 'mt-2 opacity-100' : 'h-0 opacity-0',
          'transition-all'
        )}
      >
        <Command>
          <CommandList>
            <CommandGroup heading="Selecione um ativo">
              {isLoading && <CommandLoading>Buscando ativos...</CommandLoading>}
              <CommandEmpty>Nenhum ativo encontrado</CommandEmpty>
              {suggestionsList?.map((suggestion) => (
                <CommandItem
                  key={`${suggestion?.id} - ${suggestion?.name}`}
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
