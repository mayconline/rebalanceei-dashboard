import { ChevronsUpDown, WalletMinimalIcon } from 'lucide-react';
import {
  DropdownMenuTrigger,
  Paragraph,
  ParagraphSize,
  SidebarMenuButton,
  SidebarMenuSkeleton,
} from '@/components/ui';

interface WalletSwitcherTriggerProps {
  description?: string;
  isLoading?: boolean;
}

export const WalletSwitcherTrigger = ({
  description,
  isLoading = true,
}: WalletSwitcherTriggerProps) => {
  return isLoading ? (
    <SidebarMenuSkeleton showIcon />
  ) : (
    <DropdownMenuTrigger asChild>
      <SidebarMenuButton
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        size="lg"
        tooltip={description ?? 'Selecione uma carteira'}
      >
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <WalletMinimalIcon className="size-4 shrink-0" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <Paragraph className="truncate" size={ParagraphSize.Small}>
            {description ?? 'Selecione uma carteira'}
          </Paragraph>
        </div>
        <ChevronsUpDown className="ml-auto" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
  );
};
