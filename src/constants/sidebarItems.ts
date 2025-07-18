import {
  ActivityIcon,
  BadgeQuestionMarkIcon,
  ChartPieIcon,
  CrownIcon,
  HandCoinsIcon,
  LogOutIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SunMoonIcon,
  TrendingUpIcon,
  UserLockIcon,
  WalletIcon,
  WalletMinimalIcon,
} from 'lucide-react';
import { LEVEL_ACCESS, ROUTES_PATH } from '@/constants';
import { env } from '@/services';

const MAIN_NAV = [
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

const OTHER_NAV = [
  {
    title: 'Tema',
    icon: SunMoonIcon,
    action: 'toggleTheme',
  },
  {
    title: 'Ajuda',
    href: ROUTES_PATH.HELP,
    icon: BadgeQuestionMarkIcon,
  },
  {
    title: 'Termos de uso',
    href: env.NEXT_PUBLIC_PRIVACY_POLICY_URL,
    icon: ShieldCheckIcon,
  },
  {
    title: 'App Rebalanceei',
    href: 'https://play.google.com/store/apps/details?id=com.rebalanceei',
    icon: SmartphoneIcon,
  },
];

const USER_NAV = [
  {
    title: 'Minha Conta',
    href: ROUTES_PATH.PROFILE,
    icon: UserLockIcon,
  },
  {
    title: 'Meu Plano Atual',
    href: ROUTES_PATH.PLAN,
    icon: CrownIcon,
  },
  {
    title: 'Sair',
    href: null,
    icon: LogOutIcon,
    action: 'logout',
  },
];

export const SIDEBAR_ITEMS = {
  mainNav: {
    label: 'Principal',
    items: MAIN_NAV,
  },
  otherNav: {
    label: 'Outros',
    items: OTHER_NAV,
  },
  userNav: {
    label: 'Usuário',
    items: USER_NAV,
  },
};
