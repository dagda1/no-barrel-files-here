# @nobarrels/theme

The [@mui/material](https://mui.com/material-ui/guides/creating-themed-components/) theme configuration.

Currently, there is a dark and light scheme.

## Adding new fields to the @mui/material theme

[Declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) is used to add new fields that fall outside of the default @mui/material theme.

Any new fields should be added to the [./mui.d.ts](./mui.d.ts) file.