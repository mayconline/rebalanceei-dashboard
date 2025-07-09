export const LOGIN = `
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      _id
      token
      refreshToken
      role
      email
    }
  }
`;
