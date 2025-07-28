'use client';

import { DataTableBody } from '@/components/shared/DataTable/DataTableBody';
import { DataTableHeader } from '@/components/shared/DataTable/DataTableHeader';
import { DataTablePagination } from '@/components/shared/DataTable/DataTablePagination';
import { Table } from '@/components/ui';
import {
  type ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@/services/tanstackTable';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border">
      <Table>
        <DataTableHeader table={table} />
        <DataTableBody columns={columns} table={table} />
      </Table>

      <DataTablePagination table={table} />
    </div>
  );
};
