import type { AuthResponseProps } from '@/types';

export type SignUpRequestProps = {
  email: string;
  password: string;
  checkTerms: boolean;
};

export type SignUpResponseProps = {
  data: {
    createUser: AuthResponseProps;
  };
};
