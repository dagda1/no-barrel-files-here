import type { ReactNode } from 'react';
import { Observable } from '../observables/types';

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
