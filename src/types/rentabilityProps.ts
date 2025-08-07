export type rentabilityProps = {
  _id: string;
  symbol: string;
  longName: string;
  costAmount: number;
  currentAmount: number;
  variationAmount: number;
  variationPercent: number;
};

export type rentabilityRequestProps = {
  walletID: string;
  sort?: 'costAmount' | 'currentAmount' | 'symbol' | 'variationPercent';
};

export type rentabilityResponseProps = {
  data: {
    getRentability: rentabilityProps[];
  };
};
