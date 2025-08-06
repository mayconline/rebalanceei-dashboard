'use client';

import { Button, ButtonVariants, Form, useForm } from '@/components/ui';
import { useDeleteTicket, useUpdateTicket } from '@/hooks';
import { TicketFormFields } from '@/modalTemplate/TicketModal/TicketFormFields';
import { useCurrentTicket, useCurrentWallet } from '@/store';
import type { UpdateTicketRequestProps } from '@/types';
import { UpdateTicketFormSchema, zodResolver } from '@/validations';

export const UpdateTicketForm = () => {
  const currentWallet = useCurrentWallet((state) => state.currentWallet);
  const currentTicket = useCurrentTicket((state) => state.currentTicket);

  const { updateTicket, isPending } = useUpdateTicket();
  const { deleteTicket, isPending: isPendingDelete } = useDeleteTicket();

  const form = useForm<UpdateTicketRequestProps>({
    resolver: zodResolver(UpdateTicketFormSchema),
    defaultValues: {
      _id: currentTicket?._id || '',
      symbol: currentTicket?.symbol || '',
      name: currentTicket?.name || '',
      quantity: currentTicket?.quantity || 0,
      averagePrice: currentTicket?.averagePrice || 0,
      grade: currentTicket?.grade || 0,
    },
  });

  return (
    <Form.Provider {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(updateTicket)}
      >
        <TicketFormFields form={form} />

        <footer className="flex items-center justify-between">
          <Button
            disabled={
              form.formState.isSubmitting ||
              !form.formState.isValid ||
              isPending ||
              isPendingDelete
            }
            isLoading={isPendingDelete}
            onClick={() =>
              deleteTicket({
                _id: form.getValues('_id'),
                walletID: currentWallet?._id || '',
              })
            }
            type="button"
            variant={ButtonVariants.Destructive}
          >
            Excluir Ativo
          </Button>

          <Button
            disabled={
              form.formState.isSubmitting ||
              !form.formState.isValid ||
              isPending
            }
            isLoading={isPending || form.formState.isSubmitting}
            type="submit"
          >
            Alterar Ativo
          </Button>
        </footer>
      </form>
    </Form.Provider>
  );
};
