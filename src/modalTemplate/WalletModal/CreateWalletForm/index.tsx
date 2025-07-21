'use client';

import { Button, Form, Input, useForm } from '@/components/ui';
import { useCreateWallet } from '@/hooks';
import type { CreateWalletRequestProps } from '@/types';
import { CreateWalletFormSchema, zodResolver } from '@/validations';

export const CreateWalletForm = () => {
  const { createWallet, isPending } = useCreateWallet();

  const form = useForm<CreateWalletRequestProps>({
    resolver: zodResolver(CreateWalletFormSchema),
    defaultValues: {
      description: '',
    },
  });

  return (
    <Form.Provider {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(createWallet)}
      >
        <Form.Field
          control={form.control}
          name="description"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Descrição</Form.Label>
              <Form.Control>
                <Input placeholder="Minha carteira" {...field} />
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
          Criar Carteira
        </Button>
      </form>
    </Form.Provider>
  );
};
