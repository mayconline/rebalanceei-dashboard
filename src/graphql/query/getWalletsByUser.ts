export const GET_WALLETS_BY_USER = `
  query getWalletByUser {
    getWalletByUser {
      _id
      description
      sumCostWallet
      sumAmountWallet
      sumGradeWallet
      percentRentabilityWallet
      percentPositionWallet
      sumAmountAllWallet
      ticket {
        _id
        symbol
        name
        quantity
        averagePrice
        grade
        classSymbol
      }
    }
  }
`;
