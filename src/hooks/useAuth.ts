import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { ROUTES_PATH } from '@/constants';
import { login, signUp } from '@/services/api';
import { handleDeleteAuthToken, handleSetAuthToken } from '@/services/cookies';
import { useCurrentWallet } from '@/store';
import type {
  AuthResponseProps,
  LoginRequestProps,
  SignUpRequestProps,
} from '@/types';
import { handleNotify } from '@/utils';

export const useAuth = () => {
  const router = useRouter();
  const resetCurrentWallet = useCurrentWallet(
    (state) => state.resetCurrentWallet
  );

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

      router.push(ROUTES_PATH.TICKET);
    },
    [router]
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

  const handleLogout = useCallback(() => {
    resetCurrentWallet();
    handleDeleteAuthToken();

    router.push(ROUTES_PATH.LOGIN);
  }, [resetCurrentWallet, router]);

  return {
    handleLogin,
    handleSignUp,
    handleLogout,
  };
};
