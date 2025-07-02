import type { ReactNode } from 'react';
import { toast } from 'sonner';

interface HandleNotifyProps {
  message: string;
  description?: ReactNode;
}

export function handleNotify({ message, description }: HandleNotifyProps) {
  toast(message, {
    description,
  });
}
