import type { Palette } from './types';

type Palettes = {
  light: {
    type: 'light';
  } & Palette;
  dark: {
    type: 'dark';
  } & Palette;
};

export const palettes: Palettes = {
  light: {
    type: 'light',
    mode: 'light',
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      sidebar: '#ffffff',
      panel: '#FBFBFF',
    },
    sidebar: {
      borderBottom: '#EEEFFA',
      borderRight: '#F2F2F2',
      unselectedCircle: '#D9D9D9',
    },
    topNav: {
      iconColor: '#1C1B1F',
      roleSelect: '#1F31F9',
    },
    status: {
      ok: '#1DB954',
      warning: '#FF9800',
      error: '#E22134',
      running: '#1F5493',
      pending: '#FFED51',
      aborted: '#757575',
    },
    primary: {
      main: '#1F31F9',
    },
    secondary: {
      main: '#E6E7F7',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#424245',
      disabled: '#9E9E9E',
    },
    banner: {
      info: '#2E77D0',
      error: '#E22134',
      text: '#FFFFFF',
      link: '#000000',
      closeButtonColor: '#FFFFFF',
      warning: '#FF9800',
    },
    tabs: {
      color: '#000000',
    },
    stepper: {
      linkStroke: '#E1E1E1',
      nodeStroke: '#E1E1E1',
    },
    icons: {
      star: '#FFD600',
    },
    border: '#E6E6E6',
    textContrast: '#000000',
    textSubtle: '#979799',
    highlight: '#FFFBCC',
    errorBackground: '#FFEBEE',
    warningBackground: '#F59B23',
    infoBackground: '#ebf5ff',
    errorText: '#CA001B',
    infoText: '#004e8a',
    warningText: '#000000',
    linkHover: '#2196F3',
    link: '#0A6EBE',
    tabLink: '#212121',
    roles: {
      admin: '#0ABD31',
      dev: '#3809BD',
      default: '#8E09BD',
    },
    notifications: {
      tagBg: '#E1E2EF',
      tagColor: '#919191',
      read: '#F2F3FF',
      unread: '#FFFFFF',
      rowHover: '#F5F5F5',
    },
    table: {
      borderColor: '#F2F3FF',
    },
    form: {
      background: '#F2F3FF',
      borderColor: '#1F31F9',
      inputBackgroundColor: '#E6E7F7',
      inputBorderColor: '#969EF8',
      buttonColor: '#1F31F9',
      disabledBackground: '#FAFAFD',
      disabledColor: '#D7DBFE',
      outerCircle: '#9FA5FD',
      innerCircle: '#1F31F9',
      outerCircleContracted: '#E2E3FF',
      innerCircleContracted: '#C8CCFE',
      itemBorder: '#969EF8',
    },
  },
  dark: {
    type: 'dark',
    mode: 'dark',
    background: {
      default: '#333333',
      paper: '#424242',
      sidebar: '#333333',
      panel: '#4F4F4F',
    },
    sidebar: {
      borderBottom: '#A0A0A0',
      borderRight: '#A0A0A0',
      unselectedCircle: '#8A8A8A',
    },
    topNav: {
      iconColor: '#A0A0A0',
      roleSelect: '#1F31F9',
    },
    status: {
      ok: '#71CF88',
      warning: '#FFB84D',
      error: '#F84C55',
      running: '#3488E3',
      pending: '#FEF071',
      aborted: '#9E9E9E',
    },
    primary: {
      main: '#9CC9FF',
    },
    secondary: {
      main: '#8A8A8A',
    },
    text: {
      primary: '#EFEFEF',
      secondary: '#F0F0F0',
      disabled: '#8A8A8A',
    },
    banner: {
      info: '#2E77D0',
      error: '#E22134',
      text: '#FFFFFF',
      link: '#000000',
      closeButtonColor: '#FFFFFF',
      warning: '#FF9800',
    },
    tabs: {
      color: '#ffffff',
    },
    stepper: {
      linkStroke: '#E1E1E1',
      nodeStroke: '#E1E1E1',
    },
    icons: {
      star: '#FFD600',
    },

    border: '#E6E6E6',
    textContrast: '#FFFFFF',
    textSubtle: '#CCCCCC',
    highlight: '#FFFBCC',
    errorBackground: '#FFEBEE',
    warningBackground: '#F59B23',
    infoBackground: '#ebf5ff',
    errorText: '#CA001B',
    infoText: '#004e8a',
    warningText: '#000000',
    linkHover: '#82BAFD',
    link: '#9CC9FF',
    tabLink: '#ffffff',
    roles: {
      admin: '#0ABD31',
      dev: '#3809BD',
      default: '#8E09BD',
    },
    notifications: {
      tagBg: '#E1E2EF',
      tagColor: '#919191',
      read: '#767676',
      unread: '#4F4F4F',
      rowHover: '#595959',
    },
    table: {
      borderColor: '#A7AACC',
    },
    form: {
      background: '#1A1B2E',
      borderColor: '#1F31F9',
      inputBackgroundColor: '#2E3440',
      inputBorderColor: '#969EF8',
      buttonColor: '#1F31F9',
      disabledBackground: '#FAFAFD',
      disabledColor: '#D7DBFE',
      outerCircle: '#9FA5FD',
      innerCircle: '#1F31F9',
      outerCircleContracted: '#E2E3FF',
      innerCircleContracted: '#C8CCFE',
      itemBorder: '#969EF8',
    },
  },
} as const;
