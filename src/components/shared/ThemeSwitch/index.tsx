'use client';

import { Label, Switch } from '@/components/ui';
import { useTheme } from '@/hooks';

export const ThemeSwitch = () => {
  const { theme, loading, handleToggleTheme } = useTheme();

  return loading ? null : (
    <div className="flex items-center justify-end space-x-2">
      <Switch
        id="theme-toggl"
        checked={theme === 'light'}
        onCheckedChange={handleToggleTheme}
      />
      <Label htmlFor="theme-toggle">{theme}</Label>
    </div>
  );
};
