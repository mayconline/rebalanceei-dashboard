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

export type CreateWalletRequestProps = {
  description: string;
};

export type CreateWalletResponseProps = {
  data: {
    createWallet: WalletProps;
  };
};

export type UpdateWalletRequestProps = {
  _id: string;
  description: string;
};

export type UpdateWalletResponseProps = {
  data: {
    updateWallet: Pick<WalletProps, '_id' | 'description'>;
  };
};

export type DeleteWalletRequestProps = {
  _id: string;
};

export type DeleteWalletResponseProps = {
  data: {
    deleteWallet: boolean;
  };
};
