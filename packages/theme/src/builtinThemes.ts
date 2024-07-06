import { createBarrelsTheme } from './NobarrelsTheme';
import { palettes } from './palettes';

export const builtinThemes = {
  light: createBarrelsTheme({ palette: palettes.light }),
  dark: createBarrelsTheme({ palette: palettes.dark }),
};
