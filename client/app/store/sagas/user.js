import { fork, call, put, take } from 'redux-saga/effects';
import api from 'services';
import { GET_USER } from 'constants/actionTypes';

// Sign In

export function* signin(data) {
  const response = yield call(() => api.call('auth/login', data, 'post'));

  if (response.status === 200) {
    yield put({
      type: GET_USER.SUCCESS,
      payload: response.data,
    });

    return response;
  }

  yield put({
    type: GET_USER.FAILURE,
    payload: response.data,
  });

  return response;
}

export function* watchSignIn() {
  while (true) {
    yield take(GET_USER.REQUEST);
    yield fork(signin);
  }
}

// Sign Up

export function* signup(data) {
  const response = yield call(() => api.call('user/register', data, 'post'));

  if (response.status === 200) {
    yield put({
      type: GET_USER.SUCCESS,
      payload: {},
    });

    return response;
  }

  yield put({
    type: GET_USER.FAILURE,
    payload: {},
  });

  return response;
}

export function* watchSignUp() {
  while (true) {
    yield take(GET_USER.REQUEST);
    yield fork(signup);
  }
}

// Get Current User

export function* getUser() {
  const response = yield call(() => api.call('user/me', {populate: ["data","wallet"]}));

  if (response.status === 200) {
    yield put({
      type: GET_USER.SUCCESS,
      payload: response.data,
    });

    return response;
  }

  yield put({
    type: GET_USER.FAILURE,
    payload: response.data,
  });

  return response;
}

export function* watchGetUser() {
  while (true) {
    yield take(GET_USER.REQUEST);
    yield fork(getUser);
  }
}

// Sign Out

export function* signOut() {
  const response = yield call(() => api.call('auth/logout'));

  if (response.status === 200) {
    yield put({
      type: GET_USER.SUCCESS,
      payload: {},
    });

    return response;
  }

  yield put({
    type: GET_USER.FAILURE,
    payload: {},
  });

  return response;
}

export function* watchSignOut() {
  while (true) {
    yield take(GET_USER.REQUEST);
    yield fork(signOut);
  }
}

export default [
  watchSignIn,
  watchSignUp,
  watchSignOut,

  watchGetUser,
];
