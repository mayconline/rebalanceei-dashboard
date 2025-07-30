'use client';

import { Button, ButtonVariants, Form, Input, useForm } from '@/components/ui';
import { useDeleteTicket, useUpdateTicket } from '@/hooks';
import { useCurrentWallet } from '@/store';
import type { UpdateTicketRequestProps } from '@/types';
import { UpdateTicketFormSchema, zodResolver } from '@/validations';

export const UpdateTicketForm = () => {
  const currentWallet = useCurrentWallet((state) => state.currentWallet);
  const { updateTicket, isPending } = useUpdateTicket();
  const { deleteTicket, isPending: isPendingDelete } = useDeleteTicket();

  const form = useForm<UpdateTicketRequestProps>({
    resolver: zodResolver(UpdateTicketFormSchema),
    defaultValues: {
      _id: '',
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
        onSubmit={form.handleSubmit(updateTicket)}
      >
        <Form.Field
          control={form.control}
          name="symbol"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Ativo Selecionado</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Nenhum ativo selecionado"
                  {...field}
                  disabled
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="grade"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Dê uma Nota</Form.Label>
              <Form.Control>
                <Input placeholder="0 a 100" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Quantidade</Form.Label>
              <Form.Control>
                <Input placeholder="9999" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="averagePrice"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Preço Médio</Form.Label>
              <Form.Control>
                <Input placeholder="Preço Médio de Compra" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

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
