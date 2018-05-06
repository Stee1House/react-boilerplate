import React from 'react';
import { Provider } from "react-redux";
import { store, history } from 'store';
import { ConnectedRouter } from 'react-router-redux'

import Application from 'containers/Application';
import svg4everybody from 'svg4everybody';

export default class App extends React.Component {
  componentDidMount() {
    svg4everybody({
      polyfill: true,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Application />
        </ConnectedRouter>
      </Provider>
    )
  }
}
