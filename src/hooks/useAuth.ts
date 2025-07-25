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
    ({ email, token, refreshToken }: AuthResponseProps) => {
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
        const loginResponse = await login(data);

        handleLoginSuccessfully(loginResponse);
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
        const signUpResponse = await signUp(data);

        handleLoginSuccessfully(signUpResponse);
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
