export function formatStatus(status: string) {
  return {
    [status]: status,
    BUY: 'Comprar',
    KEEP: 'Aguardar',
    ANALYZE: 'Analizar',
  }[status];
}
