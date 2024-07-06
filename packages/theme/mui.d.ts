import '@mui/material/styles';


declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }

  export interface TypeBackground {
    default: string;
    paper: string;
    sidebar: string;
    panel: string;
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
    disabledBackground: string;
    buttonColor: string;
    disabledColor: string;
    outerCircle: string;
    innerCircle: string;
    outerCircleContracted: string;
    innerCircleContracted: string;
    itemBorder: string;
  }

  interface Palette {
    type: 'light' | 'dark';
    background: {
      default: string;
      paper: string;
      sidebar: string;
      panel: string;
    };
    topNav: {
      iconColor: string;
      roleSelect: string;
    };
    sidebar: {
      borderBottom?: string;
      borderRight?: string;
      unselectedCircle: string;
    };
    status: {
      ok: string;
      warning: string;
      error: string;
      running: string;
      pending: string;
      aborted: string;
    };
    banner: {
      info: string;
      error: string;
      text: string;
      link: string;
      closeButtonColor: string;
      warning: string;
    };
    tabs: {
      color: string;
    };
    stepper: {
      linkStroke: string;
      nodeStroke: string;
    };
    icons: {
      star: string;
    };
    border: string;
    textContrast: string;
    infoBackground: string;
    textSubtle: string;
    tabLink: string;
    warningBackground: string;
    roles: {
      admin: string;
      dev: string;
      default: string;
    };
    notifications: Notifications;
    table: Table;
    form: Form;
  }

  interface PaletteOptions {
    type: 'light' | 'dark';
    background?: {
      default?: string;
      paper?: string;
      sidebar?: string;
      panel?: string;
    };
    sidebar: {
      borderBottom?: string;
      borderRight?: string;
      unselectedCircle: string;
    };
    topNav: {
      iconColor: string;
      roleSelect: string;
    };
    status: {
      ok: string;
      warning: string;
      error: string;
      running: string;
      pending: string;
      aborted: string;
    };
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
    icons: {
      star: string;
    };
    border: string;
    textContrast: string;
    infoBackground: string;
    tabLink: string;
    warningBackground: string;
    roles: {
      admin: string;
      dev: string;
      default: string;
    };
    notifications: Notifications;
    table: Table;
    form?: Partial<Form>;
  }
}
