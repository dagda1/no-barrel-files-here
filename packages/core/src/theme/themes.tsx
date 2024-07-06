import { builtinThemes } from '@nobarrels/theme/builtinThemes';
import { ThemeProvider } from '@nobarrels/theme/ThemeProvider';

import type { NoBarrelsTheme } from './types';

export const appThemes: NoBarrelsTheme[] = [
  {
    id: 'light',
    title: 'Light Theme',
    variant: 'light',
    Provider: ({ children }) => <ThemeProvider theme={builtinThemes.light}>{children}</ThemeProvider>,
  },
  {
    id: 'dark',
    title: 'Dark Theme',
    variant: 'dark',
    Provider: ({ children }) => <ThemeProvider theme={builtinThemes.dark}>{children}</ThemeProvider>,
  },
];
