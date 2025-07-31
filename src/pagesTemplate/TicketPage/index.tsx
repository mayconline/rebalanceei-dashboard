'use client';

import { PlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/components/shared';
import { Button, ButtonSizes, Spinner } from '@/components/ui';
import { ROUTES_PATH } from '@/constants';
import { useGetTickets } from '@/hooks';
import { ticketTableColumns } from '@/pagesTemplate/TicketPage/ticketTableColumns';

export default function TicketPage() {
  const router = useRouter();
  const { tickets, isPending, isLoading } = useGetTickets();

  return (
    <main>
      <header className="flex items-center justify-between">
        <h1>Tickets</h1>

        {!isPending && (
          <Button
            disabled={isPending}
            onClick={() => router.push(`${ROUTES_PATH.TICKET}/add`)}
            size={ButtonSizes.Sm}
          >
            <span>Adicionar Ativo</span>
            <PlusIcon className="size-4 shrink-0" />
          </Button>
        )}
      </header>
      <div className="container mx-auto py-10">
        {isPending && <p>Nenhuma carteira selecionada</p>}
        {isLoading && <Spinner />}
        {tickets && <DataTable columns={ticketTableColumns} data={tickets} />}
      </div>
    </main>
  );
}
