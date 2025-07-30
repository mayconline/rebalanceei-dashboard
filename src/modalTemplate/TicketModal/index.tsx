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
import { CreateTicketForm } from '@/modalTemplate/TicketModal/CreateTicketForm';
import { UpdateTicketForm } from '@/modalTemplate/TicketModal/UpdateTicketForm';

export default function TicketModal() {
  const params = useParams();
  const router = useRouter();

  const isEdit = useMemo(() => Boolean(params?.id), [params?.id]);

  return (
    <Dialog defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? 'Editar Ativo' : 'Adicionar Novo Ativo'}
          </DialogTitle>
          {isEdit && (
            <DialogDescription>
              Alterar as informações do ativo
            </DialogDescription>
          )}
        </DialogHeader>

        {!isEdit && <CreateTicketForm />}
        {isEdit && <UpdateTicketForm />}
      </DialogContent>
    </Dialog>
  );
}
