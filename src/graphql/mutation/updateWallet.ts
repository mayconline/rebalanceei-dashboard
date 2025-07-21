export const UPDATE_WALLET = `
  mutation updateWallet($_id: ID!, $description: String!) {
    updateWallet(_id: $_id, input: { description: $description }) {
      _id
      description
    }
  }
`;
