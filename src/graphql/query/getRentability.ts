export const GET_RENTABILITY = `
  query getRentability($walletID: ID!, $sort: SortRentability!) {
    getRentability(walletID: $walletID, sort: $sort) {
      _id
      symbol
      longName
      costAmount
      currentAmount
      variationAmount
      variationPercent
    }
  }
`;
