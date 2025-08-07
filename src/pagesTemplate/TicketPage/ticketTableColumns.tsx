import { DataTableColumnHeader } from '@/components/shared';
import { TicketActions } from '@/pagesTemplate/TicketPage/TicketActions';
import type { ColumnDef } from '@/services/tanstackTable';
import type { TicketProps } from '@/types';
import { formatMoney, formatTicketSymbol } from '@/utils';

export const ticketTableColumns: ColumnDef<TicketProps>[] = [
  {
    accessorKey: 'grade',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Nota" />;
    },
  },
  {
    accessorKey: 'name',
    accessorFn: ({ symbol, name }) => `${formatTicketSymbol(symbol)} - ${name}`,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Nome" />;
    },
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Quantidade" />;
    },
  },
  {
    accessorKey: 'averagePrice',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Preço Médio" />;
    },
    cell: ({ row }) => {
      return formatMoney(row.getValue('averagePrice'));
    },
  },
  {
    accessorKey: 'classSymbol',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Classe" />;
    },
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
