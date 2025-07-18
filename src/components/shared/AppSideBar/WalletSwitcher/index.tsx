'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { WalletSwitcherItem } from '@/components/shared/AppSideBar/WalletSwitcher/WalletSwitcherItem';
import { WalletSwitcherTrigger } from '@/components/shared/AppSideBar/WalletSwitcher/WalletSwitcherTrigger';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Paragraph,
  ParagraphSize,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui';
import { ROUTES_PATH } from '@/constants';
import { useGetWallets } from '@/hooks';
import { useCurrentWallet } from '@/store';
import type { WalletProps } from '@/types';
import { formatMoney } from '@/utils';

export function WalletSwitcher() {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const { wallets, isPending } = useGetWallets();
  const { currentWallet, setCurrentWallet } = useCurrentWallet();

  function handleEditWallet(wallet: WalletProps) {
    setCurrentWallet(wallet);
    const url = `${ROUTES_PATH.WALLETS}/${wallet?._id}/edit`;
    router.push(url);
  }

  function handleSelectCurrentWallet(wallet: WalletProps) {
    setCurrentWallet(wallet);
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <WalletSwitcherTrigger
            description={currentWallet?.description}
            isLoading={isPending}
          />

          <DropdownMenuContent
            align="start"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-center text-muted-foreground text-xs">
              Carteiras
            </DropdownMenuLabel>
            {wallets?.map((wallet) => (
              <WalletSwitcherItem
                key={wallet._id}
                onEditWallet={handleEditWallet}
                onSelectCurrentWallet={handleSelectCurrentWallet}
                wallet={wallet}
              />
            ))}
            <DropdownMenuSeparator />

            <Paragraph
              className="text-center text-muted-foreground"
              size={ParagraphSize.Small}
            >
              {`Total:  ${formatMoney(wallets?.[0]?.sumAmountAllWallet ?? 0)}`}
            </Paragraph>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="cursor-pointer justify-end gap-2 p-2"
              onClick={() => router.push(`${ROUTES_PATH.WALLETS}/add`)}
            >
              <div className="font-medium text-muted-foreground">
                Adicionar Carteira
              </div>
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
