'use client';

import { Button, Form, Input, useForm } from '@/components/ui';
import { useAuth } from '@/hooks';
import type { LoginRequestProps } from '@/types';
import { LoginFormSchema, zodResolver } from '@/validations';

export const LoginForm = () => {
  const { handleLogin } = useAuth();

  const form = useForm<LoginRequestProps>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Form.Provider {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <Form.Field
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>E-mail</Form.Label>
              <Form.Control>
                <Input
                  placeholder="meuemail@teste.com.br"
                  type="email"
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Password</Form.Label>
              <Form.Control>
                <Input placeholder="********" type="password" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Button
          className="w-full"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          isLoading={form.formState.isSubmitting}
          type="submit"
        >
          Entrar
        </Button>
      </form>
    </Form.Provider>
  );
};
