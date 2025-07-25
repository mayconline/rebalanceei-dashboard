export const GET_USER_BY_TOKEN = `
  query getUserByToken {
    getUserByToken {
      _id
      email
      role
      plan {
        transactionDate
        renewDate
        description
        localizedPrice
        productId
        subscriptionPeriodAndroid
        packageName
        transactionId
        purchaseToken
        platform
        autoRenewing
      }
    }
  }
`;
