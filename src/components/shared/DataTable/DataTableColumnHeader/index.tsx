import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from 'lucide-react';
import {
  Button,
  ButtonSizes,
  ButtonVariants,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';
import type { Column } from '@/services/tanstackTable';
import { mergeClass } from '@/utils';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={mergeClass(className)}>{title}</div>;
  }

  return (
    <div className={mergeClass('flex items-center gap-2', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="-ml-3 h-8 data-[state=open]:bg-accent"
            size={ButtonSizes.Sm}
            variant={ButtonVariants.Ghost}
          >
            <span>{title}</span>

            {column.getIsSorted() === 'desc' && (
              <ArrowDown className="size-4 shrink-0" />
            )}

            {column.getIsSorted() === 'asc' && (
              <ArrowUp className="size-4 shrink-0" />
            )}

            {column.getIsSorted() === false && (
              <ChevronsUpDown className="size-4 shrink-0" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUp className="size-4 shrink-0" />
            Crescente
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDown className="size-4 shrink-0" />
            Decrescente
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="size-4 shrink-0" />
            Esconder
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
