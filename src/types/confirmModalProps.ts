export type ConfirmModalProps = {
  title: string;
  description?: string;
  isOnlyConfirm?: boolean;
  onConfirm: () => Promise<unknown>;
};
