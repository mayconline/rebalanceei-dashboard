'use client';

import Link from 'next/link';
import { Button, Form, Input, Switch, useForm } from '@/components/ui';
import { useAuth } from '@/hooks';
import { env } from '@/services';
import type { SignUpRequestProps } from '@/types';
import { SignUpFormSchema, zodResolver } from '@/validations';

export const SignUpForm = () => {
  const { handleSignUp } = useAuth();

  const form = useForm<SignUpRequestProps>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      checkTerms: false,
    },
  });

  return (
    <Form.Provider {...form}>
      <form
        className="w-full space-y-6"
        onSubmit={form.handleSubmit(handleSignUp)}
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

        <Form.Field
          control={form.control}
          name="checkTerms"
          render={({ field }) => (
            <>
              <Form.Item className="flex flex-row justify-between">
                <Form.Label className="text-sm leading-none">
                  <Link
                    href={env.NEXT_PUBLIC_PRIVACY_POLICY_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Aceito os termos e condições
                  </Link>
                </Form.Label>
                <Form.Control>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </Form.Control>
              </Form.Item>
              <Form.Message />
            </>
          )}
        />

        <Button
          className="w-full"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
          isLoading={form.formState.isSubmitting}
          type="submit"
        >
          Criar Conta
        </Button>
      </form>
    </Form.Provider>
  );
};
