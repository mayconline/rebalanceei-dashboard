'use client';

import { DataTable } from '@/components/shared';
import { Spinner } from '@/components/ui';
import { useGetRebalances } from '@/hooks';
import { rebalanceTableColumns } from '@/pagesTemplate/RebalancePage/rebalanceTableColumns';

export default function RebalancePage() {
  const { rebalances, isPending, isLoading } = useGetRebalances();

  return (
    <main>
      <header className="flex items-center justify-between">
        <h1>Rebalances</h1>
      </header>
      <div className="container mx-auto py-10">
        {!isLoading && isPending && <p>Nenhuma carteira selecionada</p>}
        {isLoading && <Spinner />}
        {rebalances && (
          <DataTable columns={rebalanceTableColumns} data={rebalances} />
        )}
      </div>
    </main>
  );
}
