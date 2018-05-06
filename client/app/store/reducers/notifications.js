import initialState from 'models/notifications';
import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from 'constants/actionTypes';

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      state.push(action.notification);
      return [ ...state ];
    }
    case DELETE_NOTIFICATION: {
      return state.filter((item) => {
        return item.id !== action.notification.id;
      });
    }
    default:
      return state;
  }
};

export default notifications;
