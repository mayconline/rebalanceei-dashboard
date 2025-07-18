import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { ROUTES_PATH } from '@/constants';
import { login, signUp } from '@/services/api';
import { handleSetAuthToken } from '@/services/cookies';
import type {
  AuthResponseProps,
  LoginRequestProps,
  SignUpRequestProps,
} from '@/types';
import { handleNotify } from '@/utils';

export const useAuth = () => {
  const route = useRouter();

  const handleLoginSuccessfully = useCallback(
    ({
      email,
      token,
      refreshToken,
    }: Pick<AuthResponseProps, 'token' | 'refreshToken' | 'email'>) => {
      handleSetAuthToken({
        accessToken: token,
        refreshToken,
      });

      handleNotify({
        message: `Seja Bem-vindo(a), ${email}!`,
      });

      route.push(ROUTES_PATH.TICKET);
    },
    [route]
  );

  const handleLogin = useCallback(
    async (data: LoginRequestProps) => {
      try {
        const { token, refreshToken, email } = await login(data);

        handleLoginSuccessfully({
          token,
          refreshToken,
          email,
        });
      } catch (error: any) {
        handleNotify({
          message: error?.message,
        });
      }
    },
    [handleLoginSuccessfully]
  );

  const handleSignUp = useCallback(
    async (data: SignUpRequestProps) => {
      try {
        const { token, refreshToken, email } = await signUp(data);

        handleLoginSuccessfully({
          token,
          refreshToken,
          email,
        });
      } catch (error: any) {
        handleNotify({
          message: error?.message,
        });
      }
    },
    [handleLoginSuccessfully]
  );

  return {
    handleLogin,
    handleSignUp,
  };
};
