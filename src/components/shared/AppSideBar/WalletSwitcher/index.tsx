'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
import { ROUTES_PATH, SIDEBAR_ITEMS } from '@/constants';
import type { WalletsResponseProps } from '@/types';

export function WalletSwitcher() {
  const { headerNav } = SIDEBAR_ITEMS;
  const { isMobile } = useSidebar();
  const router = useRouter();
  const [currentWallet, setCurrentWallet] = useState(headerNav.items[0]);

  function handleEditWallet(walletId: string) {
    const url = `${ROUTES_PATH.WALLETS}/${walletId}/edit`;

    router.push(url);
  }

  function handleSelectCurrentWallet(wallet: WalletsResponseProps) {
    setCurrentWallet(wallet);
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <WalletSwitcherTrigger description={currentWallet?.description} />

          <DropdownMenuContent
            align="start"
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-center text-muted-foreground text-xs">
              Carteiras
            </DropdownMenuLabel>
            {headerNav?.items?.map((wallet) => (
              <WalletSwitcherItem
                key={wallet.id}
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
              {`Total: R$ ${headerNav?.items[0]?.sumAmountAllWallet}`}
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
