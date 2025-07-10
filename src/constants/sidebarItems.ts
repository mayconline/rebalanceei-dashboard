import {
  ActivityIcon,
  ChartPieIcon,
  HandCoinsIcon,
  TrendingUpIcon,
  WalletIcon,
  WalletMinimalIcon,
} from 'lucide-react';
import { LEVEL_ACCESS, ROUTES_PATH } from '@/constants';

export const SIDEBAR_ITEMS = [
  {
    title: 'Ativos',
    href: ROUTES_PATH.TICKET,
    icon: WalletIcon,
  },
  {
    title: 'Rebalancear',
    href: ROUTES_PATH.REBALANCE,
    icon: TrendingUpIcon,
  },
  {
    title: 'Variação',
    href: ROUTES_PATH.RENTABILITY,
    icon: ActivityIcon,
    childrens: [
      {
        title: 'Carteira',
        href: ROUTES_PATH.RENTABILITY_WALLET,
        icon: WalletMinimalIcon,
      },
      {
        title: 'Proventos',
        href: ROUTES_PATH.RENTABILITY_EARNING,
        icon: HandCoinsIcon,
        accessRole: LEVEL_ACCESS.PREMIUM,
      },
    ],
  },
  {
    title: 'Gráficos',
    href: ROUTES_PATH.CHART,
    icon: ChartPieIcon,
  },
];
