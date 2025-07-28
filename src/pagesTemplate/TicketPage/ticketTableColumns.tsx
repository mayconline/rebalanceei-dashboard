import { ArrowUpDown } from 'lucide-react';
import { Button, ButtonSizes, ButtonVariants } from '@/components/ui';
import type { ColumnDef } from '@/services/tanstackTable';
import type { TicketProps } from '@/types';
import { formatMoney } from '@/utils';
import { TicketActions } from './TicketActions';

export const ticketTableColumns: ColumnDef<TicketProps>[] = [
  {
    accessorKey: 'grade',
    header: ({ column }) => {
      return (
        <Button
          onClick={column.getToggleSortingHandler()}
          size={ButtonSizes.Sm}
          variant={ButtonVariants.Ghost}
        >
          Nota
          <ArrowUpDown className="size-4 shrink-0" />
        </Button>
      );
    },
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
