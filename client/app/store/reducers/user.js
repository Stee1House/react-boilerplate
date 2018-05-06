import initialState from 'models/user';
import { GET_USER } from 'constants/actionTypes';

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.REQUEST:
      return {
        ...state
      };
    case GET_USER.SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case GET_USER.FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default user;
