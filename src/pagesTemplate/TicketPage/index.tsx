'use client';

import { useGetTickets } from '@/hooks';

export default function TicketPage() {
  const { tickets, isPending, isLoading } = useGetTickets();

  return (
    <main>
      <h1>Tickets</h1>
      {isPending && <p>Nenhuma carteira selecionada</p>}
      {isLoading && <p>Loading...</p>}
      {!(isPending || tickets?.length) && <p>Nenhum ativo cadastrado</p>}
      {tickets?.map((ticket) => (
        <div key={ticket._id}>
          <p>{ticket.symbol}</p>
          <p>{ticket.name}</p>
        </div>
      ))}
    </main>
  );
}
