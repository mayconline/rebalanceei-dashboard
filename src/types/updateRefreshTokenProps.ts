type UpdateRefreshTokenProps = {
  token: string;
  refreshToken: string;
};

export type UpdateRefreshTokenResponseProps = {
  data: {
    updateRefreshToken: UpdateRefreshTokenProps;
  };
};
