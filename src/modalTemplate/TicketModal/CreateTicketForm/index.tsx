'use client';

import { Button, Form, useForm } from '@/components/ui';
import { useCreateTicket } from '@/hooks';
import { TicketFormFields } from '@/modalTemplate/TicketModal/TicketFormFields';
import { useCurrentWallet } from '@/store';
import type { CreateTicketRequestProps } from '@/types';
import { CreateTicketFormSchema, zodResolver } from '@/validations';

export const CreateTicketForm = () => {
  const currentWallet = useCurrentWallet((state) => state.currentWallet);

  const { createTicket, isPending } = useCreateTicket();

  const form = useForm<CreateTicketRequestProps>({
    resolver: zodResolver(CreateTicketFormSchema),
    defaultValues: {
      walletID: currentWallet?._id || '',
      symbol: '',
      name: '',
      quantity: 0,
      averagePrice: 0,
      grade: 0,
    },
  });

  return (
    <Form.Provider {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(createTicket)}
      >
        <TicketFormFields
          form={form}
          isLoadingSuggestions={false}
          showName
          suggestionsList={null}
        />

        <footer className="flex justify-end">
          <Button
            disabled={
              form.formState.isSubmitting ||
              !form.formState.isValid ||
              isPending
            }
            isLoading={isPending || form.formState.isSubmitting}
            type="submit"
          >
            Adicionar Ativo
          </Button>
        </footer>
      </form>
    </Form.Provider>
  );
};
