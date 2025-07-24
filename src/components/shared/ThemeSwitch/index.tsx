'use client';

import { SunMoonIcon } from 'lucide-react';
import { Button, ButtonSizes, ButtonVariants } from '@/components/ui';
import { useTheme } from '@/hooks';

export const ThemeSwitch = () => {
  const { handleToggleTheme } = useTheme();

  return (
    <Button
      onClick={handleToggleTheme}
      size={ButtonSizes.Icon}
      variant={ButtonVariants.Ghost}
    >
      <SunMoonIcon className="size-5" />
    </Button>
  );
};
