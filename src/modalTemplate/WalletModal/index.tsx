'use client';

import { useParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { CreateWalletForm } from '@/modalTemplate/WalletModal/CreateWalletForm';
import { UpdateWalletForm } from '@/modalTemplate/WalletModal/UpdateWalletForm';

export default function WalletModal() {
  const params = useParams();
  const router = useRouter();

  const isEdit = useMemo(() => Boolean(params?.id), [params?.id]);

  return (
    <Dialog defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? 'Editar Carteira' : 'Criar Nova Carteira'}
          </DialogTitle>
          {isEdit && (
            <DialogDescription>
              Alterar a descrição da carteira
            </DialogDescription>
          )}
        </DialogHeader>

        {!isEdit && <CreateWalletForm />}
        {isEdit && <UpdateWalletForm />}
      </DialogContent>
    </Dialog>
  );
}
