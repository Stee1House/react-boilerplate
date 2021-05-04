import { RouterState } from 'connected-react-router';
import { CombinedState, combineReducers } from 'redux';

import { todoSlice, TodoState } from '../app/todo';
import { configurationSlice, ConfigurationState } from '../app/shared/configuration';
import { routerReducer } from './history';

export type RootState = CombinedState<{
  router: RouterState<unknown>;
  [configurationSlice.name]: ConfigurationState;
  [todoSlice.name]: TodoState;
}>;

export const rootReducer = combineReducers({
  router: routerReducer,
  [configurationSlice.name]: configurationSlice.reducer,
  [todoSlice.name]: todoSlice.reducer,
});
