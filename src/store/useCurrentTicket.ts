import { create } from 'zustand';
import type { TicketProps } from '@/types';

interface CurrentTicketProps {
  currentTicket: TicketProps | null;
  setCurrentTicket: (ticket: TicketProps) => void;
  resetCurrentTicket: () => void;
}

export const useCurrentTicket = create<CurrentTicketProps>((set) => ({
  currentTicket: null,
  setCurrentTicket: (ticket: TicketProps) => set({ currentTicket: ticket }),
  resetCurrentTicket: () => set({ currentTicket: null }),
}));
