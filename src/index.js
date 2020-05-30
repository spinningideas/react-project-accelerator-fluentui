// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
// Theme - fluent-ui
import { loadTheme } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';

// App
import 'styles/Application.css';
import Application from 'Application';
import ErrorHandler from 'components/ErrorHandler';

loadTheme({
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
});

initializeIcons();

const routerHistory = createBrowserHistory();

const AppShell = () => (
  <ErrorHandler>
    <Router history={routerHistory} basename="react-project-accelerator-fluentui">
      <Application />
    </Router>
  </ErrorHandler>
);

ReactDOM.render(<AppShell />, document.getElementById('appshell'));
