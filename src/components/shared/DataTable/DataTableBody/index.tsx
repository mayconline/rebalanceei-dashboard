import { TableBody, TableCell, TableRow } from '@/components/ui';
import {
  type ColumnDef,
  flexRender,
  type Table,
} from '@/services/tanstackTable';

interface DataTableBodyProps<TData, TValue> {
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
}

export function DataTableBody<TData, TValue>({
  table,
  columns,
}: DataTableBodyProps<TData, TValue>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow data-state={row.getIsSelected() && 'selected'} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell className="h-24 text-center" colSpan={columns.length}>
            Nenhum ativo cadastrado
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
