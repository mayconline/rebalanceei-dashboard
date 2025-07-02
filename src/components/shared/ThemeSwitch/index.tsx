'use client';

import { Label } from '@radix-ui/react-label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks';

export const ThemeSwitch = () => {
  const { theme, loading, handleToggleTheme } = useTheme();

  return loading ? null : (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggl"
        checked={theme === 'light'}
        onCheckedChange={handleToggleTheme}
      />
      <Label htmlFor="theme-toggle">{theme}</Label>
    </div>
  );
};
