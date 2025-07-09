type LoginProps = {
  _id: string;
  token: string;
  refreshToken: string;
  role: string;
  email: string;
};

export type LoginRequestProps = {
  email: string;
  password: string;
};

export type LoginResponseProps = {
  data: {
    login: LoginProps;
  };
};
