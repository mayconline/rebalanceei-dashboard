export type TicketProps = {
  _id: string;
  symbol: string;
  name: string;
  quantity: number;
  averagePrice: number;
  grade: number;
  classSymbol: string;
};

export type TicketRequestProps = {
  walletID: string;
  sort?: string;
};

export type TicketResponseProps = {
  data: {
    getTicketsByWallet: TicketProps[];
  };
};
