import { ChevronsUpDown, WalletMinimalIcon } from 'lucide-react';
import {
  DropdownMenuTrigger,
  Paragraph,
  ParagraphSize,
  SidebarMenuButton,
} from '@/components/ui';

interface WalletSwitcherTriggerProps {
  description?: string;
}

export const WalletSwitcherTrigger = ({
  description,
}: WalletSwitcherTriggerProps) => {
  return (
    <DropdownMenuTrigger asChild>
      <SidebarMenuButton
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        size="lg"
      >
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <WalletMinimalIcon className="size-4" />
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
