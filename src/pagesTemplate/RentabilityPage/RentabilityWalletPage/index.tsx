'use client';

import { DataTable } from '@/components/shared';
import { Spinner } from '@/components/ui';
import { useGetRentability } from '@/hooks';
import { rentabiltyWalletTableColumns } from './rentabilityWalletTableColumns';

export default function RentabilityWalletPage() {
  const { rentabilities, isPending, isLoading } = useGetRentability();

  return (
    <main>
      <header className="flex items-center justify-between">
        <h1>Variação da carteira</h1>
      </header>
      <div className="container mx-auto py-10">
        {!isLoading && isPending && <p>Nenhuma carteira selecionada</p>}
        {isLoading && <Spinner />}
        {rentabilities && (
          <DataTable
            columns={rentabiltyWalletTableColumns}
            data={rentabilities}
          />
        )}
      </div>
    </main>
  );
}
