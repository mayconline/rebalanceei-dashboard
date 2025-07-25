import type { AuthResponseProps, PlanProps } from '@/types';

export type UserProps = Pick<AuthResponseProps, '_id' | 'email' | 'role'> & {
  plan: PlanProps | null;
};

export type UserResponseProps = {
  data: {
    getUserByToken: UserProps;
  };
};
