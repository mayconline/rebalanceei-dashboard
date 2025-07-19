export type WalletProps = {
  _id: string;
  description: string;
  sumCostWallet: number;
  sumAmountWallet: number;
  sumGradeWallet: number;
  percentRentabilityWallet: number;
  percentPositionWallet: number;
  sumAmountAllWallet: number;
};

export type WalletsResponseProps = {
  data: {
    getWalletByUser: WalletProps[];
  };
};
