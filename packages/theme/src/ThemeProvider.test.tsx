import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from './ThemeProvider';
import { builtinThemes } from './builtinThemes';

describe('ThemeProvider', () => {
  it('provides theme', () => {
    function MyComponent() {
      const theme = useTheme();

      return <span>grey: {theme.palette.grey[500]}</span>;
    }

    const { getByText } = render(
      <ThemeProvider theme={builtinThemes.light}>
        <MyComponent />
      </ThemeProvider>,
    );

    expect(getByText('grey: #9e9e9e')).toBeDefined();
  });

  it('provides a themes through sx', () => {
    function MyComponent() {
      return <Box sx={{ color: 'infoText' }}>root</Box>;
    }

    const { getByText } = render(
      <ThemeProvider theme={builtinThemes.light}>
        <MyComponent />
      </ThemeProvider>,
    );

    expect(window.getComputedStyle(getByText('root')).color).toBe('rgb(0, 78, 138)');
  });
});
