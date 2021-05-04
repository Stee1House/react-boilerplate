import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../../store/history';
import { store } from '../../store';
import { ROUTES } from '../../global-constants';
import { Layout, Sprite } from '../../components';
import { Todo } from '../todo';

import './app.module.scss';

export const App: FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path={ROUTES.INDEX_PAGE} component={Todo} />
        </Switch>
      </Layout>
    </ConnectedRouter>
    <Sprite />
  </Provider>
);
