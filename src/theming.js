// https://material-ui.com/customization/palette/
const appGrey = {
	50: '#fafafa',
	100: '#f5f5f5',
	200: '#eeeeee',
	300: '#e0e0e0',
	400: '#bdbdbd',
	500: '#303030',
	600: '#757575',
	700: '#616161',
	800: '#424242',
	900: '#212121',
	A100: '#d5d5d5',
	A200: '#aaaaaa',
	A400: '#303030',
	A700: '#616161',
	contrastDefaultColor: 'dark'
};

const appBlue = {
	50: '#e3f2fd',
	100: '#bbdefb',
	200: '#90caf9',
	300: '#64b5f6',
	400: '#42a5f5',
	500: '#1976d2',
	600: '#1e88e5',
	700: '#1976d2',
	800: '#1565c0',
	900: '#0d47a1',
	A100: '#1e88e5',
	A200: '#1976d2',
	A400: '#1976d2',
	A700: '#0d47a1',
	contrastDefaultColor: 'light',
	light: '#bbdefb'
};

const primaryDark = appBlue[700];
const primaryDarker = appBlue[900];
const secondaryDark = appGrey[700];
const secondaryDarker = appGrey[900];
const light = appGrey[100];
const dark = appGrey[900];
const white = '#FFFFFF';

export const appTheme = {
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff'
  }
};
