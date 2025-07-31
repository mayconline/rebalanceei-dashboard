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
import type { WalletProps } from '@/types';
import { formatMoney, formatPercent } from '@/utils';

interface WalletSwitcherItemProps {
  wallet: WalletProps;
  onEditWallet: (wallet: WalletProps) => void;
  onSelectCurrentWallet: (wallet: WalletProps) => void;
}

export const WalletSwitcherItem = ({
  onSelectCurrentWallet,
  onEditWallet,
  wallet,
}: WalletSwitcherItemProps) => {
  return (
    <DropdownMenuItem
      className="gap-2 p-2"
      onClick={() => onSelectCurrentWallet(wallet)}
    >
      <Button
        onClick={() => onEditWallet(wallet)}
        size={ButtonSizes.Icon}
        variant={ButtonVariants.Ghost}
      >
        <SquarePenIcon className="size-4 shrink-0" />
      </Button>

      <span>
        <Paragraph className="max-w-28 truncate" size={ParagraphSize.Small}>
          {wallet.description}
        </Paragraph>
        <DropdownMenuShortcut>
          {formatMoney(wallet.sumAmountWallet)}
        </DropdownMenuShortcut>
      </span>

      <DropdownMenuShortcut>
        {formatPercent(wallet.percentPositionWallet)}
      </DropdownMenuShortcut>
    </DropdownMenuItem>
  );
};
