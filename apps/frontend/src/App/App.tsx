import '@fontsource-variable/inter';

import Box from '@mui/material/Box';
import { Link } from '@nobarrels/component-library/Link';
import { ThemeSwitcher } from '@nobarrels/component-library/ThemeSwitcher';
import { NoBarrelsThemeProvider } from '@nobarrels/core/providers/NoBarrelsThemeProvider';
import { ThemeApiProvider } from '@nobarrels/core/providers/ThemeApiProvider';
import { appThemes } from '@nobarrels/core/theme/themes';
import { ThemeSelector } from '@nobarrels/core/theme/ThemeSelector';
import { StrictMode, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Components(): JSX.Element {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ThemeSwitcher />
      <Link to="/">A link</Link>
    </Box>
  );
}

export function InternalRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Components />} />
    </Routes>
  );
}

export function App(): JSX.Element {
  const themeApi = useMemo(() => ThemeSelector.createWithStorage(appThemes), []);

  return (
    <StrictMode>
      <ThemeApiProvider themeApi={themeApi}>
        <NoBarrelsThemeProvider>
          <Router>
            <InternalRoutes />
          </Router>
        </NoBarrelsThemeProvider>
      </ThemeApiProvider>
    </StrictMode>
  );
}
