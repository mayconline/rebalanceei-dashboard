import { DataTableColumnHeader } from '@/components/shared';
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
      return <DataTableColumnHeader column={column} title="Nome" />;
    },
  },
  {
    accessorKey: 'currentPercent',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Porcentagem Atual" />
      );
    },
    cell: ({ row }) => {
      return formatPercent(row.getValue('currentPercent'));
    },
  },
  {
    accessorKey: 'gradePercent',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Porcentagem Ideal" />
      );
    },
    cell: ({ row }) => {
      return formatPercent(row.getValue('gradePercent'));
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => {
      return formatStatus(row.getValue('status'));
    },
  },
  {
    accessorKey: 'targetAmount',
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title=" Valor para rebalancear"
        />
      );
    },
    cell: ({ row }) => {
      return formatMoney(row.getValue('targetAmount'));
    },
  },
];
