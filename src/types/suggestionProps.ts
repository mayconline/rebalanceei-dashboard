export type SuggestionProps = {
  symbol: string;
  longname: string;
  shortname: string;
};

export type SuggestionsListProps = {
  id: string;
  name: string;
};

export type SuggestionsListRequestProps = {
  ticket?: string;
};

export type SuggestionsListResponseProps = {
  quotes: SuggestionProps[];
};
