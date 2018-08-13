import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import { responsiveTheme } from './utils/responsiveTheme';
import { ThemeProvider } from 'styled-components';
import LanguageProvider from './containers/LanguageProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import baseStyles from './global-styles';

// Create redux store with history
const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('app');
const render = messages => {
  baseStyles();
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <Router history={history}>
          <ThemeProvider theme={responsiveTheme} >
            <App />
          </ThemeProvider>
        </Router>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  )
};

if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

registerServiceWorker();
