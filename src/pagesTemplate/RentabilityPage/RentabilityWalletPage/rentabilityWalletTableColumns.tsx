import { DataTableColumnHeader } from '@/components/shared';
import type { ColumnDef } from '@/services/tanstackTable';
import type { rentabilityProps } from '@/types';
import { formatMoney, formatPercent, formatTicketSymbol } from '@/utils';

export const rentabiltyWalletTableColumns: ColumnDef<rentabilityProps>[] = [
  {
    accessorKey: 'name',
    accessorFn: ({ symbol, longName }) =>
      `${formatTicketSymbol(symbol)} - ${longName}`,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Nome" />;
    },
  },
  {
    accessorKey: 'costAmount',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Saldo Aplicado" />;
    },
    cell: ({ row }) => {
      return formatMoney(row.getValue('costAmount'));
    },
  },
  {
    accessorKey: 'variationPercent',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Rentabilidade" />;
    },
    cell: ({ row }) => {
      return formatPercent(row.getValue('variationPercent'));
    },
  },
  {
    accessorKey: 'currentAmount',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Saldo Atual" />;
    },
    cell: ({ row }) => {
      return formatMoney(row.getValue('currentAmount'));
    },
  },
];
