'use client';

import { Button, Form, Input, useForm } from '@/components/ui';
import { handleLogin } from '@/services/api';
import { handleSetAuthToken } from '@/services/cookies';
import { handleNotify } from '@/utils';
import { LoginFormSchema, type z, zodResolver } from '@/validations';

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    const { token, refreshToken } = await handleLogin(data);

    handleSetAuthToken({
      accessToken: token,
      refreshToken,
    });

    handleNotify({
      message: 'Formulário enviado com sucesso!',
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form.Provider {...form}>
      <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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
