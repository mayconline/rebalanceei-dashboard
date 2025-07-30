'use client';

import { Button, ButtonVariants, Form, Input, useForm } from '@/components/ui';
import { useDeleteWallet, useUpdateWallet } from '@/hooks';
import { useCurrentWallet } from '@/store';
import type { UpdateWalletRequestProps } from '@/types';
import { UpdateWalletFormSchema, zodResolver } from '@/validations';

export const UpdateWalletForm = () => {
  const currentWallet = useCurrentWallet((state) => state.currentWallet);

  const { updateWallet, isPending } = useUpdateWallet();
  const { deleteWallet, isPending: isPendingDelete } = useDeleteWallet();

  const form = useForm<UpdateWalletRequestProps>({
    resolver: zodResolver(UpdateWalletFormSchema),
    defaultValues: {
      _id: currentWallet?._id || '',
      description: currentWallet?.description || '',
    },
  });

  return (
    <Form.Provider {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(updateWallet)}
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

        <footer className="flex items-center justify-between">
          <Button
            disabled={
              form.formState.isSubmitting ||
              !form.formState.isValid ||
              isPending ||
              isPendingDelete
            }
            isLoading={isPendingDelete}
            onClick={() => deleteWallet({ _id: form.getValues('_id') })}
            type="button"
            variant={ButtonVariants.Destructive}
          >
            Excluir Carteira
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
            Alterar Carteira
          </Button>
        </footer>
      </form>
    </Form.Provider>
  );
};
