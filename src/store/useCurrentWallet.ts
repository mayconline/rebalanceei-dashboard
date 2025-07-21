import { create } from 'zustand';
import type { WalletProps } from '@/types';

interface CurrentWalletProps {
  currentWallet: WalletProps | null;
  setCurrentWallet: (wallet: WalletProps) => void;
  updateDescriptionCurrentWallet: (description: string) => void;
  resetCurrentWallet: () => void;
}

export const useCurrentWallet = create<CurrentWalletProps>((set) => ({
  currentWallet: null,
  setCurrentWallet: (wallet: WalletProps) => set({ currentWallet: wallet }),
  updateDescriptionCurrentWallet: (description: string) =>
    set(({ currentWallet }) => ({
      currentWallet: currentWallet?._id
        ? { ...currentWallet, description }
        : currentWallet,
    })),
  resetCurrentWallet: () => set({ currentWallet: null }),
}));
