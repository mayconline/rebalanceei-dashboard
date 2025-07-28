import type { ColumnDef } from '@/services/tanstackTable';
import type { TicketProps } from '@/types';
import { formatMoney } from '@/utils';
import { TicketActions } from './TicketActions';

export const ticketTableColumns: ColumnDef<TicketProps>[] = [
  {
    accessorKey: 'grade',
    header: 'Nota',
  },
  {
    accessorKey: 'name',
    accessorFn: ({ symbol, name }) => `${symbol} - ${name}`,
    header: 'Nome',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantidade',
  },
  {
    accessorKey: 'averagePrice',
    header: 'Preço Medio',
    cell: ({ row }) => {
      return formatMoney(row.getValue('averagePrice'));
    },
  },
  {
    accessorKey: 'classSymbol',
    header: 'Classe',
  },
  {
    id: 'actions',
    header: 'Ações',
    cell: ({ row }) => {
      const ticket = row.original;

      return <TicketActions ticket={ticket} />;
    },
  },
];
