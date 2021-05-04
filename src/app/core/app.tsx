import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../../store/history';
import { store } from '../../store';
import { ROUTES } from '../../global-constants';
import { Layout, Sprite, ConfigurateApp } from '../../components';
import { Todo } from '../todo';

import './app.module.scss';

export const App: FC = () => (
  <Provider store={store}>
    <ConfigurateApp>
      {({ locale }, translations) => (
        <IntlProvider locale={locale} messages={translations} key={locale}>
          <ConnectedRouter history={history}>
            <Layout>
              <Switch>
                <Route exact path={ROUTES.INDEX_PAGE} component={Todo} />
              </Switch>
            </Layout>
          </ConnectedRouter>
        </IntlProvider>
      )}
    </ConfigurateApp>
    <Sprite />
  </Provider>
);
