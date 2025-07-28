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
import type { TicketProps } from '@/types';

interface TicketActionsProps {
  ticket: TicketProps;
}

export const TicketActions = ({ ticket }: TicketActionsProps) => {
  const router = useRouter();

  function handleEditWallet(currentTicket: TicketProps) {
    //    setCurrentTicket(ticket);
    const url = `${ROUTES_PATH.TICKET}/${currentTicket?._id}/edit`;
    router.push(url);
  }

  function handleDeleteTicket(currentTicketId: TicketProps['_id']) {
    //delete ticket
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={ButtonSizes.Icon} variant={ButtonVariants.Ghost}>
          <span className="sr-only">open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="sr-only">Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleEditWallet(ticket)}>
          <SquarePenIcon className="size-4 shrink-0" /> Editar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDeleteTicket(ticket?._id)}>
          <Trash2Icon className="size-4 shrink-0" /> Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
