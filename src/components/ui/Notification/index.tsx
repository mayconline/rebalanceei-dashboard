'use client';

import { Toaster as Sonner, type ToasterProps } from 'sonner';
import { useTheme } from '@/hooks';

export const Notification = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      theme={theme as ToasterProps['theme']}
      {...props}
    />
  );
};
