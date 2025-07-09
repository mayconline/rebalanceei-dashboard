import { useCallback, useEffect, useState } from 'react';
import { LOCAL_STORAGE, THEME_VARIANT } from '@/constants';
import { useLocalState } from '@/hooks';

export const useTheme = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useLocalState<THEME_VARIANT>(
    LOCAL_STORAGE.THEME,
    THEME_VARIANT.DARK
  );

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) =>
      prevState === THEME_VARIANT.DARK
        ? THEME_VARIANT.LIGHT
        : THEME_VARIANT.DARK
    );
  }, [setTheme]);

  const handleSetThemeClass = useCallback(() => {
    try {
      const navigatorDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (theme === THEME_VARIANT.DARK || (!theme && navigatorDarkTheme)) {
        document.documentElement.classList.add(THEME_VARIANT.DARK);
        setTheme(THEME_VARIANT.DARK);
      } else {
        document.documentElement.classList.remove(THEME_VARIANT.DARK);
        setTheme(THEME_VARIANT.LIGHT);
      }
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  }, [setTheme, theme]);

  useEffect(() => {
    handleSetThemeClass();
  }, [handleSetThemeClass]);

  return {
    theme,
    loading,
    handleToggleTheme,
  };
};
