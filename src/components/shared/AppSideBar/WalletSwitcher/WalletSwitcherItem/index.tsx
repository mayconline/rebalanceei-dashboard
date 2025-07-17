import { SquarePenIcon } from 'lucide-react';
import {
  Button,
  ButtonSizes,
  ButtonVariants,
  DropdownMenuItem,
  DropdownMenuShortcut,
  Paragraph,
  ParagraphSize,
} from '@/components/ui';
import type { WalletsResponseProps } from '@/types';

interface WalletSwitcherItemProps {
  wallet: WalletsResponseProps;
  onEditWallet: (walletId: string) => void;
  onSelectCurrentWallet: (wallet: WalletsResponseProps) => void;
}

export const WalletSwitcherItem = ({
  onSelectCurrentWallet,
  onEditWallet,
  wallet,
}: WalletSwitcherItemProps) => {
  return (
    <DropdownMenuItem
      className="gap-2 p-2"
      key={wallet.id}
      onClick={() => onSelectCurrentWallet(wallet)}
    >
      <Button
        onClick={() => onEditWallet(wallet.id)}
        size={ButtonSizes.Icon}
        variant={ButtonVariants.Ghost}
      >
        <SquarePenIcon className="size-4 shrink-0" />
      </Button>

      <span>
        <Paragraph className="max-w-28 truncate" size={ParagraphSize.Small}>
          {wallet.description}
        </Paragraph>
        <DropdownMenuShortcut>R${wallet.sumAmountWallet}</DropdownMenuShortcut>
      </span>

      <DropdownMenuShortcut>
        {wallet.percentPositionWallet}%
      </DropdownMenuShortcut>
    </DropdownMenuItem>
  );
};
