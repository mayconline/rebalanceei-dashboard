'use client';

import { DataTable } from '@/components/shared';
import { Spinner } from '@/components/ui';
import { useGetTickets } from '@/hooks';
import { ticketTableColumns } from '@/pagesTemplate/TicketPage/ticketTableColumns';

export default function TicketPage() {
  const { tickets, isPending, isLoading } = useGetTickets();

  return (
    <main>
      <h1>Tickets</h1>
      {isPending && <p>Nenhuma carteira selecionada</p>}
      {isLoading && <Spinner />}

      <div className="container mx-auto py-10">
        {tickets && <DataTable columns={ticketTableColumns} data={tickets} />}
      </div>
    </main>
  );
}
