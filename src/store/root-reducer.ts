import { RouterState } from 'connected-react-router';
import { CombinedState, combineReducers } from 'redux';

import { todoSlice, TodoState } from '../app/todo';
import { routerReducer } from './history';

export type RootState = CombinedState<{
  router: RouterState<unknown>;
  [todoSlice.name]: TodoState;
}>;

export const rootReducer = combineReducers({
  router: routerReducer,
  [todoSlice.name]: todoSlice.reducer,
});
