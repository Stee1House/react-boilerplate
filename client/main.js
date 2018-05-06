import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './app/app';

require('babel-polyfill');
require('normalize.css');;

let render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    render(App);
  });
}
