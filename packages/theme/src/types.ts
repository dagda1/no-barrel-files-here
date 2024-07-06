export interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
}

export interface CommonColors {
  black: string;
  white: string;
}

export type PaletteMode = 'light' | 'dark';
export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export type ColorPartial = Partial<Color>;

export interface SimplePaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface TypeBackground {
  default: string;
  paper: string;
  sidebar: string;
  panel: string;
}

interface Status {
  ok: string;
  warning: string;
  error: string;
  running: string;
  pending: string;
  aborted: string;
}

interface Sidebar {
  borderBottom?: string;
  borderRight?: string;
  unselectedCircle: string;
}

interface TopNav {
  iconColor: string;
  roleSelect: string;
}

interface Roles {
  admin: string;
  dev: string;
  default: string;
}

interface Banner {
  info: string;
  error: string;
  text: string;
  link: string;
  closeButtonColor: string;
  warning: string;
}

interface Tabs {
  color: string;
}

interface Stepper {
  linkStroke: string;
  nodeStroke: string;
}

interface Icons {
  star: string;
}

interface Notifications {
  tagBg: string;
  tagColor: string;
  read: string;
  unread: string;
  rowHover: string;
}

export interface Table {
  borderColor: string;
}

export interface Form {
  background: string;
  borderColor: string;
  inputBackgroundColor: string;
  inputBorderColor: string;
  buttonColor: string;
  disabledBackground: string;
  disabledColor: string;
  outerCircle: string;
  innerCircle: string;
  outerCircleContracted: string;
  innerCircleContracted: string;
  itemBorder: string;
}

export interface Palette {
  common?: CommonColors;
  mode: PaletteMode;
  contrastThreshold?: number;
  primary: PaletteColor;
  secondary?: PaletteColor;
  error?: PaletteColor;
  warning?: PaletteColor;
  info?: PaletteColor;
  success?: PaletteColor;
  grey?: Color;
  text?: TypeText;
  divider?: string;
  action?: TypeAction;
  background: TypeBackground;
  sidebar: Sidebar;
  topNav: TopNav;
  banner: Banner;
  stepper: Stepper;
  tabs: Tabs;
  icons: Icons;
  status: Status;
  textContrast: string;
  border: string;
  textSubtle: string;
  highlight: string;
  errorBackground: string;
  warningBackground: string;
  infoBackground: string;
  errorText: string;
  infoText: string;
  warningText: string;
  linkHover: string;
  link: string;
  tabLink: string;
  roles: Roles;
  notifications: Notifications;
  table: Table;
  form: Form;
}

export interface TypeAction {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledOpacity: number;
  disabledBackground: string;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface PaletteOptions {
  type: 'light' | 'dark';
  status: {
    ok: string;
    warning: string;
    error: string;
    running: string;
    pending: string;
    aborted: string;
  };
  text?: TypeText;
  background?: TypeBackground;
  sidebar: Sidebar;
  topNav: TopNav;
  banner?: {
    info?: string;
    error?: string;
    text?: string;
    link?: string;
    closeButtonColor?: string;
    warning?: string;
  };
  tabs: {
    color: string;
  };
  stepper: {
    linkStroke: string;
    nodeStroke: string;
  };
  border: string;
  textContrast: string;
  infoBackground: string;
  tabLink: string;
  warningBackground: string;
  icons: Icons;
  roles: Roles;
  notifications: Notifications;
  table: Table;
  form?: Partial<Form>;
}

export type Typography = {
  htmlFontSize: number;
  fontFamily: string;
  h1: {
    fontFamily?: string;
    fontSize: number | string;
    fontWeight: number;
    marginBottom: number;
  };
  h2: {
    fontFamily?: string;
    fontSize: number | string;
    fontWeight: number;
    marginBottom: number;
  };
  h3: {
    fontFamily?: string;
    fontSize: number | string;
    fontWeight: number;
    marginBottom: number;
  };
  h4: {
    fontFamily?: string;
    fontSize: number | string;
    fontWeight: number;
    marginBottom: number;
  };
  h5: {
    fontFamily?: string;
    fontSize: number | string;
    fontWeight: number;
    marginBottom: number;
  };
  h6: {
    fontFamily?: string;
    fontSize: number | string;
    fontWeight: number;
    marginBottom: number;
  };
  notifications?: Notifications;
};

export interface NoBarrelThemeOptions {
  fontFamily?: string;
  htmlFontSize?: number;
  typography?: Typography;
}
