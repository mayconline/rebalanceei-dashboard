import type { AuthResponseProps } from '@/types';

export type LoginRequestProps = {
  email: string;
  password: string;
};

export type LoginResponseProps = {
  data: {
    login: AuthResponseProps;
  };
};
