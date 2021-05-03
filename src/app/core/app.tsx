import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../../store/history';
import { store } from '../../store';
import { ROUTES } from '../../global-constants';
import { Spinner } from '../../components';
import { Todo } from '../todo';

import './app.module.scss';

export const App: FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.INDEX_PAGE} component={Todo} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </Provider>
);
