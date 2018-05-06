import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import user from './user';
import auth from './auth';
import notifications from './notifications';

export default combineReducers({
  router: routerReducer,
  form: formReducer,

  user,
  auth,
  notifications,
})
