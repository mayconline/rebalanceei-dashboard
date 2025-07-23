'use client';

import {
  Button,
  ButtonVariants,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';
import { useModalStore } from '@/store';

export default function ConfirmModal() {
  const {
    contentConfirmModal,
    isLoadingModal,
    closeConfirmModal,
    isOpenConfirmModal,
  } = useModalStore();

  const handleConfirmModal = async () => {
    await contentConfirmModal?.onConfirm();
    closeConfirmModal();
  };

  return (
    <Dialog onOpenChange={closeConfirmModal} open={isOpenConfirmModal}>
      <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>{contentConfirmModal?.title}</DialogTitle>
          {contentConfirmModal?.description && (
            <DialogDescription>
              {contentConfirmModal?.description}
            </DialogDescription>
          )}
        </DialogHeader>

        <DialogFooter>
          <Button
            disabled={isLoadingModal}
            isLoading={isLoadingModal}
            onClick={handleConfirmModal}
            type="button"
            variant={ButtonVariants.Outline}
          >
            {contentConfirmModal?.isOnlyConfirm ? 'Continuar' : 'Sim'}
          </Button>

          {!contentConfirmModal?.isOnlyConfirm && (
            <Button
              disabled={isLoadingModal}
              onClick={closeConfirmModal}
              type="button"
              variant={ButtonVariants.Destructive}
            >
              Não
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
