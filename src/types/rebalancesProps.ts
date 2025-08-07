export type RebalancesProps = {
  _id: string;
  symbol: string;
  longName: string;
  status: string;
  currentAmount: number;
  gradePercent: number;
  currentPercent: number;
  targetPercent: number;
  targetAmount: number;
};

export type RebalancesRequestProps = {
  walletID: string;
  sort?: 'symbol' | 'targetAmount' | 'currentPercent' | 'gradePercent';
};

export type RebalancesResponseProps = {
  data: {
    rebalances: RebalancesProps[];
  };
};
