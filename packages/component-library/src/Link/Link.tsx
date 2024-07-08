import type { LinkProps as MuiProps } from '@mui/material/Link';
import MuiLink from '@mui/material/Link';
import type { SxProps, Theme } from '@mui/material/styles';
import { type ElementType, forwardRef } from 'react';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

export type LinkProps = Omit<MuiProps, 'to'> &
  Omit<RouterLinkProps, 'to'> & {
    to: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component?: ElementType<any>;
    noTrack?: boolean;
    sx?: SxProps<Theme>;
  };

const linkSx: SxProps<Theme> = {
  color: (theme) => `${theme.palette.primary.main}`,
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, sx = {}, ...props }, ref) => (
  <MuiLink {...props} ref={ref} component={RouterLink} to={to} sx={{ ...linkSx, ...sx }} color="primary" />
));

Link.displayName = 'Link';
