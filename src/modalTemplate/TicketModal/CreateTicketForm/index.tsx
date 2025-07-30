'use client';

import { Button, Form, Input, useForm } from '@/components/ui';
import { useCreateTicket } from '@/hooks';
import { useCurrentWallet } from '@/store';
import type { CreateTicketRequestProps } from '@/types';
import { CreateTicketFormSchema, zodResolver } from '@/validations';

export const CreateTicketForm = () => {
  const { createTicket, isPending } = useCreateTicket();
  const currentWallet = useCurrentWallet((state) => state.currentWallet);

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
        <Form.Field
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Pesquise e selecione um ativo</Form.Label>
              <Form.Control>
                <Input placeholder="RBLC3" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="symbol"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Ativo Selecionado</Form.Label>
              <Form.Control>
                <Input placeholder="Nenhum ativo selecionado" {...field} />
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

        <Button
          disabled={
            form.formState.isSubmitting || !form.formState.isValid || isPending
          }
          isLoading={isPending || form.formState.isSubmitting}
          type="submit"
        >
          Adicionar Ativo
        </Button>
      </form>
    </Form.Provider>
  );
};
