import initialState from 'models/auth';
import { AUTH } from 'constants/actionTypes';

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SIGNUP_COMPONENT':
      return {
        ...state,
        signup: {
          component: action.payload
        }
      };
    case 'AUTH_FORGOT_PASSWORD_COMPONENT':
      return {
        ...state,
        forgotPassword: {
          component: action.payload
        }
      };
    default:
      return state;
  }
};

export default auth;
