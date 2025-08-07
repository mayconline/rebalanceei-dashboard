import { ArrowUpDown } from 'lucide-react';
import { Button, ButtonSizes, ButtonVariants } from '@/components/ui';
import type { ColumnDef } from '@/services/tanstackTable';
import type { RebalancesProps } from '@/types';
import {
  formatMoney,
  formatPercent,
  formatStatus,
  formatTicketSymbol,
} from '@/utils';

export const rebalanceTableColumns: ColumnDef<RebalancesProps>[] = [
  {
    accessorKey: 'name',
    accessorFn: ({ symbol, longName }) =>
      `${formatTicketSymbol(symbol)} - ${longName}`,
    header: ({ column }) => {
      return (
        <Button
          onClick={column.getToggleSortingHandler()}
          size={ButtonSizes.Sm}
          variant={ButtonVariants.Ghost}
        >
          Nome
          <ArrowUpDown className="size-4 shrink-0" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'currentPercent',
    header: 'Porcentagem Atual',
    cell: ({ row }) => {
      return formatPercent(row.getValue('currentPercent'));
    },
  },
  {
    accessorKey: 'gradePercent',
    header: 'Porcentagem Ideal',
    cell: ({ row }) => {
      return formatPercent(row.getValue('gradePercent'));
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return formatStatus(row.getValue('status'));
    },
  },
  {
    accessorKey: 'targetAmount',
    header: ({ column }) => {
      return (
        <Button
          onClick={column.getToggleSortingHandler()}
          size={ButtonSizes.Sm}
          variant={ButtonVariants.Ghost}
        >
          Valor para rebalancear
          <ArrowUpDown className="size-4 shrink-0" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return formatMoney(row.getValue('targetAmount'));
    },
  },
];
