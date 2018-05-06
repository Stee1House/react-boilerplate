import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from 'constants/actionTypes';

export function addNotification({ message = '', title = '', level = 'success', autoDismiss = 3 }) {
  return {
    type: ADD_NOTIFICATION,
    notification: {
      title,
      message,
      level,
      autoDismiss,
      id: Math.random(),
    }
  };
}

export function deleteNotification(notification) {
  return {
    type: DELETE_NOTIFICATION,
    notification,
  };
}
