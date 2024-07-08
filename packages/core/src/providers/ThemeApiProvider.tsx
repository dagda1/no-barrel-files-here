import { assert } from '@cutting/assert';
import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import type { Observable } from '../observables/types';

export interface NoBarrelsTheme {
  id: string;
  title: string;
  variant: 'light' | 'dark';
  Provider(props: { children: ReactNode }): JSX.Element | null;
}

export type NoBarrelsThemeApi = {
  getInstalledThemes(): NoBarrelsTheme[];
  activeThemeId$(): Observable<string | undefined>;
  getActiveThemeId(): string | undefined;
  setActiveThemeId(themeId?: string): void;
};

export interface ThemeApiContext {
  themeApi: NoBarrelsThemeApi;
}

export const ThemeApiContext = createContext<ThemeApiContext | undefined>(undefined);

export function ThemeApiProvider({ children, ...props }: ThemeApiContext & { children: ReactNode }): JSX.Element {
  return <ThemeApiContext.Provider value={{ themeApi: props.themeApi }}>{children}</ThemeApiContext.Provider>;
}

export function useThemeApi(): ThemeApiContext {
  const context = useContext(ThemeApiContext);

  assert(!!context, 'useApiContext must be within ApiContextProvider');

  return context;
}
