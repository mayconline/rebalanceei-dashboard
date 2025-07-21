export const CREATE_WALLET = `
  mutation createWallet($description: String!) {
    createWallet(input: { description: $description }) {
      _id
      description
      sumCostWallet
      sumAmountWallet
      sumGradeWallet
      percentRentabilityWallet
      percentPositionWallet
      sumAmountAllWallet
    }
  }
`;
