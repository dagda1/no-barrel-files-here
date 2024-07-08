import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import type { SxProps, Theme } from '@mui/material/styles';
import { useThemeApi } from '@nobarrels/core/providers/ThemeApiProvider';
import type { MouseEvent } from 'react';
import { useCallback } from 'react';

const sx: Record<string, SxProps<Theme>> = {
  button: {
    mr: (theme) => theme.spacing(1),
  },
} as const;

export function ThemeSwitcher(): JSX.Element {
  const { themeApi } = useThemeApi();

  const themeSwitcherClickHandler = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      themeApi.setActiveThemeId(themeApi.getActiveThemeId() === 'light' ? 'dark' : 'light');
    },
    [themeApi],
  );

  return (
    <IconButton sx={sx.button} onClick={themeSwitcherClickHandler}>
      <ContrastOutlinedIcon />
      <Typography color="main">Switch Theme</Typography>
    </IconButton>
  );
}
