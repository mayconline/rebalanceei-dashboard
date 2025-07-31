import { MoreHorizontal, SquarePenIcon, Trash2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Button,
  ButtonSizes,
  ButtonVariants,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui';
import { ROUTES_PATH } from '@/constants';
import { useDeleteTicket } from '@/hooks';
import { useCurrentTicket, useCurrentWallet } from '@/store';
import type { TicketProps } from '@/types';

interface TicketActionsProps {
  ticket: TicketProps;
}

export const TicketActions = ({ ticket }: TicketActionsProps) => {
  const router = useRouter();
  const currentWallet = useCurrentWallet((state) => state?.currentWallet);
  const setCurrentTicket = useCurrentTicket((state) => state.setCurrentTicket);
  const { deleteTicket } = useDeleteTicket();

  function handleEditWallet(currentTicket: TicketProps) {
    setCurrentTicket(currentTicket);
    const url = `${ROUTES_PATH.TICKET}/${currentTicket?._id}/edit`;
    router.push(url);
  }

  function handleDeleteWallet(currentTicket: TicketProps) {
    if (currentWallet) {
      deleteTicket({ _id: currentTicket._id, walletID: currentWallet?._id });
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={ButtonSizes.Icon} variant={ButtonVariants.Ghost}>
          <span className="sr-only">open menu</span>
          <MoreHorizontal className="size-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="sr-only">Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleEditWallet(ticket)}>
          <SquarePenIcon className="size-4 shrink-0" /> Editar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDeleteWallet(ticket)}>
          <Trash2Icon className="size-4 shrink-0" /> Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
