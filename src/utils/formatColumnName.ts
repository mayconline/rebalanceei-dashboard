export function formatColumnName(name: string) {
  return {
    [name]: name,
    grade: 'Nota',
    name: 'Nome',
    quantity: 'Quantidade',
    averagePrice: 'Preço Médio',
    classSymbol: 'Classe',
    actions: 'Ações',
    currentPercent: '% Atual',
    gradePercent: '% Ideal',
    targetAmount: 'Valor',
    costAmount: 'Saldo Aplicado',
    variationPercent: 'Rentabilidade',
    currentAmount: 'Saldo Atual',
  }[name];
}
