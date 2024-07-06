import deepmerge from '@mui/utils/deepmerge';

import { DEFAULT_FONT_FAMILY, DEFAULT_HTML_FONT_SIZE } from './constants';
import type { PaletteOptions, Typography } from './types';

export interface NoBarrelsBaseThemeOptions {
  palette: PaletteOptions;
  fontFamily?: string;
  htmlFontSize?: number;
  typography?: Typography;
}

export function createBaseThemeOptions(options: NoBarrelsBaseThemeOptions): {
  palette: PaletteOptions;
  typography: Typography;
} {
  const { palette, htmlFontSize = DEFAULT_HTML_FONT_SIZE, fontFamily = DEFAULT_FONT_FAMILY, typography } = options;

  const defaultTypography: Typography = {
    htmlFontSize,
    fontFamily,
    h1: {
      fontSize: 54,
      fontWeight: 700,
      marginBottom: 10,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
      marginBottom: 8,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      marginBottom: 6,
    },
    h4: {
      fontWeight: 700,
      fontSize: 28,
      marginBottom: 6,
    },
    h5: {
      fontWeight: 700,
      fontSize: 24,
      marginBottom: 4,
    },
    h6: {
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 2,
    },
  };

  return {
    palette,
    typography: deepmerge(defaultTypography, typography),
  };
}
