type UpdateRefreshTokenProps = {
  accessToken: string;
  refreshToken: string;
};

export type UpdateRefreshTokenResponseProps = {
  data: {
    updateRefreshToken: UpdateRefreshTokenProps;
  };
};
