import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import getSagas from 'sagas';
import Reducers from './reducers';
import createHistory from 'history/createBrowserHistory';

import { SITE_MODE } from 'constants';

export const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const composeMW = SITE_MODE == 'development' ? composeWithDevTools : compose;

export const store = createStore( Reducers, composeMW(applyMiddleware(middleware, sagaMiddleware) ))

export function execute(saga, ...args) {
  return sagaMiddleware.run(saga, ...args).done;
}

let sagaTask = sagaMiddleware.run(function* () {
  yield getSagas()
});

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });

  module.hot.accept('./sagas', () => {
    const getNewSagas = require('./sagas');
    sagaTask.cancel();

    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(function* replacedSaga(action) {
        yield getNewSagas()
      })
    })
  });
}