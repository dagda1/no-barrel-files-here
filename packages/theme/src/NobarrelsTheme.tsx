import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { type Theme } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

import type { NoBarrelsBaseThemeOptions } from './createBaseThemeOptions';
import { createBaseThemeOptions } from './createBaseThemeOptions';

export function createBarrelsTheme(options: NoBarrelsBaseThemeOptions): Theme {
  const themeOptions = createBaseThemeOptions(options);

  return {
    ...createTheme({
      palette: themeOptions.palette,
      typography: themeOptions.typography,
      components: {
        MuiTab: {
          defaultProps: {
            disableFocusRipple: true,
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              color: themeOptions.palette.text?.primary,
              textDecoration: 'none',
            },
          },
        },
        MuiSelect: {
          defaultProps: {
            IconComponent: KeyboardArrowDown,
          },
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1200,
          xl: 1536,
          xxl: 2560,
        },
      },
    }),
  };
}
