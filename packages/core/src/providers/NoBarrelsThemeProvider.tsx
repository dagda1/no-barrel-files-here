import { type PropsWithChildren } from 'react';
import useObservable from 'react-use/lib/useObservable';

import type { NoBarrelsTheme } from './ThemeApiProvider';
import { useThemeApi } from './ThemeApiProvider';

function resolveTheme(themeId: string | undefined, themes: NoBarrelsTheme[]) {
  if (themeId !== undefined) {
    const selectedTheme = themes.find((theme) => theme.id === themeId);
    if (selectedTheme) {
      return selectedTheme;
    }
  }

  if (!themeId) {
    const lightTheme = themes.find((theme) => theme.variant === 'light');
    if (lightTheme) {
      return lightTheme;
    }
  }

  const lightTheme = themes.find((theme) => theme.variant === 'light');

  if (lightTheme) {
    return lightTheme;
  }

  return themes[0];
}

export function NoBarrelsThemeProvider({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element {
  const { themeApi } = useThemeApi();

  const themeId = useObservable(themeApi.activeThemeId$(), themeApi.getActiveThemeId());

  const appTheme = resolveTheme(themeId, themeApi.getInstalledThemes());

  if (!appTheme) {
    throw new Error('App has no themes');
  }

  return <appTheme.Provider>{children}</appTheme.Provider>;
}
