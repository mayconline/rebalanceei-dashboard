export type PlanProps = {
  transactionDate: number;
  renewDate: number;
  description: string;
  localizedPrice: string;
  productId: string;
  subscriptionPeriodAndroid: string;
  packageName: string;
  transactionId: string;
  purchaseToken: string;
  platform?: 'ANDROID' | 'IOS';
  autoRenewing: boolean;
};
