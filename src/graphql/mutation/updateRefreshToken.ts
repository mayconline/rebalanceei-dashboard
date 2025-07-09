export const REFRESH_TOKEN = `
  mutation updateRefreshToken($refreshToken: String!) {
    updateRefreshToken(input: { refreshToken: $refreshToken }) {
      token
      refreshToken
    }
  }
`;
