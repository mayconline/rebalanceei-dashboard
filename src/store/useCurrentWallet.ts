import { create } from 'zustand';
import type { WalletProps } from '@/types';

interface CurrentWalletProps {
  currentWallet: WalletProps | null;
  setCurrentWallet: (wallet: WalletProps) => void;
  resetCurrentWallet: () => void;
}

export const useCurrentWallet = create<CurrentWalletProps>((set) => ({
  currentWallet: null,
  setCurrentWallet: (wallet: WalletProps) => set({ currentWallet: wallet }),
  resetCurrentWallet: () => set({ currentWallet: null }),
}));
