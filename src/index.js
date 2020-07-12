// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Theme - fluent-ui
import { Fabric, loadTheme, initializeIcons } from '@fluentui/react';
import { appTheme } from 'theming';
// App
import 'styles/Application.scss';
import Application from 'Application';
import ErrorHandler from 'components/ErrorHandler';
import { APPBASEPATH } from 'utils';

initializeIcons();
loadTheme(appTheme);

const routerHistory = createBrowserHistory();

const AppShell = () => (
  <ErrorHandler>
    <Router history={routerHistory} basename={APPBASEPATH}>
      <Fabric>
        <Application />
      </Fabric>
    </Router>
  </ErrorHandler>
);

ReactDOM.render(<AppShell />, document.getElementById('appshell'));
