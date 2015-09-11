import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
