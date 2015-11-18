import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore'
import App from './src/App.js';

const store = configureStore()

let rootElement = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
