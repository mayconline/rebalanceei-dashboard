export function formatTicketSymbol(symbol?: string) {
  return symbol?.split('.')[0];
}
