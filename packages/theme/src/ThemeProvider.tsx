import CssBaseline from '@mui/material/CssBaseline';
import type { Theme } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import type { ReactNode } from 'react';

export interface NoBarrelsThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}

export function ThemeProvider(props: NoBarrelsThemeProviderProps): JSX.Element {
  const { children, theme } = props;

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
