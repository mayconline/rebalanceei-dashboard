'use client';

import { DataTableBody } from '@/components/shared/DataTable/DataTableBody';
import { DataTableHeader } from '@/components/shared/DataTable/DataTableHeader';
import { DataTablePagination } from '@/components/shared/DataTable/DataTablePagination';
import { DataTableViewOptions } from '@/components/shared/DataTable/DataTableViewOptions';
import { SearchInput, Table } from '@/components/ui';
import {
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
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
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <section>
      <aside className="flex items-center py-4">
        <SearchInput
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          placeholder="RBLC3"
        />

        <DataTableViewOptions table={table} />
      </aside>

      <main className="overflow-hidden rounded-md border">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody columns={columns} table={table} />
        </Table>

        <DataTablePagination table={table} />
      </main>
    </section>
  );
};

export { DataTableColumnHeader } from '@/components/shared/DataTable/DataTableColumnHeader';
