import { create } from 'zustand';
import type { ConfirmModalProps } from '@/types';

interface ModalStoreProps {
  contentConfirmModal?: ConfirmModalProps;
  isOpenConfirmModal: boolean;
  isLoadingModal: boolean;
  openConfirmModal: (contentConfirmModal: ConfirmModalProps) => void;
  closeConfirmModal: () => void;
  setLoadingModal: (state: boolean) => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  isOpenConfirmModal: false,
  isLoadingModal: false,
  openConfirmModal: (contentConfirmModal) => {
    set({ isOpenConfirmModal: true, contentConfirmModal });
  },
  closeConfirmModal: () => {
    set({ isOpenConfirmModal: false, contentConfirmModal: undefined });
  },
  setLoadingModal: (state) => {
    set({ isLoadingModal: state });
  },
}));
